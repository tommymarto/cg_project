import { Mat4, Vec3, Colors } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import { Drawable } from "../drawable.js";
import logger from "../logger.js";

export class Ground extends Drawable {
    draw(/** @type {WebGLRenderingContext} */ gl, stack) {
        gl.useProgram(Ground.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // color
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.color.value);
        if (this.buffers.color.dirty) {
            this.buffers.color.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.colors, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);

        // indices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.element.value);
        if (this.buffers.element.dirty) {
            this.buffers.element.dirty = false;
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.data.indices, gl.STATIC_DRAW);
        }

        // set uniforms
        const actualMat = stack.push(this.mat);
        gl.uniformMatrix4fv(Ground.uniformLocations.uMat, false, actualMat.values);
        stack.pop();

        // draw
        gl.drawElements(gl[Ground.glMode], this.data.indices.length, gl.UNSIGNED_SHORT, 0);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);
        gl.disableVertexAttribArray(1);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }


    static glMode = "TRIANGLES";
    static vertexShaderSource = `
    precision mediump float;
    attribute vec3 aPosition;
    attribute vec3 aColor;
  
    uniform mat4 uMat;
  
    varying vec3 vColor;
  
    void main(void) {
        vColor = aColor;
        gl_Position = uMat * vec4(aPosition, 1.0);
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    varying vec3 vColor;

    void main(void) {
        gl_FragColor = vec4(vColor, 1);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await Drawable._setupDraw.bind(Ground)(gl, async (/** @type {WebGLProgram} */ program) => {
            gl.bindAttribLocation(program, 0, "aPosition");
            gl.bindAttribLocation(program, 1, "aColor");
        });

        gl.useProgram(Ground.programShader);
        Ground.uniformLocations.uMat = gl.getUniformLocation(Ground.programShader, "uMat");
    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const ground = new Ground({
    vertices: new Float32Array([
        0, 0, 0,
        0, 0, 1,
        1, 0, 0,
        1, 0, 1,
    ]),
    indices: new Uint16Array([
        0, 1, 2,
        1, 2, 3,
    ]),
    colors: new Float32Array([
        ...Colors.Gray.values,
        ...Colors.Gray.values,
        ...Colors.Gray.values,
        ...Colors.Gray.values,
    ]),
}, Mat4.Identity().scale(new Vec3(10, 1, 10)));

export { ground };