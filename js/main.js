import App from "./app.js";

const getWebGlContext = () => {
    const canvas = document.getElementById("canvas");
    const gl = canvas?.getContext("webgl");
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
        app.run()
    } catch (error) {
        logger.e(error)
        console.error(error)
    }
}