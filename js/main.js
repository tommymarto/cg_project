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

    document.addEventListener("keydown", (e) => {
        if (e.key === "c") {
            app.currentCameraIndex = (app.currentCameraIndex + 1) % app.cameras.length;
            camerasDropdown.selectedIndex = app.currentCameraIndex;
        }
    })
}