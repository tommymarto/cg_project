import { Mat4, Vec3 } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import { Drawable } from "../drawable.js";

export class Obj extends Drawable {
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
        gl.uniformMatrix4fv(Obj.uniformLocations.uMat, false, actualMat.values);
        stack.pop();

        // draw
        gl.drawElements(gl[Obj.glMode], this.data.indices.length, gl.UNSIGNED_SHORT, 0);

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
        await Drawable._setupDraw.bind(Obj)(gl, async (/** @type {WebGLProgram} */ program) => {
            gl.bindAttribLocation(program, 0, "aPosition");
            gl.bindAttribLocation(program, 1, "aColor");
        });

        gl.useProgram(Obj.programShader);
        Obj.uniformLocations.uMat = gl.getUniformLocation(Obj.programShader, "uMat");
    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const objs = [
    // cube 1
    new Obj({
        vertices: new Float32Array([
            // x,  y,  z,   r,   g,   b
            // front face
            -1, -1, 1,
            -1, 1, 1,
            1, -1, 1,
            1, 1, 1,
            // right face
            1, -1, -1,
            1, 1, -1,
            1, -1, 1,
            1, 1, 1,
            // left face
            -1, -1, -1,
            -1, 1, -1,
            -1, -1, 1,
            -1, 1, 1,
            // upper face
            -1, 1, -1,
            -1, 1, 1,
            1, 1, -1,
            1, 1, 1,
            // bottom face
            -1, -1, -1,
            -1, -1, 1,
            1, -1, -1,
            1, -1, 1,
            // rear face
            -1, -1, -1,
            -1, 1, -1,
            1, -1, -1,
            1, 1, -1,
        ]),
        indices: new Uint16Array([
            0, 1, 2,
            1, 2, 3,

            4, 5, 6,
            5, 6, 7,

            8, 9, 10,
            9, 10, 11,

            12, 13, 14,
            13, 14, 15,

            16, 17, 18,
            17, 18, 19,

            20, 21, 22,
            21, 22, 23
        ]),
        colors: new Float32Array([
            // front face
            1, 1, 1,
            1, 1, 1,
            1, 1, 1,
            1, 1, 1,
            // right face
            0, 156 / 255, 70 / 255,
            0, 156 / 255, 70 / 255,
            0, 156 / 255, 70 / 255,
            0, 156 / 255, 70 / 255,
            // left face
            0, 68 / 255, 175 / 255,
            0, 68 / 255, 175 / 255,
            0, 68 / 255, 175 / 255,
            0, 68 / 255, 175 / 255,
            // upper face
            184 / 255, 10 / 255, 49 / 255,
            184 / 255, 10 / 255, 49 / 255,
            184 / 255, 10 / 255, 49 / 255,
            184 / 255, 10 / 255, 49 / 255,
            // bottom face
            1, 87 / 255, 0,
            1, 87 / 255, 0,
            1, 87 / 255, 0,
            1, 87 / 255, 0,
            // rear face
            1, 214 / 255, 0,
            1, 214 / 255, 0,
            1, 214 / 255, 0,
            1, 214 / 255, 0,
        ]),
    }, Mat4.Identity().translate(new Vec3(4, 1, 4)).scale(new Vec3(0.5, 0.5, 0.5))),
]

export { objs };