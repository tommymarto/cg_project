import { Mat4, Vec3, toRad } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import { Drawable } from "../drawable.js";
import { loadObj, loadTexture } from "../utils.js";
import logger from "../logger.js";

export class Obj extends Drawable {
    constructor(data, mat = new Mat4(), textureOptions) {
        super(data, mat);
        this.textureOptions = textureOptions;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl, isChild = false) {
        super.setup(gl);

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
                    normals: new Float32Array(mainObj.texCoords),
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
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack) {
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
        const actualMat = stack.push(this.mat);
        gl.uniformMatrix4fv(Obj.uniformLocations.uMat, false, actualMat.values);
        stack.pop();

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(Obj.uniformLocations.uTexture, 0);

        // draw
        gl.drawArrays(gl[Obj.glMode], 0, this.data.vertices.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (this.children) {
            this.children.forEach(child => child.draw(gl, stack));
        }
    }

    static glMode = "TRIANGLES";
    static vertexShaderSource = `
    precision mediump float;
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;
    attribute vec3 aNormal;
  
    uniform mat4 uMat;
  
    varying vec2 vTexCoord;
  
    void main(void) {
        vTexCoord = aTexCoord;
        gl_Position = uMat * vec4(aPosition, 1.0);
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    varying vec2 vTexCoord;

    uniform sampler2D uTexture;

    void main(void) {
        vec3 color = texture2D(uTexture, vTexCoord).rgb;
        gl_FragColor = vec4(color, 1.0);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await Drawable._setupDraw.bind(Obj)(gl, async (/** @type {WebGLProgram} */ program) => {
            gl.bindAttribLocation(program, 0, "aPosition");
            gl.bindAttribLocation(program, 1, "aTexCoord");
            gl.bindAttribLocation(program, 2, "aNormal");
        });

        gl.useProgram(Obj.programShader);
        Obj.uniformLocations.uMat = gl.getUniformLocation(Obj.programShader, "uMat");
        Obj.uniformLocations.uTexture = gl.getUniformLocation(Obj.programShader, "uTexture");

    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
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
    //     , Mat4.Identity().translate(new Vec3(4, 1, 4)).scale(new Vec3(0.5, 0.5, 0.5))),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/buildings/building1/Cottage_FREE.obj",
                texture: "../../assets/textures/buildings/building1/Cottage_Dirt_Base_Color.png",
            },
        }
        , Mat4.Identity()
            .scale(new Vec3(2, 2, 2))
            .rotate(toRad(90), new Vec3(0, 1, 0))
            .translate(new Vec3(0, 0, 10))),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/lights/streetlight/streetlight.obj",
                texture: "../../assets/textures/lights/streetlight/color.jpg",
            },
        }
        , Mat4.Identity()
            .scale(new Vec3(0.05, 0.05, 0.05))
            .rotate(toRad(90), new Vec3(0, 1, 0))
            .translate(new Vec3(-300, 0, -140))),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
                texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
            },
        }
        , Mat4.Identity()
            .scale(new Vec3(2, 2, 2))
            .translate(new Vec3(0, 0, -45))),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
                texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
            },
        }
        , Mat4.Identity()
            .scale(new Vec3(2, 2, 2))
            .translate(new Vec3(1, 0, -44))),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
                texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
            },
        }
        , Mat4.Identity()
            .scale(new Vec3(2, 2, 2))
            .translate(new Vec3(-1.5, 0, -44.33))),
]

export { objs };