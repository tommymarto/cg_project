import App from "./app.js";

const getWebGlContext = () => {
    const canvas = document.getElementById("canvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
        throw new Error("WebGL not available");
    }

    gl.depth_ext = gl.getExtension('WEBGL_depth_texture');
    if (!gl.depth_ext) {
        throw new Error("need WEBGL_depth_texture");
    }

    // gl.frag_depth_ext = gl.getExtension('EXT_frag_depth');

    // if (!gl.frag_depth_ext) {
    //     throw new Error("need EXT_frag_depth");
    // }

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
            app.glViewport.width = maxWidth;
            app.glViewport.height = maxHeight;
        } else if (isFullscreen) {
            isFullscreen = false;
            canvas.classList.toggle("fullscreen");
            canvas.width = initialWidth;
            canvas.height = initialHeight;
            app.glViewport.width = initialWidth;
            app.glViewport.height = initialHeight;
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
            camerasDropdown.selectedIndex = (cameras.activeIndex + 1) % cameras.values.length;
            camerasDropdown.dispatchEvent(new Event("change"));
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
            skyboxDropdown.selectedIndex = (skyboxGroup.activeIndex + 1) % skyboxGroup.elements.length;
            skyboxDropdown.dispatchEvent(new Event("change"));
        }
    })
}

export function registerLightsOnOffHandler(lights) {
    const directionalDropdown = document.getElementById("directional-dropdown");
    const pointDropdown = document.getElementById("point-dropdown");
    const spotDropdown = document.getElementById("spot-dropdown");

    // directional lights
    lights.directional.values.forEach((l, i) => {
        const option = document.createElement("option");
        option.innerText = l.name;

        if (i == 0) {
            option.selected = true;
            lights.directional.activeIndex = i;
        }

        directionalDropdown.appendChild(option);
    });

    directionalDropdown.addEventListener("change", () => {
        lights.directional.activeIndex = directionalDropdown.selectedIndex;
    });

    // point lights
    pointDropdown.addEventListener("change", () => {
        lights.pointLight.values.forEach(l => {
            l.enabled = pointDropdown.selectedIndex == 0;
        });
    });

    // spot lights
    spotDropdown.addEventListener("change", () => {
        lights.spotLight.values.forEach(l => {
            l.enabled = spotDropdown.selectedIndex == 0;
        });
    });


    // add key listeners for all lights
    document.addEventListener("keydown", (e) => {
        if (e.key === "b") {
            directionalDropdown.selectedIndex = (lights.directional.activeIndex + 1) % lights.directional.values.length;
            directionalDropdown.dispatchEvent(new Event("change"));
        }
        if (e.key === "n") {
            pointDropdown.selectedIndex = (pointDropdown.selectedIndex + 1) % 2;
            pointDropdown.dispatchEvent(new Event("change"));
        }
        if (e.key === "m") {
            spotDropdown.selectedIndex = (spotDropdown.selectedIndex + 1) % 2;
            spotDropdown.dispatchEvent(new Event("change"));
        }

        // toggle headlights
        if (e.key === "h") {
            lights.spotLight.values.filter(l => ["HeadlightLeft", "HeadLightRight"].includes(l.name))
                .forEach(l => {
                    l.enabled = !l.enabled
                });
        }
        // toggle car left directional lights
        if (e.key === "k") {
            lights.spotLight.values.filter(l => ["RearDirectionalLeft", "FrontDirectionalLeft"].includes(l.name))
                .forEach(l => {
                    l.on = !l.on
                });
        }
        // toggle car right directional lights
        if (e.key === "l") {
            lights.spotLight.values.filter(l => ["RearDirectionalRight", "FrontDirectionalRight"].includes(l.name))
                .forEach(l => {
                    l.on = !l.on
                });
        }
    })

}

export function registerNightMode(app) {
    let isNight = false;
    const nightButton = document.getElementById("night-button");
    const skyboxDropdown = document.getElementById("skybox-dropdown");

    nightButton.addEventListener("click", () => {
        if (!isNight) {
            isNight = true;
            app.lights.directional.activeIndex = app.lights.directional.values.findIndex(light => light.name === "Night");
            app.lights.spotLight.values.filter(l => ["HeadlightLeft", "HeadLightRight"].includes(l.name))
                .forEach(l => {
                    l.enabled = true;
                });
            app.lights.pointLight.values.filter(l => ["LampPost"].includes(l.name))
                .forEach(l => {
                    l.enabled = true;
                });
            skyboxDropdown.selectedIndex = app.skyboxes.elements.findIndex(s => s.name === "Night");
            skyboxDropdown.dispatchEvent(new Event("change"));

            nightButton.children[0].innerHTML = "wb_sunny";
        } else {
            isNight = false;
            app.lights.directional.activeIndex = app.lights.directional.values.findIndex(light => light.name === "Day");
            app.lights.spotLight.values.filter(l => ["HeadlightLeft", "HeadLightRight"].includes(l.name))
                .forEach(l => {
                    l.enabled = false;
                });
            app.lights.pointLight.values.filter(l => ["LampPost"].includes(l.name))
                .forEach(l => {
                    l.enabled = false;
                });
            skyboxDropdown.selectedIndex = app.skyboxes.elements.findIndex(s => s.name === "Day");
            skyboxDropdown.dispatchEvent(new Event("change"));

            nightButton.children[0].innerHTML = "brightness_3";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "x") {
            nightButton.dispatchEvent(new Event("click"));
        }
    });
}