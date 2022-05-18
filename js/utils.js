import logger from "./logger.js";

export async function loadObj(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
        logger.e(`Failed to load obj: ${url}`);
        throw new Error("Failed to fetch obj");
    }

    const text = await response.text();
    const obj = parseObj(text);

    return obj;
}

function parseObj(/** @type {string} */text) {
    const objs = []
    let rawData = {
        vertices: [[0, 0, 0]],
        normals: [[0, 0, 0]],
        texCoords: [[0, 0]],
    };
    let obj = undefined;

    text.split("\n").forEach(line => {
        const [first, ...rest] = line.trim().split(" ");

        switch (first) {
            case "#": {
                // skip comments
                break;
            }
            case "o": {
                obj = {
                    name: rest.join("_"),
                    vertices: [],
                    normals: [],
                    texCoords: [],
                };
                objs.push(obj);
                break;
            }
            case "v": {
                rawData.vertices.push(rest.map(parseFloat));
                break;
            }
            case "vn": {
                // normal
                rawData.normals.push(rest.map(parseFloat));
                break;
            }
            case "vt": {
                // texture
                rawData.texCoords.push(rest.map(parseFloat));
                break;
            }
            case "f": {
                // face
                function addVertex(/** @type {string} */ vertex) {
                    const parts = vertex.split("/");

                    obj.vertices.push(...rawData.vertices[parseInt(parts[0])]);
                    obj.texCoords.push(...rawData.texCoords[parseInt(parts[1])]);
                    obj.normals.push(...rawData.normals[parseInt(parts[2])]);
                }

                const numTriangles = rest.length - 2;
                for (let i = 0; i < numTriangles; i++) {
                    addVertex(rest[0]);
                    addVertex(rest[i + 1]);
                    addVertex(rest[i + 2]);
                }
                break;
            }
            case "s":
            case "g":
            case "mtllib":
            case "usemtl":
            case "": {
                // ignore smoothing group, group and materials
                break;
            }
            default: {
                logger.w("Unhandled token: " + first, true);
                break;
            }
        }
    });

    console.log("Loaded objs:", objs);

    return objs;
}

export function loadTexture(/** @type {WebGLRenderingContext} */ gl, tex, source, options) {
    gl.bindTexture(options.textureKind, tex);
    gl.texImage2D(options.target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0xff, 0xff, 0xff, 0xff]));
    gl.bindTexture(options.textureKind, null);

    return new Promise((res, rej) => {
        if (typeof source == "string") {
            let image = new Image();
            image.onload = () => {
                gl.bindTexture(options.textureKind, tex);

                gl.texImage2D(options.target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

                gl.texParameteri(options.textureKind, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texParameteri(options.textureKind, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(options.textureKind, gl.TEXTURE_WRAP_S, options.textureWrap ?? gl.CLAMP_TO_EDGE);
                gl.texParameteri(options.textureKind, gl.TEXTURE_WRAP_T, options.textureWrap ?? gl.CLAMP_TO_EDGE);

                if (options.mipmap) {
                    gl.texParameteri(options.textureKind, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                    gl.generateMipmap(options.textureKind);
                }

                gl.bindTexture(options.textureKind, null);

                logger.d(`Texture: Loaded ${source}`);
                res();
            }
            image.onerror = () => {
                err("Error loading texture");
            }

            image.src = source;
        } else if (Array.isArray(source)) {
            gl.bindTexture(options.target, tex);
            gl.texImage2D(options.target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(source));
            gl.bindTexture(options.target, null);
            logger.d(`Texture: Loaded raw`);
            res();
        } else {
            rej("Invalid texture source");
        }
    })

}

export function zip(a, b) {
    return a.map((k, i) => ({ first: k, second: b[i] }));
}