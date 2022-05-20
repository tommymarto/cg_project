import { Mat4, Vec3 } from "webgl-basic-lib";
import { Drawable } from "../drawable.js";
import { loadTexture, zip } from "../utils.js";
import logger from "../logger.js";

export class Skybox extends Drawable {
    constructor(data, name, mat = Mat4.Identity()) {
        super(data, mat);
        this.name = name;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        await super.setup(gl);

        this.data.vertices = new Float32Array([
            -1.0, 1.0, -1.0,
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,

            -1.0, -1.0, 1.0,
            -1.0, -1.0, -1.0,
            -1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,
            -1.0, 1.0, 1.0,
            -1.0, -1.0, 1.0,

            1.0, -1.0, -1.0,
            1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, -1.0,
            1.0, -1.0, -1.0,

            -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, 1.0,

            -1.0, 1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0, -1.0,

            -1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            1.0, -1.0, 1.0
        ]);

        this.texture = gl.createTexture();

        const targets = [
            gl.TEXTURE_CUBE_MAP_POSITIVE_X,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
        ]

        await Promise.all(zip(Object.values(this.data.urls), targets).map(({ first: url, second: target }) => {
            return loadTexture(gl, this.texture, url, {
                textureKind: gl.TEXTURE_CUBE_MAP,
                target,
            })
        }));


        this.isLoaded = true;
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack) {
        if (!this.isLoaded) {
            return;
        }

        gl.useProgram(Skybox.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        gl.uniformMatrix4fv(Skybox.uniformLocations.uMat, false, stack.head().values);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
        gl.uniform1i(Skybox.uniformLocations.uCubeMap, 0);

        // draw
        gl.depthFunc(gl.LEQUAL);
        // gl.drawElements(gl[Skybox.glMode], this.data.indices.length, gl.UNSIGNED_SHORT, 0);
        gl.drawArrays(gl[Skybox.glMode], 0, this.data.vertices.length / 3);
        gl.depthFunc(gl.LESS);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind texture
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }


    static glMode = "TRIANGLES";
    static vertexShaderSource = `
    precision mediump float;
    attribute vec3 aPosition;
  
    uniform mat4 uMat;
  
    varying vec3 texCoords;
  
    void main(void) {
        texCoords = aPosition;
        gl_Position = uMat * vec4(aPosition, 1.0);
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    uniform samplerCube uCubeMap;

    varying vec3 texCoords;

    void main(void) {
        gl_FragColor = textureCube(uCubeMap, texCoords);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await Drawable._setupDraw.bind(Skybox)(gl,
            null,
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
            },
            async (/** @type {WebGLProgram} */ program) => {
                Skybox.uniformLocations.uMat = gl.getUniformLocation(program, "uMat");
                Skybox.uniformLocations.uCubeMap = gl.getUniformLocation(program, "uCubeMap");
            }
        );

        gl.useProgram(Skybox.programShader);
    }

    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const skyboxes = [
    // day
    new Skybox({
        urls: {
            posx: "../../assets/textures/skybox/day/posx.jpg",
            negx: "../../assets/textures/skybox/day/negx.jpg",
            posy: "../../assets/textures/skybox/day/posy.jpg",
            negy: "../../assets/textures/skybox/day/negy.jpg",
            posz: "../../assets/textures/skybox/day/posz.jpg",
            negz: "../../assets/textures/skybox/day/negz.jpg",
        },
    }, "Day"),
    // night
    new Skybox({
        urls: {
            posx: "../../assets/textures/skybox/night/posx.png",
            negx: "../../assets/textures/skybox/night/negx.png",
            posy: "../../assets/textures/skybox/night/posy.png",
            negy: "../../assets/textures/skybox/night/negy.png",
            posz: "../../assets/textures/skybox/night/posz.png",
            negz: "../../assets/textures/skybox/night/negz.png",
        },
    }, "Night"),
]

export { skyboxes };