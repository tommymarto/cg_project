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
            case "usemtl": {
                // ignore smoothing group, group and materials
                break;
            }
            default: {
                logger.w("Unhandled token: " + first, true);
                break;
            }
        }
    });

    console.log(objs);

    return objs;
}