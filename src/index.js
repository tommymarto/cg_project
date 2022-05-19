import App from "./app.js";

const getWebGlContext = () => {
    const canvas = document.getElementById("canvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
        throw new Error("WebGL not available");
    }
    return gl;
}

import logger from "./logger.js";
logger.debug = true;

window.onload = () => {
    try {
        const gl = getWebGlContext()
        const app = new App(gl)

        registerClickHandlers(app);
        registerWindowResizeHandler(app);

        app.run()
    } catch (error) {
        logger.error(error)
        console.error(error)
    }
}

function registerClickHandlers(app) {
    const runButton = document.getElementById("run-button");
    runButton.addEventListener("click", () => {
        app.isRunning = !app.isRunning
        runButton.children[0].innerHTML = app.isRunning ? "pause" : "play_arrow";
    });
}

function registerWindowResizeHandler(app) {
    let isFullscreen = false;
    const canvas = document.getElementById("canvas");
    const initialWidth = 1024;
    const initialHeight = 576;

    function resizeCanvas(maxWidth, curWidth, maxHeight, curHeight) {
        if (maxWidth == curWidth && maxHeight == curHeight) {
            isFullscreen = true;
            canvas.classList.toggle("fullscreen");
            canvas.width = maxWidth;
            canvas.height = maxHeight;
            app.gl.viewport(0, 0, maxWidth, maxHeight);
        } else if (isFullscreen) {
            isFullscreen = false;
            canvas.classList.toggle("fullscreen");
            canvas.width = initialWidth;
            canvas.height = initialHeight;
            app.gl.viewport(0, 0, initialWidth, initialHeight);
        }
    }

    // initial resize
    canvas.width = initialWidth;
    canvas.height = initialHeight;
    app.gl.viewport(0, 0, initialWidth, initialHeight);
    resizeCanvas(
        window.screen.width,
        window.innerWidth,
        window.screen.height,
        window.innerHeight,
    );

    // add listener
    window.addEventListener("resize", (e) => {
        const maxHeight = window.screen.height;
        const maxWidth = window.screen.width;
        const curHeight = window.innerHeight;
        const curWidth = window.innerWidth;

        resizeCanvas(maxWidth, curWidth, maxHeight, curHeight);
    })
}

export function registerCamerasDropdown(cameras) {
    const camerasDropdown = document.getElementById("cameras-dropdown");
    cameras.values.forEach((camera, i) => {
        const option = document.createElement("option");
        option.innerText = camera.name;

        if (camera.name === "Chasing") {
            option.selected = true;
            cameras.activeIndex = i;
        }

        camerasDropdown.appendChild(option);
    });

    camerasDropdown.addEventListener("change", () => {
        cameras.activeIndex = camerasDropdown.selectedIndex;
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "c") {
            cameras.activeIndex = (cameras.activeIndex + 1) % cameras.values.length;
            camerasDropdown.selectedIndex = cameras.activeIndex;
        }
    })
}

export function registerSkyboxDropdown(skyboxGroup) {
    const skyboxDropdown = document.getElementById("skybox-dropdown");
    skyboxGroup.elements.forEach((skybox, i) => {
        const option = document.createElement("option");
        option.innerText = skybox.name;

        if (skybox.name === "day") {
            option.selected = true;
            skyboxGroup.activeIndex = i;
        }

        skyboxDropdown.appendChild(option);
    });

    skyboxDropdown.addEventListener("change", () => {
        skyboxGroup.activeIndex = skyboxDropdown.selectedIndex;
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "v") {
            skyboxGroup.activeIndex = (skyboxGroup.activeIndex + 1) % skyboxGroup.elements.length;
            skyboxDropdown.selectedIndex = skyboxGroup.activeIndex;
        }
    })
}

export function registerLightsOnOffHandler(lights) {
    // const skyboxDropdown = document.getElementById("skybox-dropdown");
    // app.cameras.forEach((camera, i) => {
    //     const option = document.createElement("option");
    //     option.innerText = camera.name;

    //     if (camera.name === "day") {
    //         option.selected = true;
    //         skyboxGroup.currentSkyboxIndex = i;
    //     }

    //     skyboxDropdown.appendChild(option);
    // });

    // skyboxDropdown.addEventListener("change", () => {
    //     skyboxGroup.currentSkyboxIndex = skyboxDropdown.selectedIndex;
    // });

    // document.addEventListener("keydown", (e) => {
    //     if (e.key === "n") {
    //         skyboxGroup.currentSkyboxIndex = (skyboxGroup.currentSkyboxIndex + 1) % skyboxGroup.cameras.length;
    //         skyboxDropdown.selectedIndex = skyboxGroup.currentSkyboxIndex;
    //     }
    // })
}

export function registerNightMode(app) {
    let isNight = false;
    const nightButton = document.getElementById("night-button");
    nightButton.addEventListener("click", () => {
        console.log("asdf")
        if (isNight) {
            isNight = false;
            // app.lights.ambient.activeIndex = app.lights.ambient.values.findIndex(light => light.name === "Night");
            nightButton.children[0].innerHTML = "wb_sunny";
        } else {
            isNight = true;
            // app.lights.ambient.activeIndex = app.lights.ambient.values.findIndex(light => light.name === "Day");
            nightButton.children[0].innerHTML = "brightness_3";
        }
    });
}