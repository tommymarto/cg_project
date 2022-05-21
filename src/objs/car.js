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
        const rotationSpeed = ((leftSpeed + rightSpeed) * (dt / 10)) * (movementSpeed > 0 ? -1 : 1);

        this.mat
            .rotate(toRad(rotationSpeed), new Vec3(0, 1, 0))
            .translate(movement);

        if (keyboard.isPressed("q")) {
            this.mat.translate(new Vec3(0, 1, 0).mul(dt / 50));
        }
        if (keyboard.isPressed("e")) {
            this.mat.translate(new Vec3(0, -1, 0).mul(dt / 50));
        }

        const brakesOn = keyboard.isPressed("j")
        this.lights.spotLight.filter(light => ["BrakeLeft", "BrakeRight"].includes(light.name))
            .forEach(light => {
                light.enabled = brakesOn;
            });
        this.lights.spotLight.filter(light => ["RearRight", "RearLeft"].includes(light.name))
            .forEach(light => {
                light.enabled = movementSpeed > 0;
            });
    }

    cameras = [{
        name: "Chasing",
        matrix: () => {
            const lookAt = Mat4.LookAt(new Vec3(0, 4, 15), new Vec3(0, 0, 0), new Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Chasing Close",
        matrix: () => {
            const lookAt = Mat4.LookAt(new Vec3(0, 2, 7), new Vec3(0, 1, 0), new Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Reverse",
        matrix: () => {
            const lookAt = Mat4.LookAt(new Vec3(0, 4, -15), new Vec3(0, 0, 0), new Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Reverse Close",
        matrix: () => {
            const lookAt = Mat4.LookAt(new Vec3(0, 2, -9), new Vec3(0, 1, 0), new Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Car Front",
        matrix: () => {
            const lookAt = Mat4.LookAt(new Vec3(0, 1.1, -0.7), new Vec3(0, 1, -15), new Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        }
    }]

    lights = {
        spotLight: [
            {
                name: "HeadlightLeft",
                enabled: true,
                position: () => new Vec4(-0.725, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(0, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new Vec3(1, 1, 1),
                cutOff: Math.cos(toRad(7)),
                outerCutOff: Math.cos(toRad(15)),
                linear: 0.003,
                quadratic: 0.0032,
                ambient: 0.7,
                diffuse: 0.8,
                specular: 0.5,
            }, {
                name: "HeadLightRight",
                enabled: true,
                position: () => new Vec4(0.725, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(0, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new Vec3(1, 1, 1),
                cutOff: Math.cos(toRad(7)),
                outerCutOff: Math.cos(toRad(15)),
                linear: 0.003,
                quadratic: 0.0032,
                ambient: 0.7,
                diffuse: 0.8,
                specular: 0.5,
            }, {
                name: "BrakeLeft",
                enabled: false,
                position: () => new Vec4(-0.875, 0.83, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new Vec3(1, 0, 0),
                cutOff: Math.cos(toRad(50)),
                outerCutOff: Math.cos(toRad(70)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.2,
                diffuse: 0.8,
                specular: 0.5,
            }, {
                name: "BrakeRight",
                enabled: false,
                position: () => new Vec4(0.875, 0.83, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new Vec3(1, 0, 0),
                cutOff: Math.cos(toRad(50)),
                outerCutOff: Math.cos(toRad(70)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.2,
                diffuse: 0.8,
                specular: 0.5,
            }, {
                name: "RearDirectionalLeft",
                enabled: false,
                position: () => new Vec4(-0.875, 0.725, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(-0.5, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos(toRad(20)),
                outerCutOff: Math.cos(toRad(40)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.2,
                diffuse: 0.8,
                specular: 0.5,
                on: false
            }, {
                name: "RearDirectionalRight",
                enabled: false,
                position: () => new Vec4(0.875, 0.725, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(0.5, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos(toRad(20)),
                outerCutOff: Math.cos(toRad(40)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.2,
                diffuse: 0.8,
                specular: 0.5,
                on: false
            }, {
                name: "FrontDirectionalLeft",
                enabled: false,
                position: () => new Vec4(-0.89, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(-0.5, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos(toRad(20)),
                outerCutOff: Math.cos(toRad(40)),
                linear: 0.01,
                quadratic: 0.01,
                ambient: 0.4,
                diffuse: 0.8,
                specular: 0.5,
                on: false,
            }, {
                name: "FrontDirectionalRight",
                enabled: false,
                position: () => new Vec4(0.89, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new Vec4(0.5, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos(toRad(20)),
                outerCutOff: Math.cos(toRad(40)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.4,
                diffuse: 0.8,
                specular: 0.5,
                on: false,
            },
            // {
            //     name: "RearRight",
            //     enabled: true,
            //     position: () => new Vec4(0.875, 0.66, 1.73, 1).transform(this.mat).toVec3(),
            //     direction: () => new Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
            //     color: new Vec3(1, 1, 1),
            //     cutOff: Math.cos(toRad(15)),
            //     outerCutOff: Math.cos(toRad(30)),
            //     linear: 0.1,
            //     quadratic: 0.1,
            //     ambient: 0.3,
            //     diffuse: 0.8,
            //     specular: 0.5,
            // }, {
            //     name: "RearLeft",
            //     enabled: true,
            //     position: () => new Vec4(-0.875, 0.66, 1.73, 1).transform(this.mat).toVec3(),
            //     direction: () => new Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
            //     color: new Vec3(1, 1, 1),
            //     cutOff: Math.cos(toRad(15)),
            //     outerCutOff: Math.cos(toRad(30)),
            //     linear: 0.1,
            //     quadratic: 0.1,
            //     ambient: 0.1,
            //     diffuse: 0.8,
            //     specular: 0.5,
            // },
        ]
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        setInterval(() => {
            this.lights.spotLight.filter(l => ["RearDirectionalLeft", "RearDirectionalRight", "FrontDirectionalLeft", "FrontDirectionalRight"].includes(l.name))
                .forEach(l => {
                    if (l.on) {
                        l.enabled = !l.enabled;
                    } else {
                        l.enabled = false;
                    }
                });
        }, 500);

        await super.setup(gl);
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack, camera) {
        this.mat.apply(this.modelDirection);
        super.draw(gl, stack, camera);
        this.mat.apply(this.modelDirection.inverse());
    }

    shadowDraw(/** @type {WebGLRenderingContext} */ gl, stack) {
        this.mat.apply(this.modelDirection);
        super.shadowDraw(gl, stack);
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
    Mat4.Identity().rotate(toRad(180), new Vec3(0, 1, 0)).translate(new Vec3(0, 0, 30)),
    Mat4.Identity().rotate(toRad(180), new Vec3(0, 1, 0))
);

export { car };