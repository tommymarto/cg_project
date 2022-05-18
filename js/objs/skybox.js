import { Mat4, Vec3 } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import { Drawable } from "../drawable.js";
import logger from "../logger.js";

export class Skybox extends Drawable {
    async setup(/** @type {WebGLRenderingContext} */ gl) {
        await super.setup(gl);

        this.texture = gl.createTexture();

        await Promise.all([
            {
                url: "../../assets/textures/skybox/mountain/posx.jpg",
                target: gl.TEXTURE_CUBE_MAP_POSITIVE_X
            },
            {
                url: "../../assets/textures/skybox/mountain/negx.jpg",
                target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X
            },
            {
                url: "../../assets/textures/skybox/mountain/posy.jpg",
                target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y
            },
            {
                url: "../../assets/textures/skybox/mountain/negy.jpg",
                target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y
            },
            {
                url: "../../assets/textures/skybox/mountain/posz.jpg",
                target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z
            },
            {
                url: "../../assets/textures/skybox/mountain/negz.jpg",
                target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
            },
        ].map(tex => {
            return new Promise((res, err) => {
                let image = new Image();
                image.onload = () => {
                    gl.activeTexture(gl.TEXTURE0);
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);

                    gl.texImage2D(tex.target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);

                    logger.d(`Skybox: Loaded ${tex.url}`);
                    res();
                }
                image.onerror = () => {
                    err("Error loading texture");
                }

                image.src = tex.url;
            })
        }))
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack) {
        gl.useProgram(Skybox.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices2, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // indices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.element.value);
        if (this.buffers.element.dirty) {
            this.buffers.element.dirty = false;
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.data.indices, gl.STATIC_DRAW);
        }

        // set uniforms
        gl.uniformMatrix4fv(Skybox.uniformLocations.uMat, false, stack.head().values);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
        gl.uniform1i(Skybox.uniformLocations.uCubeMap, 0);


        // draw
        gl.depthFunc(gl.LEQUAL);
        // gl.drawElements(gl[Skybox.glMode], this.data.indices.length, gl.UNSIGNED_SHORT, 0);
        gl.drawArrays(gl[Skybox.glMode], 0, this.data.vertices2.length / 3);
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
        // gl_Position = gl_Position.xyww;
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    uniform samplerCube uCubeMap;

    varying vec3 texCoords;

    void main(void) {
        gl_FragColor = textureCube(uCubeMap, texCoords);
        // gl_FragColor = vec4(texCoords, 1);
        // gl_FragColor = vec4(1, 0, 0, 1);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await Drawable._setupDraw.bind(Skybox)(gl, async (/** @type {WebGLProgram} */ program) => {
            gl.bindAttribLocation(program, 0, "aPosition");
        });

        gl.useProgram(Skybox.programShader);
        Skybox.uniformLocations.uMat = gl.getUniformLocation(Skybox.programShader, "uMat");
        Skybox.uniformLocations.uCubeMap = gl.getUniformLocation(Skybox.programShader, "uCubeMap");
    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const skyboxes = [
    // cube 1
    new Skybox({
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
        vertices2: new Float32Array([
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
        ])
    }),
]

export { skyboxes };