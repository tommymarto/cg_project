import { Mat4, Vec3, } from "webgl-basic-lib";
import { Obj } from "./obj.js";
import { loadTexture } from "../utils.js";

export class Ground extends Obj {
    async setup(/** @type {WebGLRenderingContext} */ gl) {
        await super.setup(gl, true);

        this.texture = gl.createTexture();
        loadTexture(gl, this.texture, this.data.urls.texture, {
            textureKind: gl.TEXTURE_2D,
            target: gl.TEXTURE_2D,
            textureWrap: gl.REPEAT,
            mipmap: true
        })
    }
}

const grassSize = 80;
const roadLength = grassSize;

const ground = [
    new Ground({
        vertices: new Float32Array([
            -1, 0, 1,
            1, 0, 1,
            -1, 0, -1,

            -1, 0, -1,
            1, 0, 1,
            1, 0, -1,
        ]),
        texCoords: new Float32Array([
            0, grassSize / 10,
            grassSize / 10, grassSize / 10,
            0, 0,
            0, 0,
            grassSize / 10, grassSize / 10,
            grassSize / 10, 0,
        ]),
        normals: new Float32Array([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]),
        urls: {
            texture: "../../assets/textures/ground/grass/Grass_005_BaseColor.jpg",
        }
    }, Mat4.Identity().scale(new Vec3(grassSize / 2, 1, grassSize / 2))),
    new Ground({
        vertices: new Float32Array([
            -1, 0, 1,
            1, 0, 1,
            -1, 0, -1,

            -1, 0, -1,
            1, 0, 1,
            1, 0, -1,
        ]),
        texCoords: new Float32Array([
            0, grassSize / 10,
            1, grassSize / 10,
            0, 0,
            0, 0,
            1, grassSize / 10,
            1, 0,
        ]),
        normals: new Float32Array([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]),
        urls: {
            texture: "../../assets/textures/ground/road/Road_001_basecolor.jpg",
        }
    }, Mat4.Identity().scale(new Vec3(4, 1, roadLength / 2)).translate(new Vec3(0, 0.01, 0))),
]

export { ground };