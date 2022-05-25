import { Mat4, MatrixStack, toRad, Vec2, Vec3, Vec4 } from "webgl-basic-lib";
import logger from "./logger.js";
import { registerCamerasDropdown, registerSkyboxDropdown, registerLightsOnOffHandler, registerNightMode } from "./index.js";
import { objGroups, skyboxesGroup, groundGroup } from "./objs/index.js";
import { Point } from "./objs/point.js";
import { keyboard } from "./keyboard.js";
import { Orthogonal } from "./mat4extension.js";
import { DebugTexture } from "./debugShader.js";

const fpsDiv = document.getElementById('fps-counter');


const pointLightOff = {
    name: "PointLightOff",
    enabled: true,
    position: () => new Vec3(0, 0, 0, 0),
    color: new Vec3(1, 1, 1),
    linear: 0.09,
    quadratic: 0.032,
    ambient: 0,
    diffuse: 0,
    specular: 0,
}
const spotLightOff = {
    name: "SpotLightOff",
    enabled: true,
    position: () => new Vec3(0, 0, 0),
    direction: () => new Vec3(0, 1, 0),
    color: new Vec3(1, 1, 1),
    cutOff: toRad(12),
    outerCutOff: toRad(15),
    linear: 0.09,
    quadratic: 0.032,
    ambient: 0,
    diffuse: 0,
    specular: 0,
}

export default class App {
    stack = new MatrixStack();
    cameras = {
        values: [{
            // name: "Stationary",
            // matrix: () => Mat4.LookAt(new Vec3(0, 3, -3), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
            name: "Stationary",
            matrix: () => Mat4.LookAt(new Vec3(40, 14, 50), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
        }, {
            name: "Side",
            matrix: () => Mat4.LookAt(new Vec3(-30, 1, 0), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
        }],
        activeIndex: 0,
    }
    lights = {
        directional: {
            values: [{
                name: "Day",
                direction: new Vec3(1, -1.5, 1).normalize(),
                color: new Vec3(1, 1, 1),
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.1,
            }, {
                name: "Sunset",
                direction: new Vec3(1, -0.5, 1).normalize(),
                color: new Vec3(1, 0.8, 0.8),
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.1,
            }, {
                name: "Night",
                direction: new Vec3(1, -1, 1).normalize(),
                color: new Vec3(1, 1, 1),
                ambient: 0.005,
                diffuse: 0.005,
                specular: 0.005,
            }, {
                name: "No Light",
                direction: new Vec3(1, -1, 1).normalize(),
                color: new Vec3(1, 1, 1),
                ambient: 0,
                diffuse: 0,
                specular: 0,
            }],
            activeIndex: 0,
        },
        pointLight: {
            values: [
                pointLightOff,
            ],
        },
        spotLight: {
            values: [],
        }
    }
    skyboxes = skyboxesGroup;

    glViewport = {
        width: 1024,
        height: 576
    }


    constructor(gl) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        this.drawPoint = new Point();
        this.drawPoint.setup(gl);

        this.shadowFrameBuffer = {
            buffer: this.gl.createFramebuffer(),
            depthTexture: this.gl.createTexture(),
            unusedColorTexture: this.gl.createTexture(),
            width: 4096,
            height: 4096,
        };

        this.gl.bindTexture(this.gl.TEXTURE_2D, this.shadowFrameBuffer.depthTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.DEPTH_COMPONENT, this.shadowFrameBuffer.width, this.shadowFrameBuffer.height, 0, this.gl.DEPTH_COMPONENT, this.gl.UNSIGNED_INT, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        // for webgl1 compatibility reason, a color texture must also be attached to the framebuffer
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.shadowFrameBuffer.unusedColorTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.shadowFrameBuffer.width, this.shadowFrameBuffer.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

        // attach it to the framebuffer
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.shadowFrameBuffer.buffer);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.shadowFrameBuffer.depthTexture, 0);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.shadowFrameBuffer.unusedColorTexture, 0);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    async run() {
        this.isRunning = true;
        const times = [];

        for (const obj of objGroups) {
            for (const el of obj.elements) {
                console.log(el)
                el.setup(this.gl)
                if (el.cameras) {
                    this.cameras.values.push(...el.cameras);
                }
                if (el.lights?.directional) {
                    this.lights.directional.values.push(...el.lights.directional);
                }
                if (el.lights?.pointLight) {
                    this.lights.pointLight.values.push(...el.lights.pointLight);
                }
                if (el.lights?.spotLight) {
                    this.lights.spotLight.values.push(...el.lights.spotLight);
                }
            }
        }
        for (const ground of groundGroup.elements) {
            ground.setup(this.gl);
        }
        for (const skybox of this.skyboxes.elements) {
            skybox.setup(this.gl);
        }

        registerCamerasDropdown(this.cameras);
        registerSkyboxDropdown(this.skyboxes);
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

                    // update objs and draw
                    const dt = now - last;
                    objGroups.forEach(objs => objs.elements.forEach(obj => obj.update(dt)));
                    await this.#draw();

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

    async #draw() {
        // shadow mapping
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.shadowFrameBuffer.buffer);
        this.gl.viewport(0, 0, this.shadowFrameBuffer.width, this.shadowFrameBuffer.height);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.FRONT);

        // config to view all map from directional light in all conditions (day, sunset and night)
        const orthogonal = Orthogonal(-58, 58, -58, 58, 0.1, 100)
        this.stack.push(orthogonal);

        // directional light view matrix
        const lightPosition = this.lights.directional.values[this.lights.directional.activeIndex].direction.clone().mul(-50);
        const lightView = Mat4.LookAt(lightPosition, new Vec3(0, 0, 0), new Vec3(0, 1, 0));
        const lightViewProj = this.stack.push(lightView);

        this.gl.enable(this.gl.DEPTH_TEST);

        // actual draw shadow map
        for (const obj of objGroups) {
            await obj.setupShadowDraw(this.gl);
            obj.elements.forEach(el => el.shadowDraw(this.gl, this.stack));
            obj.teardownDraw(this.gl);
        };

        this.gl.disable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.FRONT);

        await groundGroup.setupShadowDraw(this.gl);
        groundGroup.elements.forEach(el => el.shadowDraw(this.gl, this.stack));
        groundGroup.teardownDraw(this.gl);

        this.gl.disable(this.gl.DEPTH_TEST);

        // re-bind the default framebuffer and clear screen
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.viewport(0, 0, this.glViewport.width, this.glViewport.height);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.disable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.BACK);

        // clean stack
        this.stack.pop();
        this.stack.pop();

        // const debugTexture = new DebugTexture();
        // debugTexture.setup(this.gl);
        // await DebugTexture.setupDraw(this.gl);
        // debugTexture.draw(this.gl, this.shadowFrameBuffer.depthTexture);
        // return;

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
        await this.skyboxes.setupDraw(this.gl);
        this.skyboxes.elements[this.skyboxes.activeIndex].draw(this.gl, this.stack);
        this.skyboxes.teardownDraw(this.gl);
        this.stack.pop();

        // draw objects
        this.stack.push(camera);
        this.gl.enable(this.gl.DEPTH_TEST);

        const actualLights = {
            directionalLight: this.lights.directional.values[this.lights.directional.activeIndex],
            pointLight: this.lights.pointLight.values.map(l => l.enabled ? l : pointLightOff).map(l => ({ ...l, position: l.position() })),
            spotLight: this.lights.spotLight.values.map(l => l.enabled ? l : spotLightOff).map(l => ({ ...l, position: l.position(), direction: l.direction() })),
        }

        const shadowMap = {
            texture: this.shadowFrameBuffer.depthTexture,
            size: new Vec2(this.shadowFrameBuffer.width, this.shadowFrameBuffer.height),
        }

        for (const obj of objGroups) {
            await obj.setupDraw(this.gl, actualLights, lightViewProj, shadowMap);
            obj.elements.forEach(el => el.draw(this.gl, this.stack, camera));
            obj.teardownDraw(this.gl);
        };
        await groundGroup.setupDraw(this.gl, actualLights, lightViewProj, shadowMap);
        groundGroup.elements.forEach(el => el.draw(this.gl, this.stack, camera));
        groundGroup.teardownDraw(this.gl);

        this.gl.disable(this.gl.DEPTH_TEST);

        if (keyboard.isPressed('p')) {
            const points = this.lights.pointLight.values.map(l => l.position().values)
                .concat(this.lights.spotLight.values.map(l => l.position().values))
                .flatMap(p => [...p]);

            await Point.setupDraw(this.gl);
            this.drawPoint.draw(this.gl, this.stack, points);
            Point.teardownDraw(this.gl);
        }
        if (keyboard.isPressed('o')) {
            const points = this.cameras.values.map(c => c.matrix().clone().inverse().col(3).toVec3().values)
                .flatMap(p => [...p]);

            await Point.setupDraw(this.gl);
            this.drawPoint.draw(this.gl, this.stack, points);
            Point.teardownDraw(this.gl);
        }

        // pop camera and perspective
        this.stack.pop();
        this.stack.pop();
    }
}