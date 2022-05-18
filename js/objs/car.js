import { Mat4, Vec3, Vec4, toRad } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import { keyboard } from "../keyboard.js";
import logger from "../logger.js";
import { Obj } from "./obj.js";

export class Car extends Obj {
    update(dt) {
        const forwardSpeed = keyboard.isPressed("w") ? -1 : 0;
        const backwardsSpeed = keyboard.isPressed("s") ? 1 : 0;
        const movementSpeed = (forwardSpeed + backwardsSpeed) * (dt / 50)

        const movement = new Vec3(
            0,
            0,
            movementSpeed
        )

        const leftSpeed = keyboard.isPressed("a") ? -1 : 0;
        const rightSpeed = keyboard.isPressed("d") ? 1 : 0;
        // rotate only if car is moving and "handle" backwards turning
        const rotationSpeed = ((leftSpeed + rightSpeed) * (dt / 10)) /* * (Math.abs(movementSpeed) > 0 ? movementSpeed > 0 ? 1 : -1 : 0) */;

        this.mat
            .rotate(toRad(rotationSpeed), new Vec3(0, 1, 0))
            .translate(movement);
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        await super.setup(gl);

        const getInstanceMatrix = () => {
            return this.mat;
        }

        this.cameras = [{
            name: "Chasing",
            matrix() {
                const mat = getInstanceMatrix().clone();
                const from = new Vec4(0, 2, 15, 1).transform(mat).toVec3();
                const to = new Vec4(0, 0, 0, 1).transform(mat).toVec3();

                return Mat4.LookAt(from, to, new Vec3(0, 1, 0))
            }
        }]
    }
}

const car = new Car({
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
}, Mat4.Identity().scale(new Vec3(0.5, 0.5, 0.5)).translate(new Vec3(4, 1, 4)))

export { car };