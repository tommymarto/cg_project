import { Mat4 } from "webgl-basic-lib";
import logger from "./logger.js";

function checkGL(tag, log) {
    if (log !== "") {
        const err = new Error(`${tag} ${log}`.split("\n").join(""));
        logger.error(err);
        console.error(err);
        throw err;
    }
}

export class Drawable {
    constructor(data, mat = Mat4.Identity()) {
        this.data = data;
        this.mat = mat;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        this.buffers = {
            position: {
                value: gl.createBuffer(),
                dirty: true,
            },
            texCoord: {
                value: gl.createBuffer(),
                dirty: true,
            },
            normal: {
                value: gl.createBuffer(),
                dirty: true,
            },

            // TODO: delete these ones
            color: {
                value: gl.createBuffer(),
                dirty: true,
            },
            element: {
                value: gl.createBuffer(),
                dirty: true,
            },
        };
    }

    data = {}
    buffers = {}
    mat = Mat4.Identity()

    static async _setupDraw(/** @type {WebGLRenderingContext} */ gl, before = null, preLink = async (/** @type {WebGLProgram} */ program) => { }, post = null) {
        if (!this.programShader) {
            if (before) {
                await before();
            }

            // create and compile vertex shader
            this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(this.vertexShader, this.vertexShaderSource);
            gl.compileShader(this.vertexShader);
            checkGL("VS:", gl.getShaderInfoLog(this.vertexShader));

            // create and compile fragment shader
            this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(this.fragmentShader, this.fragmentShaderSource);
            gl.compileShader(this.fragmentShader);
            checkGL("FS: ", gl.getShaderInfoLog(this.fragmentShader));

            // create and compile program and link shaders
            this.programShader = gl.createProgram();
            gl.attachShader(this.programShader, this.vertexShader);
            gl.attachShader(this.programShader, this.fragmentShader);

            await preLink(this.programShader);

            gl.linkProgram(this.programShader);
            checkGL("PS: ", gl.getProgramInfoLog(this.programShader));

            if (post) {
                await post(this.programShader);
            }
        }
    }

    draw() { }
    update(dt) { }
}