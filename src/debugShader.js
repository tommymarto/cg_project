import { Mat4, Vec3, toRad } from "webgl-basic-lib";
import { Drawable } from "./drawable.js";
import { loadObj, loadTexture } from "./utils.js";
import logger from "./logger.js";

export class DebugTexture extends Drawable {
    draw(/** @type {WebGLRenderingContext} */ gl, texture) {
        gl.useProgram(DebugTexture.programShader);

        const square = [[-1, -1, 0], [-1, 1, 0], [1, -1, 0], [-1, 1, 0], [1, -1, 0], [1, 1, 0]].flat();

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(square), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(DebugTexture.uniformLocations.uTexture, 0);

        // draw
        gl.drawArrays(gl[DebugTexture.glMode], 0, square.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    static glMode = "TRIANGLES";
    static vertexShaderSource = `
    precision mediump float;
    
    // position
    attribute vec3 aPosition;
    
    // texture
    varying vec2 vTexCoord;
    
    void main(void) {
        vTexCoord = aPosition.xy * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 1.0);
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    
    void main(void) {
        float depth = texture2D(uTexture, vTexCoord).r;
        gl_FragColor = vec4(vec3(depth), 1.0);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await Drawable._setupDraw.bind(DebugTexture)(gl, null,
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
            },
            async (/** @type {WebGLProgram} */ program) => {
                DebugTexture.uniformLocations.uTexture = gl.getUniformLocation(program, "uTexture");
            }
        );
    }

    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}