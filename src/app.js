import { Mat4, MatrixStack, toRad, Vec3, Vec4 } from "webgl-basic-lib";
import logger from "./logger.js";
import { registerCamerasDropdown, registerSkyboxDropdown, registerLightsOnOffHandler, registerNightMode } from "./index.js";
import { objGroups, skyboxesGroup } from "./objs/index.js";

const fpsDiv = document.getElementById('fps-counter');

export default class App {
    stack = new MatrixStack();
    cameras = {
        values: [{
            // name: "Stationary",
            // matrix: () => Mat4.LookAt(new Vec3(0, 3, -3), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
            name: "Stationary",
            matrix: () => Mat4.LookAt(new Vec3(40, 14, 50), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
        }, {
            name: "Behind the cones",
            matrix: () => Mat4.LookAt(new Vec3(0, 1, -100), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
        }],
        activeIndex: 0,
    }
    lights = {
        directional: {
            values: [{
                name: "Day",
                direction: new Vec3(1, -1, 1),
                color: new Vec3(1, 1, 1),
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.1,
            },
            {
                name: "Night",
                direction: new Vec3(0, -1, 0),
                color: new Vec3(1, 1, 1),
                ambient: 0.1,
                diffuse: 0.8,
                specular: 0.8,
            }],
            activeIndex: 0,
        },
        pointLight: {
            values: [],
        },
        spotLight: {
            values: [],
        }
    }


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
                    this.cameras.values.push(...el.cameras);
                }
            }
        }
        for (const skybox of skyboxesGroup.elements) {
            await skybox.setup(this.gl);
        }

        registerCamerasDropdown(this.cameras);
        registerSkyboxDropdown(skyboxesGroup);
        registerLightsOnOffHandler(this.lights);
        registerNightMode(this)

        const mainLoop = async () => {
            if (this.isRunning) {
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
                    await this.#draw(now - last);

                    window.requestAnimationFrame(mainLoop);
                } catch (err) {
                    console.error(err);
                    logger.error(err);
                    throw err;
                }
            } else {
                times.length = 0;
                window.requestAnimationFrame(mainLoop);
            }
        };

        window.requestAnimationFrame(mainLoop);

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
        const camera = this.cameras.values[this.cameras.activeIndex].matrix();
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

        const actualLights = {
            directionalLight: this.lights.directional.values[this.lights.directional.activeIndex],
            pointLight: this.lights.pointLight.values.map(l => l.enabled ? l : {}),
            spotLight: this.lights.spotLight.values.map(l => l.enabled ? l : {}),
        }


        for (const obj of objGroups) {
            await obj.setupDraw(this.gl, actualLights);
            // console.log(camera);
            obj.elements.forEach(el => el.draw(this.gl, this.stack, camera));
            obj.teardownDraw(this.gl);
        };
        this.gl.disable(this.gl.DEPTH_TEST);

        // for(const light of this.lights.pointLight.values) {
        //     this.gl.drawElements
        // }

        // pop camera and perspective
        this.stack.pop();
        this.stack.pop();
    }
}