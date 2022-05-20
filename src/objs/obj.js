import { Mat4, Vec4, Vec3, toRad } from "webgl-basic-lib";
import { Drawable } from "../drawable.js";
import { loadObj, loadTexture } from "../utils.js";
import logger from "../logger.js";

export class Obj extends Drawable {
    constructor(data, mat = new Mat4(), textureOptions) {
        super(data, mat);
        this.textureOptions = textureOptions;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl, isChild = false) {
        await super.setup(gl);

        if (!isChild) {
            this.texture = gl.createTexture();
            loadTexture(gl, this.texture, this.data.urls.texture, {
                textureKind: gl.TEXTURE_2D,
                target: gl.TEXTURE_2D,
                mipmap: true
            })

            if (this.data.urls.obj) {
                const objs = await loadObj(this.data.urls.obj);
                const mainObj = objs.shift(1);

                console.log(mainObj)

                this.data = {
                    ...this.data,
                    vertices: new Float32Array(mainObj.vertices),
                    texCoords: new Float32Array(mainObj.texCoords),
                    normals: new Float32Array(mainObj.normals),
                }

                this.children = objs.map(obj => {
                    const child = new Obj({
                        vertices: new Float32Array(obj.vertices),
                        texCoords: new Float32Array(obj.texCoords),
                        normals: new Float32Array(obj.normals),
                    }, this.mat);

                    child.texture = this.texture;
                    return child;
                })

                await Promise.all(this.children.map(child => child.setup(gl, true)));
            }
        }

        this.isLoaded = true;
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack, camera) {
        if (!this.isLoaded) {
            return;
        }

        gl.useProgram(Obj.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // texCoord
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.texCoord.value);
        if (this.buffers.texCoord.dirty) {
            this.buffers.texCoord.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.texCoords, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);

        // normal
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.normal.value);
        if (this.buffers.normal.dirty) {
            this.buffers.normal.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.normals, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatModel, false, this.mat.values);
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatModelInverseTranspose, false, this.mat.clone().inverse().transpose().values);
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatViewProjection, false, stack.head().values);
        gl.uniform3fv(Obj.uniformLocations.uViewPos, camera.clone().inverse().col(3).toVec3().values);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(Obj.uniformLocations.uColorTexture, 0);

        // draw
        gl.drawArrays(gl[Obj.glMode], 0, this.data.vertices.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (this.children) {
            this.children.forEach(child => child.draw(gl, stack, camera));
        }
    }

    static glMode = "TRIANGLES";
    static types = `
    `
    static vertexShaderSource = `
    precision mediump float;
    
    // position
    attribute vec3 aPosition;
    uniform mat4 uMatModel;
    uniform mat4 uMatModelInverseTranspose;
    uniform mat4 uMatViewProjection;
    varying vec3 vWorldSpacePosition;
    
    // texture
    attribute vec2 aTexCoord;
    varying vec2 vTexCoord;
    
    // normal
    attribute vec3 aNormal;
    varying vec3 vNormal;
    
    void main(void) {
        vTexCoord = aTexCoord;
        vNormal = mat3(uMatModelInverseTranspose) * aNormal;
        vWorldSpacePosition = (uMatModel * vec4(aPosition, 1.0)).xyz;
        gl_Position = uMatViewProjection * uMatModel * vec4(aPosition, 1.0);
    }
    `

    static fragmentShaderSource = `
    precision mediump float;
    
    // define types
    struct DirectionalLight {
        vec3 direction;
        vec3 color;
        
        float ambient;
        float diffuse;
        float specular;
    };
    
    struct PointLight {    
        vec3 position;
        vec3 color;
        
        float linear;
        float quadratic;
        
        float ambient;
        float diffuse;
        float specular;
    }; 
    
    struct SpotLight {
        vec3 position;
        vec3 direction;
        vec3 color;
        float cutOff;
        float outerCutOff;
    
        float linear;
        float quadratic;
    
        float ambient;
        float diffuse;
        float specular;       
    };

    // position
    varying vec3 vWorldSpacePosition;
    
    // texture
    uniform sampler2D uColorTexture;
    varying vec2 vTexCoord;
    
    // normal
    varying vec3 vNormal;
    
    // light
    uniform vec3 uViewPos;
    uniform DirectionalLight uDirectionalLight;
    uniform PointLight uPointLight[N_POINTLIGHTS];
    uniform SpotLight uSpotLight[N_SPOTLIGHTS];

    vec3 calculateDirectionalLight(DirectionalLight light, vec3 normal, vec3 viewDir) {
        vec3 lightDir = normalize(-uDirectionalLight.direction);

        float diff = max(dot(vNormal, lightDir), 0.0);

        vec3 reflectDir = reflect(-lightDir, vNormal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 2.0);

        vec3 color = texture2D(uColorTexture, vTexCoord).rgb;
        vec3 ambient = light.ambient * color;
        vec3 diffuse = light.diffuse * diff * color;
        vec3 specular = light.specular * spec * vec3(1, 1, 1);

        return (ambient + diffuse + specular) * light.color;
    }
    vec3 calculatePointLight(PointLight light, vec3 norm, vec3 worldSpacePosition, vec3 viewDir) {
        vec3 lightDir = normalize(light.position - worldSpacePosition);

        float diff = max(dot(norm, lightDir), 0.0);

        vec3 reflectDir = reflect(-lightDir, norm);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 2.0);

        float distance = length(light.position - worldSpacePosition);
        float attenuation = 1.0 / (1.0 + light.linear * distance + (light.quadratic * distance * distance));

        vec3 color = texture2D(uColorTexture, vTexCoord).rgb;
        vec3 ambient = light.ambient * color;
        vec3 diffuse = light.diffuse * diff * color;
        vec3 specular = light.specular * spec * vec3(1, 1, 1);
        ambient *= attenuation;
        diffuse *= attenuation;
        specular *= attenuation;

        return (ambient + diffuse + specular) * light.color;
    }
    vec3 calculateSpotLight(SpotLight light, vec3 norm, vec3 worldSpacePosition, vec3 viewDir) {
        vec3 lightDir = normalize(light.position - worldSpacePosition);

        float diff = max(dot(norm, lightDir), 0.0);

        vec3 reflectDir = reflect(-lightDir, norm);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 2.0);

        float distance = length(light.position - worldSpacePosition);
        float attenuation = 1.0 / (1.0 + light.linear * distance + (light.quadratic * distance * distance));

        float theta = dot(lightDir, normalize(-light.direction));
        float epsilon = light.cutOff - light.outerCutOff;
        float intensity = clamp((theta - light.outerCutOff) / epsilon, 0.0, 1.0);

        vec3 color = texture2D(uColorTexture, vTexCoord).rgb;
        vec3 ambient = light.ambient * color;
        vec3 diffuse = light.diffuse * diff * color;
        vec3 specular = light.specular * spec * vec3(1, 1, 1);
        ambient *= attenuation * intensity;
        diffuse *= attenuation * intensity;
        specular *= attenuation * intensity;

        return (ambient + diffuse + specular) * light.color;
    }

    void main(void) {
        vec3 norm = normalize(vNormal);
        vec3 viewDir = normalize(uViewPos - vWorldSpacePosition);

        vec3 result = vec3(0, 0, 0);
        result += calculateDirectionalLight(uDirectionalLight, norm, viewDir);
        for(int i = 0; i < N_POINTLIGHTS; i++) {
            result += calculatePointLight(uPointLight[i], norm, vWorldSpacePosition, viewDir);
        }
        for(int i = 0; i < N_SPOTLIGHTS; i++) {
            result += calculateSpotLight(uSpotLight[i], norm, vWorldSpacePosition, viewDir);
        }
        
        gl_FragColor = vec4(result, 1.0);
        // gl_FragColor = vec4(vNormal, 1.0);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl, lights) {
        await Drawable._setupDraw.bind(Obj)(gl,
            async () => {
                Obj.fragmentShaderSource = `
                    #define N_POINTLIGHTS ${lights.pointLight.length}
                    #define N_SPOTLIGHTS ${lights.spotLight.length}
                    ${Obj.fragmentShaderSource}
                    `;

                console.log(Obj.fragmentShaderSource);
            },
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
                gl.bindAttribLocation(program, 1, "aTexCoord");
                gl.bindAttribLocation(program, 2, "aNormal");
            },
            async (/** @type {WebGLProgram} */ program) => {
                Obj.uniformLocations.uMatModel = gl.getUniformLocation(program, "uMatModel");
                Obj.uniformLocations.uMatModelInverseTranspose = gl.getUniformLocation(program, "uMatModelInverseTranspose");
                Obj.uniformLocations.uMatViewProjection = gl.getUniformLocation(program, "uMatViewProjection");
                Obj.uniformLocations.uColorTexture = gl.getUniformLocation(program, "uColorTexture");

                Obj.uniformLocations.uViewPos = gl.getUniformLocation(program, "uViewPos");

                Obj.uniformLocations.uDirectionalLight = {}
                Obj.uniformLocations.uDirectionalLight.direction = gl.getUniformLocation(program, "uDirectionalLight.direction");
                Obj.uniformLocations.uDirectionalLight.color = gl.getUniformLocation(program, "uDirectionalLight.color");
                Obj.uniformLocations.uDirectionalLight.ambient = gl.getUniformLocation(program, "uDirectionalLight.ambient");
                Obj.uniformLocations.uDirectionalLight.diffuse = gl.getUniformLocation(program, "uDirectionalLight.diffuse");
                Obj.uniformLocations.uDirectionalLight.specular = gl.getUniformLocation(program, "uDirectionalLight.specular");

                Obj.uniformLocations.uPointLight = [];
                lights.pointLight.forEach((l, i) => {
                    Obj.uniformLocations.uPointLight.push({
                        position: gl.getUniformLocation(program, `uPointLight[${i}].position`),
                        color: gl.getUniformLocation(program, `uPointLight[${i}].color`),
                        linear: gl.getUniformLocation(program, `uPointLight[${i}].linear`),
                        quadratic: gl.getUniformLocation(program, `uPointLight[${i}].quadratic`),
                        ambient: gl.getUniformLocation(program, `uPointLight[${i}].ambient`),
                        diffuse: gl.getUniformLocation(program, `uPointLight[${i}].diffuse`),
                        specular: gl.getUniformLocation(program, `uPointLight[${i}].specular`)
                    });
                })

                Obj.uniformLocations.uSpotLight = [];
                lights.spotLight.forEach((l, i) => {
                    Obj.uniformLocations.uSpotLight.push({
                        position: gl.getUniformLocation(program, `uSpotLight[${i}].position`),
                        direction: gl.getUniformLocation(program, `uSpotLight[${i}].direction`),
                        color: gl.getUniformLocation(program, `uSpotLight[${i}].color`),
                        cutOff: gl.getUniformLocation(program, `uSpotLight[${i}].cutOff`),
                        outerCutOff: gl.getUniformLocation(program, `uSpotLight[${i}].outerCutOff`),
                        linear: gl.getUniformLocation(program, `uSpotLight[${i}].linear`),
                        quadratic: gl.getUniformLocation(program, `uSpotLight[${i}].quadratic`),
                        ambient: gl.getUniformLocation(program, `uSpotLight[${i}].ambient`),
                        diffuse: gl.getUniformLocation(program, `uSpotLight[${i}].diffuse`),
                        specular: gl.getUniformLocation(program, `uSpotLight[${i}].specular`)
                    });
                })
            }
        );

        gl.useProgram(Obj.programShader);

        // set uniforms
        gl.uniform3fv(Obj.uniformLocations.uDirectionalLight.direction, lights.directionalLight.direction.values);
        gl.uniform3fv(Obj.uniformLocations.uDirectionalLight.color, lights.directionalLight.color.values);
        gl.uniform1f(Obj.uniformLocations.uDirectionalLight.ambient, lights.directionalLight.ambient);
        gl.uniform1f(Obj.uniformLocations.uDirectionalLight.diffuse, lights.directionalLight.diffuse);
        gl.uniform1f(Obj.uniformLocations.uDirectionalLight.specular, lights.directionalLight.specular);

        lights.pointLight.forEach((l, i) => {
            gl.uniform3fv(Obj.uniformLocations.uPointLight[i].position, l.position.values);
            gl.uniform3fv(Obj.uniformLocations.uPointLight[i].color, l.color.values);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].linear, l.linear);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].quadratic, l.quadratic);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].ambient, l.ambient);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].diffuse, l.diffuse);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].specular, l.specular);
        });

        lights.spotLight.forEach((l, i) => {
            gl.uniform3fv(Obj.uniformLocations.uSpotLight[i].position, l.position.values);
            gl.uniform3fv(Obj.uniformLocations.uSpotLight[i].direction, l.direction.values);
            gl.uniform3fv(Obj.uniformLocations.uSpotLight[i].color, l.color.values);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].cutOff, l.cutOff);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].outerCutOff, l.outerCutOff);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].linear, l.linear);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].quadratic, l.quadratic);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].ambient, l.ambient);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].diffuse, l.diffuse);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].specular, l.specular);
        });
    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const lampPost = new Obj(
    {
        urls: {
            obj: "/assets/objs/lights/lamp_post/Street_Lamp_obj.obj",
            texture: "/assets/textures/lights/lamp_post/lamba_DefaultMaterial_BaseColor.png",
        },
    }
    , Mat4.Identity()
        .scale(new Vec3(3, 3, 3))
        .translate(new Vec3(-1.85, 0, 5.5)));
lampPost.lights = {
    pointLight: [{
        name: "LampPost",
        enabled: true,
        position: () => new Vec4(0.35, 3, 0, 1).transform(lampPost.mat).toVec3(),
        color: new Vec3(1, 1, 1),
        linear: 0.003,
        quadratic: 0.0032,
        ambient: 0.1,
        diffuse: 1,
        specular: 0.5
    }]
}

const objs = [
    // cube 1
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/cube/cube.obj",
    //             texture: [0xff, 0x00, 0x00, 0xff],
    //         },
    //     }
    //     , Mat4.Identity()
    //         .translate(new Vec3(0, 0, 0))
    //         .scale(new Vec3(1, 1, 1))
    // ),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/buildings/building1/Cottage_FREE.obj",
                texture: "../../assets/textures/buildings/building1/Cottage_Dirt_Base_Color.jpg",
            },
        }
        , Mat4.Identity()
            .scale(new Vec3(2, 2, 2))
            .rotate(toRad(90), new Vec3(0, 1, 0))
            .translate(new Vec3(0, 0, 10))),
    lampPost,
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
    //             texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
    //         },
    //     }
    //     , Mat4.Identity()
    //         .scale(new Vec3(2, 2, 2))
    //         .translate(new Vec3(0, 0, -45))),
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
    //             texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
    //         },
    //     }
    //     , Mat4.Identity()
    //         .scale(new Vec3(2, 2, 2))
    //         .translate(new Vec3(1, 0, -44))),
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
    //             texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
    //         },
    //     }
    //     , Mat4.Identity()
    //         .scale(new Vec3(2, 2, 2))
    //         .translate(new Vec3(-1.5, 0, -44.33))),
]

export { objs };