import { Mat4, Vec3 } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import { Drawable } from "../drawable.js";
import { loadObj } from "../obj_loader.js";

export class ObjObj extends Drawable {

    async setup(/** @type {WebGLRenderingContext} */ gl, isChild = false) {
        super.setup(gl);

        if (!isChild) {
            const objs = await loadObj(this.data.objUrl);
            const mainObj = objs[0];

            console.log(mainObj)

            this.data = {
                vertices: new Float32Array(mainObj.vertices),
            };

            this.children = objs.map(obj => {
                const child = new ObjObj({
                    vertices: new Float32Array(obj.vertices),
                }, this.mat);
                return child;
            })

            await Promise.all(this.children.map(child => child.setup(gl, true)));
        }

    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack) {
        gl.useProgram(ObjObj.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        const actualMat = stack.push(this.mat);
        gl.uniformMatrix4fv(ObjObj.uniformLocations.uMat, false, actualMat.values);
        stack.pop();

        // draw
        gl.drawArrays(gl[ObjObj.glMode], 0, this.data.vertices.length / 3);

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
  
    uniform mat4 uMat;
  
    varying vec3 vColor;
  
    void main(void) {
        vColor = vec3(1, 0, 0);
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
        await Drawable._setupDraw.bind(ObjObj)(gl, async (/** @type {WebGLProgram} */ program) => {
            gl.bindAttribLocation(program, 0, "aPosition");
        });

        gl.useProgram(ObjObj.programShader);
        ObjObj.uniformLocations.uMat = gl.getUniformLocation(ObjObj.programShader, "uMat");
    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const objs = [
    // cube 1
    new ObjObj(
        {
            objUrl: "../../assets/objs/cube/cube.obj",
        }
        , Mat4.Identity().translate(new Vec3(4, 1, 4)).scale(new Vec3(0.5, 0.5, 0.5))),
    new ObjObj(
        {
            objUrl: "../../assets/objs/car/car.obj",
        }
        , Mat4.Identity().translate(new Vec3(7, 1, 7)).scale(new Vec3(0.5, 0.5, 0.5))),
]

export { objs };