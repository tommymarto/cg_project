import { Mat4, Vec3, toRad } from "webgl-basic-lib";
import { Drawable } from "../drawable.js";
import { loadObj, loadTexture } from "../utils.js";
import logger from "../logger.js";

export class Point extends Drawable {
    draw(/** @type {WebGLRenderingContext} */ gl, points) {
        gl.useProgram(Point.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // draw
        gl.drawArrays(gl[Point.glMode], 0, this.data.vertices.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (this.children) {
            this.children.forEach(child => child.draw(gl, stack));
        }
    }

    static glMode = "POINTS";
    static vertexShaderSource = `
    precision mediump float;
    
    // position
    attribute vec3 aPosition;
    uniform mat4 uMatViewProjection;
    
    void main(void) {
        gl_Position = uMatViewProjection * vec4(aPosition, 1.0);
        gl_PointSize = 5.0;
    }
    `
    static fragmentShaderSource = `
    precision mediump float;
    
    void main(void) {
        gl_FragColor = vec4(1, 0, 0, 1.0);
    }
    `

    static async setupDraw(/** @type {WebGLRenderingContext} */ gl, lights) {
        await Drawable._setupDraw.bind(Point)(gl, async (/** @type {WebGLProgram} */ program) => {
            gl.bindAttribLocation(program, 0, "aPosition");
        });

        gl.useProgram(Point.programShader);
    }
}