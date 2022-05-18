import { Mat4, MatrixStack, toRad, Vec3, Vec4 } from "https://cdn.jsdelivr.net/npm/webgl-basic-lib@latest/lib/all.min.js";
import logger from "./logger.js";
import { registerCamerasDropdown } from "./main.js";
import { objGroups, skyboxesGroup } from "./objs/index.js";

const fpsDiv = document.getElementById('fps-counter');

export default class App {
    stack = new MatrixStack();
    cameras = [{
        name: "Stationary",
        matrix: () => Mat4.LookAt(new Vec3(40, 14, 50), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
    }, {
        name: "Behind the cones",
        matrix: () => Mat4.LookAt(new Vec3(0, 1, -100), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
    }];
    currentCameraIndex = 0;


    constructor(gl) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
    }

    async run() {
        this.isRunning = true;
        const times = [];

        for (const obj of objGroups) {
            for (const el of obj.elements) {
                console.log(obj)
                await el.setup(this.gl)
                if (el.cameras) {
                    this.cameras.push(...el.cameras);
                }
            }
        }
        for (const skybox of skyboxesGroup.elements) {
            await skybox.setup(this.gl);
        }

        registerCamerasDropdown(this);

        const drawInterval = setInterval(() => {
            // const drawInterval = setTimeout(() => {
            if (this.isRunning) {
                window.requestAnimationFrame(() => {
                    const now = performance.now();
                    while (times.length > 0 && times[0] <= now - 1000) {
                        times.shift();
                    }
                    times.push(now);

                    try {
                        let last = performance.now();
                        if (times.length > 2) {
                            last = times[times.length - 2]
                        }
                        this.#draw(now - last);
                    } catch (err) {
                        console.error(err);
                        logger.error(err);
                        clearInterval(drawInterval);
                    }
                });
            } else {
                times.length = 0;
            }
        }, 1000 / 60.)

        setInterval(() => {
            fpsDiv.innerText = `FPS: ${times.length}`;
        }, 250);
    }

    async #draw(dt) {
        objGroups.forEach(objs => objs.elements.forEach(obj => obj.update(dt)));

        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // create perspective matrix
        const perspective = Mat4.Perspective(toRad(45), 16 / 9, 0.1, 1000);
        this.stack.push(perspective);

        // create camera matrix
        const camera = this.cameras[this.currentCameraIndex].matrix();
        const cameraWithoutTranslation = Mat4.FromArrayRM([
            ...camera.row(0).toVec3().toVec4(0).values,
            ...camera.row(1).toVec3().toVec4(0).values,
            ...camera.row(2).toVec3().toVec4(0).values,
            ...new Vec4(0, 0, 0, 1).values,
        ]);


        // draw skybox
        this.stack.push(cameraWithoutTranslation);
        await skyboxesGroup.setupDraw(this.gl);
        skyboxesGroup.elements[skyboxesGroup.activeIndex].draw(this.gl, this.stack);
        skyboxesGroup.teardownDraw(this.gl);
        this.stack.pop();

        // draw objects
        this.stack.push(camera);
        this.gl.enable(this.gl.DEPTH_TEST);
        for (const obj of objGroups) {
            await obj.setupDraw(this.gl);
            obj.elements.forEach(el => el.draw(this.gl, this.stack));
            obj.teardownDraw(this.gl);
        };
        this.gl.disable(this.gl.DEPTH_TEST);

        // pop camera and perspective
        this.stack.pop();
        this.stack.pop();
    }
}