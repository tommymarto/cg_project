import { Mat4, Vec3, Vec4, toRad } from "webgl-basic-lib";
import { keyboard } from "../keyboard.js";
import logger from "../logger.js";
import { Obj } from "./obj.js";

export class Car extends Obj {
    constructor(data, mat = Mat4.Identity(), modelDirection = Mat4.Identity()) {
        super(data, mat);
        this.modelDirection = modelDirection;
    }

    update(dt) {
        const forwardSpeed = keyboard.isPressed("w") ? -1 : 0;
        const backwardsSpeed = keyboard.isPressed("s") ? 1 : 0;
        const movementSpeed = (forwardSpeed + backwardsSpeed) * (dt / 50)

        const movement = new Vec3(
            0,
            0,
            movementSpeed
        )

        const leftSpeed = keyboard.isPressed("a") ? 1 : 0;
        const rightSpeed = keyboard.isPressed("d") ? -1 : 0;
        // rotate only if car is moving and "handle" backwards turning
        const rotationSpeed = ((leftSpeed + rightSpeed) * (dt / 10)) * (movementSpeed >= 0 ? -1 : 1);

        this.mat
            .rotate(toRad(rotationSpeed), new Vec3(0, 1, 0))
            .translate(movement);

        if (keyboard.isPressed("q")) {
            this.mat.translate(new Vec3(0, 1, 0).mul(dt / 50));
        }
        if (keyboard.isPressed("e")) {
            this.mat.translate(new Vec3(0, -1, 0).mul(dt / 50));
        }
    }

    cameras = [{
        name: "Chasing",
        matrix: () => {
            const lookAt = Mat4.LookAt(new Vec3(0, 4, 15), new Vec3(0, 0, 0), new Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Car Front",
        matrix() {
            const mat = this.mat.clone().inverse();
            const from = new Vec4(0, 2, 1.5, 1).transform(mat).toVec3();
            const to = new Vec4(0, 1, -15, 1).transform(mat).toVec3();

            return Mat4.LookAt(from, to, new Vec3(0, 1, 0))
        }
    }]

    lights = [{
        name: "Headlight1",
        matrix: () => {
            const mat = getInstanceMatrix().clone();
            return mat.translate(new Vec3(1, 0, 1));
        },
        kind: "spotlight",
        data: {
            intensity: 1,
        }
    }, {
        name: "Headlight2",
        matrix() {
            const mat = getInstanceMatrix().clone();
            return mat.translate(new Vec3(-1, 0, 1));
        },
        kind: "spotlight",
        data: {
            intensity: 1,
        }
    }]

    draw(/** @type {WebGLRenderingContext} */ gl, stack, camera) {
        this.mat.apply(this.modelDirection);
        super.draw(gl, stack, camera);
        this.mat.apply(this.modelDirection.inverse());
    }
}

const car = new Car(
    {
        urls: {
            obj: "../../assets/objs/car/car.obj",
            texture: "../../assets/textures/car/color.jpg",
        }
    },
    Mat4.Identity().translate(new Vec3(0, 0, 85)),
    Mat4.Identity().rotate(toRad(180), new Vec3(0, 1, 0))
);

export { car };