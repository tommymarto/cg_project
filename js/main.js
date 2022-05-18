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

export function registerCamerasDropdown(app) {
    const camerasDropdown = document.getElementById("cameras-dropdown");
    app.cameras.forEach((camera, i) => {
        const option = document.createElement("option");
        option.innerText = camera.name;

        if (camera.name === "Chasing") {
            option.selected = true;
            app.currentCameraIndex = i;
        }

        camerasDropdown.appendChild(option);
    });

    camerasDropdown.addEventListener("change", () => {
        app.currentCameraIndex = camerasDropdown.selectedIndex;
    });
}

export function registerSkyboxesDropdown(app, skyboxesGroup) {

}