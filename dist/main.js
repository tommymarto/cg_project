/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webgl-basic-lib/lib/all.js":
/*!*************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/all.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicShape": () => (/* reexport safe */ _geometry_types_js__WEBPACK_IMPORTED_MODULE_16__.BasicShape),
/* harmony export */   "Camera": () => (/* reexport safe */ _extra_camera_js__WEBPACK_IMPORTED_MODULE_2__.Camera),
/* harmony export */   "Colors": () => (/* reexport safe */ _extra_colors_js__WEBPACK_IMPORTED_MODULE_1__.Colors),
/* harmony export */   "Cube": () => (/* reexport safe */ _geometry_cube_js__WEBPACK_IMPORTED_MODULE_17__.Cube),
/* harmony export */   "Cylinder": () => (/* reexport safe */ _geometry_cylinder_js__WEBPACK_IMPORTED_MODULE_18__.Cylinder),
/* harmony export */   "Debug": () => (/* reexport safe */ _extra_debug_js__WEBPACK_IMPORTED_MODULE_0__.Debug),
/* harmony export */   "DebugShape": () => (/* reexport safe */ _geometry_types_js__WEBPACK_IMPORTED_MODULE_16__.DebugShape),
/* harmony export */   "Generable": () => (/* reexport safe */ _geometry_types_js__WEBPACK_IMPORTED_MODULE_16__.Generable),
/* harmony export */   "Icosahedron": () => (/* reexport safe */ _geometry_icosahedron_js__WEBPACK_IMPORTED_MODULE_20__.Icosahedron),
/* harmony export */   "KeyboardHandler": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardHandler),
/* harmony export */   "LinesFromTriangles": () => (/* reexport safe */ _geometry_utils_js__WEBPACK_IMPORTED_MODULE_15__.LinesFromTriangles),
/* harmony export */   "Mat2": () => (/* reexport safe */ _math_mat2_js__WEBPACK_IMPORTED_MODULE_12__.Mat2),
/* harmony export */   "Mat3": () => (/* reexport safe */ _math_mat3_js__WEBPACK_IMPORTED_MODULE_13__.Mat3),
/* harmony export */   "Mat4": () => (/* reexport safe */ _math_mat4_js__WEBPACK_IMPORTED_MODULE_14__.Mat4),
/* harmony export */   "MatrixStack": () => (/* reexport safe */ _extra_stack_js__WEBPACK_IMPORTED_MODULE_3__.MatrixStack),
/* harmony export */   "MouseHandler": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.MouseHandler),
/* harmony export */   "Program": () => (/* reexport safe */ _webgl_program_js__WEBPACK_IMPORTED_MODULE_5__.Program),
/* harmony export */   "ResizeHandler": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.ResizeHandler),
/* harmony export */   "RetrieveWebGLContext": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.RetrieveWebGLContext),
/* harmony export */   "SetKeyboardHandler": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.SetKeyboardHandler),
/* harmony export */   "SetMouseHandler": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.SetMouseHandler),
/* harmony export */   "SetResizeHandler": () => (/* reexport safe */ _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__.SetResizeHandler),
/* harmony export */   "Shader": () => (/* reexport safe */ _webgl_shader_js__WEBPACK_IMPORTED_MODULE_6__.Shader),
/* harmony export */   "Shape": () => (/* reexport safe */ _geometry_types_js__WEBPACK_IMPORTED_MODULE_16__.Shape),
/* harmony export */   "Sphere": () => (/* reexport safe */ _geometry_sphere_js__WEBPACK_IMPORTED_MODULE_19__.Sphere),
/* harmony export */   "Texture": () => (/* reexport safe */ _webgl_texture_js__WEBPACK_IMPORTED_MODULE_7__.Texture),
/* harmony export */   "TexturedShape": () => (/* reexport safe */ _geometry_types_js__WEBPACK_IMPORTED_MODULE_16__.TexturedShape),
/* harmony export */   "Vec2": () => (/* reexport safe */ _math_vec2_js__WEBPACK_IMPORTED_MODULE_9__.Vec2),
/* harmony export */   "Vec3": () => (/* reexport safe */ _math_vec3_js__WEBPACK_IMPORTED_MODULE_10__.Vec3),
/* harmony export */   "Vec4": () => (/* reexport safe */ _math_vec4_js__WEBPACK_IMPORTED_MODULE_11__.Vec4),
/* harmony export */   "toDeg": () => (/* reexport safe */ _math_utils_js__WEBPACK_IMPORTED_MODULE_8__.toDeg),
/* harmony export */   "toRad": () => (/* reexport safe */ _math_utils_js__WEBPACK_IMPORTED_MODULE_8__.toRad)
/* harmony export */ });
/* harmony import */ var _extra_debug_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extra/debug.js */ "./node_modules/webgl-basic-lib/lib/extra/debug.js");
/* harmony import */ var _extra_colors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extra/colors.js */ "./node_modules/webgl-basic-lib/lib/extra/colors.js");
/* harmony import */ var _extra_camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extra/camera.js */ "./node_modules/webgl-basic-lib/lib/extra/camera.js");
/* harmony import */ var _extra_stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra/stack.js */ "./node_modules/webgl-basic-lib/lib/extra/stack.js");
/* harmony import */ var _webgl_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/utils.js */ "./node_modules/webgl-basic-lib/lib/webgl/utils.js");
/* harmony import */ var _webgl_program_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/program.js */ "./node_modules/webgl-basic-lib/lib/webgl/program.js");
/* harmony import */ var _webgl_shader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl/shader.js */ "./node_modules/webgl-basic-lib/lib/webgl/shader.js");
/* harmony import */ var _webgl_texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl/texture.js */ "./node_modules/webgl-basic-lib/lib/webgl/texture.js");
/* harmony import */ var _math_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math/utils.js */ "./node_modules/webgl-basic-lib/lib/math/utils.js");
/* harmony import */ var _math_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/vec2.js */ "./node_modules/webgl-basic-lib/lib/math/vec2.js");
/* harmony import */ var _math_vec3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math/vec3.js */ "./node_modules/webgl-basic-lib/lib/math/vec3.js");
/* harmony import */ var _math_vec4_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./math/vec4.js */ "./node_modules/webgl-basic-lib/lib/math/vec4.js");
/* harmony import */ var _math_mat2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math/mat2.js */ "./node_modules/webgl-basic-lib/lib/math/mat2.js");
/* harmony import */ var _math_mat3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./math/mat3.js */ "./node_modules/webgl-basic-lib/lib/math/mat3.js");
/* harmony import */ var _math_mat4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./math/mat4.js */ "./node_modules/webgl-basic-lib/lib/math/mat4.js");
/* harmony import */ var _geometry_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./geometry/utils.js */ "./node_modules/webgl-basic-lib/lib/geometry/utils.js");
/* harmony import */ var _geometry_types_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./geometry/types.js */ "./node_modules/webgl-basic-lib/lib/geometry/types.js");
/* harmony import */ var _geometry_cube_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./geometry/cube.js */ "./node_modules/webgl-basic-lib/lib/geometry/cube.js");
/* harmony import */ var _geometry_cylinder_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./geometry/cylinder.js */ "./node_modules/webgl-basic-lib/lib/geometry/cylinder.js");
/* harmony import */ var _geometry_sphere_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./geometry/sphere.js */ "./node_modules/webgl-basic-lib/lib/geometry/sphere.js");
/* harmony import */ var _geometry_icosahedron_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./geometry/icosahedron.js */ "./node_modules/webgl-basic-lib/lib/geometry/icosahedron.js");
/** @author: Davide Risaliti davdag24@gmail.com */



























/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/extra/camera.js":
/*!**********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/extra/camera.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



/**
 * @class The Camera class for common 3D scenes.
 */
class Camera {
  #dirty=null;
  #mat=null;

  #fovy=null;
  #ratioWH=null;
  #near=null;
  #far=null;

  #pos=null;
  #dir=null;
  #up=null;

  /**
   * Constructor.
   * 
   * @param {number} fovy the FOV (on the y-axis) of the view frustom
   * @param {number} ratioWH the ratio (w / h) of the screen
   * @param {number} near the distance of the near plane
   * @param {number} far the distance of the far plane
   * @param {Vec3} pos the starting pos of the camera
   * @param {Vec3} dir the direction of the camera (relative to its position)
   * @param {Vec3} up the up vector of the camera
   */
  constructor(fovy, ratioWH, near, far, pos, dir, up) {
    this.#dirty = true;
    this.#mat = _all_js__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity();
    this.#fovy = fovy;
    this.#ratioWH = ratioWH;
    this.#near = near;
    this.#far = far;
    this.#pos = pos;
    this.#dir = dir;
    this.#up = up;
  }
  
  /**
   * Getter to retrieve the Perspective Matrix of the camera
   * 
   * @returns {Mat4} the Perspective matrix.
   */
  get perspectiveMat() {
    return _all_js__WEBPACK_IMPORTED_MODULE_0__.Mat4.Perspective(
      (0,_all_js__WEBPACK_IMPORTED_MODULE_0__.toRad)(this.#fovy),
      this.#ratioWH,
      this.#near,
      this.#far
    );
  }

  /**
   * Getter to retrieve the LookAt Matrix of the camera
   * 
   * @returns {Mat4} the LookAt matrix.
   */
  get lookatMat() {
    return _all_js__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(
      this.#pos,
      this.#pos.clone().add(this.#dir),
      this.#up
    );
  }

  /**
   * Getter to retrieve the current matrix of the camera
   * 
   * @returns {Mat4} the combined Perspective-LookAt matrix.
   */
  get mat() {
    this.update();
    return this.#mat;
  }

  /**
   * Getter to retrieve the current position of the camera
   * 
   * @returns {Vec3} the camera position.
   */
  get position() {
    return this.#pos;
  }

  /**
   * Getter to retrieve the current direction of the camera
   * 
   * @returns {Vec3} the camera direction.
   */
  get direction() {
    return this.#dir;
  }

  /**
   * Setter to update the ratio (w / h) of the frustum
   * 
   * @param {number} value the new ratio
   */
  set ratio(value) {
    this.#ratioWH = value;
    this.#dirty = true;
  }

  /**
   * Method to check if the camera is dirty
   * 
   * @returns {boolean} the dirty flag
   */
  isDirty() {
    return this.#dirty;
  }

  /**
   * Method to update the camera
   */
  update() {
    // Check if the matrix needs to be updated.
    if (this.#dirty) {
      this.#dirty = false;
      // Recreate matrix.
      this.#mat = _all_js__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()
          .apply(this.perspectiveMat)
          .apply(this.lookatMat);
    }
  }

  /**
   * Method to update camera position.
   * 
   * @param {Vec3} delta the offset
   */
  movePos(delta) {
    this.#dirty = true;
    this.#pos.add(delta);
  }

  /**
   * Method to update camera direction.
   * 
   * @param {Vec3} delta the offset
   */
  moveDir(delta) {
    this.#dirty = true;
    this.#dir.add(delta);
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/extra/colors.js":
/*!**********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/extra/colors.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colors": () => (/* binding */ Colors)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



/**
 * @class Colors wrapping color utilities
 */
class Colors {

  /**
   * Built-ins
   */
  static get Red()    { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(1.0, 0.0, 0.0); }
  static get Green()  { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0.0, 1.0, 0.0); }
  static get Blue()   { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0.0, 0.0, 1.0); }
  static get White()  { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(1.0, 1.0, 1.0); }
  static get Gray()   { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0.5, 0.5, 0.5); }
  static get Black()  { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0.0, 0.0, 0.0); }
  static get Cyan()   { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0.0, 1.0, 1.0); }
  static get Pink()   { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(1.0, 0.0, 1.0); }
  static get Yellow() { return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(1.0, 1.0, 0.0); }

  /**
   * Generate a random color
   * 
   * @returns {Vec3} the generated color
   */
  static Random() {
    return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(Math.random(), Math.random(), Math.random());
  }
  
  /**
   * Convert from RGB to HSV.
   *
   * RGB values in range [0.0, 1.0]
   * HSV values in range [0.0, 1.0]
   *
   * @param {Vec3} col the RGB input color
   * 
   * @return {Vec3} the HSV equivalent
   */
  static RgbToHsv(col) {
    // Unpack
    const [r, g, b] = [col.r, col.g, col.b];

    // Calc cmin, cmax and delta
    const cmax = Math.max(r, g, b)
    const cmin = Math.min(r, g, b);
    const delta = cmax - cmin;
    
    // Calc HSV components
    const v = cmax;
    const s = (cmax === 0) ? 0 : (delta / cmax);
    var h = 0;
    if (delta !== 0) {
      if (cmax === r) {
        h = ((g - b) / delta) % 6;
      }
      else if (cmax === g) {
        h = ((b - r) / delta) + 2;
      }
      else {
        h = ((r - g) / delta) + 4;
      }
      h *= (1.0 / 6.0);
      if (h < 0.0) h += 1.0;
    }
    
    // Result
    return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(h, s, v);
  }

  /**
   * Convert from HSV to RGB.
   *
   * RGB values in range [0.0, 1.0]
   * HSV values in range [0.0, 1.0]
   *
   * @param {Vec3} col the HSV input color
   * 
   * @return {Vec3} the RGB equivalent
   */
  static HsvToRgb(col) {
    // Unpack
    const [h, s, v] = [col.h * 360, col.s, col.v];

    // Calc c, x and m
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    
    // Calc RGB components
    const [r, g, b] = (
      (h <  60) ? [c, x, 0] :
      (h < 120) ? [x, c, 0] :
      (h < 180) ? [0, c, x] :
      (h < 240) ? [0, x, c] :
      (h < 300) ? [x, 0, c] :
      [c, 0, x]
    );
    
    // Result
    return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(r + m, g + m, b + m);
  }

  /**
   * Convert from Hex String to RGB.
   * The input string can contains the "#" character at the begin.
   *
   * RGB values in range [0.0, 1.0]
   *
   * @param {string} hex the Hexadecimal String input color
   * 
   * @return {Vec3} the RGB equivalent
   */
  static HexToRgb(hex) {
    // Remove # at the begin (if exists)
    hex = hex.substring(hex.indexOf("#") + 1);
  
    // Ensure hex string is of size 6
    if (hex.length != 6) throw new Error("Unsupported format");
  
    // Parse value
    const bigint = parseInt(hex, 16);
  
    // Extract components
    const r = (bigint >> 16) & 0xFF;
    const g = (bigint >>  8) & 0xFF;
    const b = (bigint >>  0) & 0xFF;

    // Return result
    return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(r, g, b).div(255);
  }

  /**
   * Convert from Hex String to RGBA.
   * The input string can contains the "#" character at the begin.
   *
   * RGBA values in range [0.0, 1.0]
   *
   * @param {string} hex the Hexadecimal String input color
   * 
   * @return {Vec4} the RGBA equivalent
   */
  static HexToRgba(hex) {
    // Remove # at the begin (if exists)
    hex = hex.substring(hex.indexOf("#") + 1);
  
    // Ensure hex string is of size 8
    if (hex.length != 8) throw new Error("Unsupported format");
  
    // Parse value
    const bigint = parseInt(hex, 16);
  
    // Extract components
    const r = (bigint >> 24) & 0xFF;
    const g = (bigint >> 16) & 0xFF;
    const b = (bigint >>  8) & 0xFF;
    const a = (bigint >>  0) & 0xFF;

    // Return result
    return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec4(r, g, b, a).div(255);
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/extra/debug.js":
/*!*********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/extra/debug.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Debug": () => (/* binding */ Debug)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



const POINTS_VERT_SHADER =
`
attribute vec4 aPosition;
uniform mat4 uMatrix;
uniform float uPointSize;
void main(void) {
  gl_Position = uMatrix * aPosition;
  gl_PointSize = uPointSize;
}
`;

const POINTS_FRAG_SHADER =
`
precision highp float;
uniform vec4 uPointColor;
void main(void) {
  gl_FragColor = uPointColor;
}
`;

const LINES_VERT_SHADER =
`
attribute vec4 aPosition;
uniform mat4 uMatrix;
void main(void) {
  gl_Position = uMatrix * aPosition;
}
`;

const LINES_FRAG_SHADER =
`
precision highp float;
uniform vec4 uLineColor;
void main(void) {
  gl_FragColor = uLineColor;
}
`;

/**
 * @class Debug wrapping some utilities to debug.
 */
class Debug {
  static #gl;
  static #arrayBuffer;
  static #indexBuffer;
  static #pointsProgram;
  static #linesProgram;
  
  /**
   * Initialize the Debug data.
   *
   * @param {WebGLRenderingContext} gl the webgl context
   */
  static Initialize(gl) {
    Debug.#gl = gl;

    // Create buffers
    Debug.#arrayBuffer = gl.createBuffer();
    Debug.#indexBuffer = gl.createBuffer();

    // Debug programs: Points
    Debug.#pointsProgram = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Program(gl);
    Debug.#pointsProgram.attachShader(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Shader(gl, gl.VERTEX_SHADER, POINTS_VERT_SHADER));
    Debug.#pointsProgram.attachShader(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Shader(gl, gl.FRAGMENT_SHADER, POINTS_FRAG_SHADER));
    Debug.#pointsProgram.attributes([[0, "aPosition"]]);
    Debug.#pointsProgram.link();
    Debug.#pointsProgram.declareUniforms([
      ["uMatrix", "Matrix4fv"],
      ["uPointSize", "1f"],
      ["uPointColor", "4fv"]
    ]);
    
    // Debug programs: Lines
    Debug.#linesProgram = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Program(gl);
    Debug.#linesProgram.attachShader(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Shader(gl, gl.VERTEX_SHADER, LINES_VERT_SHADER));
    Debug.#linesProgram.attachShader(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Shader(gl, gl.FRAGMENT_SHADER, LINES_FRAG_SHADER));
    Debug.#linesProgram.attributes([[0, "aPosition"]]);
    Debug.#linesProgram.link();
    Debug.#linesProgram.declareUniforms([
      ["uMatrix", "Matrix4fv"],
      ["uLineColor", "4fv"]
    ]);
  }

  /**
   * Draw points with size and color.
   *
   * @param {Float32Array} vertexes the vertexes data
   * @param {number} vertexSize the size of a vertex
   * @param {Mat4} mat the transformation data
   * @param {number} numPoints the points count
   * @param {Vec4} color the color to use when drawing points
   * @param {number} size the size of a point
   */
  static drawPoints(vertexes, vertexSize, mat, numPoints, color, size) {
    // Buffers setup
    Debug.#gl.bindBuffer(Debug.#gl.ARRAY_BUFFER, Debug.#arrayBuffer);
    Debug.#gl.bufferData(Debug.#gl.ARRAY_BUFFER, vertexes, Debug.#gl.DYNAMIC_DRAW);
    Debug.#gl.enableVertexAttribArray(0);
    Debug.#gl.vertexAttribPointer(0, 3, Debug.#gl.FLOAT, false, 4 * vertexSize,  0);
    
    // Program setup
    Debug.#pointsProgram.use();
    Debug.#pointsProgram.uMatrix.update(mat.values);
    Debug.#pointsProgram.uPointColor.update(color.values);
    Debug.#pointsProgram.uPointSize.update(size);

    // Draw
    Debug.#gl.drawArrays(Debug.#gl.POINTS, 0, numPoints);
    
    // End draw
    Debug.#gl.disableVertexAttribArray(0);
    _all_js__WEBPACK_IMPORTED_MODULE_0__.Program.unbind(Debug.#gl);
    Debug.#gl.bindBuffer(Debug.#gl.ARRAY_BUFFER, null);
  }

  /**
   * Draw lines with size and color.
   *
   * @param {Float32Array} vertexes the vertexes data
   * @param {Uint16Array} indices the elements data
   * @param {number} vertexSize the size of a vertex
   * @param {Mat4} mat the transformation data
   * @param {number} numLines the lines count
   * @param {Vec4} color the color to use when drawing lines
   */
  static drawLines(vertexes, indices, vertexSize, mat, numLines, color) {
    // Buffers setup
    Debug.#gl.bindBuffer(Debug.#gl.ARRAY_BUFFER, Debug.#arrayBuffer);
    Debug.#gl.bufferData(Debug.#gl.ARRAY_BUFFER, vertexes, Debug.#gl.DYNAMIC_DRAW);
    Debug.#gl.bindBuffer(Debug.#gl.ELEMENT_ARRAY_BUFFER, Debug.#indexBuffer);
    Debug.#gl.bufferData(Debug.#gl.ELEMENT_ARRAY_BUFFER, indices, Debug.#gl.DYNAMIC_DRAW);
    Debug.#gl.enableVertexAttribArray(0);
    Debug.#gl.vertexAttribPointer(0, 3, Debug.#gl.FLOAT, false, 4 * vertexSize,  0);
    
    // Program setup
    Debug.#linesProgram.use();
    Debug.#linesProgram.uMatrix.update(mat.values);
    Debug.#linesProgram.uLineColor.update(color.values);

    // Draw
    Debug.#gl.drawElements(Debug.#gl.LINES, numLines * 2, Debug.#gl.UNSIGNED_SHORT, 0);
    
    // End draw
    Debug.#gl.disableVertexAttribArray(0);
    _all_js__WEBPACK_IMPORTED_MODULE_0__.Program.unbind(Debug.#gl);
    Debug.#gl.bindBuffer(Debug.#gl.ARRAY_BUFFER, null);
    Debug.#gl.bindBuffer(Debug.#gl.ELEMENT_ARRAY_BUFFER, null);
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/extra/stack.js":
/*!*********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/extra/stack.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixStack": () => (/* binding */ MatrixStack)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



/**
 * @class Matrix Stack implementation.
 */
class MatrixStack {
  DEPTH_LIMIT = 128;
  #array;

  /**
   * Constructor.
   */
  constructor() {
    this.#array = [_all_js__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()];
  }

  /**
   * Retrieve the Matrix at head of the stack.
   * If the Stack is empty, undefined is returned.
   * 
   * @returns {Mat4} the transformation matrix for the entire stack
   */
  head() {
    return (this.size() > 0) ? this.#array[this.size()] : undefined;
  }

  /**
   * Push a Matrix into the stack and returns the new head.
   * 
   * @param {Mat4} mat the matrix to push
   * 
   * @returns {Mat4} the transformation matrix for the entire stack
   */
  push(mat) {
    const tmp = this.#array[this.size()].clone().apply(mat);
    const size = this.#array.push(tmp);
    if (size >= this.DEPTH_LIMIT + 1) {
      throw new Error("Stack depth reached its limit. Be sure to pop() the correct number of times.");
    }
    return tmp;
  }

  /**
   * Remove the Matrix at the top of the stack and returns it.
   * If the Stack is empty, undefined is returned.
   * 
   * @returns {Mat4} the transformation matrix for the entire stack
   */
  pop() {
    return (this.size() > 0) ? this.#array.pop() : undefined;
  }

  /**
   * Retrieve the stack's size.
   * 
   * @returns {number} the stack's size
   */
  size() {
    return this.#array.length - 1;
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/geometry/cube.js":
/*!***********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/geometry/cube.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cube": () => (/* binding */ Cube)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/webgl-basic-lib/lib/geometry/types.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Cube representing an Cube.
 */
class Cube extends _types_js__WEBPACK_IMPORTED_MODULE_1__.Generable {

  /**
   * Protected method to actually build the cube.
   * 
   * @returns {vertexes, uvs, normals, triangles, lines}
   */
  static _build() {
    const side = 1.0;

    const vertexes = [];
    const uvs = [];
    const normals = [];
    const triangles = [];
    var lines = [];

    // Declare 8 vertexes
    const fTL = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-1,  1,  1);
    const fTR = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 1,  1,  1);
    const fBL = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-1, -1,  1);
    const fBR = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 1, -1,  1);
    const bTL = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-1,  1, -1);
    const bTR = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 1,  1, -1);
    const bBL = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-1, -1, -1);
    const bBR = () => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 1, -1, -1);

    // Push vertexes as 24-length cube to enable per-face attributes
    vertexes.push(
      fTL(), fBL(), fTR(), fBR(), // Front
      bTR(), bBR(), bTL(), bBL(), // Back
      bTL(), bBL(), fTL(), fBL(), // Left
      fTR(), fBR(), bTR(), bBR(), // Right      
      fTL(), fTR(), bTL(), bTR(), // Top      
      fBL(), fBR(), bBL(), bBR(), // Down
    );
    vertexes.forEach((v) => v.mul(side / 2.0));

    // Declare 6-face normals
    const F = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 0,  0,  1);
    const B = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 0,  0, -1);
    const R = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 1,  0,  0);
    const L = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-1,  0,  0);
    const T = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 0,  1,  0);
    const D = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 0, -1,  0);
    
    // Normals
    normals.push(
      F, F, F, F, // Front
      B, B, B, B, // Back
      L, L, L, L, // Left
      R, R, R, R, // Right
      T, T, T, T, // Top
      D, D, D, D, // Down
    );

    // TODO
    uvs.push(...new Array(24).fill(_all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2.Zeros()));

    // Create quads
    triangles.push(
      new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 0,  1,  2), new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 1,  2,  3), // Front
      new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 4,  5,  6), new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 5,  6,  7), // Back
      new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 8,  9, 10), new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 9, 10, 11), // Left
      new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(12, 13, 14), new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(13, 14, 15), // Right
      new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(16, 17, 18), new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(17, 18, 19), // Top
      new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(20, 21, 22), new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(21, 22, 23), // Down
    );

    // Lines
    lines = (0,_all_js__WEBPACK_IMPORTED_MODULE_0__.LinesFromTriangles)(vertexes, triangles);

    return { vertexes, uvs, normals, triangles, lines };
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/geometry/cylinder.js":
/*!***************************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/geometry/cylinder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cylinder": () => (/* binding */ Cylinder)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/webgl-basic-lib/lib/geometry/types.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Cylinder representing an Cylinder.
 */
class Cylinder extends _types_js__WEBPACK_IMPORTED_MODULE_1__.Generable {
  
  /**
   * Protected method to actually build the cylinder.
   *
   * @param {number} precision the precision to use when generating the shape
   * 
   * @returns {vertexes, uvs, normals, triangles, lines}
   */
   static _build(precision) {
    precision = Math.max(precision, 5);

    const vertexes = [];
    const uvs = [];
    const normals = [];
    const triangles = [];
    var lines = [];

    // Precision represents the num of vertical slices
    const step = (0,_all_js__WEBPACK_IMPORTED_MODULE_0__.toRad)(360 / (precision - 1));
    for (let i = 0; i < precision; ++i) {
      // Each slice has fixed angle
      const angle = i * step;
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);
      // Creates slice vertexes
      vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  0, +0.5,   0)); // Top central vertex
      vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(cos, +0.5, sin)); // Top side vertex (1)
      vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(cos, +0.5, sin)); // Top side vertex (2)
      vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(cos, -0.5, sin)); // Bottom side vertex (1)
      vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(cos, -0.5, sin)); // Bottom side vertex (2)
      vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  0, -0.5,   0)); // Bottom central vertex
      normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, +1, 0));
      normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, +1, 0));
      normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(cos, 0, sin).normalize());
      normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(cos, 0, sin).normalize());
      normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, -1, 0));
      normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, -1, 0));
    }

    // Num of vertexes per slice
    const N = 6;

    // Generates 4 triangles for each slice
    for (let i = 0; i < precision; ++i) {
      // Index begin for vertexes of this slice (i-th)
      const b = i * N;
      // Index begin for vertexes of the next slice
      const n = ((i + 1) % precision) * N;
      // Create faces
      triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(b + 0, b + 1, n + 1)); // Top face
      triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(b + 2, b + 3, n + 2)); // Side quad (1)
      triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(b + 3, n + 2, n + 3)); // Side quad (2)
      triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(b + 4, b + 5, n + 4)); // Bottom face
    }

    // TODO
    uvs.push(...new Array(vertexes.length).fill(_all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2.Zeros()));

    // Lines
    lines = (0,_all_js__WEBPACK_IMPORTED_MODULE_0__.LinesFromTriangles)(vertexes, triangles);

    return { vertexes, uvs, normals, triangles, lines };
   }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/geometry/icosahedron.js":
/*!******************************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/geometry/icosahedron.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icosahedron": () => (/* binding */ Icosahedron)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/webgl-basic-lib/lib/geometry/types.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Icosahedron representing an Icosahedron.
 */
class Icosahedron extends _types_js__WEBPACK_IMPORTED_MODULE_1__.Generable {

  /**
   * Protected method to actually build the icosahedron.
   *
   * @param {number} precision the precision to use when generating the shape
   * 
   * @returns {vertexes, uvs, normals, triangles, lines}
   */
  static _build(precision) {
    precision = Math.max(0, precision);
    
    const vertexes = [];
    var uvs = [];
    var normals = [];
    var triangles = [];
    var lines = [];

    // Magic values
    const X = 0.525731112119133606;
    const Z = 0.850650808352039932;
    const N = 0.0;

    // Build the 12-vertexes base icosahedron
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-X, N, Z));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( X, N, Z));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-X, N,-Z));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( X, N,-Z));
    
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( N, Z, X));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( N, Z,-X));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( N,-Z, X));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( N,-Z,-X));
    
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( Z, X, N));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-Z, X, N));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( Z,-X, N));
    vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(-Z,-X, N));
    
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  0,  4,  1));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  0,  9,  4));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  9,  5,  4));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  4,  5,  8));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  4,  8,  1));
    
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  8, 10,  1));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  8,  3, 10));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  5,  3,  8));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  5,  2,  3));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  2,  7,  3));
    
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  7, 10,  3));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  7,  6, 10));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  7, 11,  6));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3( 11,  0,  6));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  0,  1,  6));
    
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  6,  1, 10));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  9,  0, 11));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  9, 11,  2));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  9,  2,  5));
    triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(  7,  2, 11));

    // Method to create a middle point between two others
    const cache1 = {};
    function middle(a, b) {
      // Compute key
      const key = Math.max(a, b) + "_" + Math.min(a, b);

      // Check if already calculated
      if (!cache1[key]) {
        
        // Retrieve the two vectors from indeces
        const [vecA, vecB] = [vertexes[a], vertexes[b]];
  
        // Create a new vec (middle)
        const newVec = _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3.Zeros().add(vecA).add(vecB).normalize();
  
        // Save result in cache
        cache1[key] = vertexes.push(newVec) - 1;
      }

      // Return the newly created vec index
      return cache1[key];
    };

    // Iterate several times
    for (let i = 0; i < precision; ++i) {

      // Temporary array
      const result = [];

      // Iterate over each triangle to split it in four new ones
      triangles.forEach((face) => {

        // Indexes
        const a = middle(face.x, face.y);
        const b = middle(face.y, face.z);
        const c = middle(face.z, face.x);
        
        // Push new triangles
        result.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(face.x, a, c));
        result.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(face.y, b, a));
        result.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(face.z, c, b));
        result.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(     a, b, c));
      });

      // Update triangles
      triangles = result;
    }

    // Lines
    lines = (0,_all_js__WEBPACK_IMPORTED_MODULE_0__.LinesFromTriangles)(vertexes, triangles);

    // Create normals for each vertex
    normals = vertexes.map((v) => v.clone().normalize());
    
    // Create uvs for each vertex
    uvs = vertexes.map((v) => v.toUVofSphere());

    return { vertexes, uvs, normals, triangles, lines };
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/geometry/sphere.js":
/*!*************************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/geometry/sphere.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sphere": () => (/* binding */ Sphere)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/webgl-basic-lib/lib/geometry/types.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Sphere representing an Sphere.
 */
class Sphere extends _types_js__WEBPACK_IMPORTED_MODULE_1__.Generable {

  /**
   * Protected method to actually build the sphere.
   *
   * @param {number} precisionx the num of vertical slices
   * @param {number} precisiony the num of horizontal slices
   * 
   * @returns {vertexes, uvs, normals, triangles, lines}
   */
  static _build(precisionx, precisiony) {
    const num_vert_slices = Math.max(3, precisionx);
    const num_hori_slices = Math.max(3, precisiony);
    
    const vertexes = [];
    const uvs = [];
    const normals = [];
    const triangles = [];
    var lines = [];

    // Iterate over each vertical slice
    for(let x = 0; x <= num_vert_slices; ++x) {

      // Iterate over each horizontal slice
      for(let y = 0; y <= num_hori_slices; ++y) {
      
        // Find the angles
        const angle0 =     Math.PI * x / num_vert_slices;
        const angle1 = 2 * Math.PI * y / num_hori_slices;

        // Retrieve coordinates from angles
        const vx = Math.sin(angle0) * Math.cos(angle1);
        const vy = Math.cos(angle0);
        const vz = Math.sin(angle0) * Math.sin(angle1);

        // Retrieve uvs from slice indexes
        const u = y / num_hori_slices;
        const v = x / num_vert_slices;

        // Push new vertex with position, uv and normal
        vertexes.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(vx, vy, vz));
        uvs.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2(u, v));
        normals.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(vx, vy, vz));
      }
    }

    const L = num_hori_slices + 1;

    // Iterate over each vertical slice
    for(let x = 0; x < num_vert_slices; ++x) {

      // Iterate over each horizontal slice
      for(let y = 0; y < num_hori_slices; ++y) {
        const b  = x * L;
        const c  = ((y != L - 1) ? L : 0);
        
        const i0 = b + y;
        const i1 = b + y + 1;
        const i2 = b + y + L;
        const i3 = b + (y + 1) % L;
        
        // Triangles
        if (x != num_vert_slices - 1) {
          triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(i0, i2, i3 + L));
        }        
        if (x != 0) {
          triangles.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec3(i0, i1, i3 + L));
        }
      }
    }

    // uvs.forEach((v) => console.log(v.toString(2)));
    // vertexes.forEach((v) => console.log(v.toString(3)));
    // triangles.forEach((t) => console.log(t.toString(0)));

    // Lines
    lines = (0,_all_js__WEBPACK_IMPORTED_MODULE_0__.LinesFromTriangles)(vertexes, triangles);

    return { vertexes, uvs, normals, triangles, lines };
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/geometry/types.js":
/*!************************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/geometry/types.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicShape": () => (/* binding */ BasicShape),
/* harmony export */   "DebugShape": () => (/* binding */ DebugShape),
/* harmony export */   "Generable": () => (/* binding */ Generable),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "TexturedShape": () => (/* binding */ TexturedShape)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



/**
 * @class Generable that can be extended by any generable shape that implements _build().
 */
class Generable {
  
  /**
   * Creates a BasicShape
   * 
   * @param {...} args the arguments to build the selected shape.
   *
   * @return {BasicShape} the generated shape
   */
   static asBasicShape(args) {
    const { vertexes, triangles } = this._build(...arguments);
    return new BasicShape(vertexes, triangles);
  }
  
  /**
   * Creates a TexturedShape
   * 
   * @param {...} args the arguments to build the selected shape.
   *
   * @return {TexturedShape} the generated shape
   */
  static asTexturedShape(args) {
    const { vertexes, uvs, triangles } = this._build(...arguments);
    return new TexturedShape(vertexes, uvs, triangles);
  }
  
  /**
   * Creates a DebugShape
   * 
   * @param {...} args the arguments to build the selected shape.
   *
   * @return {DebugShape} the generated shape
   */
  static asDebugShape(args) {
    const { vertexes, uvs, normals, triangles, lines } = this._build(...arguments);
    return new DebugShape(vertexes, uvs, normals, triangles, lines);
  }

  /**
   * Method to create the shape.
   * Should be implemented by specialized classes.
   * 
   * @returns {vertexes, uvs, normals, triangles, lines}
   */
  static _build() {
    throw new Error("_build() not implemented");
  }
}

/**
 * @class Shape representing a generic geometry.
 */
class Shape {
  vertexes;
  numVertexes;
  triangles;
  numTriangles;
  
  /**
   * Creates an instance of a Shape.
   *
   * @param {list of number} vertexes the vertexes list
   * @param {list of number} triangles the triangles list
   */
  constructor(vertexes, triangles) {
    this.vertexes = new Float32Array(vertexes);
    this.numVertexes = this.vertexes.length / this.constructor.VertexSize();
    this.triangles = new Uint16Array(triangles);
    this.numTriangles = this.triangles.length / 3;
  }

  /**
   * Getter to retrieve data count per vertex.
   * Should be implemented by specialized classes.
   * 
   * @return {number} the vertex size
   */
  static VertexSize() {
    throw new Error("VertexSize() not implemented");
  }

  /**
   * Syntactic sugar to retrieve vertex size from instances.
   * 
   * @return {number} the vertex size
   */
  vertexSize() {
    return this.constructor.VertexSize();
  }

  /**
   * Estimate memory cost of the shape.
   *
   * @return {number, number, number} the memory occupation
   */
  get bytes() {
    return this.vertexes.length * 4 + this.triangles.length * 2;
  }

  /**
   * Flatten the array.
   *
   * ex.
   *     a = [(0, 1), (2, 3)]
   *
   *     flattenVecArray(a) = [0, 1, 2, 3]
   *
   * @param {list of Vec} array the array to flatten
   *
   * @return {array} a plain JS array
   */
  static flattenVecArray(array) {
    return Shape.flattenVecArrays([array]);
  }
  
  /**
   * Flatten the arrays combining each element from each array.
   *
   * ex.
   *     a = [(0, 1), (2, 3)]
   *     b = [(4, 5), (6, 7)]
   *
   *     flattenVecArrays([a, b]) = [0, 1, 4, 5, 2, 3, 6, 7]
   *
   * @param {list of list of Vec} arrays the array list to flatten
   *
   * @return {array} a plain JS array
   */
  static flattenVecArrays(arrays) {
    return arrays[0].map((_, ind) => arrays.map((a) => [...a[ind].values]).flat()).flat();
  }

  /**
   * Debug draw points for each vertex.
   *
   * Works only when using the DebugShape.
   */
  drawPoints(mat, color, size) { }

  /**
   * Debug draw lines for each segment.
   *
   * Works only when using the DebugShape.
   */
  drawLines(mat, color) { }
}

/**
 * @class BasicShape representing a basic geometry defined by:
 * - vertexes array of { 3D-Pos }
 * - triangles array of { indices }
 */
class BasicShape extends Shape {
  /**
   * Creates an instance of a BasicShape.
   *
   * @param {list of Vec3} vertexes the vertexes list
   * @param {list of Vec3} triangles the triangles list
   */
  constructor(vertexes, triangles) {
    super(
      Shape.flattenVecArray(vertexes),
      Shape.flattenVecArray(triangles)
    );
  }

  /**
   * Getter to retrieve data count per vertex.
   * 
   * @return {number} the vertex size
   */
  static VertexSize() {
    return 3;
  }
}

/**
 * @class TexturedShape representing a basic geometry defined by:
 * - vertexes array of { 3D-Pos, 2D-Texture-Coord }
 * - triangles array of { indices }
 */
class TexturedShape extends Shape {
  /**
   * Creates an instance of a TexturedShape.
   *
   * @param {list of Vec3} vertexes the vertexes list
   * @param {list of Vec2} uvs the uvs list
   * @param {list of Vec3} triangles the triangles list
   */
  constructor(vertexes, uvs, triangles) {
    super(
      Shape.flattenVecArrays([vertexes, uvs]),
      Shape.flattenVecArray(triangles)
    );
  }

  /**
   * Getter to retrieve data count per vertex.
   * 
   * @return {number} the vertex size
   */
  static VertexSize() {
    return 5;
  }
}

/**
 * @class DebugShape representing a basic geometry defined by:
 * - vertexes array of { 3D-Pos, 2D-Texture-Coord, 3D-Normal }
 * - triangles array of { indices }
 * - lines array of { indices }
 */
class DebugShape extends Shape {
  lines;
  numLines;
  
  /**
   * Creates an instance of a DebugShape.
   *
   * @param {list of Vec3} vertexes the vertexes list
   * @param {list of Vec2} uvs the uvs list
   * @param {list of Vec3} normals the normals list
   * @param {list of Vec3} triangles the triangles list
   * @param {list of Vec2} lines the lines list
   */
  constructor(vertexes, uvs, normals, triangles, lines) {
    super(
      Shape.flattenVecArrays([vertexes, uvs, normals]),
      Shape.flattenVecArray(triangles)
    );
    this.lines = new Uint16Array(Shape.flattenVecArray(lines));
    this.numLines = this.lines.length / 2;
  }

  /**
   * Getter to retrieve data count per vertex.
   * 
   * @return {number} the vertex size
   */
  static VertexSize() {
    return 8;
  }

  /**
   * Estimate memory cost of the shape.
   *
   * @return {number, number, number} the memory occupation
   */
  get bytes() {
    return super.bytes + this.lines.length * 2;
  }

  /**
   * Debug draw points for each vertex.
   *
   * @param {Mat4} mat the transformation matrix
   * @param {Vec4} color the color of each point
   * @param {number} size the size of each point
   */
  drawPoints(mat, color, size) {
    _all_js__WEBPACK_IMPORTED_MODULE_0__.Debug.drawPoints(this.vertexes, this.vertexSize(), mat, this.numVertexes, color, size);
  }

  /**
   * Debug draw lines for each segment.
   *
   * @param {Mat4} mat the transformation matrix
   * @param {Vec4} color the color of each point
   */
  drawLines(mat, color) {
    _all_js__WEBPACK_IMPORTED_MODULE_0__.Debug.drawLines(this.vertexes, this.lines, this.vertexSize(), mat, this.numLines, color);
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/geometry/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/geometry/utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinesFromTriangles": () => (/* binding */ LinesFromTriangles)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



/*
 * Retrieve a lines array of indexes from triangles list and vertexes.
 * 
 * @params {list of Vec3} vertexes the list of vertexes
 * @params {list of Vec3} triangles the list of triangles
 * 
 * @return {list of Vec2} the lines
 */
function LinesFromTriangles(vertexes, triangles) {
  const lines = [];
  const cache2 = new Set();

  triangles.forEach((face) => {
    // Add lines
    [[face.x, face.y], [face.y, face.z], [face.z, face.x]].forEach(([a, b]) => {
      // Compute key
      const vecA = vertexes[a];
      const vecB = vertexes[b];
      const key = Math.max(a, b) + "_" + Math.min(a, b);
      
      // Check if line is in cache
      if (!cache2.has(key)) {
        lines.push(new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2(a, b));
        cache2.add(key);
      }
    });
  });

  return lines;
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/mat.js":
/*!******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/mat.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mat": () => (/* binding */ Mat)
/* harmony export */ });
/** @author: Davide Risaliti davdag24@gmail.com */

/**
 * @class Mat base vector class.
 */
class Mat {
  values;

  /**
   * Creates an instance of a Mat.
   *
   * @param {array of number} arr the array of values
   */
  constructor(arr) {
    this.values = new Float32Array(arr);
  }

  /**
   * Getter to retrieve elements count.
   * Should be implemented by specialized classes.
   * 
   * @return {number} the num of elements
   */
  static count() {
    throw new Error("count() not implemented");
  }

  /**
   * Getter to retrieve side count.
   * Should be implemented by specialized classes.
   * 
   * @return {number} the num of elements on a side of the matrix
   */
  static side() {
    throw new Error("side() not implemented");
  }

  /**
   * Syntactic-sugar for a Mat initialization from array.
   * Array contains elements in Column-Major order.
   * Should be implemented by specialized classes.
   * 
   * @param {array of number} arr the array to copy
   * 
   * @return {Mat} the newly created matrix
   */
  static FromArrayCM(arr) {
    throw new Error("FromArrayCM() not implemented");
  }

  /**
   * Syntactic-sugar for a Mat initialization from array.
   * Array contains elements in Row-Major order.
   * Should be implemented by specialized classes.
   * 
   * @param {array of number} arr the array to copy
   * 
   * @return {Mat} the newly created matrix
   */
  static FromArrayRM(arr) {
    throw new Error("FromArrayRM() not implemented");
  }

  /**
   * Retrieve an element from the Mat2.
   *
   * @param {number} row index of the row
   * @param {number} col index of the column
   *
   * @return {number} the number in position [row][col]
   */
  get(row, col) {
    return this.values[col * this.constructor.side() + row];
  }

  /**
   * Update an element from the Mat2.
   *
   * @param {number} row index of the row
   * @param {number} col index of the column
   */
  set(row, col, value) {
    this.values[col * this.constructor.side() + row] = value;
  }

  /**
   * Getter to retrieve a string representing the Mat instance.
   * 
   * @return {string} string representation
   */
  toString(decimal = 20) {
    const rows = new Array(this.constructor.side()).fill(0)
      .map((el, ind) => "\t" + this.row(ind).toString(decimal));
    return "[\n" + rows.join(",\n") + "\n]";
  }

  /**
   * Compare the two Mat.
   *
   * @param {Mat} mat the matrix to compare
   *
   * @return {boolean} if the Mat are equals
   */
  equals(mat) {
    for (let i = 0; i < this.constructor.count(); ++i)
      if (this.values[i] !== vec.values[i])
        return false;
    return true;
  }

  /**
   * Round the Mat.
   * Operations can be concatenated.
   *
   * @param {number} decimal the decimal places to left
   *
   * @return {Mat} this
   */
  round(decimal) {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] = this.values[i].toFixed(decimal);
    return this;
  }

  /**
   * Transpose the Mat.
   * Operations can be concatenated.
   *
   * @return {Mat} this
   */
  transpose() {
    for (let r = 0; r < this.constructor.side(); ++r)
      for (let c = r + 1; c < this.constructor.side(); ++c) {
        const tmp = this.get(r, c);
        this.set(r, c, this.get(c, r));
        this.set(c, r, tmp);
      }
    return this;
  }

  /**
   * Syntactic-sugar for a Vec clone.
   * 
   * @return {Vec} the newly created vector
   */
  clone() {
    return this.constructor.FromArrayCM(this.values);
  }

  /**
   * Syntactic-sugar for a Mat initialization with zeros.
   *
   * @return {Mat} the newly created vector
   */
  static Identity() {
    const arr = new Array(this.count()).fill(0);
    for (let i = 0; i < this.count(); ++i)
      if ((i % (this.side() + 1)) === 0)
        arr[i] = 1;
    return this.FromArrayCM(arr);
  }

  /**
   * Syntactic-sugar for a Mat initialization with equal values.
   * 
   * @param {number} v the value to be used for every coordinate
   * 
   * @return {Mat} the newly created vector
   */
  static All(v) {
    return this.FromArrayCM(new Array(this.count()).fill(v));
  }

  /**
   * Syntactic-sugar for a Mat initialization with zeros.
   *
   * @return {Mat} the newly created vector
   */
  static Zeros() {
    return this.All(0);
  }

  /**
   * Syntactic-sugar for a Mat initialization with ones.
   *
   * @return {Mat} the newly created vector
   */
  static Ones() {
    return this.All(1);
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/mat2.js":
/*!*******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/mat2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mat2": () => (/* binding */ Mat2)
/* harmony export */ });
/* harmony import */ var _mat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat.js */ "./node_modules/webgl-basic-lib/lib/math/mat.js");
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Mat representing a 2x2 matrix.
 */
class Mat2 extends _mat_js__WEBPACK_IMPORTED_MODULE_0__.Mat {
  /**
   * Creates an instance of a Mat2.
   *
   * @param {number, number} the first row
   * @param {number, number} the second row
   */
  constructor(x_r1, y_r1,
              x_r2, y_r2) {
    super([x_r1, x_r2,
           y_r1, y_r2]);
  }

  /**
   * Getter to retrieve elements count.
   * 
   * @return {number} the num of elements
   */
  static count() {
    return 4;
  }

  /**
   * Getter to retrieve side count.
   * 
   * @return {number} the num of elements on the side of the matrix
   */
  static side() {
    return 2;
  }

  /**
   * Syntactic-sugar for a Mat2 initialization with an array.
   *
   * Column-Major version.
   *
   * @return {Mat2} the newly created vector
   */
  static FromArrayCM(arr) {
    return new Mat2(arr[0], arr[2],
                    arr[1], arr[3]);
  }

  /**
   * Syntactic-sugar for a Mat2 initialization with an array.
   *
   * Row-Major version.
   *
   * @return {Mat2} the newly created vector
   */
  static FromArrayRM(arr) {
    return new Mat2(arr[0], arr[1],
                    arr[2], arr[3]);
  }

  /**
   * Retrieve a row from the Mat2 as a Vec2.
   *
   * @param {number} index the index of the row
   *
   * @return {Vec2} the selected row
   */
  row(index) {
    return new _all_js__WEBPACK_IMPORTED_MODULE_1__.Vec2(this.values[0 + index],
                    this.values[2 + index]);
  }

  /**
   * Retrieve a col from the Mat2 as a Vec2.
   *
   * @param {number} index the index of the column
   *
   * @return {Vec2} the selected column
   */
  col(index) {
    return new _all_js__WEBPACK_IMPORTED_MODULE_1__.Vec2(this.values[index * 2 + 0],
                    this.values[index * 2 + 1]);
  }

  /**
   * Apply the transformation to the Mat2.
   * Operations can be concatenated.
   *
   * @param {Mat2} mat the matrix to apply
   *
   * @return {Mat2} this
   */
  apply(mat) {
    const v00 = this.values[0];
    const v01 = this.values[1];
    const v10 = this.values[2];
    const v11 = this.values[3];
    
    this.values[0] = v00 * mat.values[0] + v01 * mat.values[2];
    this.values[1] = v00 * mat.values[1] + v01 * mat.values[3];
    this.values[2] = v10 * mat.values[0] + v11 * mat.values[2];
    this.values[3] = v10 * mat.values[1] + v11 * mat.values[3];
    
    return this;
  }

  /**
   * Apply the scale to the Mat2.
   * Operations can be concatenated.
   *
   * @param {Vec2} vec the scale to apply
   *
   * @return {Mat2} this
   */
  scale(vec) {
    this.values[0] *= vec.x;
    this.values[1] *= vec.x;
    
    this.values[2] *= vec.y;
    this.values[3] *= vec.y;
    
    return this;
  }

  /**
   * Apply the rotation to the Mat2.
   * Operations can be concatenated.
   *
   * @param {number} ang the angle to rotate (in radians)
   *
   * @return {Mat2} this
   */
  rotate(ang) {
    const s = Math.sin(ang);
    const c = Math.cos(ang);

    const v00 = this.values[0];
    const v10 = this.values[1];
    const v01 = this.values[2];
    const v11 = this.values[3];

    this.values[0] = v00 *  c + v01 * s;
    this.values[1] = v10 *  c + v11 * s;
    this.values[2] = v00 * -s + v01 * c;
    this.values[3] = v10 * -s + v11 * c;
    
    return this;
  }

  /**
   * Compute the determinant of the Mat2.
   *
   * @return {number} the determinant
   */
  det() {
    return this.values[0] * this.values[3]
         - this.values[2] * this.values[1];
  }

  /**
   * Compute the inverse of the Mat2.
   * Operations can be concatenated.
   *
   * @throws Error when det() is 0
   *
   * @return {Mat2} this
   */
  inverse() {
    const v00 = this.values[0];
    const v10 = this.values[1];
    const v01 = this.values[2];
    const v11 = this.values[3];
    
    var det = v00 * v11 - v01 * v10;

    if (det === 0) throw new Error("Unable to inverse matrix if det is zero");
    
    det = 1.0 / det;

    this.values[0] =  v11 * det;
    this.values[1] = -v10 * det;
    this.values[2] = -v01 * det;
    this.values[3] =  v00 * det;
    
    return this;
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/mat3.js":
/*!*******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/mat3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mat3": () => (/* binding */ Mat3)
/* harmony export */ });
/* harmony import */ var _mat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat.js */ "./node_modules/webgl-basic-lib/lib/math/mat.js");
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Mat representing a 3x3 matrix.
 */
class Mat3 extends _mat_js__WEBPACK_IMPORTED_MODULE_0__.Mat {
  /**
   * Creates an instance of a Mat3.
   *
   * @param {number, number, number} the first row
   * @param {number, number, number} the second row
   * @param {number, number, number} the third row
   */
  constructor(x_r1, y_r1, z_r1,
              x_r2, y_r2, z_r2,
              x_r3, y_r3, z_r3,) {
    super([x_r1, x_r2, x_r3,
           y_r1, y_r2, y_r3,
           z_r1, z_r2, z_r3]);
  }

  /**
   * Getter to retrieve elements count.
   * 
   * @return {number} the num of elements
   */
  static count() {
    return 9;
  }

  /**
   * Getter to retrieve side count.
   * 
   * @return {number} the num of elements on the side of the matrix
   */
  static side() {
    return 3;
  }

  /**
   * Syntactic-sugar for a Mat3 initialization with an array.
   *
   * Column-Major version.
   *
   * @return {Mat3} the newly created vector
   */
  static FromArrayCM(arr) {
    return new Mat3(arr[0], arr[3], arr[6],
                    arr[1], arr[4], arr[7],
                    arr[2], arr[5], arr[8]);
  }

  /**
   * Syntactic-sugar for a Mat3 initialization with an array.
   *
   * Row-Major version.
   *
   * @return {Mat3} the newly created vector
   */
  static FromArrayRM(arr) {
    return new Mat3(arr[0], arr[1], arr[2],
                    arr[3], arr[4], arr[5],
                    arr[6], arr[7], arr[8]);
  }

  /**
   * Retrieve a row from the Mat3 as a Vec3.
   *
   * @param {number} index the index of the row
   *
   * @return {Vec3} the selected row
   */
  row(index) {
    return new _all_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(this.values[0 + index],
                    this.values[3 + index],
                    this.values[6 + index]);
  }

  /**
   * Retrieve a col from the Mat3 as a Vec3.
   *
   * @param {number} index the index of the column
   *
   * @return {Vec3} the selected column
   */
  col(index) {
    return new _all_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(this.values[index * 3 + 0],
                    this.values[index * 3 + 1],
                    this.values[index * 3 + 2]);
  }

  /**
   * Apply the transformation to the Mat3.
   * Operations can be concatenated.
   *
   * @param {Mat3} mat the matrix to apply
   *
   * @return {Mat3} this
   */
  apply(mat) {
    const v00 = this.values[0];
    const v10 = this.values[1];
    const v20 = this.values[2];
    
    const v01 = this.values[3];
    const v11 = this.values[4];
    const v21 = this.values[5];

    const v02 = this.values[6];
    const v12 = this.values[7];
    const v22 = this.values[8];
    
    for (let i = 0; i < 3; ++i) {
      const mat0 = mat.values[i * 3 + 0];
      const mat1 = mat.values[i * 3 + 1];
      const mat2 = mat.values[i * 3 + 2];
    
      this.values[i * 3 + 0] = mat0 * v00 + mat1 * v01 + mat2 * v02;
      this.values[i * 3 + 1] = mat0 * v10 + mat1 * v11 + mat2 * v12;
      this.values[i * 3 + 2] = mat0 * v20 + mat1 * v21 + mat2 * v22;
    }
    
    return this;
  }

  /**
   * Apply the translation to the Mat3.
   * Operations can be concatenated.
   *
   * @param {Vec2} vec the translation to apply
   *
   * @return {Mat3} this
   */
  translate(vec) {
    this.values[6] += vec.x * this.values[0]
                    + vec.y * this.values[3];
    
    this.values[7] += vec.x * this.values[1]
                    + vec.y * this.values[4];

    this.values[8] += vec.x * this.values[2]
                    + vec.y * this.values[5];
      
    return this;
  }

  /**
   * Apply the scale to the Mat3.
   * Operations can be concatenated.
   *
   * @param {Vec2} vec the scale to apply
   *
   * @return {Mat3} this
   */
  scale(vec) {    
    this.values[0] *= vec.x;
    this.values[1] *= vec.x;
    this.values[2] *= vec.x;  
    
    this.values[3] *= vec.y;
    this.values[4] *= vec.y;
    this.values[5] *= vec.y;
    
    return this;
  }

  /**
   * Apply the rotation to the Mat3.
   * Operations can be concatenated.
   *
   * @param {number} ang the angle to rotate (in radians)
   *
   * @return {Mat3} this
   */
  rotate(ang) {
    const v00 = this.values[0];
    const v10 = this.values[1];
    const v20 = this.values[2];
    
    const v01 = this.values[3];
    const v11 = this.values[4];
    const v21 = this.values[5];

    const v02 = this.values[6];
    const v12 = this.values[7];
    const v22 = this.values[8];

    const s = Math.sin(ang);
    const c = Math.cos(ang);

    this.values[0] = c * v00 + s * v01;
    this.values[1] = c * v10 + s * v11;
    this.values[2] = c * v20 + s * v21;
  
    this.values[3] = c * v01 - s * v00;
    this.values[4] = c * v11 - s * v10;
    this.values[5] = c * v21 - s * v20;
    
    return this;
  }

  /**
   * Compute the determinant of the Mat3.
   *
   * @return {number} the determinant
   */
  det() {
    const v00 = this.values[0];
    const v10 = this.values[1];
    const v20 = this.values[2];
    
    const v01 = this.values[3];
    const v11 = this.values[4];
    const v21 = this.values[5];

    const v02 = this.values[6];
    const v12 = this.values[7];
    const v22 = this.values[8];

    return v00 * ( v22 * v11 - v21 * v12)
         + v10 * (-v22 * v01 + v21 * v02)
         + v20 * ( v12 * v01 - v11 * v02)
  }

  /**
   * Compute the inverse of the Mat3.
   * Operations can be concatenated.
   *
   * @throws Error when det() is 0
   *
   * @return {Mat3} this
   */
  inverse() {
    const v00 = this.values[0];
    const v10 = this.values[1];
    const v20 = this.values[2];
    
    const v01 = this.values[3];
    const v11 = this.values[4];
    const v21 = this.values[5];

    const v02 = this.values[6];
    const v12 = this.values[7];
    const v22 = this.values[8];
    
    const tmp0 =  v22 * v11 - v21 * v12;
    const tmp1 = -v22 * v01 + v21 * v02;
    const tmp2 =  v12 * v01 - v11 * v02;

    var det = v00 * tmp0 + v10 * tmp1 + v20 * tmp2;

    if (det === 0) throw new Error("Unable to inverse matrix if det is zero");    

    det = 1.0 / det;

    this.values[0] = tmp0 * det;
    this.values[1] = (-v22 * v10 + v20 * v12) * det;
    this.values[2] = ( v21 * v10 - v20 * v11) * det;
    this.values[3] = tmp1 * det;
    this.values[4] = ( v22 * v00 - v20 * v02) * det;
    this.values[5] = (-v21 * v00 + v20 * v01) * det;
    this.values[6] = tmp2 * det;
    this.values[7] = (-v12 * v00 + v10 * v02) * det;
    this.values[8] = ( v11 * v00 - v10 * v01) * det;
    
    return this;
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/mat4.js":
/*!*******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/mat4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mat4": () => (/* binding */ Mat4)
/* harmony export */ });
/* harmony import */ var _mat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat.js */ "./node_modules/webgl-basic-lib/lib/math/mat.js");
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */




/**
 * @class Mat representing a 4x4 matrix.
 */
class Mat4 extends _mat_js__WEBPACK_IMPORTED_MODULE_0__.Mat {
  /**
   * Creates an instance of a Mat4.
   *
   * @param {number, number, number, number} the first row
   * @param {number, number, number, number} the second row
   * @param {number, number, number, number} the third row
   * @param {number, number, number, number} the fourth row
   */
  constructor(x_r1, y_r1, z_r1, w_r1,
              x_r2, y_r2, z_r2, w_r2,
              x_r3, y_r3, z_r3, w_r3,
              x_r4, y_r4, z_r4, w_r4) {
    super([x_r1, x_r2, x_r3, x_r4,
           y_r1, y_r2, y_r3, y_r4,
           z_r1, z_r2, z_r3, z_r4,
           w_r1, w_r2, w_r3, w_r4]);
  }

  /**
   * Getter to retrieve elements count.
   * 
   * @return {number} the num of elements
   */
  static count() {
    return 16;
  }

  /**
   * Getter to retrieve side count.
   * 
   * @return {number} the num of elements on the side of the matrix
   */
  static side() {
    return 4;
  }

  /**
   * Syntactic-sugar for a Mat4 initialization with an array.
   *
   * Column-Major version.
   *
   * @return {Mat4} the newly created vector
   */
  static FromArrayCM(arr) {
    return new Mat4(arr[ 0], arr[ 4], arr[ 8], arr[12],
                    arr[ 1], arr[ 5], arr[ 9], arr[13],
                    arr[ 2], arr[ 6], arr[10], arr[14],
                    arr[ 3], arr[ 7], arr[11], arr[15]);
  }

  /**
   * Syntactic-sugar for a Mat4 initialization with an array.
   *
   * Row-Major version.
   *
   * @return {Mat4} the newly created vector
   */
  static FromArrayRM(arr) {
    return new Mat4(arr[ 0], arr[ 1], arr[ 2], arr[ 3],
                    arr[ 4], arr[ 5], arr[ 6], arr[ 7],
                    arr[ 8], arr[ 9], arr[10], arr[11],
                    arr[12], arr[13], arr[14], arr[15]);
  }

  /**
   * Syntactic-sugar for a Mat3 initialization from a Mat4.
   *
   * @return {Mat3} the newly created mat
   */
  toMat3() {
    return _all_js__WEBPACK_IMPORTED_MODULE_1__.Mat3.FromArrayRM([
      ...this.row(0).toVec3().values,
      ...this.row(1).toVec3().values,
      ...this.row(2).toVec3().values
    ]);
  }

  /**
   * Retrieve a row from the Mat4 as a Vec4.
   *
   * @param {number} index the index of the row
   *
   * @return {Vec4} the selected row
   */
  row(index) {
    return new _all_js__WEBPACK_IMPORTED_MODULE_1__.Vec4(this.values[ 0 + index],
                    this.values[ 4 + index],
                    this.values[ 8 + index],
                    this.values[12 + index]);
  }

  /**
   * Retrieve a col from the Mat4 as a Vec4.
   *
   * @param {number} index the index of the column
   *
   * @return {Vec4} the selected column
   */
  col(index) {
    return new _all_js__WEBPACK_IMPORTED_MODULE_1__.Vec4(this.values[index * 4 + 0],
                    this.values[index * 4 + 1],
                    this.values[index * 4 + 2],
                    this.values[index * 4 + 3]);
  }

  /**
   * Apply the transformation to the Mat4.
   * Operations can be concatenated.
   *
   * @param {Mat4} mat the matrix to apply
   *
   * @return {Mat4} this
   */
  apply(mat) {
    const v00 = this.values[ 0];
    const v10 = this.values[ 1];
    const v20 = this.values[ 2];
    const v30 = this.values[ 3];
    
    const v01 = this.values[ 4];
    const v11 = this.values[ 5];
    const v21 = this.values[ 6];
    const v31 = this.values[ 7];
    
    const v02 = this.values[ 8];
    const v12 = this.values[ 9];
    const v22 = this.values[10];
    const v32 = this.values[11];
    
    const v03 = this.values[12];
    const v13 = this.values[13];
    const v23 = this.values[14];
    const v33 = this.values[15];

    for (let i = 0; i < 4; ++i) {
      const mat0 = mat.values[i * 4 + 0];
      const mat1 = mat.values[i * 4 + 1];
      const mat2 = mat.values[i * 4 + 2];
      const mat3 = mat.values[i * 4 + 3];
      
      this.values[i * 4 + 0] = mat0 * v00 + mat1 * v01 + mat2 * v02 + mat3 * v03;
      this.values[i * 4 + 1] = mat0 * v10 + mat1 * v11 + mat2 * v12 + mat3 * v13;
      this.values[i * 4 + 2] = mat0 * v20 + mat1 * v21 + mat2 * v22 + mat3 * v23;
      this.values[i * 4 + 3] = mat0 * v30 + mat1 * v31 + mat2 * v32 + mat3 * v33;
    }
    
    return this;
  }

  /**
   * Apply the translation to the Mat4.
   * Operations can be concatenated.
   *
   * @param {Vec3} vec the translation to apply
   *
   * @return {Mat4} this
   */
  translate(vec) {
    this.values[12] += this.values[ 0] * vec.x
                     + this.values[ 4] * vec.y
                     + this.values[ 8] * vec.z;
    
    this.values[13] += this.values[ 1] * vec.x
                     + this.values[ 5] * vec.y
                     + this.values[ 9] * vec.z;
    
    this.values[14] += this.values[ 2] * vec.x
                     + this.values[ 6] * vec.y
                     + this.values[10] * vec.z;
    
    this.values[15] += this.values[ 3] * vec.x
                     + this.values[ 7] * vec.y
                     + this.values[11] * vec.z;
    
    return this;
  }

  /**
   * Apply the scale to the Mat4.
   * Operations can be concatenated.
   *
   * @param {Vec3} vec the scale to apply
   *
   * @return {Mat4} this
   */
  scale(vec) {
    this.values[ 0] *= vec.x;
    this.values[ 1] *= vec.x;
    this.values[ 2] *= vec.x;
    this.values[ 3] *= vec.x;
    
    this.values[ 4] *= vec.y;
    this.values[ 5] *= vec.y;
    this.values[ 6] *= vec.y;
    this.values[ 7] *= vec.y;
    
    this.values[ 8] *= vec.z;
    this.values[ 9] *= vec.z;
    this.values[10] *= vec.z;
    this.values[11] *= vec.z;
    
    return this;
  }

  /**
   * Apply the rotation to the Mat4.
   * Operations can be concatenated.
   *
   * @param {number} ang the angle to rotate (in radians)
   * @param {Vec3} vec the NORMALIZED axis to rotate around
   *
   * @return {Mat4} this
   */
  rotate(ang, vec) {
    const s = Math.sin(ang);
    const c = Math.cos(ang);
    const t = 1 - c;
    
    const v00 = this.values[ 0];
    const v10 = this.values[ 1];
    const v20 = this.values[ 2];
    const v30 = this.values[ 3];
    
    const v01 = this.values[ 4];
    const v11 = this.values[ 5];
    const v21 = this.values[ 6];
    const v31 = this.values[ 7];
    
    const v02 = this.values[ 8];
    const v12 = this.values[ 9];
    const v22 = this.values[10];
    const v32 = this.values[11];

    const r00 = vec.x * vec.x * t + c;
    const r01 = vec.y * vec.x * t + vec.z * s;
    const r02 = vec.z * vec.x * t - vec.y * s;
    const r10 = vec.x * vec.y * t - vec.z * s;
    const r11 = vec.y * vec.y * t + c;
    const r12 = vec.z * vec.y * t + vec.x * s;
    const r20 = vec.x * vec.z * t + vec.y * s;
    const r21 = vec.y * vec.z * t - vec.x * s;
    const r22 = vec.z * vec.z * t + c;

    this.values[ 0] = v00 * r00 + v01 * r01 + v02 * r02;
    this.values[ 1] = v10 * r00 + v11 * r01 + v12 * r02;
    this.values[ 2] = v20 * r00 + v21 * r01 + v22 * r02;
    this.values[ 3] = v30 * r00 + v31 * r01 + v32 * r02;
    
    this.values[ 4] = v00 * r10 + v01 * r11 + v02 * r12;
    this.values[ 5] = v10 * r10 + v11 * r11 + v12 * r12;
    this.values[ 6] = v20 * r10 + v21 * r11 + v22 * r12;
    this.values[ 7] = v30 * r10 + v31 * r11 + v32 * r12;
    
    this.values[ 8] = v00 * r20 + v01 * r21 + v02 * r22;
    this.values[ 9] = v10 * r20 + v11 * r21 + v12 * r22;
    this.values[10] = v20 * r20 + v21 * r21 + v22 * r22;
    this.values[11] = v30 * r20 + v31 * r21 + v32 * r22;

    return this;
  }

  /**
   * Compute the determinant of the Mat4.
   *
   * @return {number} the determinant
   */
  det() {
    const v00 = this.values[ 0];
    const v10 = this.values[ 1];
    const v20 = this.values[ 2];
    const v30 = this.values[ 3];
    
    const v01 = this.values[ 4];
    const v11 = this.values[ 5];
    const v21 = this.values[ 6];
    const v31 = this.values[ 7];
    
    const v02 = this.values[ 8];
    const v12 = this.values[ 9];
    const v22 = this.values[10];
    const v32 = this.values[11];
    
    const v03 = this.values[12];
    const v13 = this.values[13];
    const v23 = this.values[14];
    const v33 = this.values[15];
    
    const tmp0 = v00 * v11 - v10 * v01;
    const tmp1 = v00 * v21 - v20 * v01;
    const tmp2 = v10 * v21 - v20 * v11;
    const tmp3 = v02 * v13 - v12 * v03;
    const tmp4 = v02 * v23 - v22 * v03;
    const tmp5 = v12 * v23 - v22 * v13;

    const tmp6 = v00 * tmp5 - v10 * tmp4 + v20 * tmp3;
    const tmp7 = v01 * tmp5 - v11 * tmp4 + v21 * tmp3;
    const tmp8 = v02 * tmp2 - v12 * tmp1 + v22 * tmp0;
    const tmp9 = v03 * tmp2 - v13 * tmp1 + v23 * tmp0;

    return v31 * tmp6 - v30 * tmp7 + v33 * tmp8 - v32 * tmp9;
  }

  /**
   * Compute the inverse of the Mat4.
   * Operations can be concatenated.
   *
   * @throws Error when det() is 0
   *
   * @return {Mat4} this
   */
  inverse() {
    const v00 = this.values[ 0];
    const v10 = this.values[ 1];
    const v20 = this.values[ 2];
    const v30 = this.values[ 3];
    
    const v01 = this.values[ 4];
    const v11 = this.values[ 5];
    const v21 = this.values[ 6];
    const v31 = this.values[ 7];
    
    const v02 = this.values[ 8];
    const v12 = this.values[ 9];
    const v22 = this.values[10];
    const v32 = this.values[11];
    
    const v03 = this.values[12];
    const v13 = this.values[13];
    const v23 = this.values[14];
    const v33 = this.values[15];

    const tmp0  = v00 * v11 - v10 * v01;
    const tmp1  = v00 * v21 - v20 * v01;
    const tmp2  = v00 * v31 - v30 * v01;
    const tmp3  = v10 * v21 - v20 * v11;
    const tmp4  = v10 * v31 - v30 * v11;
    const tmp5  = v20 * v31 - v30 * v21;
    const tmp6  = v02 * v13 - v12 * v03;
    const tmp7  = v02 * v23 - v22 * v03;
    const tmp8  = v02 * v33 - v32 * v03;
    const tmp9  = v12 * v23 - v22 * v13;
    const tmp10 = v12 * v33 - v32 * v13;
    const tmp11 = v22 * v33 - v32 * v23;
    
    var det = tmp0 * tmp11 - tmp1 * tmp10 + tmp2 * tmp9
            + tmp3 * tmp8  - tmp4 * tmp7  + tmp5 * tmp6;

    if (det === 0) throw new Error("Unable to inverse matrix if det is zero");    

    det = 1.0 / det;

    this.values[ 0] = (v11 * tmp11 - v21 * tmp10 + v31 * tmp9 ) * det;
    this.values[ 1] = (v20 * tmp10 - v10 * tmp11 - v30 * tmp9 ) * det;
    this.values[ 2] = (v13 * tmp5  - v23 * tmp4  + v33 * tmp3 ) * det;
    this.values[ 3] = (v22 * tmp4  - v12 * tmp5  - v32 * tmp3 ) * det;
    this.values[ 4] = (v21 * tmp8  - v01 * tmp11 - v31 * tmp7 ) * det;
    this.values[ 5] = (v00 * tmp11 - v20 * tmp8  + v30 * tmp7 ) * det;
    this.values[ 6] = (v23 * tmp2  - v03 * tmp5  - v33 * tmp1 ) * det;
    this.values[ 7] = (v02 * tmp5  - v22 * tmp2  + v32 * tmp1 ) * det;
    this.values[ 8] = (v01 * tmp10 - v11 * tmp8  + v31 * tmp6 ) * det;
    this.values[ 9] = (v10 * tmp8  - v00 * tmp10 - v30 * tmp6 ) * det;
    this.values[10] = (v03 * tmp4  - v13 * tmp2  + v33 * tmp0 ) * det;
    this.values[11] = (v12 * tmp2  - v02 * tmp4  - v32 * tmp0 ) * det;
    this.values[12] = (v11 * tmp7  - v01 * tmp9  - v21 * tmp6 ) * det;
    this.values[13] = (v00 * tmp9  - v10 * tmp7  + v20 * tmp6 ) * det;
    this.values[14] = (v13 * tmp1  - v03 * tmp3  - v23 * tmp0 ) * det;
    this.values[15] = (v02 * tmp3  - v12 * tmp1  + v22 * tmp0 ) * det;

    return this;
  }
  
  /**
   * Create the LookAt matrix.
   *
   * @param {Vec3} from the source point
   * @param {Vec3} to the target point
   * @param {Vec3} up the up direction
   *
   * @return {Mat} the newly created Mat4
   */
  static LookAt(from, to, up) {
    if (from.equals(to)) return Mat4.Identity();

    const z = from.clone().sub(to).normalize();
    const x = up.clone().cross(z).normalize();
    const y = z.clone().cross(x).normalize();
    
    const arr = new Array(16);

    arr[ 0] = x.x;
    arr[ 1] = y.x;
    arr[ 2] = z.x;
    arr[ 3] = 0;
    
    arr[ 4] = x.y;
    arr[ 5] = y.y;
    arr[ 6] = z.y;
    arr[ 7] = 0;

    arr[ 8] = x.z;
    arr[ 9] = y.z;
    arr[10] = z.z;
    arr[11] = 0;
    
    arr[12] = -x.dot(from);
    arr[13] = -y.dot(from);
    arr[14] = -z.dot(from);
    arr[15] = 1;
    
    return Mat4.FromArrayCM(arr);
  }
  
  /**
   * Create the Perspective matrix.
   *
   * @param {number} fovY the field of view (in radians)
   * @param {number} ratio the aspect ratio (typically w/h)
   * @param {number} near the near Plane
   * @param {number} far the far Plane
   *
   * @return {Mat} the newly created Mat4
   */
  static Perspective(fovY, ratio, near, far) {
    const f = 1.0 / Math.tan(fovY / 2);
    
    const arr = new Array(16);
    
    arr[ 0] = f / ratio;
    arr[ 1] = 0;
    arr[ 2] = 0;
    arr[ 3] = 0;
    
    arr[ 4] = 0;
    arr[ 5] = f;
    arr[ 6] = 0;
    arr[ 7] = 0;

    arr[ 8] = 0;
    arr[ 9] = 0;
    // arr[10]
    arr[11] = -1;
    
    arr[12] = 0;
    arr[13] = 0;
    // arr[14]
    arr[15] = 0;

    if (f !== Number.Infinity) {
      const nf = 1 / (near - far);
      arr[10] = (far + near) * nf;
      arr[14] = 2 * far * near * nf;
    } else {
      arr[10] = -1;
      arr[14] = -2 * near;
    }
    
    return Mat4.FromArrayCM(arr);
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDeg": () => (/* binding */ toDeg),
/* harmony export */   "toRad": () => (/* binding */ toRad)
/* harmony export */ });
/** @author: Davide Risaliti davdag24@gmail.com */

const DEG_TO_RAD = Math.PI / 180.0;
const RAD_TO_DEG = 180.0 / Math.PI;

/**
 * Convert from degrees to radians.
 * 
 * @param {number} degrees the value to convert
 * 
 * @return {number} the radians equivalent
 */
function toRad(degrees) {
  return (degrees % 360) * DEG_TO_RAD;
}

/**
 * Convert from radians to degrees.
 * 
 * @param {number} radians the value to convert
 * 
 * @return {number} the radians equivalent
 */
function toDeg(radians) {
  return (radians * RAD_TO_DEG) % 360;
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/vec.js":
/*!******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/vec.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec": () => (/* binding */ Vec)
/* harmony export */ });
/** @author: Davide Risaliti davdag24@gmail.com */

/**
 * @class Vec base vector class.
 */
class Vec {
  values;

  /**
   * Creates an instance of a Vec.
   *
   * @param {array of number} arr the array of values
   */
  constructor(arr) {
    this.values = new Float32Array(arr);
  }

  /**
   * Getter to retrieve elements count.
   * Should be implemented by specialized classes.
   * 
   * @return {number} the num of elements
   */
  static count() {
    throw new Error("count() not implemented");
  }

  /**
   * Syntactic-sugar for a Vec initialization from array.
   * Should be implemented by specialized classes.
   * 
   * @param {array of number} arr the array to copy
   * 
   * @return {Vec} the newly created vector
   */
  static FromArray(arr) {
    throw new Error("FromArray() not implemented");
  }

  /**
   * Getter to retrieve a string representing the Vec instance.
   * 
   * @return {string} string representation
   */
  toString(decimal = 20) {
    return "[" + [...this.values].map((v) => v.toFixed(decimal)).join(",") + "]";
  }

  /**
   * Compare the two Vec.
   *
   * @param {Vec} vec the vector to compare
   *
   * @return {boolean} if the Vec are equals
   */
  equals(vec) {
    for (let i = 0; i < this.constructor.count(); ++i)
      if (this.values[i] !== vec.values[i])
        return false;
    return true;
  }

  /**
   * Sum to the Vec another Vec.
   * Operations can be concatenated.
   *
   * @param {Vec} vec the vector to sum
   *
   * @return {Vec} this
   */
  add(vec) {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] += vec.values[i];
    return this;
  }

  /**
   * Subtract to the Vec another Vec.
   * Operations can be concatenated.
   *
   * @param {Vec} vec the vector to subtract
   *
   * @return {Vec} this
   */
  sub(vec) {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] -= vec.values[i];
    return this;
  }

  /**
   * Scale up the Vec by a factor.
   * Operations can be concatenated.
   *
   * @param {number} factor the scale
   *
   * @return {Vec} this
   */
  mul(factor) {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] *= factor;
    return this;
  }

  /**
   * Scale down the Vec by a factor.
   * Operations can be concatenated.
   *
   * @param {number} factor the scale
   *
   * @return {Vec} this
   */
  div(factor) {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] /= factor;
    return this;
  }

  /**
   * Round the Vec.
   * Operations can be concatenated.
   *
   * @param {number} decimal the rounding precision
   *
   * @return {Vec} this
   */
  round(decimal) {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] = this.values[i].toFixed(decimal);
    return this;
  }

  /**
   * Floor the Vec.
   * Operations can be concatenated.
   *
   * @return {Vec} this
   */
  floor() {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] = Math.floor(this.values[i]);
    return this;
  }

  /**
   * Normalize the Vec.
   * Operations can be concatenated.
   *
   * @return {Vec} this
   */
  normalize() {
    return this.div(this.magnitude());
  }

  /**
   * Inverse the Vec.
   * Operations can be concatenated.
   *
   * @return {Vec} this
   */
  inverse() {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] = 1 / this.values[i];
    return this;
  }

  /**
   * Negate the Vec.
   * Operations can be concatenated.
   *
   * @return {Vec} this
   */
  negate() {
    for (let i = 0; i < this.constructor.count(); ++i)
      this.values[i] = -this.values[i];
    return this;
  }

  /**
   * Compute the dot product between Vec.
   *
   * @param {Vec} vec the vector to multiply
   *
   * @return {number} the result of the computation
   */
  dot(vec) {
    let sum = 0;
    for (let i = 0; i < this.constructor.count(); ++i)
      sum += this.values[i] * vec.values[i];
    return sum;
  }

  /**
   * Compute the length of the Vec.
   *
   * @return {number} the length
   */
  magnitude() {
    return Math.sqrt(this.magnitudeSquared());
  }

  /**
   * Compute the length squared of the Vec.
   *
   * Transform the Vec by a Mat.
   *
   * @return {number} the length squared
   */
  magnitudeSquared() {
    return this.dot(this);
  }

  /**
   * Transform the Vec by a Mat.
   * Operations can be concatenated.
   *
   * @param {Mat} mat the matrix to apply
   *
   * @return {Vec} this
   */
  transform(mat) {
    const tmp = this.clone();
    for (let i = 0; i < this.constructor.count(); ++i) {
      this.values[i] = mat.row(i).dot(tmp);
    }
    return this;
  }

  /**
   * Syntactic-sugar for a Vec clone.
   * 
   * @return {Vec} the newly created vector
   */
  clone() {
    return this.constructor.FromArray(this.values);
  }

  /**
   * Syntactic-sugar for a Vec initialization with equal values.
   * 
   * @param {number} v the value to be used for every coordinate
   * 
   * @return {Vec} the newly created vector
   */
  static All(v) {
    return this.FromArray(new Array(this.count()).fill(v));
  }

  /**
   * Syntactic-sugar for a Vec initialization with zeros.
   *
   * @return {Vec} the newly created vector
   */
  static Zeros() {
    return this.All(0);
  }

  /**
   * Syntactic-sugar for a Vec initialization with ones.
   *
   * @return {Vec} the newly created vector
   */
  static Ones() {
    return this.All(1);
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/vec2.js":
/*!*******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/vec2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec2": () => (/* binding */ Vec2)
/* harmony export */ });
/* harmony import */ var _vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec.js */ "./node_modules/webgl-basic-lib/lib/math/vec.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/webgl-basic-lib/lib/math/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/webgl-basic-lib/lib/math/vec4.js");
/** @author: Davide Risaliti davdag24@gmail.com */





/**
 * @class Vec2 representing a vector with 2 dimensions.
 */
class Vec2 extends _vec_js__WEBPACK_IMPORTED_MODULE_0__.Vec {  
  /**
   * Creates an instance of a Vec2.
   *
   * @param {number} the x coordinate
   * @param {number} the y coordinate
   */
  constructor(x, y) {
    super([x, y]);
  }

  /**
   * Syntactic-sugar for a Vec3 initialization from a Vec2.
   *
   * @param {number} z the z coordinate
   *
   * @return {Vec3} the newly created vector
   */
  toVec3(z) {
    return new _vec3_js__WEBPACK_IMPORTED_MODULE_1__.Vec3(this.x, this.y, z);
  }

  /**
   * Syntactic-sugar for a Vec4 initialization from a Vec2.
   *
   * @param {number} z the z coordinate
   * @param {number} w the w coordinate
   *
   * @return {Vec4} the newly created vector
   */
  toVec4(z, w) {
    return new _vec4_js__WEBPACK_IMPORTED_MODULE_2__.Vec4(this.x, this.y, z, w);
  }

  /**
   * Getter to retrieve elements count.
   * 
   * @return {number} the num of elements
   */
  static count() {
    return 2;
  }

  /**
   * Syntactic-sugar for a Vec2 initialization with an array.
   *
   * @return {Vec2} the newly created vector
   */
  static FromArray(arr) {
    return new Vec2(arr[0], arr[1]);
  }

  /**
   * Setter to update the x or y coordinate.
   * 
   * @param {number} the new value
   */
  set x(value) { this.values[0] = value; }
  set y(value) { this.values[1] = value; }

  // Syntactic sugar to support "size" accessors as coordinates
  set w(value) { this.values[0] = value; }
  set h(value) { this.values[1] = value; }

  // Syntactic sugar to support "texture" accessors as coordinates
  set u(value) { this.values[0] = value; }
  set v(value) { this.values[1] = value; }

  /**
   * Getter to retrieve the x or y coordinate.
   * 
   * @return {number} the selected coordinate
   */
  get x() { return this.values[0]; }
  get y() { return this.values[1]; }
  
  // Syntactic sugar to support "size" accessors as coordinates
  get w() { return this.values[0]; }
  get h() { return this.values[1]; }

  // Syntactic sugar to support "texture" accessors as coordinates
  get u() { return this.values[0]; }
  get v() { return this.values[1]; }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/vec3.js":
/*!*******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/vec3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec3": () => (/* binding */ Vec3)
/* harmony export */ });
/* harmony import */ var _vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec.js */ "./node_modules/webgl-basic-lib/lib/math/vec.js");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/webgl-basic-lib/lib/math/vec2.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/webgl-basic-lib/lib/math/vec4.js");
/** @author: Davide Risaliti davdag24@gmail.com */





/**
 * @class Vec3 representing a vector with 3 dimensions.
 */
class Vec3 extends _vec_js__WEBPACK_IMPORTED_MODULE_0__.Vec {  
  /**
   * Creates an instance of a Vec3.
   *
   * @param {number} the x coordinate
   * @param {number} the y coordinate
   * @param {number} the z coordinate
   */
  constructor(x, y, z) {
    super([x, y, z]);
  }

  /**
   * Getter to retrieve elements count.
   * 
   * @return {number} the num of elements
   */
  static count() {
    return 3;
  }

  /**
   * Syntactic-sugar for a Vec3 initialization with an array.
   *
   * @return {Vec3} the newly created vector
   */
  static FromArray(arr) {
    return new Vec3(arr[0], arr[1], arr[2]);
  }

  /**
   * Syntactic-sugar for a Vec2 initialization from a Vec3.
   *
   * @return {Vec2} the newly created vector
   */
  toVec2() {
    return new _vec2_js__WEBPACK_IMPORTED_MODULE_1__.Vec2(this.x, this.y);
  }

  /**
   * Syntactic-sugar for a Vec4 initialization from a Vec3.
   *
   * @param {number} w the w coordinate
   *
   * @return {Vec4} the newly created vector
   */
  toVec4(w) {
    return new _vec4_js__WEBPACK_IMPORTED_MODULE_2__.Vec4(this.x, this.y, this.z, w);
  }

  /**
   * Setter to update the x, y or z coordinate.
   * 
   * @param {number} the new value
   */
  set x(value) { this.values[0] = value; }
  set y(value) { this.values[1] = value; }
  set z(value) { this.values[2] = value; }

  // Syntactic sugar to support "color" channels as coordinates
  set r(value) { this.values[0] = value; }
  set g(value) { this.values[1] = value; }
  set b(value) { this.values[2] = value; }

  // Syntactic sugar to support "color" channels as coordinates
  set h(value) { this.values[0] = value; }
  set s(value) { this.values[1] = value; }
  set v(value) { this.values[2] = value; }

  /**
   * Getter to retrieve the x, y or z coordinate.
   * 
   * @return {number} the selected coordinate
   */
  get x() { return this.values[0]; }
  get y() { return this.values[1]; }
  get z() { return this.values[2]; }
  
  // Syntactic sugar to support "color" channels as coordinates
  get r() { return this.values[0]; }
  get g() { return this.values[1]; }
  get b() { return this.values[2]; }
  
  // Syntactic sugar to support "color" channels as coordinates
  get h() { return this.values[0]; }
  get s() { return this.values[1]; }
  get v() { return this.values[2]; }

  /**
   * Compute the cross product with another vector.
   * Operations can be concatenated.
   *
   * @param {Vec3} vec the vector to multiply
   *
   * @return {Vec3} this
   */
  cross(vec) {
    const v0 = this.values[0];
    const v1 = this.values[1];
    const v2 = this.values[2];

    this.values[0] = (v1 * vec.z) - (v2 * vec.y);
    this.values[1] = (v2 * vec.x) - (v0 * vec.z);
    this.values[2] = (v0 * vec.y) - (v1 * vec.x);
    
    return this;
  }

  /*
   * Calculate texture uvs of sphere with Vec3 as point.
   *
   * Should be normalized.
   *
   * @return {Vec2} the uv coordinates
   */
  toUVofSphere() {
    const u = (Math.atan2(this.values[0], this.values[2]) / Math.PI) / 2 + 0.5;
    const v = (Math.asin(-this.values[1]) / (Math.PI / 2)) / 2 + 0.5;
    return new _vec2_js__WEBPACK_IMPORTED_MODULE_1__.Vec2(u, v);
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/math/vec4.js":
/*!*******************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/math/vec4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vec4": () => (/* binding */ Vec4)
/* harmony export */ });
/* harmony import */ var _vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec.js */ "./node_modules/webgl-basic-lib/lib/math/vec.js");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/webgl-basic-lib/lib/math/vec2.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/webgl-basic-lib/lib/math/vec3.js");
/** @author: Davide Risaliti davdag24@gmail.com */





/**
 * @class Vec4 representing a vector with 4 dimensions.
 */
class Vec4 extends _vec_js__WEBPACK_IMPORTED_MODULE_0__.Vec {
  /**
   * Creates an instance of a Vec4.
   *
   * @param {number} the x coordinate
   * @param {number} the y coordinate
   * @param {number} the z coordinate
   * @param {number} the w coordinate
   */
  constructor(x, y, z, w) {
    super([x, y, z, w]);
  }

  /**
   * Getter to retrieve elements count.
   * 
   * @return {number} the num of elements
   */
  static count() {
    return 4;
  }

  /**
   * Syntactic-sugar for a Vec4 initialization with an array.
   *
   * @return {Vec4} the newly created vector
   */
  static FromArray(arr) {
    return new Vec4(arr[0], arr[1], arr[2], arr[3]);
  }

  /**
   * Syntactic-sugar for a Vec2 initialization from a Vec4.
   *
   * @return {Vec2} the newly created vector
   */
  toVec2() {
    return new _vec2_js__WEBPACK_IMPORTED_MODULE_1__.Vec2(this.x, this.y);
  }

  /**
   * Syntactic-sugar for a Vec3 initialization from a Vec4.
   *
   * @return {Vec3} the newly created vector
   */
  toVec3() {
    return new _vec3_js__WEBPACK_IMPORTED_MODULE_2__.Vec3(this.x, this.y, this.z);
  }

  /**
   * Setter to update the x, y, z or w coordinate.
   * 
   * @param {number} the new value
   */
  set x(value) { this.values[0] = value; }
  set y(value) { this.values[1] = value; }
  set z(value) { this.values[2] = value; }
  set w(value) { this.values[3] = value; }

  // Syntactic sugar to support "color" channels as coordinates
  set r(value) { this.values[0] = value; }
  set g(value) { this.values[1] = value; }
  set b(value) { this.values[2] = value; }
  set a(value) { this.values[3] = value; }

  /**
   * Getter to retrieve the x, y, z or w coordinate.
   * 
   * @return {number} the selected coordinate
   */
  get x() { return this.values[0]; }
  get y() { return this.values[1]; }
  get z() { return this.values[2]; }
  get w() { return this.values[3]; }
  
  // Syntactic sugar to support "color" channels as coordinates
  get r() { return this.values[0]; }
  get g() { return this.values[1]; }
  get b() { return this.values[2]; }
  get a() { return this.values[3]; }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/webgl/program.js":
/*!***********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/webgl/program.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Program": () => (/* binding */ Program)
/* harmony export */ });
/** @author: Davide Risaliti davdag24@gmail.com */

/**
 * @class Program representing an OpenGL program
 */
class Program {
  #gl;
  
  /**
   * Creates an instance of a Program.
   *
   * @param {WebGLRenderingContext} gl the WebGL context
   */
  constructor(gl) {
    this.#gl = gl;
    this.id = gl.createProgram();
    this.attrs = [];
  }

  /**
   * Attach a shader to the Program.
   *
   * @param {Shader} shader the shader to attach
   */
  attachShader(shader) {
    this.#gl.attachShader(this.id, shader.id);
  }

  /**
   * Link the Program. [once]
   */
  link() {
    this.#gl.linkProgram(this.id);

    const status = this.#gl.getProgramParameter(this.id, this.#gl.LINK_STATUS);
    const log    = this.#gl.getProgramInfoLog(this.id);

    // Validate program
    if (status === this.#gl.GL_FALSE || log != "") throw new Error("{PROGRAM-ERROR}: " + log);
  }

  /**
   * Use the Program.
   */
  use() {
    this.#gl.useProgram(this.id);
  }

  /**
   * Unbind program.
   */
  static unbind(gl) {
    gl.useProgram(null);
  }

  /**
   * Bind attributes inside the Program. [once]
   * ex:
   *    [
          ["aPos", 2, gl.FLOAT, 16, 0],
          ["aTex", 2, gl.FLOAT, 16, 8]
   *    ]
   *
   * @param {list of (string, number, enum, number, number)} attrs the attributes list
   */
  attributes(attrs) {
    this.attrs = attrs;
    attrs.forEach(([name, _, __, ___, ____], ind) => {
      this.#gl.bindAttribLocation(this.id, ind, name);
    });
  }

  /**
   * Enable all the attributes arrays and initialize their pointers data.
   */
  enableAttributes() {
    this.attrs.forEach(([_, count, type, size, offset], ind) => {
      this.#gl.enableVertexAttribArray(ind);
      this.#gl.vertexAttribPointer(ind, count, type, false, size, offset);
    });
  }

  /**
   * Disable all the attributes arrays.
   */
  disableAttributes() {
    this.attrs.forEach((_, ind) => {
      this.#gl.disableVertexAttribArray(ind);
    });
  }

  /**
   * Declare that a uniform exist. [once]
   *
   * @param {string} name the name of the uniform
   * @param {string} type the type of the uniform
   *
   * @return {object} a reference to the uniform obj
   */
  declareUniform(name, type) {
    const method = (id, value) => this["uniform" + type](id, value);
    const id = this.#gl.getUniformLocation(this.id, name);
    this[name] = { update: (value) => method(id, value), id };
    return this[name];
  }

  /**
   * Declare a list of uniform. [once]
   * ex:
   *   [
   *      ["uMatrix", "Matrix4fv"],
   *      ["uPos", "2fv"],
   *      ["uSize", "1f"]
   *   ]
   *
   * @param {list of (string, string)} uniforms the uniform list
   */
  declareUniforms(uniforms) {
    uniforms.forEach(([name, type]) => {
      this.declareUniform(name, type);
    });
  }

  /**
   * Set uniform value for the Program.
   * The Program must be in use.
   *
   * @param {number} id the uniform location
   * @param {?} value the uniform value
   */
  uniform1f(id, value) { this.#gl.uniform1f(id, value); }
  uniform1i(id, value) { this.#gl.uniform1i(id, value); }
  uniform2iv(id, value) { this.#gl.uniform2iv(id, value); }
  uniform2fv(id, value) { this.#gl.uniform2fv(id, value); }
  uniform3iv(id, value) { this.#gl.uniform3iv(id, value); }
  uniform3fv(id, value) { this.#gl.uniform3fv(id, value); }
  uniform4iv(id, value) { this.#gl.uniform4iv(id, value); }
  uniform4fv(id, value) { this.#gl.uniform4fv(id, value); }
  uniformMatrix2fv(id, value) { this.#gl.uniformMatrix2fv(id, false, value); }
  uniformMatrix3fv(id, value) { this.#gl.uniformMatrix3fv(id, false, value); }
  uniformMatrix4fv(id, value) { this.#gl.uniformMatrix4fv(id, false, value); }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/webgl/shader.js":
/*!**********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/webgl/shader.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shader": () => (/* binding */ Shader)
/* harmony export */ });
/** @author: Davide Risaliti davdag24@gmail.com */

/**
 * @class Shader representing an OpenGL shader
 */
class Shader {
  #gl;
  
  /**
   * Creates an instance of a Shader.
   *
   * @param {WebGLRenderingContext} gl the WebGL context
   * @param {gl.ENUM_TYPE} type the Shader type
   * @param {string} src the Shader source
   */
  constructor(gl, type, src) {
    this.#gl = gl;
    this.id = null;
    this.src = src;
    this.type = type;
    this.#compileShader();
  }

  /**
   * Compiles the Shader.
   *
   * @param {WebGLRenderingContext} gl the WebGL context
   * @param {gl.ENUM_TYPE} type the Shader type
   * @param {string} src the Shader source
   *
   * @throws an Error when the Shader does not compile successfully
   */
  #compileShader() {
    // Create shader object
    const shader = this.#gl.createShader(this.type);

    // Set source code
    this.#gl.shaderSource(shader, this.src);
  
    // Compile shader
    this.#gl.compileShader(shader);

    // Check compilation results
    const status = this.#gl.getShaderParameter(shader, this.#gl.COMPILE_STATUS);
    const log    = this.#gl.getShaderInfoLog(shader);

    // Validate shader
    if (status === this.#gl.GL_FALSE || log != "") throw new Error("{SHADER-ERROR}: " + log);
  
    // Result
    this.id = shader;
  }
}


/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/webgl/texture.js":
/*!***********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/webgl/texture.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Texture": () => (/* binding */ Texture)
/* harmony export */ });
/** @author: Davide Risaliti davdag24@gmail.com */

/**
 * @class Texture representing an OpenGL shader
 */
class Texture {
  #gl;
  
  /**
   * Creates an instance of a Texture.
   */
  constructor(gl, id, image) {
    this.#gl = gl;
    this.id = id;
    this.image = image;
    this.level = 0;
    this.internalFormat = gl.RGBA;
    this.srcFormat = gl.RGBA;
    this.srcType = gl.UNSIGNED_BYTE;
  }

  /**
   *
   */
  load() {
    this.#gl.bindTexture(this.#gl.TEXTURE_2D, this.id);
    this.#gl.texImage2D(
      this.#gl.TEXTURE_2D,
      this.level,
      this.internalFormat,
      this.srcFormat,
      this.srcType,
      this.image
    );
    this.#gl.bindTexture(this.#gl.TEXTURE_2D, null);
  }

  /**
   *
   */
  bind() {
    this.#gl.activeTexture(this.#gl.TEXTURE0);
    this.#gl.bindTexture(this.#gl.TEXTURE_2D, this.id);
    this.#gl.texParameteri(this.#gl.TEXTURE_2D, this.#gl.TEXTURE_WRAP_S, this.#gl.REPEAT);
    this.#gl.texParameteri(this.#gl.TEXTURE_2D, this.#gl.TEXTURE_WRAP_T, this.#gl.REPEAT);
    this.#gl.texParameteri(this.#gl.TEXTURE_2D, this.#gl.TEXTURE_MIN_FILTER, this.#gl.LINEAR);
    
  this.#gl.texParameteri(this.#gl.TEXTURE_2D, this.#gl.TEXTURE_MAG_FILTER, this.#gl.LINEAR);
    this.#gl.generateMipmap(this.#gl.TEXTURE_2D);
  }

  /**
   * Creates an instance of a Texture from an url.
   *
   * @param {string} url the url to download the texture from
   *
   * @return {Promise<Texture>} a promise with the texture
   */
  static fromUrl(gl, url) {
    return new Promise((res, rej) => {
      const image = new Image();
      image.onload = () => {
        const texture = gl.createTexture();
        res(new Texture(gl, texture, image));
      };
      image.onerror = (event) => {
        rej("Error loading the image.");
      };
      image.crossOrigin = '';
      image.src = url;
    });
  }
}

/***/ }),

/***/ "./node_modules/webgl-basic-lib/lib/webgl/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/webgl-basic-lib/lib/webgl/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardHandler": () => (/* binding */ KeyboardHandler),
/* harmony export */   "MouseHandler": () => (/* binding */ MouseHandler),
/* harmony export */   "ResizeHandler": () => (/* binding */ ResizeHandler),
/* harmony export */   "RetrieveWebGLContext": () => (/* binding */ RetrieveWebGLContext),
/* harmony export */   "SetKeyboardHandler": () => (/* binding */ SetKeyboardHandler),
/* harmony export */   "SetMouseHandler": () => (/* binding */ SetMouseHandler),
/* harmony export */   "SetResizeHandler": () => (/* binding */ SetResizeHandler)
/* harmony export */ });
/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all.js */ "./node_modules/webgl-basic-lib/lib/all.js");
/** @author: Davide Risaliti davdag24@gmail.com */



/**
 * Retrieve OpenGL ES context.
 * 
 * @params {string} elementId the id of the canvas element to use
 *
 * @throws an Error when the Context cannot be retrieved
 * 
 * @return {WebGLRenderingContext} the retrieved context
 */
function RetrieveWebGLContext(elementId) {
  // Find element
  const canvas = document.getElementById(elementId);

  // Check for errors
  if (canvas == null) throw new Error("Invalid element id");

  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Check for errors
  if (gl == null) throw new Error("WebGL is not supported");

  // Insert canvas ref into gl context
  gl.canvasEl = canvas;

  // Result
  return gl;
}

/**
 * Interface for the Mouse listener
 */
class MouseHandler {
  onMouseDown(event, mousePos) {}
  onMouseMove(event, mousePos) {}
  onMouseUp(event, mousePos) {}
  onMouseWheel(event, mousePos) {}
  onMouseOut(event) {}
}

/**
 * Add an handler for common pointer operations and compute the position mapping process.
 * 
 * @params {string} elementId the id of the canvas element to use
 * 
 * @params {object} handler an object that implements the callbacks
 */
function SetMouseHandler(elementId, handler) {
  // Find element
  const canvas = document.getElementById(elementId);

  // Helper function to compute position
  function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop  - el.scrollTop  + el.clientTop);
      el = el.offsetParent;
    }    
    return new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2(xPosition, yPosition);
  }

  // Store position
  const canvasPos = getPosition(canvas);

  // Lambda to help readability
  const mousePos = (event) => new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2(event.clientX, event.clientY).sub(canvasPos);

  // Register to events
  canvas.addEventListener("mousedown", (event) => handler.onMouseDown(event, mousePos(event)));
  canvas.addEventListener("mousemove", (event) => handler.onMouseMove(event, mousePos(event)));
  canvas.addEventListener("mouseup", (event) => handler.onMouseUp(event, mousePos(event)));
  canvas.addEventListener("wheel", (event) => handler.onMouseWheel(event, mousePos(event)));
  canvas.addEventListener("mouseleave", (event) => handler.onMouseOut(event));
}

/**
 * Interface for the Keyboard listener
 */
class KeyboardHandler {
  OnKeyDown(event) {}
  OnKeyUp(event) {}
}

/**
 * Add an handler for common keyboard events.
 * 
 * @params {string} elementId the id of the canvas element to use
 * 
 * @params {object} handler an object that implements the callbacks
 */
function SetKeyboardHandler(elementId, handler) {
  // Find element
  const canvas = document.getElementById(elementId);

  // Register to events
  document.addEventListener("keydown", (event) => handler.OnKeyDown(event));
  document.addEventListener("keyup", (event) => handler.OnKeyUp(event));
}

/**
 * Interface for the Keyboard listener
 */
class ResizeHandler {
  OnResize(canvasSize, contextSize) {}
}

/**
 * Add an handler for the resize event.
 * 
 * @params {string} elementId the id of the canvas element to use
 * 
 * @params {object} handler an object that implements the callbacks
 * 
 * @throws Error when the resize event is not supported
 */
function SetResizeHandler(elementId, handler) {
  // Find element
  const canvas = document.getElementById(elementId);

  // Resize helper function
  function onResize(entries) {
    entries.forEach((entry) => {
      if (entry.devicePixelContentBoxSize) {
        const cWidth = entry.borderBoxSize[0].inlineSize;
        const cHeight = entry.borderBoxSize[0].blockSize;
        const glWidth = entry.devicePixelContentBoxSize[0].inlineSize;
        const glHeight = entry.devicePixelContentBoxSize[0].blockSize;
        const canvasSize = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2(cWidth, cHeight).round(0);
        const contextSize = new _all_js__WEBPACK_IMPORTED_MODULE_0__.Vec2(glWidth, glHeight).round(0);
        handler.OnResize(canvasSize, contextSize);
      } else {
        throw new Error("Unsupported resize event");
      }
    });
  }

  // Create observer
  const obs = new ResizeObserver(onResize);

  // Register to resize event
  obs.observe(canvas, {box: "content-box"});
}


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _objs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objs/index.js */ "./src/objs/index.js");
/* harmony import */ var _objs_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objs/point.js */ "./src/objs/point.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyboard.js */ "./src/keyboard.js");
/* harmony import */ var _mat4extension_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat4extension.js */ "./src/mat4extension.js");
/* harmony import */ var _debugShader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debugShader.js */ "./src/debugShader.js");









const fpsDiv = document.getElementById('fps-counter');


const pointLightOff = {
    name: "PointLightOff",
    enabled: true,
    position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0, 0),
    color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
    linear: 0.09,
    quadratic: 0.032,
    ambient: 0,
    diffuse: 0,
    specular: 0,
}
const spotLightOff = {
    name: "SpotLightOff",
    enabled: true,
    position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0),
    direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0),
    color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
    cutOff: (0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(12),
    outerCutOff: (0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(15),
    linear: 0.09,
    quadratic: 0.032,
    ambient: 0,
    diffuse: 0,
    specular: 0,
}

class App {
    stack = new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.MatrixStack();
    cameras = {
        values: [{
            // name: "Stationary",
            // matrix: () => Mat4.LookAt(new Vec3(0, 3, -3), new Vec3(0, 0, 0), new Vec3(0, 1, 0)),
            name: "Stationary",
            matrix: () => webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(40, 14, 50), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0)),
        }, {
            name: "Side",
            matrix: () => webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(-30, 1, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0)),
        }],
        activeIndex: 0,
    }
    lights = {
        directional: {
            values: [{
                name: "Day",
                direction: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, -1.5, 1).normalize(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.1,
            }, {
                name: "Sunset",
                direction: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, -0.5, 1).normalize(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 0.8, 0.8),
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.1,
            }, {
                name: "Night",
                direction: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, -1, 1).normalize(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
                ambient: 0.005,
                diffuse: 0.005,
                specular: 0.005,
            }, {
                name: "No Light",
                direction: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, -1, 1).normalize(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
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
    skyboxes = _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.skyboxesGroup;

    glViewport = {
        width: 1024,
        height: 576
    }


    constructor(gl) {
        /** @type {WebGLRenderingContext} */
        this.gl = gl;
        this.drawPoint = new _objs_point_js__WEBPACK_IMPORTED_MODULE_4__.Point();
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

        for (const obj of _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.objGroups) {
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
        for (const ground of _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.elements) {
            ground.setup(this.gl);
        }
        for (const skybox of this.skyboxes.elements) {
            skybox.setup(this.gl);
        }

        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.registerCamerasDropdown)(this.cameras);
        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.registerSkyboxDropdown)(this.skyboxes);
        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.registerLightsOnOffHandler)(this.lights);
        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.registerNightMode)(this)

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
                    _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.objGroups.forEach(objs => objs.elements.forEach(obj => obj.update(dt)));
                    await this.#draw();

                    window.requestAnimationFrame(mainLoop);
                } catch (err) {
                    console.error(err);
                    _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error(err);
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
        const orthogonal = (0,_mat4extension_js__WEBPACK_IMPORTED_MODULE_6__.Orthogonal)(-58, 58, -58, 58, 0.1, 100)
        this.stack.push(orthogonal);

        // directional light view matrix
        const lightPosition = this.lights.directional.values[this.lights.directional.activeIndex].direction.clone().mul(-50);
        const lightView = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(lightPosition, new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0));
        const lightViewProj = this.stack.push(lightView);

        this.gl.enable(this.gl.DEPTH_TEST);

        // actual draw shadow map
        for (const obj of _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.objGroups) {
            await obj.setupShadowDraw(this.gl);
            obj.elements.forEach(el => el.shadowDraw(this.gl, this.stack));
            obj.teardownDraw(this.gl);
        };

        this.gl.disable(this.gl.CULL_FACE);
        this.gl.cullFace(this.gl.FRONT);

        await _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.setupShadowDraw(this.gl);
        _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.elements.forEach(el => el.shadowDraw(this.gl, this.stack));
        _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.teardownDraw(this.gl);

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
        const perspective = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Perspective((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(45), 16 / 9, 0.1, 1000);
        this.stack.push(perspective);

        // create camera matrix
        const camera = this.cameras.values[this.cameras.activeIndex].matrix();
        const cameraWithoutTranslation = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.FromArrayRM([
            ...camera.row(0).toVec3().toVec4(0).values,
            ...camera.row(1).toVec3().toVec4(0).values,
            ...camera.row(2).toVec3().toVec4(0).values,
            ...new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0, 0, 0, 1).values,
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
            size: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec2(this.shadowFrameBuffer.width, this.shadowFrameBuffer.height),
        }

        for (const obj of _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.objGroups) {
            await obj.setupDraw(this.gl, actualLights, lightViewProj, shadowMap);
            obj.elements.forEach(el => el.draw(this.gl, this.stack, camera));
            obj.teardownDraw(this.gl);
        };
        await _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.setupDraw(this.gl, actualLights, lightViewProj, shadowMap);
        _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.elements.forEach(el => el.draw(this.gl, this.stack, camera));
        _objs_index_js__WEBPACK_IMPORTED_MODULE_3__.groundGroup.teardownDraw(this.gl);

        this.gl.disable(this.gl.DEPTH_TEST);

        if (_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.keyboard.isPressed('p')) {
            const points = this.lights.pointLight.values.map(l => l.position().values)
                .concat(this.lights.spotLight.values.map(l => l.position().values))
                .flatMap(p => [...p]);

            await _objs_point_js__WEBPACK_IMPORTED_MODULE_4__.Point.setupDraw(this.gl);
            this.drawPoint.draw(this.gl, this.stack, points);
            _objs_point_js__WEBPACK_IMPORTED_MODULE_4__.Point.teardownDraw(this.gl);
        }
        if (_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.keyboard.isPressed('o')) {
            const points = this.cameras.values.map(c => c.matrix().clone().inverse().col(3).toVec3().values)
                .flatMap(p => [...p]);

            await _objs_point_js__WEBPACK_IMPORTED_MODULE_4__.Point.setupDraw(this.gl);
            this.drawPoint.draw(this.gl, this.stack, points);
            _objs_point_js__WEBPACK_IMPORTED_MODULE_4__.Point.teardownDraw(this.gl);
        }

        // pop camera and perspective
        this.stack.pop();
        this.stack.pop();
    }
}

/***/ }),

/***/ "./src/debugShader.js":
/*!****************************!*\
  !*** ./src/debugShader.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebugTexture": () => (/* binding */ DebugTexture)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _drawable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawable.js */ "./src/drawable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");





class DebugTexture extends _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    draw(/** @type {WebGLRenderingContext} */ gl, texture) {
        gl.useProgram(DebugTexture.programShader);

        const square = [[-1, -1, 0], [-1, 1, 0], [1, -1, 0], [-1, 1, 0], [1, -1, 0], [1, 1, 0]].flat();

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(square), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(DebugTexture.uniformLocations.uTexture, 0);

        // draw
        gl.drawArrays(gl[DebugTexture.glMode], 0, square.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    static glMode = "TRIANGLES";
    static vertexShaderSource = `
    precision mediump float;
    
    // position
    attribute vec3 aPosition;
    
    // texture
    varying vec2 vTexCoord;
    
    void main(void) {
        vTexCoord = aPosition.xy * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 1.0);
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    
    void main(void) {
        float depth = texture2D(uTexture, vTexCoord).r;
        gl_FragColor = vec4(vec3(depth), 1.0);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable._setupDraw.bind(DebugTexture)(gl, null,
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
            },
            async (/** @type {WebGLProgram} */ program) => {
                DebugTexture.uniformLocations.uTexture = gl.getUniformLocation(program, "uTexture");
            }
        );
    }

    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

/***/ }),

/***/ "./src/drawable.js":
/*!*************************!*\
  !*** ./src/drawable.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawable": () => (/* binding */ Drawable)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");



function checkGL(tag, log) {
    if (log !== "") {
        const err = new Error(`${tag} ${log}`.split("\n").join(""));
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error(err);
        console.error(err);
        throw err;
    }
}

class Drawable {
    constructor(data, mat = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()) {
        this.data = data;
        this.mat = mat;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        this.buffers = {
            position: {
                value: gl.createBuffer(),
                dirty: true,
            },
            texCoord: {
                value: gl.createBuffer(),
                dirty: true,
            },
            normal: {
                value: gl.createBuffer(),
                dirty: true,
            },

            // TODO: delete these ones
            color: {
                value: gl.createBuffer(),
                dirty: true,
            },
            element: {
                value: gl.createBuffer(),
                dirty: true,
            },
        };
    }

    data = {}
    buffers = {}
    mat = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()

    static async _setupDraw(/** @type {WebGLRenderingContext} */ gl, before = null, preLink = async (/** @type {WebGLProgram} */ program) => { }, post = null) {
        if (!this.programShader) {
            if (before) {
                await before();
            }

            // create and compile vertex shader
            this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(this.vertexShader, this.vertexShaderSource);
            gl.compileShader(this.vertexShader);
            checkGL("VS:", gl.getShaderInfoLog(this.vertexShader));

            // create and compile fragment shader
            this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(this.fragmentShader, this.fragmentShaderSource);
            gl.compileShader(this.fragmentShader);
            checkGL("FS: ", gl.getShaderInfoLog(this.fragmentShader));

            // create and compile program and link shaders
            this.programShader = gl.createProgram();
            gl.attachShader(this.programShader, this.vertexShader);
            gl.attachShader(this.programShader, this.fragmentShader);

            await preLink(this.programShader);

            gl.linkProgram(this.programShader);
            checkGL("PS: ", gl.getProgramInfoLog(this.programShader));

            if (post) {
                await post(this.programShader);
            }
        }
    }

    draw() { }
    update(dt) { }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerCamerasDropdown": () => (/* binding */ registerCamerasDropdown),
/* harmony export */   "registerLightsOnOffHandler": () => (/* binding */ registerLightsOnOffHandler),
/* harmony export */   "registerNightMode": () => (/* binding */ registerNightMode),
/* harmony export */   "registerSkyboxDropdown": () => (/* binding */ registerSkyboxDropdown)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");


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

;
_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug = true;

window.onload = () => {
    try {
        const gl = getWebGlContext()
        const app = new _app_js__WEBPACK_IMPORTED_MODULE_0__["default"](gl)

        registerClickHandlers(app);
        registerWindowResizeHandler(app);

        app.run()
    } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error(error)
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

function registerCamerasDropdown(cameras) {
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

function registerSkyboxDropdown(skyboxGroup) {
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

function registerLightsOnOffHandler(lights) {
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

function registerNightMode(app) {
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

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboard": () => (/* binding */ keyboard)
/* harmony export */ });
const keyboard = {
    isPressed(key) {
        return this.hasOwnProperty(key) && this[key];
    }
};

document.addEventListener("keydown", (event) => {
    keyboard[event.key] = true;
});
document.addEventListener("keyup", (event) => {
    keyboard[event.key] = false;
});



/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let logs = document.getElementById("logs");

class Logger {
    debug = false;

    d(msg, debug) { this.#log(`[DEBUG]: ${msg}`, "black", debug ?? this.debug) }
    i(msg, debug) { this.#log(`[INFO]: ${msg}`, "blue", debug ?? this.debug) }
    w(msg, debug) { this.#log(`[WARN]: ${msg}`, "orange", debug ?? this.debug) }
    e(msg, debug) { this.#log(`[ERROR]: ${msg}`, "red", debug ?? this.debug) }
    #log(message, color, debug = this.debug) {
        let log = document.createElement("div");
        log.style.color = color;
        log.style.fontFamily = "monospace, monospace";
        log.appendChild(document.createTextNode(message));

        if (debug) {
            new Error().stack.split("\n").slice(3).forEach(line => {
                const stackText = document.createElement("div");
                stackText.innerText = line;
                stackText.style.paddingLeft = "30px";
                log.appendChild(stackText);
            });
            log.style.marginBottom = "10px";
        }

        while (logs.childElementCount > 50) {
            logs.removeChild(logs.firstChild);
        }
        
        logs.appendChild(log);
        logs.scrollTop = logs.scrollHeight;
    }
    error(err, debug = this.debug) {
        let log = document.createElement("div");
        log.style.color = "red";
        log.style.fontFamily = "monospace, monospace";
        log.appendChild(document.createTextNode(`[ERROR]: ${err.stack.split("\n")[0]}`));
        
        if (debug) {
            err.stack.split("\n").slice(1).forEach(line => {
                const stackText = document.createElement("div");
                stackText.innerText = line;
                stackText.style.paddingLeft = "30px";
                log.appendChild(stackText);
            });
            log.style.marginBottom = "10px";
        }

        while (logs.childElementCount > 50) {
            logs.removeChild(logs.firstChild);
        }
        
        logs.appendChild(log);
        logs.scrollTop = logs.scrollHeight;
    }
}

const logger = new Logger();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ "./src/mat4extension.js":
/*!******************************!*\
  !*** ./src/mat4extension.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Orthogonal": () => (/* binding */ Orthogonal)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");


/**
 * Create the Orthogonal matrix.
 *
 * @param {number} left the left bound of the frustum
 * @param {number} right the right bound of the frustum
 * @param {number} bottom the bottom bound of the frustum
 * @param {number} top the top bound of the frustum
 * @param {number} near the near bound of the frustum
 * @param {number} far the far bound of the frustum
 *
 * @return {Mat} the newly created Mat4
 */
function Orthogonal(left, right, bottom, top, near, far) {
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);

    const arr = new Array(16);

    arr[0] = -2 * lr;
    arr[1] = 0;
    arr[2] = 0;
    arr[3] = 0;
    arr[4] = 0;
    arr[5] = -2 * bt;
    arr[6] = 0;
    arr[7] = 0;
    arr[8] = 0;
    arr[9] = 0;
    arr[10] = 2 * nf;
    arr[11] = 0;
    arr[12] = (left + right) * lr;
    arr[13] = (top + bottom) * bt;
    arr[14] = (far + near) * nf;
    arr[15] = 1;

    return webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.FromArrayCM(arr);
}

/***/ }),

/***/ "./src/objs/car.js":
/*!*************************!*\
  !*** ./src/objs/car.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Car": () => (/* binding */ Car),
/* harmony export */   "car": () => (/* binding */ car)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keyboard.js */ "./src/keyboard.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obj.js */ "./src/objs/obj.js");





class Car extends _obj_js__WEBPACK_IMPORTED_MODULE_3__.Obj {
    constructor(data, mat = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity(), modelDirection = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()) {
        super(data, mat);
        this.modelDirection = modelDirection;
    }

    update(dt) {
        const forwardSpeed = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("w") ? -1 : 0;
        const backwardsSpeed = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("s") ? 1 : 0;
        const movementSpeed = (forwardSpeed + backwardsSpeed) * (dt / 50)

        const movement = new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(
            0,
            0,
            movementSpeed
        )

        const leftSpeed = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("a") ? 1 : 0;
        const rightSpeed = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("d") ? -1 : 0;
        // rotate only if car is moving and "handle" backwards turning
        const rotationSpeed = ((leftSpeed + rightSpeed) * (dt / 10)) * (movementSpeed > 0 ? -1 : 1);

        this.mat
            .rotate((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(rotationSpeed), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            .translate(movement);

        if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("q")) {
            this.mat.translate(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0).mul(dt / 50));
        }
        if (_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("e")) {
            this.mat.translate(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, -1, 0).mul(dt / 50));
        }

        const brakesOn = _keyboard_js__WEBPACK_IMPORTED_MODULE_1__.keyboard.isPressed("j")
        this.lights.spotLight.filter(light => ["BrakeLeft", "BrakeRight"].includes(light.name))
            .forEach(light => {
                light.enabled = brakesOn;
            });
        this.lights.spotLight.filter(light => ["RearRight", "RearLeft"].includes(light.name))
            .forEach(light => {
                light.enabled = movementSpeed > 0;
            });
    }

    cameras = [{
        name: "Chasing",
        matrix: () => {
            const lookAt = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 4, 15), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Chasing Close",
        matrix: () => {
            const lookAt = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 2, 7), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Reverse",
        matrix: () => {
            const lookAt = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 4, -15), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Reverse Close",
        matrix: () => {
            const lookAt = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 2, -9), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        },
    }, {
        name: "Car Front",
        matrix: () => {
            const lookAt = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.LookAt(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1.1, -0.7), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, -15), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            const mat = this.mat.clone().inverse();

            return lookAt.apply(mat);
        }
    }]

    lights = {
        spotLight: [
            {
                name: "HeadlightLeft",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(-0.725, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(7)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(15)),
                linear: 0.003,
                quadratic: 0.0032,
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.2,
            }, {
                name: "HeadLightRight",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.725, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(7)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(15)),
                linear: 0.003,
                quadratic: 0.0032,
                ambient: 0.5,
                diffuse: 0.8,
                specular: 0.2,
            }, {
                name: "BrakeLeft",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(-0.875, 0.83, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 0, 0),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(50)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(70)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.2,
                diffuse: 0.8,
                specular: 0.5,
            }, {
                name: "BrakeRight",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.875, 0.83, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 0, 0),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(50)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(70)),
                linear: 0.1,
                quadratic: 0.1,
                ambient: 0.2,
                diffuse: 0.8,
                specular: 0.5,
            }, {
                name: "RearDirectionalLeft",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(-0.875, 0.725, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(-0.5, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(20)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(40)),
                linear: 0.3,
                quadratic: 0.3,
                ambient: 0.2,
                diffuse: 0.5,
                specular: 0.5,
                on: false
            }, {
                name: "RearDirectionalRight",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.875, 0.725, 1.73, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.5, -0.1, 1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(20)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(40)),
                linear: 0.3,
                quadratic: 0.3,
                ambient: 0.2,
                diffuse: 0.5,
                specular: 0.5,
                on: false
            }, {
                name: "FrontDirectionalLeft",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(-0.89, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(-0.5, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(20)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(40)),
                linear: 0.3,
                quadratic: 0.3,
                ambient: 0.4,
                diffuse: 0.5,
                specular: 0.5,
                on: false,
            }, {
                name: "FrontDirectionalRight",
                enabled: false,
                position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.89, 0.78, -1.65, 1).transform(this.mat).toVec3(),
                direction: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.5, -0.1, -1, 0).transform(this.mat).toVec3(),
                color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(255 / 255, 95 / 255, 31 / 255),
                cutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(20)),
                outerCutOff: Math.cos((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(40)),
                linear: 0.3,
                quadratic: 0.3,
                ambient: 0.4,
                diffuse: 0.5,
                specular: 0.5,
                on: false,
            },
            // {
            //     name: "RearRight",
            //     enabled: true,
            //     position: () => new Vec4(0.875, 0.66, 1.73, 1).transform(this.mat).toVec3(),
            //     direction: () => new Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
            //     color: new Vec3(1, 1, 1),
            //     cutOff: Math.cos(toRad(15)),
            //     outerCutOff: Math.cos(toRad(30)),
            //     linear: 0.1,
            //     quadratic: 0.1,
            //     ambient: 0.3,
            //     diffuse: 0.8,
            //     specular: 0.5,
            // }, {
            //     name: "RearLeft",
            //     enabled: true,
            //     position: () => new Vec4(-0.875, 0.66, 1.73, 1).transform(this.mat).toVec3(),
            //     direction: () => new Vec4(0, -0.1, 1, 0).transform(this.mat).toVec3(),
            //     color: new Vec3(1, 1, 1),
            //     cutOff: Math.cos(toRad(15)),
            //     outerCutOff: Math.cos(toRad(30)),
            //     linear: 0.1,
            //     quadratic: 0.1,
            //     ambient: 0.1,
            //     diffuse: 0.8,
            //     specular: 0.5,
            // },
        ]
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        setInterval(() => {
            this.lights.spotLight.filter(l => ["RearDirectionalLeft", "RearDirectionalRight", "FrontDirectionalLeft", "FrontDirectionalRight"].includes(l.name))
                .forEach(l => {
                    if (l.on) {
                        l.enabled = !l.enabled;
                    } else {
                        l.enabled = false;
                    }
                });
        }, 500);

        await super.setup(gl);
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack, camera) {
        this.mat.apply(this.modelDirection);
        super.draw(gl, stack, camera);
        this.mat.apply(this.modelDirection.inverse());
    }

    shadowDraw(/** @type {WebGLRenderingContext} */ gl, stack) {
        this.mat.apply(this.modelDirection);
        super.shadowDraw(gl, stack);
        this.mat.apply(this.modelDirection.inverse());
    }
}

const car = new Car(
    {
        urls: {
            obj: "../../assets/objs/car/car.obj",
            texture: "../../assets/textures/car/color.jpg",
        }
    },
    webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity().rotate((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(180), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0)).translate(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 30)),
    webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity().rotate((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(180), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
);



/***/ }),

/***/ "./src/objs/ground.js":
/*!****************************!*\
  !*** ./src/objs/ground.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ground": () => (/* binding */ Ground),
/* harmony export */   "ground": () => (/* binding */ ground)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obj.js */ "./src/objs/obj.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




class Ground extends _obj_js__WEBPACK_IMPORTED_MODULE_1__.Obj {
    async setup(/** @type {WebGLRenderingContext} */ gl) {
        await super.setup(gl, true);

        this.texture = gl.createTexture();
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadTexture)(gl, this.texture, this.data.urls.texture, {
            textureKind: gl.TEXTURE_2D,
            target: gl.TEXTURE_2D,
            textureWrap: gl.REPEAT,
            mipmap: true
        })
    }
}

const grassSize = 80;
const roadLength = grassSize;

const ground = [
    new Ground({
        vertices: new Float32Array([
            -1, 0, 1,
            1, 0, 1,
            -1, 0, -1,

            -1, 0, -1,
            1, 0, 1,
            1, 0, -1,
        ]),
        texCoords: new Float32Array([
            0, grassSize / 10,
            grassSize / 10, grassSize / 10,
            0, 0,
            0, 0,
            grassSize / 10, grassSize / 10,
            grassSize / 10, 0,
        ]),
        normals: new Float32Array([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]),
        urls: {
            texture: "../../assets/textures/ground/grass/Grass_005_BaseColor.jpg",
        }
    }, webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity().scale(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(grassSize / 2, 1, grassSize / 2))),
    new Ground({
        vertices: new Float32Array([
            -1, 0, 1,
            1, 0, 1,
            -1, 0, -1,

            -1, 0, -1,
            1, 0, 1,
            1, 0, -1,
        ]),
        texCoords: new Float32Array([
            0, grassSize / 10,
            1, grassSize / 10,
            0, 0,
            0, 0,
            1, grassSize / 10,
            1, 0,
        ]),
        normals: new Float32Array([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]),
        urls: {
            texture: "../../assets/textures/ground/road/Road_001_basecolor.jpg",
        }
    }, webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity().scale(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(4, 1, roadLength / 2)).translate(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0.01, 0))),
]



/***/ }),

/***/ "./src/objs/index.js":
/*!***************************!*\
  !*** ./src/objs/index.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groundGroup": () => (/* binding */ groundGroup),
/* harmony export */   "objGroups": () => (/* binding */ objGroups),
/* harmony export */   "skyboxesGroup": () => (/* binding */ skyboxesGroup)
/* harmony export */ });
/* harmony import */ var _ground_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground.js */ "./src/objs/ground.js");
/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car.js */ "./src/objs/car.js");
/* harmony import */ var _skybox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skybox.js */ "./src/objs/skybox.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obj.js */ "./src/objs/obj.js");

// import { objs, Obj } from "./obj.js";




const objGroups = [
    {
        name: "car",
        setupDraw: _car_js__WEBPACK_IMPORTED_MODULE_1__.Car.setupDraw,
        teardownDraw: _car_js__WEBPACK_IMPORTED_MODULE_1__.Car.teardownDraw,
        setupShadowDraw: _car_js__WEBPACK_IMPORTED_MODULE_1__.Car.setupShadowDraw,
        elements: [_car_js__WEBPACK_IMPORTED_MODULE_1__.car],
    },
    {
        name: "objs",
        setupDraw: _obj_js__WEBPACK_IMPORTED_MODULE_3__.Obj.setupDraw,
        teardownDraw: _obj_js__WEBPACK_IMPORTED_MODULE_3__.Obj.teardownDraw,
        setupShadowDraw: _obj_js__WEBPACK_IMPORTED_MODULE_3__.Obj.setupShadowDraw,
        elements: [..._obj_js__WEBPACK_IMPORTED_MODULE_3__.objs],
    },
];

const groundGroup = {
    name: "ground",
    setupDraw: _ground_js__WEBPACK_IMPORTED_MODULE_0__.Ground.setupDraw,
    teardownDraw: _ground_js__WEBPACK_IMPORTED_MODULE_0__.Ground.teardownDraw,
    setupShadowDraw: _ground_js__WEBPACK_IMPORTED_MODULE_0__.Ground.setupShadowDraw,
    elements: [..._ground_js__WEBPACK_IMPORTED_MODULE_0__.ground],
}

const skyboxesGroup = {
    name: "skybox",
    setupDraw: _skybox_js__WEBPACK_IMPORTED_MODULE_2__.Skybox.setupDraw,
    teardownDraw: _skybox_js__WEBPACK_IMPORTED_MODULE_2__.Skybox.teardownDraw,
    elements: [..._skybox_js__WEBPACK_IMPORTED_MODULE_2__.skyboxes],
    activeIndex: 0,
}



/***/ }),

/***/ "./src/objs/obj.js":
/*!*************************!*\
  !*** ./src/objs/obj.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Obj": () => (/* binding */ Obj),
/* harmony export */   "objs": () => (/* binding */ objs)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _drawable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawable.js */ "./src/drawable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");





class Obj extends _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    constructor(data, mat = new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4(), textureOptions) {
        super(data, mat);
        this.textureOptions = textureOptions;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl, isChild = false) {
        await super.setup(gl);

        if (!isChild) {
            this.texture = gl.createTexture();
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadTexture)(gl, this.texture, this.data.urls.texture, {
                textureKind: gl.TEXTURE_2D,
                target: gl.TEXTURE_2D,
                mipmap: true
            })

            if (this.data.urls.obj) {
                const objs = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadObj)(this.data.urls.obj);
                const mainObj = objs.shift(1);

                console.log(mainObj)

                this.data = {
                    ...this.data,
                    vertices: new Float32Array(mainObj.vertices),
                    texCoords: new Float32Array(mainObj.texCoords),
                    normals: new Float32Array(mainObj.normals),
                }

                this.children = objs.map(obj => {
                    const child = new Obj({
                        vertices: new Float32Array(obj.vertices),
                        texCoords: new Float32Array(obj.texCoords),
                        normals: new Float32Array(obj.normals),
                    }, this.mat);

                    child.texture = this.texture;
                    return child;
                })

                await Promise.all(this.children.map(child => child.setup(gl, true)));
            }
        }

        this.isLoaded = true;
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack, camera) {
        if (!this.isLoaded) {
            return;
        }

        gl.useProgram(Obj.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // texCoord
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.texCoord.value);
        if (this.buffers.texCoord.dirty) {
            this.buffers.texCoord.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.texCoords, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);

        // normal
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.normal.value);
        if (this.buffers.normal.dirty) {
            this.buffers.normal.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.normals, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatModel, false, this.mat.values);
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatModelInverseTranspose, false, this.mat.clone().inverse().transpose().values);
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatViewProjection, false, stack.head().values);
        gl.uniform3fv(Obj.uniformLocations.uViewPos, camera.clone().inverse().col(3).toVec3().values);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(Obj.uniformLocations.uColorTexture, 0);

        // draw
        gl.drawArrays(gl[Obj.glMode], 0, this.data.vertices.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (this.children) {
            this.children.forEach(child => child.draw(gl, stack, camera));
        }
    }

    static glMode = "TRIANGLES";
    static types = `
    `
    static vertexShaderSource = `
    precision mediump float;
    
    // position
    attribute vec3 aPosition;
    uniform mat4 uMatModel;
    uniform mat4 uMatModelInverseTranspose;
    uniform mat4 uMatViewProjection;
    uniform mat4 uMatLightSpaceViewProjection;
    varying vec3 vWorldSpacePosition;
    varying vec4 vLightSpacePosition;
    
    // texture
    attribute vec2 aTexCoord;
    varying vec2 vTexCoord;
    
    // normal
    attribute vec3 aNormal;
    varying vec3 vNormal;
    
    void main(void) {
        vTexCoord = aTexCoord;
        vNormal = mat3(uMatModelInverseTranspose) * aNormal;
        vWorldSpacePosition = (uMatModel * vec4(aPosition, 1.0)).xyz;
        vLightSpacePosition = uMatLightSpaceViewProjection * vec4(vWorldSpacePosition, 1.0);
        vLightSpacePosition = vec4(vLightSpacePosition.xyz + vNormal * 4.0 * (1.0 / 4096.0), 1.0);
        gl_Position = uMatViewProjection * uMatModel * vec4(aPosition, 1.0);
    }
    `;

    static fragmentShaderSource = `
    precision mediump float;
    
    // define types
    struct DirectionalLight {
        vec3 direction;
        vec3 color;
        
        float ambient;
        float diffuse;
        float specular;
    };
    
    struct PointLight {    
        vec3 position;
        vec3 color;
        
        float linear;
        float quadratic;
        
        float ambient;
        float diffuse;
        float specular;
    }; 
    
    struct SpotLight {
        vec3 position;
        vec3 direction;
        vec3 color;
        float cutOff;
        float outerCutOff;
    
        float linear;
        float quadratic;
    
        float ambient;
        float diffuse;
        float specular;       
    };

    // position
    varying vec3 vWorldSpacePosition;
    varying vec4 vLightSpacePosition;
    
    // texture
    uniform sampler2D uColorTexture;
    uniform sampler2D uShadowMap;
    uniform vec2 uShadowMapSize;
    varying vec2 vTexCoord;
    
    // normal
    varying vec3 vNormal;
    
    // light
    uniform vec3 uViewPos;
    uniform DirectionalLight uDirectionalLight;
    uniform PointLight uPointLight[N_POINTLIGHTS];
    uniform SpotLight uSpotLight[N_SPOTLIGHTS];

    float calculateShadow(vec4 lightSpacePosition, vec3 norm, vec3 lightDir) {
        // float shadowBias = max(0.005 * (1.0 - dot(norm, lightDir)), 0.0005);
        // float shadowBias = 0.001;
        float shadowBias = 0.0;

        // perform perspective divide
        vec3 projCoords = lightSpacePosition.xyz / lightSpacePosition.w;
        projCoords = projCoords * 0.5 + 0.5; // map to [0, 1]
        
        float closestDepth = texture2D(uShadowMap, projCoords.xy).r;   
        float currentDepth = projCoords.z;

        float shadow = 0.0;
        vec2 texelSize = 1.0 / uShadowMapSize;
        for(int x = -1; x <= 1; ++x)
        {
            for(int y = -1; y <= 1; ++y)
            {
                float pcfDepth = texture2D(uShadowMap, projCoords.xy + vec2(x, y) * texelSize).r; 
                shadow += currentDepth - shadowBias > pcfDepth ? 1.0 : 0.0;        
            }    
        }
        shadow /= 9.0;

        return shadow;
    }

    vec3 calculateDirectionalLight(DirectionalLight light, vec3 norm, vec3 viewDir) {
        vec3 lightDir = normalize(-uDirectionalLight.direction);

        float diff = max(dot(vNormal, lightDir), 0.0);

        // vec3 reflectDir = reflect(-lightDir, norm);
        vec3 halfwayDir = normalize(lightDir + viewDir); 
        float spec = pow(max(dot(viewDir, halfwayDir), 0.0), 2.0);

        vec3 color = texture2D(uColorTexture, vTexCoord).rgb;
        vec3 ambient = light.ambient * color;
        vec3 diffuse = light.diffuse * diff * color;
        vec3 specular = light.specular * spec * vec3(1, 1, 1);

        float shadow = calculateShadow(vLightSpacePosition, norm, lightDir);

        return (ambient + (1.0 - shadow) * (diffuse + specular)) * light.color;
    }
    vec3 calculatePointLight(PointLight light, vec3 norm, vec3 worldSpacePosition, vec3 viewDir) {
        vec3 lightDir = normalize(light.position - worldSpacePosition);

        float diff = max(dot(norm, lightDir), 0.0);

        // vec3 reflectDir = reflect(-lightDir, norm);
        vec3 halfwayDir = normalize(lightDir + viewDir); 
        float spec = pow(max(dot(viewDir, halfwayDir), 0.0), 2.0);

        float distance = length(light.position - worldSpacePosition);
        float attenuation = 1.0 / (1.0 + light.linear * distance + (light.quadratic * distance * distance));

        vec3 color = texture2D(uColorTexture, vTexCoord).rgb;
        vec3 ambient = light.ambient * color;
        vec3 diffuse = light.diffuse * diff * color;
        vec3 specular = light.specular * spec * vec3(1, 1, 1);
        ambient *= attenuation;
        diffuse *= attenuation;
        specular *= attenuation;

        return (ambient + diffuse + specular) * light.color;
    }
    vec3 calculateSpotLight(SpotLight light, vec3 norm, vec3 worldSpacePosition, vec3 viewDir) {
        vec3 lightDir = normalize(light.position - worldSpacePosition);

        float diff = max(dot(norm, lightDir), 0.0);

        // vec3 reflectDir = reflect(-lightDir, norm);
        vec3 halfwayDir = normalize(lightDir + viewDir); 
        float spec = pow(max(dot(viewDir, halfwayDir), 0.0), 2.0);

        float distance = length(light.position - worldSpacePosition);
        float attenuation = 1.0 / (1.0 + light.linear * distance + (light.quadratic * distance * distance));

        float theta = dot(lightDir, normalize(-light.direction));
        float epsilon = light.cutOff - light.outerCutOff;
        float intensity = clamp((theta - light.outerCutOff) / epsilon, 0.0, 1.0);

        vec3 color = texture2D(uColorTexture, vTexCoord).rgb;
        vec3 ambient = light.ambient * color;
        vec3 diffuse = light.diffuse * diff * color;
        vec3 specular = light.specular * spec * vec3(1, 1, 1);
        ambient *= attenuation * intensity;
        diffuse *= attenuation * intensity;
        specular *= attenuation * intensity;

        return (ambient + diffuse + specular) * light.color;
    }

    void main(void) {
        vec3 norm = normalize(vNormal);
        vec3 viewDir = normalize(uViewPos - vWorldSpacePosition);

        vec3 result = vec3(0, 0, 0);
        result += calculateDirectionalLight(uDirectionalLight, norm, viewDir);
        for(int i = 0; i < N_POINTLIGHTS; i++) {
            result += calculatePointLight(uPointLight[i], norm, vWorldSpacePosition, viewDir);
        }
        for(int i = 0; i < N_SPOTLIGHTS; i++) {
            result += calculateSpotLight(uSpotLight[i], norm, vWorldSpacePosition, viewDir);
        }
        
        gl_FragColor = vec4(result, 1.0);
    }
    `;

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl, lights, lightViewProj, shadowMap) {
        await _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable._setupDraw.bind(Obj)(gl,
            async () => {
                Obj.fragmentShaderSource = `
                    #define N_POINTLIGHTS ${lights.pointLight.length}
                    #define N_SPOTLIGHTS ${lights.spotLight.length}
                    ${Obj.fragmentShaderSource}
                    `;

                console.log(Obj.fragmentShaderSource);
            },
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
                gl.bindAttribLocation(program, 1, "aTexCoord");
                gl.bindAttribLocation(program, 2, "aNormal");
            },
            async (/** @type {WebGLProgram} */ program) => {
                Obj.uniformLocations.uMatModel = gl.getUniformLocation(program, "uMatModel");
                Obj.uniformLocations.uMatModelInverseTranspose = gl.getUniformLocation(program, "uMatModelInverseTranspose");
                Obj.uniformLocations.uMatViewProjection = gl.getUniformLocation(program, "uMatViewProjection");
                Obj.uniformLocations.uMatLightSpaceViewProjection = gl.getUniformLocation(program, "uMatLightSpaceViewProjection");

                Obj.uniformLocations.uColorTexture = gl.getUniformLocation(program, "uColorTexture");
                Obj.uniformLocations.uShadowMap = gl.getUniformLocation(program, "uShadowMap");
                Obj.uniformLocations.uShadowMapSize = gl.getUniformLocation(program, "uShadowMapSize");
                Obj.uniformLocations.uViewPos = gl.getUniformLocation(program, "uViewPos");

                Obj.uniformLocations.uDirectionalLight = {}
                Obj.uniformLocations.uDirectionalLight.direction = gl.getUniformLocation(program, "uDirectionalLight.direction");
                Obj.uniformLocations.uDirectionalLight.color = gl.getUniformLocation(program, "uDirectionalLight.color");
                Obj.uniformLocations.uDirectionalLight.ambient = gl.getUniformLocation(program, "uDirectionalLight.ambient");
                Obj.uniformLocations.uDirectionalLight.diffuse = gl.getUniformLocation(program, "uDirectionalLight.diffuse");
                Obj.uniformLocations.uDirectionalLight.specular = gl.getUniformLocation(program, "uDirectionalLight.specular");

                Obj.uniformLocations.uPointLight = [];
                lights.pointLight.forEach((l, i) => {
                    Obj.uniformLocations.uPointLight.push({
                        position: gl.getUniformLocation(program, `uPointLight[${i}].position`),
                        color: gl.getUniformLocation(program, `uPointLight[${i}].color`),
                        linear: gl.getUniformLocation(program, `uPointLight[${i}].linear`),
                        quadratic: gl.getUniformLocation(program, `uPointLight[${i}].quadratic`),
                        ambient: gl.getUniformLocation(program, `uPointLight[${i}].ambient`),
                        diffuse: gl.getUniformLocation(program, `uPointLight[${i}].diffuse`),
                        specular: gl.getUniformLocation(program, `uPointLight[${i}].specular`)
                    });
                })

                Obj.uniformLocations.uSpotLight = [];
                lights.spotLight.forEach((l, i) => {
                    Obj.uniformLocations.uSpotLight.push({
                        position: gl.getUniformLocation(program, `uSpotLight[${i}].position`),
                        direction: gl.getUniformLocation(program, `uSpotLight[${i}].direction`),
                        color: gl.getUniformLocation(program, `uSpotLight[${i}].color`),
                        cutOff: gl.getUniformLocation(program, `uSpotLight[${i}].cutOff`),
                        outerCutOff: gl.getUniformLocation(program, `uSpotLight[${i}].outerCutOff`),
                        linear: gl.getUniformLocation(program, `uSpotLight[${i}].linear`),
                        quadratic: gl.getUniformLocation(program, `uSpotLight[${i}].quadratic`),
                        ambient: gl.getUniformLocation(program, `uSpotLight[${i}].ambient`),
                        diffuse: gl.getUniformLocation(program, `uSpotLight[${i}].diffuse`),
                        specular: gl.getUniformLocation(program, `uSpotLight[${i}].specular`)
                    });
                })
            }
        );

        gl.useProgram(Obj.programShader);

        // set uniforms
        gl.uniformMatrix4fv(Obj.uniformLocations.uMatLightSpaceViewProjection, false, lightViewProj.values);

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, shadowMap.texture);
        gl.uniform1i(Obj.uniformLocations.uShadowMap, 1);

        gl.uniform2fv(Obj.uniformLocations.uShadowMapSize, shadowMap.size.values);

        gl.uniform3fv(Obj.uniformLocations.uDirectionalLight.direction, lights.directionalLight.direction.values);
        gl.uniform3fv(Obj.uniformLocations.uDirectionalLight.color, lights.directionalLight.color.values);
        gl.uniform1f(Obj.uniformLocations.uDirectionalLight.ambient, lights.directionalLight.ambient);
        gl.uniform1f(Obj.uniformLocations.uDirectionalLight.diffuse, lights.directionalLight.diffuse);
        gl.uniform1f(Obj.uniformLocations.uDirectionalLight.specular, lights.directionalLight.specular);

        lights.pointLight.forEach((l, i) => {
            gl.uniform3fv(Obj.uniformLocations.uPointLight[i].position, l.position.values);
            gl.uniform3fv(Obj.uniformLocations.uPointLight[i].color, l.color.values);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].linear, l.linear);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].quadratic, l.quadratic);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].ambient, l.ambient);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].diffuse, l.diffuse);
            gl.uniform1f(Obj.uniformLocations.uPointLight[i].specular, l.specular);
        });

        lights.spotLight.forEach((l, i) => {
            gl.uniform3fv(Obj.uniformLocations.uSpotLight[i].position, l.position.values);
            gl.uniform3fv(Obj.uniformLocations.uSpotLight[i].direction, l.direction.values);
            gl.uniform3fv(Obj.uniformLocations.uSpotLight[i].color, l.color.values);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].cutOff, l.cutOff);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].outerCutOff, l.outerCutOff);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].linear, l.linear);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].quadratic, l.quadratic);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].ambient, l.ambient);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].diffuse, l.diffuse);
            gl.uniform1f(Obj.uniformLocations.uSpotLight[i].specular, l.specular);
        });
    }
    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }


    // alternative shader for shadow mapping
    static shadowMappingVertexShaderSource = `
        precision mediump float;

        // position
        attribute vec3 aPosition;
        uniform mat4 uMatModel;
        uniform mat4 uMatLightSpace;
        
        // varying vec3 vPos;

        void main() {
            // vPos = uMatLightSpace * uMatModel * vec4(aPosition, 1.0);
            gl_Position = uMatLightSpace * uMatModel * vec4(aPosition, 1.0);
        }
    `;
    static shadowMappingFragmentShaderSource = `
        precision mediump float;

        // varying vec3 vPos;

        void main() {
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
            // gl_FragColor = vec4(vec3(vPos).z, 1.0);
        }
    `;

    static shadowMappingProgramShader = null;
    static shadowUniformLocations = {};
    static async setupShadowDraw(/** @type {WebGLRenderingContext} */ gl) {
        if (!Obj.shadowMappingProgramShader) {
            // switch static shaders
            Obj.drawProgramShader = Obj.programShader;
            Obj.programShader = null;

            Obj.drawVertexShaderSource = Obj.vertexShaderSource;
            Obj.drawFragmentShaderSource = Obj.fragmentShaderSource;
            Obj.vertexShaderSource = Obj.shadowMappingVertexShaderSource;
            Obj.fragmentShaderSource = Obj.shadowMappingFragmentShaderSource;

            console.log('shadow mapping', Obj.fragmentShaderSource, Obj.shadowMappingFragmentShaderSource);

            await _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable._setupDraw.bind(Obj)(gl, null,
                async (/** @type {WebGLProgram} */ program) => {
                    gl.bindAttribLocation(program, 0, "aPosition");
                },
                async (/** @type {WebGLProgram} */ program) => {
                    Obj.shadowUniformLocations.uMatModel = gl.getUniformLocation(program, "uMatModel");
                    Obj.shadowUniformLocations.uMatLightSpace = gl.getUniformLocation(program, "uMatLightSpace");
                }
            );

            // switch static shaders back
            Obj.shadowMappingProgramShader = Obj.programShader;
            Obj.programShader = Obj.drawProgramShader;
            Obj.vertexShaderSource = Obj.drawVertexShaderSource;
            Obj.fragmentShaderSource = Obj.drawFragmentShaderSource;
        }

        gl.useProgram(Obj.shadowMappingProgramShader);
    }

    shadowDraw(/** @type {WebGLRenderingContext} */ gl, stack) {
        if (!this.isLoaded) {
            return;
        }

        gl.useProgram(Obj.shadowMappingProgramShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        gl.uniformMatrix4fv(Obj.shadowUniformLocations.uMatModel, false, this.mat.values);
        gl.uniformMatrix4fv(Obj.shadowUniformLocations.uMatLightSpace, false, stack.head().values);

        // draw
        gl.drawArrays(gl[Obj.glMode], 0, this.data.vertices.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (this.children) {
            this.children.forEach(child => child.shadowDraw(gl, stack));
        }
    }
}

const lampPost = new Obj(
    {
        urls: {
            obj: "/assets/objs/lights/lamp_post/Street_Lamp_obj.obj",
            texture: "/assets/textures/lights/lamp_post/lamba_DefaultMaterial_BaseColor.png",
        },
    }
    , webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()
        .scale(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(3, 3, 3))
        .translate(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(-1.85, 0, 5.5)));
lampPost.lights = {
    pointLight: [{
        name: "LampPost",
        enabled: false,
        position: () => new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec4(0.35, 3, 0, 1).transform(lampPost.mat).toVec3(),
        color: new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(1, 1, 1),
        linear: 0.003,
        quadratic: 0.07,
        ambient: 0.9,
        diffuse: 1,
        specular: 0.5
    }]
}

const objs = [
    // cube 1
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/cube/cube.obj",
    //             texture: [0xff, 0x00, 0x00, 0xff],
    //         },
    //     }
    //     , Mat4.Identity()
    //         .translate(new Vec3(0, 0, 0))
    //         .scale(new Vec3(1, 1, 1))
    // ),
    new Obj(
        {
            urls: {
                obj: "../../assets/objs/buildings/building1/Cottage_FREE.obj",
                texture: "../../assets/textures/buildings/building1/Cottage_Dirt_Base_Color.jpg",
            },
        }
        , webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()
            .scale(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(2, 2, 2))
            .rotate((0,webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.toRad)(90), new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 1, 0))
            .translate(new webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Vec3(0, 0, 10))),
    lampPost,
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
    //             texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
    //         },
    //     }
    //     , Mat4.Identity()
    //         .scale(new Vec3(2, 2, 2))
    //         .translate(new Vec3(0, 0, -45))),
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
    //             texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
    //         },
    //     }
    //     , Mat4.Identity()
    //         .scale(new Vec3(2, 2, 2))
    //         .translate(new Vec3(1, 0, -44))),
    // new Obj(
    //     {
    //         urls: {
    //             obj: "../../assets/objs/road_items/cone/traffic_cone.obj",
    //             texture: "../../assets/textures/road_items/cone/traffic cone_BaseColor.png",
    //         },
    //     }
    //     , Mat4.Identity()
    //         .scale(new Vec3(2, 2, 2))
    //         .translate(new Vec3(-1.5, 0, -44.33))),
]



/***/ }),

/***/ "./src/objs/point.js":
/*!***************************!*\
  !*** ./src/objs/point.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _drawable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawable.js */ "./src/drawable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");





class Point extends _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    draw(/** @type {WebGLRenderingContext} */ gl, stack, points) {
        gl.useProgram(Point.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        gl.uniformMatrix4fv(Point.uniformLocations.uMatViewProjection, false, stack.head().values);

        // draw
        gl.drawArrays(gl[Point.glMode], 0, points.length / 3);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    static glMode = "POINTS";
    static vertexShaderSource = `
    precision mediump float;
    
    // position
    attribute vec3 aPosition;
    uniform mat4 uMatViewProjection;
    
    void main(void) {
        gl_Position = uMatViewProjection * vec4(aPosition, 1.0);
        gl_PointSize = 5.0;
    }
    `
    static fragmentShaderSource = `
    precision mediump float;
    
    void main(void) {
        gl_FragColor = vec4(1, 0, 0, 1.0);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable._setupDraw.bind(Point)(gl, null,
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
            },
            async (/** @type {WebGLProgram} */ program) => {
                Point.uniformLocations.uMatViewProjection = gl.getUniformLocation(program, "uMatViewProjection");
            }
        );

        gl.useProgram(Point.programShader);
    }

    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

/***/ }),

/***/ "./src/objs/skybox.js":
/*!****************************!*\
  !*** ./src/objs/skybox.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skybox": () => (/* binding */ Skybox),
/* harmony export */   "skyboxes": () => (/* binding */ skyboxes)
/* harmony export */ });
/* harmony import */ var webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-basic-lib */ "./node_modules/webgl-basic-lib/lib/all.js");
/* harmony import */ var _drawable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drawable.js */ "./src/drawable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");





class Skybox extends _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable {
    constructor(data, name, mat = webgl_basic_lib__WEBPACK_IMPORTED_MODULE_0__.Mat4.Identity()) {
        super(data, mat);
        this.name = name;
    }

    async setup(/** @type {WebGLRenderingContext} */ gl) {
        await super.setup(gl);

        this.data.vertices = new Float32Array([
            -1.0, 1.0, -1.0,
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,

            -1.0, -1.0, 1.0,
            -1.0, -1.0, -1.0,
            -1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,
            -1.0, 1.0, 1.0,
            -1.0, -1.0, 1.0,

            1.0, -1.0, -1.0,
            1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, -1.0,
            1.0, -1.0, -1.0,

            -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, 1.0,

            -1.0, 1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0, -1.0,

            -1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            1.0, -1.0, 1.0
        ]);

        this.texture = gl.createTexture();

        const targets = [
            gl.TEXTURE_CUBE_MAP_POSITIVE_X,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
        ]

        await Promise.all((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.zip)(Object.values(this.data.urls), targets).map(({ first: url, second: target }) => {
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.loadTexture)(gl, this.texture, url, {
                textureKind: gl.TEXTURE_CUBE_MAP,
                target,
            })
        }));


        this.isLoaded = true;
    }

    draw(/** @type {WebGLRenderingContext} */ gl, stack) {
        if (!this.isLoaded) {
            return;
        }

        gl.useProgram(Skybox.programShader);

        // position
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position.value);
        if (this.buffers.position.dirty) {
            this.buffers.position.dirty = false;
            gl.bufferData(gl.ARRAY_BUFFER, this.data.vertices, gl.STATIC_DRAW);
        }
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

        // set uniforms
        gl.uniformMatrix4fv(Skybox.uniformLocations.uMat, false, stack.head().values);

        // bind texture
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
        gl.uniform1i(Skybox.uniformLocations.uCubeMap, 0);

        // draw
        gl.depthFunc(gl.LEQUAL);
        // gl.drawElements(gl[Skybox.glMode], this.data.indices.length, gl.UNSIGNED_SHORT, 0);
        gl.drawArrays(gl[Skybox.glMode], 0, this.data.vertices.length / 3);
        gl.depthFunc(gl.LESS);

        // disable vertexAttribArray
        gl.disableVertexAttribArray(0);

        // unbind texture
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);

        // unbind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }


    static glMode = "TRIANGLES";
    static vertexShaderSource = `
    precision mediump float;
    attribute vec3 aPosition;
  
    uniform mat4 uMat;
  
    varying vec3 texCoords;
  
    void main(void) {
        texCoords = aPosition;
        gl_Position = uMat * vec4(aPosition, 1.0);
    }
    `
    static fragmentShaderSource = `
    precision mediump float;

    uniform samplerCube uCubeMap;

    varying vec3 texCoords;

    void main(void) {
        gl_FragColor = textureCube(uCubeMap, texCoords);
    }
    `

    static uniformLocations = {}
    static async setupDraw(/** @type {WebGLRenderingContext} */ gl) {
        await _drawable_js__WEBPACK_IMPORTED_MODULE_1__.Drawable._setupDraw.bind(Skybox)(gl,
            null,
            async (/** @type {WebGLProgram} */ program) => {
                gl.bindAttribLocation(program, 0, "aPosition");
            },
            async (/** @type {WebGLProgram} */ program) => {
                Skybox.uniformLocations.uMat = gl.getUniformLocation(program, "uMat");
                Skybox.uniformLocations.uCubeMap = gl.getUniformLocation(program, "uCubeMap");
            }
        );

        gl.useProgram(Skybox.programShader);
    }

    static teardownDraw(/** @type {WebGLRenderingContext} */ gl) {
        gl.useProgram(null);
    }
}

const skyboxes = [
    // day
    new Skybox({
        urls: {
            posx: "../../assets/textures/skybox/day/posx.jpg",
            negx: "../../assets/textures/skybox/day/negx.jpg",
            posy: "../../assets/textures/skybox/day/posy.jpg",
            negy: "../../assets/textures/skybox/day/negy.jpg",
            posz: "../../assets/textures/skybox/day/posz.jpg",
            negz: "../../assets/textures/skybox/day/negz.jpg",
        },
    }, "Day"),
    // night
    new Skybox({
        urls: {
            posx: "../../assets/textures/skybox/night/posx.png",
            negx: "../../assets/textures/skybox/night/negx.png",
            posy: "../../assets/textures/skybox/night/posy.png",
            negy: "../../assets/textures/skybox/night/negy.png",
            posz: "../../assets/textures/skybox/night/posz.png",
            negz: "../../assets/textures/skybox/night/negz.png",
        },
    }, "Night"),
]



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadObj": () => (/* binding */ loadObj),
/* harmony export */   "loadTexture": () => (/* binding */ loadTexture),
/* harmony export */   "zip": () => (/* binding */ zip)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");


async function loadObj(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
        _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].e(`Failed to load obj: ${url}`);
        throw new Error("Failed to fetch obj");
    }

    const text = await response.text();
    const obj = parseObj(text);
    
    _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(`Obj: Loaded ${url}`, false);
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
                _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].w("Unhandled token: " + first, true);
                break;
            }
        }
    });

    console.log(rawData);

    return objs;
}

function loadTexture(/** @type {WebGLRenderingContext} */ gl, tex, source, options) {
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

                _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(`Texture: Loaded ${source}`, false);
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
            _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(`Texture: Loaded raw`);
            res();
        } else {
            rej("Invalid texture source");
        }
    })

}

function zip(a, b) {
    return a.map((k, i) => ({ first: k, second: b[i] }));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlRQTs7QUFFNkI7QUFDUTs7QUFFckM7QUFDQTtBQUNBO0FBQ08sbUJBQW1CLHdDQUFHO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0NBQWdDO0FBQzdDLGFBQWEsZ0NBQWdDO0FBQzdDLGFBQWEsZ0NBQWdDO0FBQzdDLGFBQWEsZ0NBQWdDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0EsV0FBVyxxREFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBLGVBQWUseUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQSxlQUFlLHlDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsTUFBTTtBQUNuQjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvYWxsLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvd2ViZ2wtYmFzaWMtbGliL2xpYi9leHRyYS9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL2V4dHJhL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvZXh0cmEvZGVidWcuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL2V4dHJhL3N0YWNrLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvd2ViZ2wtYmFzaWMtbGliL2xpYi9nZW9tZXRyeS9jdWJlLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvd2ViZ2wtYmFzaWMtbGliL2xpYi9nZW9tZXRyeS9jeWxpbmRlci5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvZ2VvbWV0cnkvaWNvc2FoZWRyb24uanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL2dlb21ldHJ5L3NwaGVyZS5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvZ2VvbWV0cnkvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL2dlb21ldHJ5L3V0aWxzLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvd2ViZ2wtYmFzaWMtbGliL2xpYi9tYXRoL21hdC5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvbWF0aC9tYXQyLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvd2ViZ2wtYmFzaWMtbGliL2xpYi9tYXRoL21hdDMuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL21hdGgvbWF0NC5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvbWF0aC91dGlscy5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvbWF0aC92ZWMuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL21hdGgvdmVjMi5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvbWF0aC92ZWMzLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvd2ViZ2wtYmFzaWMtbGliL2xpYi9tYXRoL3ZlYzQuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL3dlYmdsL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL25vZGVfbW9kdWxlcy93ZWJnbC1iYXNpYy1saWIvbGliL3dlYmdsL3NoYWRlci5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvd2ViZ2wvdGV4dHVyZS5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3dlYmdsLWJhc2ljLWxpYi9saWIvd2ViZ2wvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL3NyYy9kZWJ1Z1NoYWRlci5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vc3JjL2RyYXdhYmxlLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL3NyYy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vc3JjL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vc3JjL21hdDRleHRlbnNpb24uanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC8uL3NyYy9vYmpzL2Nhci5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vc3JjL29ianMvZ3JvdW5kLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9zcmMvb2Jqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vc3JjL29ianMvb2JqLmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9zcmMvb2Jqcy9wb2ludC5qcyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0Ly4vc3JjL29ianMvc2t5Ym94LmpzIiwid2VicGFjazovL2NnX3Byb2plY3QvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2dfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NnX3Byb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ19wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9leHRyYS9kZWJ1Zy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXh0cmEvY29sb3JzLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9leHRyYS9jYW1lcmEuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V4dHJhL3N0YWNrLmpzXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3dlYmdsL3V0aWxzLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93ZWJnbC9wcm9ncmFtLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93ZWJnbC9zaGFkZXIuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dlYmdsL3RleHR1cmUuanNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vbWF0aC91dGlscy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWF0aC92ZWMyLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoL3ZlYzMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hdGgvdmVjNC5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWF0aC9tYXQyLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYXRoL21hdDMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hdGgvbWF0NC5qc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9nZW9tZXRyeS91dGlscy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZ2VvbWV0cnkvdHlwZXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dlb21ldHJ5L2N1YmUuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dlb21ldHJ5L2N5bGluZGVyLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9nZW9tZXRyeS9zcGhlcmUuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dlb21ldHJ5L2ljb3NhaGVkcm9uLmpzXCI7XG4iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge01hdDQsIHRvUmFkLCBWZWMzfSBmcm9tIFwiLi4vYWxsLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIFRoZSBDYW1lcmEgY2xhc3MgZm9yIGNvbW1vbiAzRCBzY2VuZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xuICAjZGlydHk9bnVsbDtcbiAgI21hdD1udWxsO1xuXG4gICNmb3Z5PW51bGw7XG4gICNyYXRpb1dIPW51bGw7XG4gICNuZWFyPW51bGw7XG4gICNmYXI9bnVsbDtcblxuICAjcG9zPW51bGw7XG4gICNkaXI9bnVsbDtcbiAgI3VwPW51bGw7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLlxuICAgKiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgdGhlIEZPViAob24gdGhlIHktYXhpcykgb2YgdGhlIHZpZXcgZnJ1c3RvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW9XSCB0aGUgcmF0aW8gKHcgLyBoKSBvZiB0aGUgc2NyZWVuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIHRoZSBkaXN0YW5jZSBvZiB0aGUgbmVhciBwbGFuZVxuICAgKiBAcGFyYW0ge251bWJlcn0gZmFyIHRoZSBkaXN0YW5jZSBvZiB0aGUgZmFyIHBsYW5lXG4gICAqIEBwYXJhbSB7VmVjM30gcG9zIHRoZSBzdGFydGluZyBwb3Mgb2YgdGhlIGNhbWVyYVxuICAgKiBAcGFyYW0ge1ZlYzN9IGRpciB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjYW1lcmEgKHJlbGF0aXZlIHRvIGl0cyBwb3NpdGlvbilcbiAgICogQHBhcmFtIHtWZWMzfSB1cCB0aGUgdXAgdmVjdG9yIG9mIHRoZSBjYW1lcmFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGZvdnksIHJhdGlvV0gsIG5lYXIsIGZhciwgcG9zLCBkaXIsIHVwKSB7XG4gICAgdGhpcy4jZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuI21hdCA9IE1hdDQuSWRlbnRpdHkoKTtcbiAgICB0aGlzLiNmb3Z5ID0gZm92eTtcbiAgICB0aGlzLiNyYXRpb1dIID0gcmF0aW9XSDtcbiAgICB0aGlzLiNuZWFyID0gbmVhcjtcbiAgICB0aGlzLiNmYXIgPSBmYXI7XG4gICAgdGhpcy4jcG9zID0gcG9zO1xuICAgIHRoaXMuI2RpciA9IGRpcjtcbiAgICB0aGlzLiN1cCA9IHVwO1xuICB9XG4gIFxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIHRoZSBQZXJzcGVjdGl2ZSBNYXRyaXggb2YgdGhlIGNhbWVyYVxuICAgKiBcbiAgICogQHJldHVybnMge01hdDR9IHRoZSBQZXJzcGVjdGl2ZSBtYXRyaXguXG4gICAqL1xuICBnZXQgcGVyc3BlY3RpdmVNYXQoKSB7XG4gICAgcmV0dXJuIE1hdDQuUGVyc3BlY3RpdmUoXG4gICAgICB0b1JhZCh0aGlzLiNmb3Z5KSxcbiAgICAgIHRoaXMuI3JhdGlvV0gsXG4gICAgICB0aGlzLiNuZWFyLFxuICAgICAgdGhpcy4jZmFyXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgdGhlIExvb2tBdCBNYXRyaXggb2YgdGhlIGNhbWVyYVxuICAgKiBcbiAgICogQHJldHVybnMge01hdDR9IHRoZSBMb29rQXQgbWF0cml4LlxuICAgKi9cbiAgZ2V0IGxvb2thdE1hdCgpIHtcbiAgICByZXR1cm4gTWF0NC5Mb29rQXQoXG4gICAgICB0aGlzLiNwb3MsXG4gICAgICB0aGlzLiNwb3MuY2xvbmUoKS5hZGQodGhpcy4jZGlyKSxcbiAgICAgIHRoaXMuI3VwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgdGhlIGN1cnJlbnQgbWF0cml4IG9mIHRoZSBjYW1lcmFcbiAgICogXG4gICAqIEByZXR1cm5zIHtNYXQ0fSB0aGUgY29tYmluZWQgUGVyc3BlY3RpdmUtTG9va0F0IG1hdHJpeC5cbiAgICovXG4gIGdldCBtYXQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICByZXR1cm4gdGhpcy4jbWF0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhXG4gICAqIFxuICAgKiBAcmV0dXJucyB7VmVjM30gdGhlIGNhbWVyYSBwb3NpdGlvbi5cbiAgICovXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jcG9zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0byByZXRyaWV2ZSB0aGUgY3VycmVudCBkaXJlY3Rpb24gb2YgdGhlIGNhbWVyYVxuICAgKiBcbiAgICogQHJldHVybnMge1ZlYzN9IHRoZSBjYW1lcmEgZGlyZWN0aW9uLlxuICAgKi9cbiAgZ2V0IGRpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jZGlyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciB0byB1cGRhdGUgdGhlIHJhdGlvICh3IC8gaCkgb2YgdGhlIGZydXN0dW1cbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSB0aGUgbmV3IHJhdGlvXG4gICAqL1xuICBzZXQgcmF0aW8odmFsdWUpIHtcbiAgICB0aGlzLiNyYXRpb1dIID0gdmFsdWU7XG4gICAgdGhpcy4jZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjaGVjayBpZiB0aGUgY2FtZXJhIGlzIGRpcnR5XG4gICAqIFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdGhlIGRpcnR5IGZsYWdcbiAgICovXG4gIGlzRGlydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2RpcnR5O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB1cGRhdGUgdGhlIGNhbWVyYVxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBtYXRyaXggbmVlZHMgdG8gYmUgdXBkYXRlZC5cbiAgICBpZiAodGhpcy4jZGlydHkpIHtcbiAgICAgIHRoaXMuI2RpcnR5ID0gZmFsc2U7XG4gICAgICAvLyBSZWNyZWF0ZSBtYXRyaXguXG4gICAgICB0aGlzLiNtYXQgPSBNYXQ0LklkZW50aXR5KClcbiAgICAgICAgICAuYXBwbHkodGhpcy5wZXJzcGVjdGl2ZU1hdClcbiAgICAgICAgICAuYXBwbHkodGhpcy5sb29rYXRNYXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdXBkYXRlIGNhbWVyYSBwb3NpdGlvbi5cbiAgICogXG4gICAqIEBwYXJhbSB7VmVjM30gZGVsdGEgdGhlIG9mZnNldFxuICAgKi9cbiAgbW92ZVBvcyhkZWx0YSkge1xuICAgIHRoaXMuI2RpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLiNwb3MuYWRkKGRlbHRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdXBkYXRlIGNhbWVyYSBkaXJlY3Rpb24uXG4gICAqIFxuICAgKiBAcGFyYW0ge1ZlYzN9IGRlbHRhIHRoZSBvZmZzZXRcbiAgICovXG4gIG1vdmVEaXIoZGVsdGEpIHtcbiAgICB0aGlzLiNkaXJ0eSA9IHRydWU7XG4gICAgdGhpcy4jZGlyLmFkZChkZWx0YSk7XG4gIH1cbn1cbiIsIi8qKiBAYXV0aG9yOiBEYXZpZGUgUmlzYWxpdGkgZGF2ZGFnMjRAZ21haWwuY29tICovXG5cbmltcG9ydCB7VmVjMywgVmVjNH0gZnJvbSBcIi4uL2FsbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBDb2xvcnMgd3JhcHBpbmcgY29sb3IgdXRpbGl0aWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xvcnMge1xuXG4gIC8qKlxuICAgKiBCdWlsdC1pbnNcbiAgICovXG4gIHN0YXRpYyBnZXQgUmVkKCkgICAgeyByZXR1cm4gbmV3IFZlYzMoMS4wLCAwLjAsIDAuMCk7IH1cbiAgc3RhdGljIGdldCBHcmVlbigpICB7IHJldHVybiBuZXcgVmVjMygwLjAsIDEuMCwgMC4wKTsgfVxuICBzdGF0aWMgZ2V0IEJsdWUoKSAgIHsgcmV0dXJuIG5ldyBWZWMzKDAuMCwgMC4wLCAxLjApOyB9XG4gIHN0YXRpYyBnZXQgV2hpdGUoKSAgeyByZXR1cm4gbmV3IFZlYzMoMS4wLCAxLjAsIDEuMCk7IH1cbiAgc3RhdGljIGdldCBHcmF5KCkgICB7IHJldHVybiBuZXcgVmVjMygwLjUsIDAuNSwgMC41KTsgfVxuICBzdGF0aWMgZ2V0IEJsYWNrKCkgIHsgcmV0dXJuIG5ldyBWZWMzKDAuMCwgMC4wLCAwLjApOyB9XG4gIHN0YXRpYyBnZXQgQ3lhbigpICAgeyByZXR1cm4gbmV3IFZlYzMoMC4wLCAxLjAsIDEuMCk7IH1cbiAgc3RhdGljIGdldCBQaW5rKCkgICB7IHJldHVybiBuZXcgVmVjMygxLjAsIDAuMCwgMS4wKTsgfVxuICBzdGF0aWMgZ2V0IFllbGxvdygpIHsgcmV0dXJuIG5ldyBWZWMzKDEuMCwgMS4wLCAwLjApOyB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgcmFuZG9tIGNvbG9yXG4gICAqIFxuICAgKiBAcmV0dXJucyB7VmVjM30gdGhlIGdlbmVyYXRlZCBjb2xvclxuICAgKi9cbiAgc3RhdGljIFJhbmRvbSgpIHtcbiAgICByZXR1cm4gbmV3IFZlYzMoTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZyb20gUkdCIHRvIEhTVi5cbiAgICpcbiAgICogUkdCIHZhbHVlcyBpbiByYW5nZSBbMC4wLCAxLjBdXG4gICAqIEhTViB2YWx1ZXMgaW4gcmFuZ2UgWzAuMCwgMS4wXVxuICAgKlxuICAgKiBAcGFyYW0ge1ZlYzN9IGNvbCB0aGUgUkdCIGlucHV0IGNvbG9yXG4gICAqIFxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgSFNWIGVxdWl2YWxlbnRcbiAgICovXG4gIHN0YXRpYyBSZ2JUb0hzdihjb2wpIHtcbiAgICAvLyBVbnBhY2tcbiAgICBjb25zdCBbciwgZywgYl0gPSBbY29sLnIsIGNvbC5nLCBjb2wuYl07XG5cbiAgICAvLyBDYWxjIGNtaW4sIGNtYXggYW5kIGRlbHRhXG4gICAgY29uc3QgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpXG4gICAgY29uc3QgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgXG4gICAgLy8gQ2FsYyBIU1YgY29tcG9uZW50c1xuICAgIGNvbnN0IHYgPSBjbWF4O1xuICAgIGNvbnN0IHMgPSAoY21heCA9PT0gMCkgPyAwIDogKGRlbHRhIC8gY21heCk7XG4gICAgdmFyIGggPSAwO1xuICAgIGlmIChkZWx0YSAhPT0gMCkge1xuICAgICAgaWYgKGNtYXggPT09IHIpIHtcbiAgICAgICAgaCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNtYXggPT09IGcpIHtcbiAgICAgICAgaCA9ICgoYiAtIHIpIC8gZGVsdGEpICsgMjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoID0gKChyIC0gZykgLyBkZWx0YSkgKyA0O1xuICAgICAgfVxuICAgICAgaCAqPSAoMS4wIC8gNi4wKTtcbiAgICAgIGlmIChoIDwgMC4wKSBoICs9IDEuMDtcbiAgICB9XG4gICAgXG4gICAgLy8gUmVzdWx0XG4gICAgcmV0dXJuIG5ldyBWZWMzKGgsIHMsIHYpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZnJvbSBIU1YgdG8gUkdCLlxuICAgKlxuICAgKiBSR0IgdmFsdWVzIGluIHJhbmdlIFswLjAsIDEuMF1cbiAgICogSFNWIHZhbHVlcyBpbiByYW5nZSBbMC4wLCAxLjBdXG4gICAqXG4gICAqIEBwYXJhbSB7VmVjM30gY29sIHRoZSBIU1YgaW5wdXQgY29sb3JcbiAgICogXG4gICAqIEByZXR1cm4ge1ZlYzN9IHRoZSBSR0IgZXF1aXZhbGVudFxuICAgKi9cbiAgc3RhdGljIEhzdlRvUmdiKGNvbCkge1xuICAgIC8vIFVucGFja1xuICAgIGNvbnN0IFtoLCBzLCB2XSA9IFtjb2wuaCAqIDM2MCwgY29sLnMsIGNvbC52XTtcblxuICAgIC8vIENhbGMgYywgeCBhbmQgbVxuICAgIGNvbnN0IGMgPSB2ICogcztcbiAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggLyA2MCkgJSAyIC0gMSkpO1xuICAgIGNvbnN0IG0gPSB2IC0gYztcbiAgICBcbiAgICAvLyBDYWxjIFJHQiBjb21wb25lbnRzXG4gICAgY29uc3QgW3IsIGcsIGJdID0gKFxuICAgICAgKGggPCAgNjApID8gW2MsIHgsIDBdIDpcbiAgICAgIChoIDwgMTIwKSA/IFt4LCBjLCAwXSA6XG4gICAgICAoaCA8IDE4MCkgPyBbMCwgYywgeF0gOlxuICAgICAgKGggPCAyNDApID8gWzAsIHgsIGNdIDpcbiAgICAgIChoIDwgMzAwKSA/IFt4LCAwLCBjXSA6XG4gICAgICBbYywgMCwgeF1cbiAgICApO1xuICAgIFxuICAgIC8vIFJlc3VsdFxuICAgIHJldHVybiBuZXcgVmVjMyhyICsgbSwgZyArIG0sIGIgKyBtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZyb20gSGV4IFN0cmluZyB0byBSR0IuXG4gICAqIFRoZSBpbnB1dCBzdHJpbmcgY2FuIGNvbnRhaW5zIHRoZSBcIiNcIiBjaGFyYWN0ZXIgYXQgdGhlIGJlZ2luLlxuICAgKlxuICAgKiBSR0IgdmFsdWVzIGluIHJhbmdlIFswLjAsIDEuMF1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhleCB0aGUgSGV4YWRlY2ltYWwgU3RyaW5nIGlucHV0IGNvbG9yXG4gICAqIFxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgUkdCIGVxdWl2YWxlbnRcbiAgICovXG4gIHN0YXRpYyBIZXhUb1JnYihoZXgpIHtcbiAgICAvLyBSZW1vdmUgIyBhdCB0aGUgYmVnaW4gKGlmIGV4aXN0cylcbiAgICBoZXggPSBoZXguc3Vic3RyaW5nKGhleC5pbmRleE9mKFwiI1wiKSArIDEpO1xuICBcbiAgICAvLyBFbnN1cmUgaGV4IHN0cmluZyBpcyBvZiBzaXplIDZcbiAgICBpZiAoaGV4Lmxlbmd0aCAhPSA2KSB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBmb3JtYXRcIik7XG4gIFxuICAgIC8vIFBhcnNlIHZhbHVlXG4gICAgY29uc3QgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gIFxuICAgIC8vIEV4dHJhY3QgY29tcG9uZW50c1xuICAgIGNvbnN0IHIgPSAoYmlnaW50ID4+IDE2KSAmIDB4RkY7XG4gICAgY29uc3QgZyA9IChiaWdpbnQgPj4gIDgpICYgMHhGRjtcbiAgICBjb25zdCBiID0gKGJpZ2ludCA+PiAgMCkgJiAweEZGO1xuXG4gICAgLy8gUmV0dXJuIHJlc3VsdFxuICAgIHJldHVybiBuZXcgVmVjMyhyLCBnLCBiKS5kaXYoMjU1KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGZyb20gSGV4IFN0cmluZyB0byBSR0JBLlxuICAgKiBUaGUgaW5wdXQgc3RyaW5nIGNhbiBjb250YWlucyB0aGUgXCIjXCIgY2hhcmFjdGVyIGF0IHRoZSBiZWdpbi5cbiAgICpcbiAgICogUkdCQSB2YWx1ZXMgaW4gcmFuZ2UgWzAuMCwgMS4wXVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4IHRoZSBIZXhhZGVjaW1hbCBTdHJpbmcgaW5wdXQgY29sb3JcbiAgICogXG4gICAqIEByZXR1cm4ge1ZlYzR9IHRoZSBSR0JBIGVxdWl2YWxlbnRcbiAgICovXG4gIHN0YXRpYyBIZXhUb1JnYmEoaGV4KSB7XG4gICAgLy8gUmVtb3ZlICMgYXQgdGhlIGJlZ2luIChpZiBleGlzdHMpXG4gICAgaGV4ID0gaGV4LnN1YnN0cmluZyhoZXguaW5kZXhPZihcIiNcIikgKyAxKTtcbiAgXG4gICAgLy8gRW5zdXJlIGhleCBzdHJpbmcgaXMgb2Ygc2l6ZSA4XG4gICAgaWYgKGhleC5sZW5ndGggIT0gOCkgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZm9ybWF0XCIpO1xuICBcbiAgICAvLyBQYXJzZSB2YWx1ZVxuICAgIGNvbnN0IGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICBcbiAgICAvLyBFeHRyYWN0IGNvbXBvbmVudHNcbiAgICBjb25zdCByID0gKGJpZ2ludCA+PiAyNCkgJiAweEZGO1xuICAgIGNvbnN0IGcgPSAoYmlnaW50ID4+IDE2KSAmIDB4RkY7XG4gICAgY29uc3QgYiA9IChiaWdpbnQgPj4gIDgpICYgMHhGRjtcbiAgICBjb25zdCBhID0gKGJpZ2ludCA+PiAgMCkgJiAweEZGO1xuXG4gICAgLy8gUmV0dXJuIHJlc3VsdFxuICAgIHJldHVybiBuZXcgVmVjNChyLCBnLCBiLCBhKS5kaXYoMjU1KTtcbiAgfVxufVxuIiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuaW1wb3J0IHtTaGFkZXIsIFByb2dyYW19IGZyb20gXCIuLi9hbGwuanNcIjtcblxuY29uc3QgUE9JTlRTX1ZFUlRfU0hBREVSID1cbmBcbmF0dHJpYnV0ZSB2ZWM0IGFQb3NpdGlvbjtcbnVuaWZvcm0gbWF0NCB1TWF0cml4O1xudW5pZm9ybSBmbG9hdCB1UG9pbnRTaXplO1xudm9pZCBtYWluKHZvaWQpIHtcbiAgZ2xfUG9zaXRpb24gPSB1TWF0cml4ICogYVBvc2l0aW9uO1xuICBnbF9Qb2ludFNpemUgPSB1UG9pbnRTaXplO1xufVxuYDtcblxuY29uc3QgUE9JTlRTX0ZSQUdfU0hBREVSID1cbmBcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbnVuaWZvcm0gdmVjNCB1UG9pbnRDb2xvcjtcbnZvaWQgbWFpbih2b2lkKSB7XG4gIGdsX0ZyYWdDb2xvciA9IHVQb2ludENvbG9yO1xufVxuYDtcblxuY29uc3QgTElORVNfVkVSVF9TSEFERVIgPVxuYFxuYXR0cmlidXRlIHZlYzQgYVBvc2l0aW9uO1xudW5pZm9ybSBtYXQ0IHVNYXRyaXg7XG52b2lkIG1haW4odm9pZCkge1xuICBnbF9Qb3NpdGlvbiA9IHVNYXRyaXggKiBhUG9zaXRpb247XG59XG5gO1xuXG5jb25zdCBMSU5FU19GUkFHX1NIQURFUiA9XG5gXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG51bmlmb3JtIHZlYzQgdUxpbmVDb2xvcjtcbnZvaWQgbWFpbih2b2lkKSB7XG4gIGdsX0ZyYWdDb2xvciA9IHVMaW5lQ29sb3I7XG59XG5gO1xuXG4vKipcbiAqIEBjbGFzcyBEZWJ1ZyB3cmFwcGluZyBzb21lIHV0aWxpdGllcyB0byBkZWJ1Zy5cbiAqL1xuZXhwb3J0IGNsYXNzIERlYnVnIHtcbiAgc3RhdGljICNnbDtcbiAgc3RhdGljICNhcnJheUJ1ZmZlcjtcbiAgc3RhdGljICNpbmRleEJ1ZmZlcjtcbiAgc3RhdGljICNwb2ludHNQcm9ncmFtO1xuICBzdGF0aWMgI2xpbmVzUHJvZ3JhbTtcbiAgXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBEZWJ1ZyBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIHdlYmdsIGNvbnRleHRcbiAgICovXG4gIHN0YXRpYyBJbml0aWFsaXplKGdsKSB7XG4gICAgRGVidWcuI2dsID0gZ2w7XG5cbiAgICAvLyBDcmVhdGUgYnVmZmVyc1xuICAgIERlYnVnLiNhcnJheUJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIERlYnVnLiNpbmRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgLy8gRGVidWcgcHJvZ3JhbXM6IFBvaW50c1xuICAgIERlYnVnLiNwb2ludHNQcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wpO1xuICAgIERlYnVnLiNwb2ludHNQcm9ncmFtLmF0dGFjaFNoYWRlcihuZXcgU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCBQT0lOVFNfVkVSVF9TSEFERVIpKTtcbiAgICBEZWJ1Zy4jcG9pbnRzUHJvZ3JhbS5hdHRhY2hTaGFkZXIobmV3IFNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBQT0lOVFNfRlJBR19TSEFERVIpKTtcbiAgICBEZWJ1Zy4jcG9pbnRzUHJvZ3JhbS5hdHRyaWJ1dGVzKFtbMCwgXCJhUG9zaXRpb25cIl1dKTtcbiAgICBEZWJ1Zy4jcG9pbnRzUHJvZ3JhbS5saW5rKCk7XG4gICAgRGVidWcuI3BvaW50c1Byb2dyYW0uZGVjbGFyZVVuaWZvcm1zKFtcbiAgICAgIFtcInVNYXRyaXhcIiwgXCJNYXRyaXg0ZnZcIl0sXG4gICAgICBbXCJ1UG9pbnRTaXplXCIsIFwiMWZcIl0sXG4gICAgICBbXCJ1UG9pbnRDb2xvclwiLCBcIjRmdlwiXVxuICAgIF0pO1xuICAgIFxuICAgIC8vIERlYnVnIHByb2dyYW1zOiBMaW5lc1xuICAgIERlYnVnLiNsaW5lc1Byb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCk7XG4gICAgRGVidWcuI2xpbmVzUHJvZ3JhbS5hdHRhY2hTaGFkZXIobmV3IFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgTElORVNfVkVSVF9TSEFERVIpKTtcbiAgICBEZWJ1Zy4jbGluZXNQcm9ncmFtLmF0dGFjaFNoYWRlcihuZXcgU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIExJTkVTX0ZSQUdfU0hBREVSKSk7XG4gICAgRGVidWcuI2xpbmVzUHJvZ3JhbS5hdHRyaWJ1dGVzKFtbMCwgXCJhUG9zaXRpb25cIl1dKTtcbiAgICBEZWJ1Zy4jbGluZXNQcm9ncmFtLmxpbmsoKTtcbiAgICBEZWJ1Zy4jbGluZXNQcm9ncmFtLmRlY2xhcmVVbmlmb3JtcyhbXG4gICAgICBbXCJ1TWF0cml4XCIsIFwiTWF0cml4NGZ2XCJdLFxuICAgICAgW1widUxpbmVDb2xvclwiLCBcIjRmdlwiXVxuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgcG9pbnRzIHdpdGggc2l6ZSBhbmQgY29sb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RmxvYXQzMkFycmF5fSB2ZXJ0ZXhlcyB0aGUgdmVydGV4ZXMgZGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmVydGV4U2l6ZSB0aGUgc2l6ZSBvZiBhIHZlcnRleFxuICAgKiBAcGFyYW0ge01hdDR9IG1hdCB0aGUgdHJhbnNmb3JtYXRpb24gZGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtUG9pbnRzIHRoZSBwb2ludHMgY291bnRcbiAgICogQHBhcmFtIHtWZWM0fSBjb2xvciB0aGUgY29sb3IgdG8gdXNlIHdoZW4gZHJhd2luZyBwb2ludHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgdGhlIHNpemUgb2YgYSBwb2ludFxuICAgKi9cbiAgc3RhdGljIGRyYXdQb2ludHModmVydGV4ZXMsIHZlcnRleFNpemUsIG1hdCwgbnVtUG9pbnRzLCBjb2xvciwgc2l6ZSkge1xuICAgIC8vIEJ1ZmZlcnMgc2V0dXBcbiAgICBEZWJ1Zy4jZ2wuYmluZEJ1ZmZlcihEZWJ1Zy4jZ2wuQVJSQVlfQlVGRkVSLCBEZWJ1Zy4jYXJyYXlCdWZmZXIpO1xuICAgIERlYnVnLiNnbC5idWZmZXJEYXRhKERlYnVnLiNnbC5BUlJBWV9CVUZGRVIsIHZlcnRleGVzLCBEZWJ1Zy4jZ2wuRFlOQU1JQ19EUkFXKTtcbiAgICBEZWJ1Zy4jZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gICAgRGVidWcuI2dsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMywgRGVidWcuI2dsLkZMT0FULCBmYWxzZSwgNCAqIHZlcnRleFNpemUsICAwKTtcbiAgICBcbiAgICAvLyBQcm9ncmFtIHNldHVwXG4gICAgRGVidWcuI3BvaW50c1Byb2dyYW0udXNlKCk7XG4gICAgRGVidWcuI3BvaW50c1Byb2dyYW0udU1hdHJpeC51cGRhdGUobWF0LnZhbHVlcyk7XG4gICAgRGVidWcuI3BvaW50c1Byb2dyYW0udVBvaW50Q29sb3IudXBkYXRlKGNvbG9yLnZhbHVlcyk7XG4gICAgRGVidWcuI3BvaW50c1Byb2dyYW0udVBvaW50U2l6ZS51cGRhdGUoc2l6ZSk7XG5cbiAgICAvLyBEcmF3XG4gICAgRGVidWcuI2dsLmRyYXdBcnJheXMoRGVidWcuI2dsLlBPSU5UUywgMCwgbnVtUG9pbnRzKTtcbiAgICBcbiAgICAvLyBFbmQgZHJhd1xuICAgIERlYnVnLiNnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gICAgUHJvZ3JhbS51bmJpbmQoRGVidWcuI2dsKTtcbiAgICBEZWJ1Zy4jZ2wuYmluZEJ1ZmZlcihEZWJ1Zy4jZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGxpbmVzIHdpdGggc2l6ZSBhbmQgY29sb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RmxvYXQzMkFycmF5fSB2ZXJ0ZXhlcyB0aGUgdmVydGV4ZXMgZGF0YVxuICAgKiBAcGFyYW0ge1VpbnQxNkFycmF5fSBpbmRpY2VzIHRoZSBlbGVtZW50cyBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0ZXhTaXplIHRoZSBzaXplIG9mIGEgdmVydGV4XG4gICAqIEBwYXJhbSB7TWF0NH0gbWF0IHRoZSB0cmFuc2Zvcm1hdGlvbiBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1MaW5lcyB0aGUgbGluZXMgY291bnRcbiAgICogQHBhcmFtIHtWZWM0fSBjb2xvciB0aGUgY29sb3IgdG8gdXNlIHdoZW4gZHJhd2luZyBsaW5lc1xuICAgKi9cbiAgc3RhdGljIGRyYXdMaW5lcyh2ZXJ0ZXhlcywgaW5kaWNlcywgdmVydGV4U2l6ZSwgbWF0LCBudW1MaW5lcywgY29sb3IpIHtcbiAgICAvLyBCdWZmZXJzIHNldHVwXG4gICAgRGVidWcuI2dsLmJpbmRCdWZmZXIoRGVidWcuI2dsLkFSUkFZX0JVRkZFUiwgRGVidWcuI2FycmF5QnVmZmVyKTtcbiAgICBEZWJ1Zy4jZ2wuYnVmZmVyRGF0YShEZWJ1Zy4jZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhlcywgRGVidWcuI2dsLkRZTkFNSUNfRFJBVyk7XG4gICAgRGVidWcuI2dsLmJpbmRCdWZmZXIoRGVidWcuI2dsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBEZWJ1Zy4jaW5kZXhCdWZmZXIpO1xuICAgIERlYnVnLiNnbC5idWZmZXJEYXRhKERlYnVnLiNnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kaWNlcywgRGVidWcuI2dsLkRZTkFNSUNfRFJBVyk7XG4gICAgRGVidWcuI2dsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xuICAgIERlYnVnLiNnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIERlYnVnLiNnbC5GTE9BVCwgZmFsc2UsIDQgKiB2ZXJ0ZXhTaXplLCAgMCk7XG4gICAgXG4gICAgLy8gUHJvZ3JhbSBzZXR1cFxuICAgIERlYnVnLiNsaW5lc1Byb2dyYW0udXNlKCk7XG4gICAgRGVidWcuI2xpbmVzUHJvZ3JhbS51TWF0cml4LnVwZGF0ZShtYXQudmFsdWVzKTtcbiAgICBEZWJ1Zy4jbGluZXNQcm9ncmFtLnVMaW5lQ29sb3IudXBkYXRlKGNvbG9yLnZhbHVlcyk7XG5cbiAgICAvLyBEcmF3XG4gICAgRGVidWcuI2dsLmRyYXdFbGVtZW50cyhEZWJ1Zy4jZ2wuTElORVMsIG51bUxpbmVzICogMiwgRGVidWcuI2dsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAgICBcbiAgICAvLyBFbmQgZHJhd1xuICAgIERlYnVnLiNnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gICAgUHJvZ3JhbS51bmJpbmQoRGVidWcuI2dsKTtcbiAgICBEZWJ1Zy4jZ2wuYmluZEJ1ZmZlcihEZWJ1Zy4jZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICBEZWJ1Zy4jZ2wuYmluZEJ1ZmZlcihEZWJ1Zy4jZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xuICB9XG59XG4iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge01hdDR9IGZyb20gXCIuLi9hbGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgTWF0cml4IFN0YWNrIGltcGxlbWVudGF0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgTWF0cml4U3RhY2sge1xuICBERVBUSF9MSU1JVCA9IDEyODtcbiAgI2FycmF5O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3Rvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI2FycmF5ID0gW01hdDQuSWRlbnRpdHkoKV07XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIE1hdHJpeCBhdCBoZWFkIG9mIHRoZSBzdGFjay5cbiAgICogSWYgdGhlIFN0YWNrIGlzIGVtcHR5LCB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7TWF0NH0gdGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBmb3IgdGhlIGVudGlyZSBzdGFja1xuICAgKi9cbiAgaGVhZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2l6ZSgpID4gMCkgPyB0aGlzLiNhcnJheVt0aGlzLnNpemUoKV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhIE1hdHJpeCBpbnRvIHRoZSBzdGFjayBhbmQgcmV0dXJucyB0aGUgbmV3IGhlYWQuXG4gICAqIFxuICAgKiBAcGFyYW0ge01hdDR9IG1hdCB0aGUgbWF0cml4IHRvIHB1c2hcbiAgICogXG4gICAqIEByZXR1cm5zIHtNYXQ0fSB0aGUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGZvciB0aGUgZW50aXJlIHN0YWNrXG4gICAqL1xuICBwdXNoKG1hdCkge1xuICAgIGNvbnN0IHRtcCA9IHRoaXMuI2FycmF5W3RoaXMuc2l6ZSgpXS5jbG9uZSgpLmFwcGx5KG1hdCk7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuI2FycmF5LnB1c2godG1wKTtcbiAgICBpZiAoc2l6ZSA+PSB0aGlzLkRFUFRIX0xJTUlUICsgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhY2sgZGVwdGggcmVhY2hlZCBpdHMgbGltaXQuIEJlIHN1cmUgdG8gcG9wKCkgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHRpbWVzLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRtcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIE1hdHJpeCBhdCB0aGUgdG9wIG9mIHRoZSBzdGFjayBhbmQgcmV0dXJucyBpdC5cbiAgICogSWYgdGhlIFN0YWNrIGlzIGVtcHR5LCB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7TWF0NH0gdGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBmb3IgdGhlIGVudGlyZSBzdGFja1xuICAgKi9cbiAgcG9wKCkge1xuICAgIHJldHVybiAodGhpcy5zaXplKCkgPiAwKSA/IHRoaXMuI2FycmF5LnBvcCgpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSBzdGFjaydzIHNpemUuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgc3RhY2sncyBzaXplXG4gICAqL1xuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNhcnJheS5sZW5ndGggLSAxO1xuICB9XG59XG4iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge0xpbmVzRnJvbVRyaWFuZ2xlcywgVmVjMiwgVmVjM30gZnJvbSBcIi4uL2FsbC5qc1wiO1xuaW1wb3J0IHtHZW5lcmFibGV9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIEN1YmUgcmVwcmVzZW50aW5nIGFuIEN1YmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDdWJlIGV4dGVuZHMgR2VuZXJhYmxlIHtcblxuICAvKipcbiAgICogUHJvdGVjdGVkIG1ldGhvZCB0byBhY3R1YWxseSBidWlsZCB0aGUgY3ViZS5cbiAgICogXG4gICAqIEByZXR1cm5zIHt2ZXJ0ZXhlcywgdXZzLCBub3JtYWxzLCB0cmlhbmdsZXMsIGxpbmVzfVxuICAgKi9cbiAgc3RhdGljIF9idWlsZCgpIHtcbiAgICBjb25zdCBzaWRlID0gMS4wO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSBbXTtcbiAgICBjb25zdCB1dnMgPSBbXTtcbiAgICBjb25zdCBub3JtYWxzID0gW107XG4gICAgY29uc3QgdHJpYW5nbGVzID0gW107XG4gICAgdmFyIGxpbmVzID0gW107XG5cbiAgICAvLyBEZWNsYXJlIDggdmVydGV4ZXNcbiAgICBjb25zdCBmVEwgPSAoKSA9PiBuZXcgVmVjMygtMSwgIDEsICAxKTtcbiAgICBjb25zdCBmVFIgPSAoKSA9PiBuZXcgVmVjMyggMSwgIDEsICAxKTtcbiAgICBjb25zdCBmQkwgPSAoKSA9PiBuZXcgVmVjMygtMSwgLTEsICAxKTtcbiAgICBjb25zdCBmQlIgPSAoKSA9PiBuZXcgVmVjMyggMSwgLTEsICAxKTtcbiAgICBjb25zdCBiVEwgPSAoKSA9PiBuZXcgVmVjMygtMSwgIDEsIC0xKTtcbiAgICBjb25zdCBiVFIgPSAoKSA9PiBuZXcgVmVjMyggMSwgIDEsIC0xKTtcbiAgICBjb25zdCBiQkwgPSAoKSA9PiBuZXcgVmVjMygtMSwgLTEsIC0xKTtcbiAgICBjb25zdCBiQlIgPSAoKSA9PiBuZXcgVmVjMyggMSwgLTEsIC0xKTtcblxuICAgIC8vIFB1c2ggdmVydGV4ZXMgYXMgMjQtbGVuZ3RoIGN1YmUgdG8gZW5hYmxlIHBlci1mYWNlIGF0dHJpYnV0ZXNcbiAgICB2ZXJ0ZXhlcy5wdXNoKFxuICAgICAgZlRMKCksIGZCTCgpLCBmVFIoKSwgZkJSKCksIC8vIEZyb250XG4gICAgICBiVFIoKSwgYkJSKCksIGJUTCgpLCBiQkwoKSwgLy8gQmFja1xuICAgICAgYlRMKCksIGJCTCgpLCBmVEwoKSwgZkJMKCksIC8vIExlZnRcbiAgICAgIGZUUigpLCBmQlIoKSwgYlRSKCksIGJCUigpLCAvLyBSaWdodCAgICAgIFxuICAgICAgZlRMKCksIGZUUigpLCBiVEwoKSwgYlRSKCksIC8vIFRvcCAgICAgIFxuICAgICAgZkJMKCksIGZCUigpLCBiQkwoKSwgYkJSKCksIC8vIERvd25cbiAgICApO1xuICAgIHZlcnRleGVzLmZvckVhY2goKHYpID0+IHYubXVsKHNpZGUgLyAyLjApKTtcblxuICAgIC8vIERlY2xhcmUgNi1mYWNlIG5vcm1hbHNcbiAgICBjb25zdCBGID0gbmV3IFZlYzMoIDAsICAwLCAgMSk7XG4gICAgY29uc3QgQiA9IG5ldyBWZWMzKCAwLCAgMCwgLTEpO1xuICAgIGNvbnN0IFIgPSBuZXcgVmVjMyggMSwgIDAsICAwKTtcbiAgICBjb25zdCBMID0gbmV3IFZlYzMoLTEsICAwLCAgMCk7XG4gICAgY29uc3QgVCA9IG5ldyBWZWMzKCAwLCAgMSwgIDApO1xuICAgIGNvbnN0IEQgPSBuZXcgVmVjMyggMCwgLTEsICAwKTtcbiAgICBcbiAgICAvLyBOb3JtYWxzXG4gICAgbm9ybWFscy5wdXNoKFxuICAgICAgRiwgRiwgRiwgRiwgLy8gRnJvbnRcbiAgICAgIEIsIEIsIEIsIEIsIC8vIEJhY2tcbiAgICAgIEwsIEwsIEwsIEwsIC8vIExlZnRcbiAgICAgIFIsIFIsIFIsIFIsIC8vIFJpZ2h0XG4gICAgICBULCBULCBULCBULCAvLyBUb3BcbiAgICAgIEQsIEQsIEQsIEQsIC8vIERvd25cbiAgICApO1xuXG4gICAgLy8gVE9ET1xuICAgIHV2cy5wdXNoKC4uLm5ldyBBcnJheSgyNCkuZmlsbChWZWMyLlplcm9zKCkpKTtcblxuICAgIC8vIENyZWF0ZSBxdWFkc1xuICAgIHRyaWFuZ2xlcy5wdXNoKFxuICAgICAgbmV3IFZlYzMoIDAsICAxLCAgMiksIG5ldyBWZWMzKCAxLCAgMiwgIDMpLCAvLyBGcm9udFxuICAgICAgbmV3IFZlYzMoIDQsICA1LCAgNiksIG5ldyBWZWMzKCA1LCAgNiwgIDcpLCAvLyBCYWNrXG4gICAgICBuZXcgVmVjMyggOCwgIDksIDEwKSwgbmV3IFZlYzMoIDksIDEwLCAxMSksIC8vIExlZnRcbiAgICAgIG5ldyBWZWMzKDEyLCAxMywgMTQpLCBuZXcgVmVjMygxMywgMTQsIDE1KSwgLy8gUmlnaHRcbiAgICAgIG5ldyBWZWMzKDE2LCAxNywgMTgpLCBuZXcgVmVjMygxNywgMTgsIDE5KSwgLy8gVG9wXG4gICAgICBuZXcgVmVjMygyMCwgMjEsIDIyKSwgbmV3IFZlYzMoMjEsIDIyLCAyMyksIC8vIERvd25cbiAgICApO1xuXG4gICAgLy8gTGluZXNcbiAgICBsaW5lcyA9IExpbmVzRnJvbVRyaWFuZ2xlcyh2ZXJ0ZXhlcywgdHJpYW5nbGVzKTtcblxuICAgIHJldHVybiB7IHZlcnRleGVzLCB1dnMsIG5vcm1hbHMsIHRyaWFuZ2xlcywgbGluZXMgfTtcbiAgfVxufSIsIi8qKiBAYXV0aG9yOiBEYXZpZGUgUmlzYWxpdGkgZGF2ZGFnMjRAZ21haWwuY29tICovXG5cbmltcG9ydCB7TGluZXNGcm9tVHJpYW5nbGVzLCB0b1JhZCwgVmVjMiwgVmVjM30gZnJvbSBcIi4uL2FsbC5qc1wiO1xuaW1wb3J0IHtHZW5lcmFibGV9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIEN5bGluZGVyIHJlcHJlc2VudGluZyBhbiBDeWxpbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEN5bGluZGVyIGV4dGVuZHMgR2VuZXJhYmxlIHtcbiAgXG4gIC8qKlxuICAgKiBQcm90ZWN0ZWQgbWV0aG9kIHRvIGFjdHVhbGx5IGJ1aWxkIHRoZSBjeWxpbmRlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByZWNpc2lvbiB0aGUgcHJlY2lzaW9uIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIHNoYXBlXG4gICAqIFxuICAgKiBAcmV0dXJucyB7dmVydGV4ZXMsIHV2cywgbm9ybWFscywgdHJpYW5nbGVzLCBsaW5lc31cbiAgICovXG4gICBzdGF0aWMgX2J1aWxkKHByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IE1hdGgubWF4KHByZWNpc2lvbiwgNSk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IFtdO1xuICAgIGNvbnN0IHV2cyA9IFtdO1xuICAgIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgICBjb25zdCB0cmlhbmdsZXMgPSBbXTtcbiAgICB2YXIgbGluZXMgPSBbXTtcblxuICAgIC8vIFByZWNpc2lvbiByZXByZXNlbnRzIHRoZSBudW0gb2YgdmVydGljYWwgc2xpY2VzXG4gICAgY29uc3Qgc3RlcCA9IHRvUmFkKDM2MCAvIChwcmVjaXNpb24gLSAxKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVjaXNpb247ICsraSkge1xuICAgICAgLy8gRWFjaCBzbGljZSBoYXMgZml4ZWQgYW5nbGVcbiAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIHN0ZXA7XG4gICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAvLyBDcmVhdGVzIHNsaWNlIHZlcnRleGVzXG4gICAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKCAgMCwgKzAuNSwgICAwKSk7IC8vIFRvcCBjZW50cmFsIHZlcnRleFxuICAgICAgdmVydGV4ZXMucHVzaChuZXcgVmVjMyhjb3MsICswLjUsIHNpbikpOyAvLyBUb3Agc2lkZSB2ZXJ0ZXggKDEpXG4gICAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKGNvcywgKzAuNSwgc2luKSk7IC8vIFRvcCBzaWRlIHZlcnRleCAoMilcbiAgICAgIHZlcnRleGVzLnB1c2gobmV3IFZlYzMoY29zLCAtMC41LCBzaW4pKTsgLy8gQm90dG9tIHNpZGUgdmVydGV4ICgxKVxuICAgICAgdmVydGV4ZXMucHVzaChuZXcgVmVjMyhjb3MsIC0wLjUsIHNpbikpOyAvLyBCb3R0b20gc2lkZSB2ZXJ0ZXggKDIpXG4gICAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKCAgMCwgLTAuNSwgICAwKSk7IC8vIEJvdHRvbSBjZW50cmFsIHZlcnRleFxuICAgICAgbm9ybWFscy5wdXNoKG5ldyBWZWMzKDAsICsxLCAwKSk7XG4gICAgICBub3JtYWxzLnB1c2gobmV3IFZlYzMoMCwgKzEsIDApKTtcbiAgICAgIG5vcm1hbHMucHVzaChuZXcgVmVjMyhjb3MsIDAsIHNpbikubm9ybWFsaXplKCkpO1xuICAgICAgbm9ybWFscy5wdXNoKG5ldyBWZWMzKGNvcywgMCwgc2luKS5ub3JtYWxpemUoKSk7XG4gICAgICBub3JtYWxzLnB1c2gobmV3IFZlYzMoMCwgLTEsIDApKTtcbiAgICAgIG5vcm1hbHMucHVzaChuZXcgVmVjMygwLCAtMSwgMCkpO1xuICAgIH1cblxuICAgIC8vIE51bSBvZiB2ZXJ0ZXhlcyBwZXIgc2xpY2VcbiAgICBjb25zdCBOID0gNjtcblxuICAgIC8vIEdlbmVyYXRlcyA0IHRyaWFuZ2xlcyBmb3IgZWFjaCBzbGljZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlY2lzaW9uOyArK2kpIHtcbiAgICAgIC8vIEluZGV4IGJlZ2luIGZvciB2ZXJ0ZXhlcyBvZiB0aGlzIHNsaWNlIChpLXRoKVxuICAgICAgY29uc3QgYiA9IGkgKiBOO1xuICAgICAgLy8gSW5kZXggYmVnaW4gZm9yIHZlcnRleGVzIG9mIHRoZSBuZXh0IHNsaWNlXG4gICAgICBjb25zdCBuID0gKChpICsgMSkgJSBwcmVjaXNpb24pICogTjtcbiAgICAgIC8vIENyZWF0ZSBmYWNlc1xuICAgICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoYiArIDAsIGIgKyAxLCBuICsgMSkpOyAvLyBUb3AgZmFjZVxuICAgICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoYiArIDIsIGIgKyAzLCBuICsgMikpOyAvLyBTaWRlIHF1YWQgKDEpXG4gICAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyhiICsgMywgbiArIDIsIG4gKyAzKSk7IC8vIFNpZGUgcXVhZCAoMilcbiAgICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKGIgKyA0LCBiICsgNSwgbiArIDQpKTsgLy8gQm90dG9tIGZhY2VcbiAgICB9XG5cbiAgICAvLyBUT0RPXG4gICAgdXZzLnB1c2goLi4ubmV3IEFycmF5KHZlcnRleGVzLmxlbmd0aCkuZmlsbChWZWMyLlplcm9zKCkpKTtcblxuICAgIC8vIExpbmVzXG4gICAgbGluZXMgPSBMaW5lc0Zyb21UcmlhbmdsZXModmVydGV4ZXMsIHRyaWFuZ2xlcyk7XG5cbiAgICByZXR1cm4geyB2ZXJ0ZXhlcywgdXZzLCBub3JtYWxzLCB0cmlhbmdsZXMsIGxpbmVzIH07XG4gICB9XG59XG4iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge0xpbmVzRnJvbVRyaWFuZ2xlcywgVmVjM30gZnJvbSBcIi4uL2FsbC5qc1wiO1xuaW1wb3J0IHtHZW5lcmFibGV9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5cbi8qKlxuICogQGNsYXNzIEljb3NhaGVkcm9uIHJlcHJlc2VudGluZyBhbiBJY29zYWhlZHJvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEljb3NhaGVkcm9uIGV4dGVuZHMgR2VuZXJhYmxlIHtcblxuICAvKipcbiAgICogUHJvdGVjdGVkIG1ldGhvZCB0byBhY3R1YWxseSBidWlsZCB0aGUgaWNvc2FoZWRyb24uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwcmVjaXNpb24gdGhlIHByZWNpc2lvbiB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHRoZSBzaGFwZVxuICAgKiBcbiAgICogQHJldHVybnMge3ZlcnRleGVzLCB1dnMsIG5vcm1hbHMsIHRyaWFuZ2xlcywgbGluZXN9XG4gICAqL1xuICBzdGF0aWMgX2J1aWxkKHByZWNpc2lvbikge1xuICAgIHByZWNpc2lvbiA9IE1hdGgubWF4KDAsIHByZWNpc2lvbik7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ZXMgPSBbXTtcbiAgICB2YXIgdXZzID0gW107XG4gICAgdmFyIG5vcm1hbHMgPSBbXTtcbiAgICB2YXIgdHJpYW5nbGVzID0gW107XG4gICAgdmFyIGxpbmVzID0gW107XG5cbiAgICAvLyBNYWdpYyB2YWx1ZXNcbiAgICBjb25zdCBYID0gMC41MjU3MzExMTIxMTkxMzM2MDY7XG4gICAgY29uc3QgWiA9IDAuODUwNjUwODA4MzUyMDM5OTMyO1xuICAgIGNvbnN0IE4gPSAwLjA7XG5cbiAgICAvLyBCdWlsZCB0aGUgMTItdmVydGV4ZXMgYmFzZSBpY29zYWhlZHJvblxuICAgIHZlcnRleGVzLnB1c2gobmV3IFZlYzMoLVgsIE4sIFopKTtcbiAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKCBYLCBOLCBaKSk7XG4gICAgdmVydGV4ZXMucHVzaChuZXcgVmVjMygtWCwgTiwtWikpO1xuICAgIHZlcnRleGVzLnB1c2gobmV3IFZlYzMoIFgsIE4sLVopKTtcbiAgICBcbiAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKCBOLCBaLCBYKSk7XG4gICAgdmVydGV4ZXMucHVzaChuZXcgVmVjMyggTiwgWiwtWCkpO1xuICAgIHZlcnRleGVzLnB1c2gobmV3IFZlYzMoIE4sLVosIFgpKTtcbiAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKCBOLC1aLC1YKSk7XG4gICAgXG4gICAgdmVydGV4ZXMucHVzaChuZXcgVmVjMyggWiwgWCwgTikpO1xuICAgIHZlcnRleGVzLnB1c2gobmV3IFZlYzMoLVosIFgsIE4pKTtcbiAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKCBaLC1YLCBOKSk7XG4gICAgdmVydGV4ZXMucHVzaChuZXcgVmVjMygtWiwtWCwgTikpO1xuICAgIFxuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgMCwgIDQsICAxKSk7XG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoICAwLCAgOSwgIDQpKTtcbiAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyggIDksICA1LCAgNCkpO1xuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgNCwgIDUsICA4KSk7XG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoICA0LCAgOCwgIDEpKTtcbiAgICBcbiAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyggIDgsIDEwLCAgMSkpO1xuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgOCwgIDMsIDEwKSk7XG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoICA1LCAgMywgIDgpKTtcbiAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyggIDUsICAyLCAgMykpO1xuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgMiwgIDcsICAzKSk7XG4gICAgXG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoICA3LCAxMCwgIDMpKTtcbiAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyggIDcsICA2LCAxMCkpO1xuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgNywgMTEsICA2KSk7XG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoIDExLCAgMCwgIDYpKTtcbiAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyggIDAsICAxLCAgNikpO1xuICAgIFxuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgNiwgIDEsIDEwKSk7XG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoICA5LCAgMCwgMTEpKTtcbiAgICB0cmlhbmdsZXMucHVzaChuZXcgVmVjMyggIDksIDExLCAgMikpO1xuICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKCAgOSwgIDIsICA1KSk7XG4gICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoICA3LCAgMiwgMTEpKTtcblxuICAgIC8vIE1ldGhvZCB0byBjcmVhdGUgYSBtaWRkbGUgcG9pbnQgYmV0d2VlbiB0d28gb3RoZXJzXG4gICAgY29uc3QgY2FjaGUxID0ge307XG4gICAgZnVuY3Rpb24gbWlkZGxlKGEsIGIpIHtcbiAgICAgIC8vIENvbXB1dGUga2V5XG4gICAgICBjb25zdCBrZXkgPSBNYXRoLm1heChhLCBiKSArIFwiX1wiICsgTWF0aC5taW4oYSwgYik7XG5cbiAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgY2FsY3VsYXRlZFxuICAgICAgaWYgKCFjYWNoZTFba2V5XSkge1xuICAgICAgICBcbiAgICAgICAgLy8gUmV0cmlldmUgdGhlIHR3byB2ZWN0b3JzIGZyb20gaW5kZWNlc1xuICAgICAgICBjb25zdCBbdmVjQSwgdmVjQl0gPSBbdmVydGV4ZXNbYV0sIHZlcnRleGVzW2JdXTtcbiAgXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyB2ZWMgKG1pZGRsZSlcbiAgICAgICAgY29uc3QgbmV3VmVjID0gVmVjMy5aZXJvcygpLmFkZCh2ZWNBKS5hZGQodmVjQikubm9ybWFsaXplKCk7XG4gIFxuICAgICAgICAvLyBTYXZlIHJlc3VsdCBpbiBjYWNoZVxuICAgICAgICBjYWNoZTFba2V5XSA9IHZlcnRleGVzLnB1c2gobmV3VmVjKSAtIDE7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiB0aGUgbmV3bHkgY3JlYXRlZCB2ZWMgaW5kZXhcbiAgICAgIHJldHVybiBjYWNoZTFba2V5XTtcbiAgICB9O1xuXG4gICAgLy8gSXRlcmF0ZSBzZXZlcmFsIHRpbWVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVjaXNpb247ICsraSkge1xuXG4gICAgICAvLyBUZW1wb3JhcnkgYXJyYXlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCB0cmlhbmdsZSB0byBzcGxpdCBpdCBpbiBmb3VyIG5ldyBvbmVzXG4gICAgICB0cmlhbmdsZXMuZm9yRWFjaCgoZmFjZSkgPT4ge1xuXG4gICAgICAgIC8vIEluZGV4ZXNcbiAgICAgICAgY29uc3QgYSA9IG1pZGRsZShmYWNlLngsIGZhY2UueSk7XG4gICAgICAgIGNvbnN0IGIgPSBtaWRkbGUoZmFjZS55LCBmYWNlLnopO1xuICAgICAgICBjb25zdCBjID0gbWlkZGxlKGZhY2UueiwgZmFjZS54KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFB1c2ggbmV3IHRyaWFuZ2xlc1xuICAgICAgICByZXN1bHQucHVzaChuZXcgVmVjMyhmYWNlLngsIGEsIGMpKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobmV3IFZlYzMoZmFjZS55LCBiLCBhKSk7XG4gICAgICAgIHJlc3VsdC5wdXNoKG5ldyBWZWMzKGZhY2UueiwgYywgYikpO1xuICAgICAgICByZXN1bHQucHVzaChuZXcgVmVjMyggICAgIGEsIGIsIGMpKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVcGRhdGUgdHJpYW5nbGVzXG4gICAgICB0cmlhbmdsZXMgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gTGluZXNcbiAgICBsaW5lcyA9IExpbmVzRnJvbVRyaWFuZ2xlcyh2ZXJ0ZXhlcywgdHJpYW5nbGVzKTtcblxuICAgIC8vIENyZWF0ZSBub3JtYWxzIGZvciBlYWNoIHZlcnRleFxuICAgIG5vcm1hbHMgPSB2ZXJ0ZXhlcy5tYXAoKHYpID0+IHYuY2xvbmUoKS5ub3JtYWxpemUoKSk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHV2cyBmb3IgZWFjaCB2ZXJ0ZXhcbiAgICB1dnMgPSB2ZXJ0ZXhlcy5tYXAoKHYpID0+IHYudG9VVm9mU3BoZXJlKCkpO1xuXG4gICAgcmV0dXJuIHsgdmVydGV4ZXMsIHV2cywgbm9ybWFscywgdHJpYW5nbGVzLCBsaW5lcyB9O1xuICB9XG59IiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuaW1wb3J0IHtMaW5lc0Zyb21UcmlhbmdsZXMsIFZlYzIsIFZlYzN9IGZyb20gXCIuLi9hbGwuanNcIjtcbmltcG9ydCB7R2VuZXJhYmxlfSBmcm9tIFwiLi90eXBlcy5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBTcGhlcmUgcmVwcmVzZW50aW5nIGFuIFNwaGVyZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwaGVyZSBleHRlbmRzIEdlbmVyYWJsZSB7XG5cbiAgLyoqXG4gICAqIFByb3RlY3RlZCBtZXRob2QgdG8gYWN0dWFsbHkgYnVpbGQgdGhlIHNwaGVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByZWNpc2lvbnggdGhlIG51bSBvZiB2ZXJ0aWNhbCBzbGljZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByZWNpc2lvbnkgdGhlIG51bSBvZiBob3Jpem9udGFsIHNsaWNlc1xuICAgKiBcbiAgICogQHJldHVybnMge3ZlcnRleGVzLCB1dnMsIG5vcm1hbHMsIHRyaWFuZ2xlcywgbGluZXN9XG4gICAqL1xuICBzdGF0aWMgX2J1aWxkKHByZWNpc2lvbngsIHByZWNpc2lvbnkpIHtcbiAgICBjb25zdCBudW1fdmVydF9zbGljZXMgPSBNYXRoLm1heCgzLCBwcmVjaXNpb254KTtcbiAgICBjb25zdCBudW1faG9yaV9zbGljZXMgPSBNYXRoLm1heCgzLCBwcmVjaXNpb255KTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IFtdO1xuICAgIGNvbnN0IHV2cyA9IFtdO1xuICAgIGNvbnN0IG5vcm1hbHMgPSBbXTtcbiAgICBjb25zdCB0cmlhbmdsZXMgPSBbXTtcbiAgICB2YXIgbGluZXMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBlYWNoIHZlcnRpY2FsIHNsaWNlXG4gICAgZm9yKGxldCB4ID0gMDsgeCA8PSBudW1fdmVydF9zbGljZXM7ICsreCkge1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBob3Jpem9udGFsIHNsaWNlXG4gICAgICBmb3IobGV0IHkgPSAwOyB5IDw9IG51bV9ob3JpX3NsaWNlczsgKyt5KSB7XG4gICAgICBcbiAgICAgICAgLy8gRmluZCB0aGUgYW5nbGVzXG4gICAgICAgIGNvbnN0IGFuZ2xlMCA9ICAgICBNYXRoLlBJICogeCAvIG51bV92ZXJ0X3NsaWNlcztcbiAgICAgICAgY29uc3QgYW5nbGUxID0gMiAqIE1hdGguUEkgKiB5IC8gbnVtX2hvcmlfc2xpY2VzO1xuXG4gICAgICAgIC8vIFJldHJpZXZlIGNvb3JkaW5hdGVzIGZyb20gYW5nbGVzXG4gICAgICAgIGNvbnN0IHZ4ID0gTWF0aC5zaW4oYW5nbGUwKSAqIE1hdGguY29zKGFuZ2xlMSk7XG4gICAgICAgIGNvbnN0IHZ5ID0gTWF0aC5jb3MoYW5nbGUwKTtcbiAgICAgICAgY29uc3QgdnogPSBNYXRoLnNpbihhbmdsZTApICogTWF0aC5zaW4oYW5nbGUxKTtcblxuICAgICAgICAvLyBSZXRyaWV2ZSB1dnMgZnJvbSBzbGljZSBpbmRleGVzXG4gICAgICAgIGNvbnN0IHUgPSB5IC8gbnVtX2hvcmlfc2xpY2VzO1xuICAgICAgICBjb25zdCB2ID0geCAvIG51bV92ZXJ0X3NsaWNlcztcblxuICAgICAgICAvLyBQdXNoIG5ldyB2ZXJ0ZXggd2l0aCBwb3NpdGlvbiwgdXYgYW5kIG5vcm1hbFxuICAgICAgICB2ZXJ0ZXhlcy5wdXNoKG5ldyBWZWMzKHZ4LCB2eSwgdnopKTtcbiAgICAgICAgdXZzLnB1c2gobmV3IFZlYzIodSwgdikpO1xuICAgICAgICBub3JtYWxzLnB1c2gobmV3IFZlYzModngsIHZ5LCB2eikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IEwgPSBudW1faG9yaV9zbGljZXMgKyAxO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggdmVydGljYWwgc2xpY2VcbiAgICBmb3IobGV0IHggPSAwOyB4IDwgbnVtX3ZlcnRfc2xpY2VzOyArK3gpIHtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggaG9yaXpvbnRhbCBzbGljZVxuICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IG51bV9ob3JpX3NsaWNlczsgKyt5KSB7XG4gICAgICAgIGNvbnN0IGIgID0geCAqIEw7XG4gICAgICAgIGNvbnN0IGMgID0gKCh5ICE9IEwgLSAxKSA/IEwgOiAwKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGkwID0gYiArIHk7XG4gICAgICAgIGNvbnN0IGkxID0gYiArIHkgKyAxO1xuICAgICAgICBjb25zdCBpMiA9IGIgKyB5ICsgTDtcbiAgICAgICAgY29uc3QgaTMgPSBiICsgKHkgKyAxKSAlIEw7XG4gICAgICAgIFxuICAgICAgICAvLyBUcmlhbmdsZXNcbiAgICAgICAgaWYgKHggIT0gbnVtX3ZlcnRfc2xpY2VzIC0gMSkge1xuICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBWZWMzKGkwLCBpMiwgaTMgKyBMKSk7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICBpZiAoeCAhPSAwKSB7XG4gICAgICAgICAgdHJpYW5nbGVzLnB1c2gobmV3IFZlYzMoaTAsIGkxLCBpMyArIEwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHV2cy5mb3JFYWNoKCh2KSA9PiBjb25zb2xlLmxvZyh2LnRvU3RyaW5nKDIpKSk7XG4gICAgLy8gdmVydGV4ZXMuZm9yRWFjaCgodikgPT4gY29uc29sZS5sb2codi50b1N0cmluZygzKSkpO1xuICAgIC8vIHRyaWFuZ2xlcy5mb3JFYWNoKCh0KSA9PiBjb25zb2xlLmxvZyh0LnRvU3RyaW5nKDApKSk7XG5cbiAgICAvLyBMaW5lc1xuICAgIGxpbmVzID0gTGluZXNGcm9tVHJpYW5nbGVzKHZlcnRleGVzLCB0cmlhbmdsZXMpO1xuXG4gICAgcmV0dXJuIHsgdmVydGV4ZXMsIHV2cywgbm9ybWFscywgdHJpYW5nbGVzLCBsaW5lcyB9O1xuICB9XG59IiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuaW1wb3J0IHtEZWJ1Z30gZnJvbSBcIi4uL2FsbC5qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBHZW5lcmFibGUgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgYnkgYW55IGdlbmVyYWJsZSBzaGFwZSB0aGF0IGltcGxlbWVudHMgX2J1aWxkKCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmFibGUge1xuICBcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBCYXNpY1NoYXBlXG4gICAqIFxuICAgKiBAcGFyYW0gey4uLn0gYXJncyB0aGUgYXJndW1lbnRzIHRvIGJ1aWxkIHRoZSBzZWxlY3RlZCBzaGFwZS5cbiAgICpcbiAgICogQHJldHVybiB7QmFzaWNTaGFwZX0gdGhlIGdlbmVyYXRlZCBzaGFwZVxuICAgKi9cbiAgIHN0YXRpYyBhc0Jhc2ljU2hhcGUoYXJncykge1xuICAgIGNvbnN0IHsgdmVydGV4ZXMsIHRyaWFuZ2xlcyB9ID0gdGhpcy5fYnVpbGQoLi4uYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IEJhc2ljU2hhcGUodmVydGV4ZXMsIHRyaWFuZ2xlcyk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgVGV4dHVyZWRTaGFwZVxuICAgKiBcbiAgICogQHBhcmFtIHsuLi59IGFyZ3MgdGhlIGFyZ3VtZW50cyB0byBidWlsZCB0aGUgc2VsZWN0ZWQgc2hhcGUuXG4gICAqXG4gICAqIEByZXR1cm4ge1RleHR1cmVkU2hhcGV9IHRoZSBnZW5lcmF0ZWQgc2hhcGVcbiAgICovXG4gIHN0YXRpYyBhc1RleHR1cmVkU2hhcGUoYXJncykge1xuICAgIGNvbnN0IHsgdmVydGV4ZXMsIHV2cywgdHJpYW5nbGVzIH0gPSB0aGlzLl9idWlsZCguLi5hcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgVGV4dHVyZWRTaGFwZSh2ZXJ0ZXhlcywgdXZzLCB0cmlhbmdsZXMpO1xuICB9XG4gIFxuICAvKipcbiAgICogQ3JlYXRlcyBhIERlYnVnU2hhcGVcbiAgICogXG4gICAqIEBwYXJhbSB7Li4ufSBhcmdzIHRoZSBhcmd1bWVudHMgdG8gYnVpbGQgdGhlIHNlbGVjdGVkIHNoYXBlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtEZWJ1Z1NoYXBlfSB0aGUgZ2VuZXJhdGVkIHNoYXBlXG4gICAqL1xuICBzdGF0aWMgYXNEZWJ1Z1NoYXBlKGFyZ3MpIHtcbiAgICBjb25zdCB7IHZlcnRleGVzLCB1dnMsIG5vcm1hbHMsIHRyaWFuZ2xlcywgbGluZXMgfSA9IHRoaXMuX2J1aWxkKC4uLmFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBEZWJ1Z1NoYXBlKHZlcnRleGVzLCB1dnMsIG5vcm1hbHMsIHRyaWFuZ2xlcywgbGluZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjcmVhdGUgdGhlIHNoYXBlLlxuICAgKiBTaG91bGQgYmUgaW1wbGVtZW50ZWQgYnkgc3BlY2lhbGl6ZWQgY2xhc3Nlcy5cbiAgICogXG4gICAqIEByZXR1cm5zIHt2ZXJ0ZXhlcywgdXZzLCBub3JtYWxzLCB0cmlhbmdsZXMsIGxpbmVzfVxuICAgKi9cbiAgc3RhdGljIF9idWlsZCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJfYnVpbGQoKSBub3QgaW1wbGVtZW50ZWRcIik7XG4gIH1cbn1cblxuLyoqXG4gKiBAY2xhc3MgU2hhcGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBnZW9tZXRyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNoYXBlIHtcbiAgdmVydGV4ZXM7XG4gIG51bVZlcnRleGVzO1xuICB0cmlhbmdsZXM7XG4gIG51bVRyaWFuZ2xlcztcbiAgXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgU2hhcGUuXG4gICAqXG4gICAqIEBwYXJhbSB7bGlzdCBvZiBudW1iZXJ9IHZlcnRleGVzIHRoZSB2ZXJ0ZXhlcyBsaXN0XG4gICAqIEBwYXJhbSB7bGlzdCBvZiBudW1iZXJ9IHRyaWFuZ2xlcyB0aGUgdHJpYW5nbGVzIGxpc3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZlcnRleGVzLCB0cmlhbmdsZXMpIHtcbiAgICB0aGlzLnZlcnRleGVzID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhlcyk7XG4gICAgdGhpcy5udW1WZXJ0ZXhlcyA9IHRoaXMudmVydGV4ZXMubGVuZ3RoIC8gdGhpcy5jb25zdHJ1Y3Rvci5WZXJ0ZXhTaXplKCk7XG4gICAgdGhpcy50cmlhbmdsZXMgPSBuZXcgVWludDE2QXJyYXkodHJpYW5nbGVzKTtcbiAgICB0aGlzLm51bVRyaWFuZ2xlcyA9IHRoaXMudHJpYW5nbGVzLmxlbmd0aCAvIDM7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIGRhdGEgY291bnQgcGVyIHZlcnRleC5cbiAgICogU2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IHNwZWNpYWxpemVkIGNsYXNzZXMuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB2ZXJ0ZXggc2l6ZVxuICAgKi9cbiAgc3RhdGljIFZlcnRleFNpemUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmVydGV4U2l6ZSgpIG5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMgc3VnYXIgdG8gcmV0cmlldmUgdmVydGV4IHNpemUgZnJvbSBpbnN0YW5jZXMuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB2ZXJ0ZXggc2l6ZVxuICAgKi9cbiAgdmVydGV4U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5WZXJ0ZXhTaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogRXN0aW1hdGUgbWVtb3J5IGNvc3Qgb2YgdGhlIHNoYXBlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXIsIG51bWJlciwgbnVtYmVyfSB0aGUgbWVtb3J5IG9jY3VwYXRpb25cbiAgICovXG4gIGdldCBieXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhlcy5sZW5ndGggKiA0ICsgdGhpcy50cmlhbmdsZXMubGVuZ3RoICogMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbGF0dGVuIHRoZSBhcnJheS5cbiAgICpcbiAgICogZXguXG4gICAqICAgICBhID0gWygwLCAxKSwgKDIsIDMpXVxuICAgKlxuICAgKiAgICAgZmxhdHRlblZlY0FycmF5KGEpID0gWzAsIDEsIDIsIDNdXG4gICAqXG4gICAqIEBwYXJhbSB7bGlzdCBvZiBWZWN9IGFycmF5IHRoZSBhcnJheSB0byBmbGF0dGVuXG4gICAqXG4gICAqIEByZXR1cm4ge2FycmF5fSBhIHBsYWluIEpTIGFycmF5XG4gICAqL1xuICBzdGF0aWMgZmxhdHRlblZlY0FycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIFNoYXBlLmZsYXR0ZW5WZWNBcnJheXMoW2FycmF5XSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBGbGF0dGVuIHRoZSBhcnJheXMgY29tYmluaW5nIGVhY2ggZWxlbWVudCBmcm9tIGVhY2ggYXJyYXkuXG4gICAqXG4gICAqIGV4LlxuICAgKiAgICAgYSA9IFsoMCwgMSksICgyLCAzKV1cbiAgICogICAgIGIgPSBbKDQsIDUpLCAoNiwgNyldXG4gICAqXG4gICAqICAgICBmbGF0dGVuVmVjQXJyYXlzKFthLCBiXSkgPSBbMCwgMSwgNCwgNSwgMiwgMywgNiwgN11cbiAgICpcbiAgICogQHBhcmFtIHtsaXN0IG9mIGxpc3Qgb2YgVmVjfSBhcnJheXMgdGhlIGFycmF5IGxpc3QgdG8gZmxhdHRlblxuICAgKlxuICAgKiBAcmV0dXJuIHthcnJheX0gYSBwbGFpbiBKUyBhcnJheVxuICAgKi9cbiAgc3RhdGljIGZsYXR0ZW5WZWNBcnJheXMoYXJyYXlzKSB7XG4gICAgcmV0dXJuIGFycmF5c1swXS5tYXAoKF8sIGluZCkgPT4gYXJyYXlzLm1hcCgoYSkgPT4gWy4uLmFbaW5kXS52YWx1ZXNdKS5mbGF0KCkpLmZsYXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBkcmF3IHBvaW50cyBmb3IgZWFjaCB2ZXJ0ZXguXG4gICAqXG4gICAqIFdvcmtzIG9ubHkgd2hlbiB1c2luZyB0aGUgRGVidWdTaGFwZS5cbiAgICovXG4gIGRyYXdQb2ludHMobWF0LCBjb2xvciwgc2l6ZSkgeyB9XG5cbiAgLyoqXG4gICAqIERlYnVnIGRyYXcgbGluZXMgZm9yIGVhY2ggc2VnbWVudC5cbiAgICpcbiAgICogV29ya3Mgb25seSB3aGVuIHVzaW5nIHRoZSBEZWJ1Z1NoYXBlLlxuICAgKi9cbiAgZHJhd0xpbmVzKG1hdCwgY29sb3IpIHsgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBCYXNpY1NoYXBlIHJlcHJlc2VudGluZyBhIGJhc2ljIGdlb21ldHJ5IGRlZmluZWQgYnk6XG4gKiAtIHZlcnRleGVzIGFycmF5IG9mIHsgM0QtUG9zIH1cbiAqIC0gdHJpYW5nbGVzIGFycmF5IG9mIHsgaW5kaWNlcyB9XG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNpY1NoYXBlIGV4dGVuZHMgU2hhcGUge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIEJhc2ljU2hhcGUuXG4gICAqXG4gICAqIEBwYXJhbSB7bGlzdCBvZiBWZWMzfSB2ZXJ0ZXhlcyB0aGUgdmVydGV4ZXMgbGlzdFxuICAgKiBAcGFyYW0ge2xpc3Qgb2YgVmVjM30gdHJpYW5nbGVzIHRoZSB0cmlhbmdsZXMgbGlzdFxuICAgKi9cbiAgY29uc3RydWN0b3IodmVydGV4ZXMsIHRyaWFuZ2xlcykge1xuICAgIHN1cGVyKFxuICAgICAgU2hhcGUuZmxhdHRlblZlY0FycmF5KHZlcnRleGVzKSxcbiAgICAgIFNoYXBlLmZsYXR0ZW5WZWNBcnJheSh0cmlhbmdsZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZGF0YSBjb3VudCBwZXIgdmVydGV4LlxuICAgKiBcbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgdmVydGV4IHNpemVcbiAgICovXG4gIHN0YXRpYyBWZXJ0ZXhTaXplKCkge1xuICAgIHJldHVybiAzO1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIFRleHR1cmVkU2hhcGUgcmVwcmVzZW50aW5nIGEgYmFzaWMgZ2VvbWV0cnkgZGVmaW5lZCBieTpcbiAqIC0gdmVydGV4ZXMgYXJyYXkgb2YgeyAzRC1Qb3MsIDJELVRleHR1cmUtQ29vcmQgfVxuICogLSB0cmlhbmdsZXMgYXJyYXkgb2YgeyBpbmRpY2VzIH1cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHR1cmVkU2hhcGUgZXh0ZW5kcyBTaGFwZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgVGV4dHVyZWRTaGFwZS5cbiAgICpcbiAgICogQHBhcmFtIHtsaXN0IG9mIFZlYzN9IHZlcnRleGVzIHRoZSB2ZXJ0ZXhlcyBsaXN0XG4gICAqIEBwYXJhbSB7bGlzdCBvZiBWZWMyfSB1dnMgdGhlIHV2cyBsaXN0XG4gICAqIEBwYXJhbSB7bGlzdCBvZiBWZWMzfSB0cmlhbmdsZXMgdGhlIHRyaWFuZ2xlcyBsaXN0XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhlcywgdXZzLCB0cmlhbmdsZXMpIHtcbiAgICBzdXBlcihcbiAgICAgIFNoYXBlLmZsYXR0ZW5WZWNBcnJheXMoW3ZlcnRleGVzLCB1dnNdKSxcbiAgICAgIFNoYXBlLmZsYXR0ZW5WZWNBcnJheSh0cmlhbmdsZXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZGF0YSBjb3VudCBwZXIgdmVydGV4LlxuICAgKiBcbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgdmVydGV4IHNpemVcbiAgICovXG4gIHN0YXRpYyBWZXJ0ZXhTaXplKCkge1xuICAgIHJldHVybiA1O1xuICB9XG59XG5cbi8qKlxuICogQGNsYXNzIERlYnVnU2hhcGUgcmVwcmVzZW50aW5nIGEgYmFzaWMgZ2VvbWV0cnkgZGVmaW5lZCBieTpcbiAqIC0gdmVydGV4ZXMgYXJyYXkgb2YgeyAzRC1Qb3MsIDJELVRleHR1cmUtQ29vcmQsIDNELU5vcm1hbCB9XG4gKiAtIHRyaWFuZ2xlcyBhcnJheSBvZiB7IGluZGljZXMgfVxuICogLSBsaW5lcyBhcnJheSBvZiB7IGluZGljZXMgfVxuICovXG5leHBvcnQgY2xhc3MgRGVidWdTaGFwZSBleHRlbmRzIFNoYXBlIHtcbiAgbGluZXM7XG4gIG51bUxpbmVzO1xuICBcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBEZWJ1Z1NoYXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge2xpc3Qgb2YgVmVjM30gdmVydGV4ZXMgdGhlIHZlcnRleGVzIGxpc3RcbiAgICogQHBhcmFtIHtsaXN0IG9mIFZlYzJ9IHV2cyB0aGUgdXZzIGxpc3RcbiAgICogQHBhcmFtIHtsaXN0IG9mIFZlYzN9IG5vcm1hbHMgdGhlIG5vcm1hbHMgbGlzdFxuICAgKiBAcGFyYW0ge2xpc3Qgb2YgVmVjM30gdHJpYW5nbGVzIHRoZSB0cmlhbmdsZXMgbGlzdFxuICAgKiBAcGFyYW0ge2xpc3Qgb2YgVmVjMn0gbGluZXMgdGhlIGxpbmVzIGxpc3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZlcnRleGVzLCB1dnMsIG5vcm1hbHMsIHRyaWFuZ2xlcywgbGluZXMpIHtcbiAgICBzdXBlcihcbiAgICAgIFNoYXBlLmZsYXR0ZW5WZWNBcnJheXMoW3ZlcnRleGVzLCB1dnMsIG5vcm1hbHNdKSxcbiAgICAgIFNoYXBlLmZsYXR0ZW5WZWNBcnJheSh0cmlhbmdsZXMpXG4gICAgKTtcbiAgICB0aGlzLmxpbmVzID0gbmV3IFVpbnQxNkFycmF5KFNoYXBlLmZsYXR0ZW5WZWNBcnJheShsaW5lcykpO1xuICAgIHRoaXMubnVtTGluZXMgPSB0aGlzLmxpbmVzLmxlbmd0aCAvIDI7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIGRhdGEgY291bnQgcGVyIHZlcnRleC5cbiAgICogXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIHZlcnRleCBzaXplXG4gICAqL1xuICBzdGF0aWMgVmVydGV4U2l6ZSgpIHtcbiAgICByZXR1cm4gODtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc3RpbWF0ZSBtZW1vcnkgY29zdCBvZiB0aGUgc2hhcGUuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlciwgbnVtYmVyLCBudW1iZXJ9IHRoZSBtZW1vcnkgb2NjdXBhdGlvblxuICAgKi9cbiAgZ2V0IGJ5dGVzKCkge1xuICAgIHJldHVybiBzdXBlci5ieXRlcyArIHRoaXMubGluZXMubGVuZ3RoICogMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBkcmF3IHBvaW50cyBmb3IgZWFjaCB2ZXJ0ZXguXG4gICAqXG4gICAqIEBwYXJhbSB7TWF0NH0gbWF0IHRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtWZWM0fSBjb2xvciB0aGUgY29sb3Igb2YgZWFjaCBwb2ludFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSB0aGUgc2l6ZSBvZiBlYWNoIHBvaW50XG4gICAqL1xuICBkcmF3UG9pbnRzKG1hdCwgY29sb3IsIHNpemUpIHtcbiAgICBEZWJ1Zy5kcmF3UG9pbnRzKHRoaXMudmVydGV4ZXMsIHRoaXMudmVydGV4U2l6ZSgpLCBtYXQsIHRoaXMubnVtVmVydGV4ZXMsIGNvbG9yLCBzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJ1ZyBkcmF3IGxpbmVzIGZvciBlYWNoIHNlZ21lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7TWF0NH0gbWF0IHRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICogQHBhcmFtIHtWZWM0fSBjb2xvciB0aGUgY29sb3Igb2YgZWFjaCBwb2ludFxuICAgKi9cbiAgZHJhd0xpbmVzKG1hdCwgY29sb3IpIHtcbiAgICBEZWJ1Zy5kcmF3TGluZXModGhpcy52ZXJ0ZXhlcywgdGhpcy5saW5lcywgdGhpcy52ZXJ0ZXhTaXplKCksIG1hdCwgdGhpcy5udW1MaW5lcywgY29sb3IpO1xuICB9XG59XG4iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge1ZlYzJ9IGZyb20gXCIuLi9hbGwuanNcIjtcblxuLypcbiAqIFJldHJpZXZlIGEgbGluZXMgYXJyYXkgb2YgaW5kZXhlcyBmcm9tIHRyaWFuZ2xlcyBsaXN0IGFuZCB2ZXJ0ZXhlcy5cbiAqIFxuICogQHBhcmFtcyB7bGlzdCBvZiBWZWMzfSB2ZXJ0ZXhlcyB0aGUgbGlzdCBvZiB2ZXJ0ZXhlc1xuICogQHBhcmFtcyB7bGlzdCBvZiBWZWMzfSB0cmlhbmdsZXMgdGhlIGxpc3Qgb2YgdHJpYW5nbGVzXG4gKiBcbiAqIEByZXR1cm4ge2xpc3Qgb2YgVmVjMn0gdGhlIGxpbmVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMaW5lc0Zyb21UcmlhbmdsZXModmVydGV4ZXMsIHRyaWFuZ2xlcykge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuICBjb25zdCBjYWNoZTIgPSBuZXcgU2V0KCk7XG5cbiAgdHJpYW5nbGVzLmZvckVhY2goKGZhY2UpID0+IHtcbiAgICAvLyBBZGQgbGluZXNcbiAgICBbW2ZhY2UueCwgZmFjZS55XSwgW2ZhY2UueSwgZmFjZS56XSwgW2ZhY2UueiwgZmFjZS54XV0uZm9yRWFjaCgoW2EsIGJdKSA9PiB7XG4gICAgICAvLyBDb21wdXRlIGtleVxuICAgICAgY29uc3QgdmVjQSA9IHZlcnRleGVzW2FdO1xuICAgICAgY29uc3QgdmVjQiA9IHZlcnRleGVzW2JdO1xuICAgICAgY29uc3Qga2V5ID0gTWF0aC5tYXgoYSwgYikgKyBcIl9cIiArIE1hdGgubWluKGEsIGIpO1xuICAgICAgXG4gICAgICAvLyBDaGVjayBpZiBsaW5lIGlzIGluIGNhY2hlXG4gICAgICBpZiAoIWNhY2hlMi5oYXMoa2V5KSkge1xuICAgICAgICBsaW5lcy5wdXNoKG5ldyBWZWMyKGEsIGIpKTtcbiAgICAgICAgY2FjaGUyLmFkZChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gbGluZXM7XG59IiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuLyoqXG4gKiBAY2xhc3MgTWF0IGJhc2UgdmVjdG9yIGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgTWF0IHtcbiAgdmFsdWVzO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgTWF0LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5IG9mIG51bWJlcn0gYXJyIHRoZSBhcnJheSBvZiB2YWx1ZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFycikge1xuICAgIHRoaXMudmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShhcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0byByZXRyaWV2ZSBlbGVtZW50cyBjb3VudC5cbiAgICogU2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IHNwZWNpYWxpemVkIGNsYXNzZXMuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHNcbiAgICovXG4gIHN0YXRpYyBjb3VudCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VudCgpIG5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgc2lkZSBjb3VudC5cbiAgICogU2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IHNwZWNpYWxpemVkIGNsYXNzZXMuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHMgb24gYSBzaWRlIG9mIHRoZSBtYXRyaXhcbiAgICovXG4gIHN0YXRpYyBzaWRlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInNpZGUoKSBub3QgaW1wbGVtZW50ZWRcIik7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIE1hdCBpbml0aWFsaXphdGlvbiBmcm9tIGFycmF5LlxuICAgKiBBcnJheSBjb250YWlucyBlbGVtZW50cyBpbiBDb2x1bW4tTWFqb3Igb3JkZXIuXG4gICAqIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBieSBzcGVjaWFsaXplZCBjbGFzc2VzLlxuICAgKiBcbiAgICogQHBhcmFtIHthcnJheSBvZiBudW1iZXJ9IGFyciB0aGUgYXJyYXkgdG8gY29weVxuICAgKiBcbiAgICogQHJldHVybiB7TWF0fSB0aGUgbmV3bHkgY3JlYXRlZCBtYXRyaXhcbiAgICovXG4gIHN0YXRpYyBGcm9tQXJyYXlDTShhcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGcm9tQXJyYXlDTSgpIG5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgTWF0IGluaXRpYWxpemF0aW9uIGZyb20gYXJyYXkuXG4gICAqIEFycmF5IGNvbnRhaW5zIGVsZW1lbnRzIGluIFJvdy1NYWpvciBvcmRlci5cbiAgICogU2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IHNwZWNpYWxpemVkIGNsYXNzZXMuXG4gICAqIFxuICAgKiBAcGFyYW0ge2FycmF5IG9mIG51bWJlcn0gYXJyIHRoZSBhcnJheSB0byBjb3B5XG4gICAqIFxuICAgKiBAcmV0dXJuIHtNYXR9IHRoZSBuZXdseSBjcmVhdGVkIG1hdHJpeFxuICAgKi9cbiAgc3RhdGljIEZyb21BcnJheVJNKGFycikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZyb21BcnJheVJNKCkgbm90IGltcGxlbWVudGVkXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgTWF0Mi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyBpbmRleCBvZiB0aGUgcm93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb2wgaW5kZXggb2YgdGhlIGNvbHVtblxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgaW4gcG9zaXRpb24gW3Jvd11bY29sXVxuICAgKi9cbiAgZ2V0KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzW2NvbCAqIHRoaXMuY29uc3RydWN0b3Iuc2lkZSgpICsgcm93XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYW4gZWxlbWVudCBmcm9tIHRoZSBNYXQyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IGluZGV4IG9mIHRoZSByb3dcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbCBpbmRleCBvZiB0aGUgY29sdW1uXG4gICAqL1xuICBzZXQocm93LCBjb2wsIHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZXNbY29sICogdGhpcy5jb25zdHJ1Y3Rvci5zaWRlKCkgKyByb3ddID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgTWF0IGluc3RhbmNlLlxuICAgKiBcbiAgICogQHJldHVybiB7c3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICovXG4gIHRvU3RyaW5nKGRlY2ltYWwgPSAyMCkge1xuICAgIGNvbnN0IHJvd3MgPSBuZXcgQXJyYXkodGhpcy5jb25zdHJ1Y3Rvci5zaWRlKCkpLmZpbGwoMClcbiAgICAgIC5tYXAoKGVsLCBpbmQpID0+IFwiXFx0XCIgKyB0aGlzLnJvdyhpbmQpLnRvU3RyaW5nKGRlY2ltYWwpKTtcbiAgICByZXR1cm4gXCJbXFxuXCIgKyByb3dzLmpvaW4oXCIsXFxuXCIpICsgXCJcXG5dXCI7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSB0aGUgdHdvIE1hdC5cbiAgICpcbiAgICogQHBhcmFtIHtNYXR9IG1hdCB0aGUgbWF0cml4IHRvIGNvbXBhcmVcbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gaWYgdGhlIE1hdCBhcmUgZXF1YWxzXG4gICAqL1xuICBlcXVhbHMobWF0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnN0cnVjdG9yLmNvdW50KCk7ICsraSlcbiAgICAgIGlmICh0aGlzLnZhbHVlc1tpXSAhPT0gdmVjLnZhbHVlc1tpXSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdW5kIHRoZSBNYXQuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlY2ltYWwgdGhlIGRlY2ltYWwgcGxhY2VzIHRvIGxlZnRcbiAgICpcbiAgICogQHJldHVybiB7TWF0fSB0aGlzXG4gICAqL1xuICByb3VuZChkZWNpbWFsKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnN0cnVjdG9yLmNvdW50KCk7ICsraSlcbiAgICAgIHRoaXMudmFsdWVzW2ldID0gdGhpcy52YWx1ZXNbaV0udG9GaXhlZChkZWNpbWFsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc3Bvc2UgdGhlIE1hdC5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXR9IHRoaXNcbiAgICovXG4gIHRyYW5zcG9zZSgpIHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuY29uc3RydWN0b3Iuc2lkZSgpOyArK3IpXG4gICAgICBmb3IgKGxldCBjID0gciArIDE7IGMgPCB0aGlzLmNvbnN0cnVjdG9yLnNpZGUoKTsgKytjKSB7XG4gICAgICAgIGNvbnN0IHRtcCA9IHRoaXMuZ2V0KHIsIGMpO1xuICAgICAgICB0aGlzLnNldChyLCBjLCB0aGlzLmdldChjLCByKSk7XG4gICAgICAgIHRoaXMuc2V0KGMsIHIsIHRtcCk7XG4gICAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIFZlYyBjbG9uZS5cbiAgICogXG4gICAqIEByZXR1cm4ge1ZlY30gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5Gcm9tQXJyYXlDTSh0aGlzLnZhbHVlcyk7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIE1hdCBpbml0aWFsaXphdGlvbiB3aXRoIHplcm9zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXR9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgc3RhdGljIElkZW50aXR5KCkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBBcnJheSh0aGlzLmNvdW50KCkpLmZpbGwoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50KCk7ICsraSlcbiAgICAgIGlmICgoaSAlICh0aGlzLnNpZGUoKSArIDEpKSA9PT0gMClcbiAgICAgICAgYXJyW2ldID0gMTtcbiAgICByZXR1cm4gdGhpcy5Gcm9tQXJyYXlDTShhcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBNYXQgaW5pdGlhbGl6YXRpb24gd2l0aCBlcXVhbCB2YWx1ZXMuXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gdiB0aGUgdmFsdWUgdG8gYmUgdXNlZCBmb3IgZXZlcnkgY29vcmRpbmF0ZVxuICAgKiBcbiAgICogQHJldHVybiB7TWF0fSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHN0YXRpYyBBbGwodikge1xuICAgIHJldHVybiB0aGlzLkZyb21BcnJheUNNKG5ldyBBcnJheSh0aGlzLmNvdW50KCkpLmZpbGwodikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBNYXQgaW5pdGlhbGl6YXRpb24gd2l0aCB6ZXJvcy5cbiAgICpcbiAgICogQHJldHVybiB7TWF0fSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHN0YXRpYyBaZXJvcygpIHtcbiAgICByZXR1cm4gdGhpcy5BbGwoMCk7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIE1hdCBpbml0aWFsaXphdGlvbiB3aXRoIG9uZXMuXG4gICAqXG4gICAqIEByZXR1cm4ge01hdH0gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgT25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5BbGwoMSk7XG4gIH1cbn0iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge01hdH0gZnJvbSBcIi4vbWF0LmpzXCI7XG5pbXBvcnQge1ZlYzJ9IGZyb20gXCIuLi9hbGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgTWF0IHJlcHJlc2VudGluZyBhIDJ4MiBtYXRyaXguXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXQyIGV4dGVuZHMgTWF0IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBNYXQyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlciwgbnVtYmVyfSB0aGUgZmlyc3Qgcm93XG4gICAqIEBwYXJhbSB7bnVtYmVyLCBudW1iZXJ9IHRoZSBzZWNvbmQgcm93XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4X3IxLCB5X3IxLFxuICAgICAgICAgICAgICB4X3IyLCB5X3IyKSB7XG4gICAgc3VwZXIoW3hfcjEsIHhfcjIsXG4gICAgICAgICAgIHlfcjEsIHlfcjJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZWxlbWVudHMgY291bnQuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHNcbiAgICovXG4gIHN0YXRpYyBjb3VudCgpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgc2lkZSBjb3VudC5cbiAgICogXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bSBvZiBlbGVtZW50cyBvbiB0aGUgc2lkZSBvZiB0aGUgbWF0cml4XG4gICAqL1xuICBzdGF0aWMgc2lkZSgpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgTWF0MiBpbml0aWFsaXphdGlvbiB3aXRoIGFuIGFycmF5LlxuICAgKlxuICAgKiBDb2x1bW4tTWFqb3IgdmVyc2lvbi5cbiAgICpcbiAgICogQHJldHVybiB7TWF0Mn0gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgRnJvbUFycmF5Q00oYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBNYXQyKGFyclswXSwgYXJyWzJdLFxuICAgICAgICAgICAgICAgICAgICBhcnJbMV0sIGFyclszXSk7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIE1hdDIgaW5pdGlhbGl6YXRpb24gd2l0aCBhbiBhcnJheS5cbiAgICpcbiAgICogUm93LU1ham9yIHZlcnNpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge01hdDJ9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgc3RhdGljIEZyb21BcnJheVJNKGFycikge1xuICAgIHJldHVybiBuZXcgTWF0MihhcnJbMF0sIGFyclsxXSxcbiAgICAgICAgICAgICAgICAgICAgYXJyWzJdLCBhcnJbM10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcm93IGZyb20gdGhlIE1hdDIgYXMgYSBWZWMyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSByb3dcbiAgICpcbiAgICogQHJldHVybiB7VmVjMn0gdGhlIHNlbGVjdGVkIHJvd1xuICAgKi9cbiAgcm93KGluZGV4KSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMudmFsdWVzWzAgKyBpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzWzIgKyBpbmRleF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgY29sIGZyb20gdGhlIE1hdDIgYXMgYSBWZWMyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBjb2x1bW5cbiAgICpcbiAgICogQHJldHVybiB7VmVjMn0gdGhlIHNlbGVjdGVkIGNvbHVtblxuICAgKi9cbiAgY29sKGluZGV4KSB7XG4gICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMudmFsdWVzW2luZGV4ICogMiArIDBdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tpbmRleCAqIDIgKyAxXSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBNYXQyLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7TWF0Mn0gbWF0IHRoZSBtYXRyaXggdG8gYXBwbHlcbiAgICpcbiAgICogQHJldHVybiB7TWF0Mn0gdGhpc1xuICAgKi9cbiAgYXBwbHkobWF0KSB7XG4gICAgY29uc3QgdjAwID0gdGhpcy52YWx1ZXNbMF07XG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbMV07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbMl07XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbM107XG4gICAgXG4gICAgdGhpcy52YWx1ZXNbMF0gPSB2MDAgKiBtYXQudmFsdWVzWzBdICsgdjAxICogbWF0LnZhbHVlc1syXTtcbiAgICB0aGlzLnZhbHVlc1sxXSA9IHYwMCAqIG1hdC52YWx1ZXNbMV0gKyB2MDEgKiBtYXQudmFsdWVzWzNdO1xuICAgIHRoaXMudmFsdWVzWzJdID0gdjEwICogbWF0LnZhbHVlc1swXSArIHYxMSAqIG1hdC52YWx1ZXNbMl07XG4gICAgdGhpcy52YWx1ZXNbM10gPSB2MTAgKiBtYXQudmFsdWVzWzFdICsgdjExICogbWF0LnZhbHVlc1szXTtcbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgc2NhbGUgdG8gdGhlIE1hdDIuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtWZWMyfSB2ZWMgdGhlIHNjYWxlIHRvIGFwcGx5XG4gICAqXG4gICAqIEByZXR1cm4ge01hdDJ9IHRoaXNcbiAgICovXG4gIHNjYWxlKHZlYykge1xuICAgIHRoaXMudmFsdWVzWzBdICo9IHZlYy54O1xuICAgIHRoaXMudmFsdWVzWzFdICo9IHZlYy54O1xuICAgIFxuICAgIHRoaXMudmFsdWVzWzJdICo9IHZlYy55O1xuICAgIHRoaXMudmFsdWVzWzNdICo9IHZlYy55O1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSByb3RhdGlvbiB0byB0aGUgTWF0Mi5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nIHRoZSBhbmdsZSB0byByb3RhdGUgKGluIHJhZGlhbnMpXG4gICAqXG4gICAqIEByZXR1cm4ge01hdDJ9IHRoaXNcbiAgICovXG4gIHJvdGF0ZShhbmcpIHtcbiAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nKTtcbiAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nKTtcblxuICAgIGNvbnN0IHYwMCA9IHRoaXMudmFsdWVzWzBdO1xuICAgIGNvbnN0IHYxMCA9IHRoaXMudmFsdWVzWzFdO1xuICAgIGNvbnN0IHYwMSA9IHRoaXMudmFsdWVzWzJdO1xuICAgIGNvbnN0IHYxMSA9IHRoaXMudmFsdWVzWzNdO1xuXG4gICAgdGhpcy52YWx1ZXNbMF0gPSB2MDAgKiAgYyArIHYwMSAqIHM7XG4gICAgdGhpcy52YWx1ZXNbMV0gPSB2MTAgKiAgYyArIHYxMSAqIHM7XG4gICAgdGhpcy52YWx1ZXNbMl0gPSB2MDAgKiAtcyArIHYwMSAqIGM7XG4gICAgdGhpcy52YWx1ZXNbM10gPSB2MTAgKiAtcyArIHYxMSAqIGM7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgZGV0ZXJtaW5hbnQgb2YgdGhlIE1hdDIuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGRldGVybWluYW50XG4gICAqL1xuICBkZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzWzBdICogdGhpcy52YWx1ZXNbM11cbiAgICAgICAgIC0gdGhpcy52YWx1ZXNbMl0gKiB0aGlzLnZhbHVlc1sxXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBpbnZlcnNlIG9mIHRoZSBNYXQyLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEB0aHJvd3MgRXJyb3Igd2hlbiBkZXQoKSBpcyAwXG4gICAqXG4gICAqIEByZXR1cm4ge01hdDJ9IHRoaXNcbiAgICovXG4gIGludmVyc2UoKSB7XG4gICAgY29uc3QgdjAwID0gdGhpcy52YWx1ZXNbMF07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbMV07XG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbMl07XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbM107XG4gICAgXG4gICAgdmFyIGRldCA9IHYwMCAqIHYxMSAtIHYwMSAqIHYxMDtcblxuICAgIGlmIChkZXQgPT09IDApIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnZlcnNlIG1hdHJpeCBpZiBkZXQgaXMgemVyb1wiKTtcbiAgICBcbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICB0aGlzLnZhbHVlc1swXSA9ICB2MTEgKiBkZXQ7XG4gICAgdGhpcy52YWx1ZXNbMV0gPSAtdjEwICogZGV0O1xuICAgIHRoaXMudmFsdWVzWzJdID0gLXYwMSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1szXSA9ICB2MDAgKiBkZXQ7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge01hdH0gZnJvbSBcIi4vbWF0LmpzXCI7XG5pbXBvcnQge1ZlYzN9IGZyb20gXCIuLi9hbGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgTWF0IHJlcHJlc2VudGluZyBhIDN4MyBtYXRyaXguXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXQzIGV4dGVuZHMgTWF0IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBNYXQzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlciwgbnVtYmVyLCBudW1iZXJ9IHRoZSBmaXJzdCByb3dcbiAgICogQHBhcmFtIHtudW1iZXIsIG51bWJlciwgbnVtYmVyfSB0aGUgc2Vjb25kIHJvd1xuICAgKiBAcGFyYW0ge251bWJlciwgbnVtYmVyLCBudW1iZXJ9IHRoZSB0aGlyZCByb3dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHhfcjEsIHlfcjEsIHpfcjEsXG4gICAgICAgICAgICAgIHhfcjIsIHlfcjIsIHpfcjIsXG4gICAgICAgICAgICAgIHhfcjMsIHlfcjMsIHpfcjMsKSB7XG4gICAgc3VwZXIoW3hfcjEsIHhfcjIsIHhfcjMsXG4gICAgICAgICAgIHlfcjEsIHlfcjIsIHlfcjMsXG4gICAgICAgICAgIHpfcjEsIHpfcjIsIHpfcjNdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZWxlbWVudHMgY291bnQuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHNcbiAgICovXG4gIHN0YXRpYyBjb3VudCgpIHtcbiAgICByZXR1cm4gOTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgc2lkZSBjb3VudC5cbiAgICogXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bSBvZiBlbGVtZW50cyBvbiB0aGUgc2lkZSBvZiB0aGUgbWF0cml4XG4gICAqL1xuICBzdGF0aWMgc2lkZSgpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgTWF0MyBpbml0aWFsaXphdGlvbiB3aXRoIGFuIGFycmF5LlxuICAgKlxuICAgKiBDb2x1bW4tTWFqb3IgdmVyc2lvbi5cbiAgICpcbiAgICogQHJldHVybiB7TWF0M30gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgRnJvbUFycmF5Q00oYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBNYXQzKGFyclswXSwgYXJyWzNdLCBhcnJbNl0sXG4gICAgICAgICAgICAgICAgICAgIGFyclsxXSwgYXJyWzRdLCBhcnJbN10sXG4gICAgICAgICAgICAgICAgICAgIGFyclsyXSwgYXJyWzVdLCBhcnJbOF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBNYXQzIGluaXRpYWxpemF0aW9uIHdpdGggYW4gYXJyYXkuXG4gICAqXG4gICAqIFJvdy1NYWpvciB2ZXJzaW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXQzfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHN0YXRpYyBGcm9tQXJyYXlSTShhcnIpIHtcbiAgICByZXR1cm4gbmV3IE1hdDMoYXJyWzBdLCBhcnJbMV0sIGFyclsyXSxcbiAgICAgICAgICAgICAgICAgICAgYXJyWzNdLCBhcnJbNF0sIGFycls1XSxcbiAgICAgICAgICAgICAgICAgICAgYXJyWzZdLCBhcnJbN10sIGFycls4XSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSByb3cgZnJvbSB0aGUgTWF0MyBhcyBhIFZlYzMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIHJvd1xuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgc2VsZWN0ZWQgcm93XG4gICAqL1xuICByb3coaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFZlYzModGhpcy52YWx1ZXNbMCArIGluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbMyArIGluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbNiArIGluZGV4XSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBjb2wgZnJvbSB0aGUgTWF0MyBhcyBhIFZlYzMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGNvbHVtblxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgc2VsZWN0ZWQgY29sdW1uXG4gICAqL1xuICBjb2woaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFZlYzModGhpcy52YWx1ZXNbaW5kZXggKiAzICsgMF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2luZGV4ICogMyArIDFdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tpbmRleCAqIDMgKyAyXSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBNYXQzLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7TWF0M30gbWF0IHRoZSBtYXRyaXggdG8gYXBwbHlcbiAgICpcbiAgICogQHJldHVybiB7TWF0M30gdGhpc1xuICAgKi9cbiAgYXBwbHkobWF0KSB7XG4gICAgY29uc3QgdjAwID0gdGhpcy52YWx1ZXNbMF07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbMV07XG4gICAgY29uc3QgdjIwID0gdGhpcy52YWx1ZXNbMl07XG4gICAgXG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbM107XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbNF07XG4gICAgY29uc3QgdjIxID0gdGhpcy52YWx1ZXNbNV07XG5cbiAgICBjb25zdCB2MDIgPSB0aGlzLnZhbHVlc1s2XTtcbiAgICBjb25zdCB2MTIgPSB0aGlzLnZhbHVlc1s3XTtcbiAgICBjb25zdCB2MjIgPSB0aGlzLnZhbHVlc1s4XTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSkge1xuICAgICAgY29uc3QgbWF0MCA9IG1hdC52YWx1ZXNbaSAqIDMgKyAwXTtcbiAgICAgIGNvbnN0IG1hdDEgPSBtYXQudmFsdWVzW2kgKiAzICsgMV07XG4gICAgICBjb25zdCBtYXQyID0gbWF0LnZhbHVlc1tpICogMyArIDJdO1xuICAgIFxuICAgICAgdGhpcy52YWx1ZXNbaSAqIDMgKyAwXSA9IG1hdDAgKiB2MDAgKyBtYXQxICogdjAxICsgbWF0MiAqIHYwMjtcbiAgICAgIHRoaXMudmFsdWVzW2kgKiAzICsgMV0gPSBtYXQwICogdjEwICsgbWF0MSAqIHYxMSArIG1hdDIgKiB2MTI7XG4gICAgICB0aGlzLnZhbHVlc1tpICogMyArIDJdID0gbWF0MCAqIHYyMCArIG1hdDEgKiB2MjEgKyBtYXQyICogdjIyO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgdHJhbnNsYXRpb24gdG8gdGhlIE1hdDMuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtWZWMyfSB2ZWMgdGhlIHRyYW5zbGF0aW9uIHRvIGFwcGx5XG4gICAqXG4gICAqIEByZXR1cm4ge01hdDN9IHRoaXNcbiAgICovXG4gIHRyYW5zbGF0ZSh2ZWMpIHtcbiAgICB0aGlzLnZhbHVlc1s2XSArPSB2ZWMueCAqIHRoaXMudmFsdWVzWzBdXG4gICAgICAgICAgICAgICAgICAgICsgdmVjLnkgKiB0aGlzLnZhbHVlc1szXTtcbiAgICBcbiAgICB0aGlzLnZhbHVlc1s3XSArPSB2ZWMueCAqIHRoaXMudmFsdWVzWzFdXG4gICAgICAgICAgICAgICAgICAgICsgdmVjLnkgKiB0aGlzLnZhbHVlc1s0XTtcblxuICAgIHRoaXMudmFsdWVzWzhdICs9IHZlYy54ICogdGhpcy52YWx1ZXNbMl1cbiAgICAgICAgICAgICAgICAgICAgKyB2ZWMueSAqIHRoaXMudmFsdWVzWzVdO1xuICAgICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHNjYWxlIHRvIHRoZSBNYXQzLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7VmVjMn0gdmVjIHRoZSBzY2FsZSB0byBhcHBseVxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXQzfSB0aGlzXG4gICAqL1xuICBzY2FsZSh2ZWMpIHsgICAgXG4gICAgdGhpcy52YWx1ZXNbMF0gKj0gdmVjLng7XG4gICAgdGhpcy52YWx1ZXNbMV0gKj0gdmVjLng7XG4gICAgdGhpcy52YWx1ZXNbMl0gKj0gdmVjLng7ICBcbiAgICBcbiAgICB0aGlzLnZhbHVlc1szXSAqPSB2ZWMueTtcbiAgICB0aGlzLnZhbHVlc1s0XSAqPSB2ZWMueTtcbiAgICB0aGlzLnZhbHVlc1s1XSAqPSB2ZWMueTtcbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgcm90YXRpb24gdG8gdGhlIE1hdDMuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZyB0aGUgYW5nbGUgdG8gcm90YXRlIChpbiByYWRpYW5zKVxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXQzfSB0aGlzXG4gICAqL1xuICByb3RhdGUoYW5nKSB7XG4gICAgY29uc3QgdjAwID0gdGhpcy52YWx1ZXNbMF07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbMV07XG4gICAgY29uc3QgdjIwID0gdGhpcy52YWx1ZXNbMl07XG4gICAgXG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbM107XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbNF07XG4gICAgY29uc3QgdjIxID0gdGhpcy52YWx1ZXNbNV07XG5cbiAgICBjb25zdCB2MDIgPSB0aGlzLnZhbHVlc1s2XTtcbiAgICBjb25zdCB2MTIgPSB0aGlzLnZhbHVlc1s3XTtcbiAgICBjb25zdCB2MjIgPSB0aGlzLnZhbHVlc1s4XTtcblxuICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmcpO1xuICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmcpO1xuXG4gICAgdGhpcy52YWx1ZXNbMF0gPSBjICogdjAwICsgcyAqIHYwMTtcbiAgICB0aGlzLnZhbHVlc1sxXSA9IGMgKiB2MTAgKyBzICogdjExO1xuICAgIHRoaXMudmFsdWVzWzJdID0gYyAqIHYyMCArIHMgKiB2MjE7XG4gIFxuICAgIHRoaXMudmFsdWVzWzNdID0gYyAqIHYwMSAtIHMgKiB2MDA7XG4gICAgdGhpcy52YWx1ZXNbNF0gPSBjICogdjExIC0gcyAqIHYxMDtcbiAgICB0aGlzLnZhbHVlc1s1XSA9IGMgKiB2MjEgLSBzICogdjIwO1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIGRldGVybWluYW50IG9mIHRoZSBNYXQzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBkZXRlcm1pbmFudFxuICAgKi9cbiAgZGV0KCkge1xuICAgIGNvbnN0IHYwMCA9IHRoaXMudmFsdWVzWzBdO1xuICAgIGNvbnN0IHYxMCA9IHRoaXMudmFsdWVzWzFdO1xuICAgIGNvbnN0IHYyMCA9IHRoaXMudmFsdWVzWzJdO1xuICAgIFxuICAgIGNvbnN0IHYwMSA9IHRoaXMudmFsdWVzWzNdO1xuICAgIGNvbnN0IHYxMSA9IHRoaXMudmFsdWVzWzRdO1xuICAgIGNvbnN0IHYyMSA9IHRoaXMudmFsdWVzWzVdO1xuXG4gICAgY29uc3QgdjAyID0gdGhpcy52YWx1ZXNbNl07XG4gICAgY29uc3QgdjEyID0gdGhpcy52YWx1ZXNbN107XG4gICAgY29uc3QgdjIyID0gdGhpcy52YWx1ZXNbOF07XG5cbiAgICByZXR1cm4gdjAwICogKCB2MjIgKiB2MTEgLSB2MjEgKiB2MTIpXG4gICAgICAgICArIHYxMCAqICgtdjIyICogdjAxICsgdjIxICogdjAyKVxuICAgICAgICAgKyB2MjAgKiAoIHYxMiAqIHYwMSAtIHYxMSAqIHYwMilcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBpbnZlcnNlIG9mIHRoZSBNYXQzLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEB0aHJvd3MgRXJyb3Igd2hlbiBkZXQoKSBpcyAwXG4gICAqXG4gICAqIEByZXR1cm4ge01hdDN9IHRoaXNcbiAgICovXG4gIGludmVyc2UoKSB7XG4gICAgY29uc3QgdjAwID0gdGhpcy52YWx1ZXNbMF07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbMV07XG4gICAgY29uc3QgdjIwID0gdGhpcy52YWx1ZXNbMl07XG4gICAgXG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbM107XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbNF07XG4gICAgY29uc3QgdjIxID0gdGhpcy52YWx1ZXNbNV07XG5cbiAgICBjb25zdCB2MDIgPSB0aGlzLnZhbHVlc1s2XTtcbiAgICBjb25zdCB2MTIgPSB0aGlzLnZhbHVlc1s3XTtcbiAgICBjb25zdCB2MjIgPSB0aGlzLnZhbHVlc1s4XTtcbiAgICBcbiAgICBjb25zdCB0bXAwID0gIHYyMiAqIHYxMSAtIHYyMSAqIHYxMjtcbiAgICBjb25zdCB0bXAxID0gLXYyMiAqIHYwMSArIHYyMSAqIHYwMjtcbiAgICBjb25zdCB0bXAyID0gIHYxMiAqIHYwMSAtIHYxMSAqIHYwMjtcblxuICAgIHZhciBkZXQgPSB2MDAgKiB0bXAwICsgdjEwICogdG1wMSArIHYyMCAqIHRtcDI7XG5cbiAgICBpZiAoZGV0ID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW52ZXJzZSBtYXRyaXggaWYgZGV0IGlzIHplcm9cIik7ICAgIFxuXG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgdGhpcy52YWx1ZXNbMF0gPSB0bXAwICogZGV0O1xuICAgIHRoaXMudmFsdWVzWzFdID0gKC12MjIgKiB2MTAgKyB2MjAgKiB2MTIpICogZGV0O1xuICAgIHRoaXMudmFsdWVzWzJdID0gKCB2MjEgKiB2MTAgLSB2MjAgKiB2MTEpICogZGV0O1xuICAgIHRoaXMudmFsdWVzWzNdID0gdG1wMSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1s0XSA9ICggdjIyICogdjAwIC0gdjIwICogdjAyKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1s1XSA9ICgtdjIxICogdjAwICsgdjIwICogdjAxKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1s2XSA9IHRtcDIgKiBkZXQ7XG4gICAgdGhpcy52YWx1ZXNbN10gPSAoLXYxMiAqIHYwMCArIHYxMCAqIHYwMikgKiBkZXQ7XG4gICAgdGhpcy52YWx1ZXNbOF0gPSAoIHYxMSAqIHYwMCAtIHYxMCAqIHYwMSkgKiBkZXQ7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0iLCIvKiogQGF1dGhvcjogRGF2aWRlIFJpc2FsaXRpIGRhdmRhZzI0QGdtYWlsLmNvbSAqL1xuXG5pbXBvcnQge01hdH0gZnJvbSBcIi4vbWF0LmpzXCI7XG5pbXBvcnQge01hdDMsIFZlYzR9IGZyb20gXCIuLi9hbGwuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgTWF0IHJlcHJlc2VudGluZyBhIDR4NCBtYXRyaXguXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXQ0IGV4dGVuZHMgTWF0IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBNYXQ0LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcn0gdGhlIGZpcnN0IHJvd1xuICAgKiBAcGFyYW0ge251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcn0gdGhlIHNlY29uZCByb3dcbiAgICogQHBhcmFtIHtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJ9IHRoZSB0aGlyZCByb3dcbiAgICogQHBhcmFtIHtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJ9IHRoZSBmb3VydGggcm93XG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4X3IxLCB5X3IxLCB6X3IxLCB3X3IxLFxuICAgICAgICAgICAgICB4X3IyLCB5X3IyLCB6X3IyLCB3X3IyLFxuICAgICAgICAgICAgICB4X3IzLCB5X3IzLCB6X3IzLCB3X3IzLFxuICAgICAgICAgICAgICB4X3I0LCB5X3I0LCB6X3I0LCB3X3I0KSB7XG4gICAgc3VwZXIoW3hfcjEsIHhfcjIsIHhfcjMsIHhfcjQsXG4gICAgICAgICAgIHlfcjEsIHlfcjIsIHlfcjMsIHlfcjQsXG4gICAgICAgICAgIHpfcjEsIHpfcjIsIHpfcjMsIHpfcjQsXG4gICAgICAgICAgIHdfcjEsIHdfcjIsIHdfcjMsIHdfcjRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZWxlbWVudHMgY291bnQuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHNcbiAgICovXG4gIHN0YXRpYyBjb3VudCgpIHtcbiAgICByZXR1cm4gMTY7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIHNpZGUgY291bnQuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHMgb24gdGhlIHNpZGUgb2YgdGhlIG1hdHJpeFxuICAgKi9cbiAgc3RhdGljIHNpZGUoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIE1hdDQgaW5pdGlhbGl6YXRpb24gd2l0aCBhbiBhcnJheS5cbiAgICpcbiAgICogQ29sdW1uLU1ham9yIHZlcnNpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge01hdDR9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgc3RhdGljIEZyb21BcnJheUNNKGFycikge1xuICAgIHJldHVybiBuZXcgTWF0NChhcnJbIDBdLCBhcnJbIDRdLCBhcnJbIDhdLCBhcnJbMTJdLFxuICAgICAgICAgICAgICAgICAgICBhcnJbIDFdLCBhcnJbIDVdLCBhcnJbIDldLCBhcnJbMTNdLFxuICAgICAgICAgICAgICAgICAgICBhcnJbIDJdLCBhcnJbIDZdLCBhcnJbMTBdLCBhcnJbMTRdLFxuICAgICAgICAgICAgICAgICAgICBhcnJbIDNdLCBhcnJbIDddLCBhcnJbMTFdLCBhcnJbMTVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgTWF0NCBpbml0aWFsaXphdGlvbiB3aXRoIGFuIGFycmF5LlxuICAgKlxuICAgKiBSb3ctTWFqb3IgdmVyc2lvbi5cbiAgICpcbiAgICogQHJldHVybiB7TWF0NH0gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgRnJvbUFycmF5Uk0oYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBNYXQ0KGFyclsgMF0sIGFyclsgMV0sIGFyclsgMl0sIGFyclsgM10sXG4gICAgICAgICAgICAgICAgICAgIGFyclsgNF0sIGFyclsgNV0sIGFyclsgNl0sIGFyclsgN10sXG4gICAgICAgICAgICAgICAgICAgIGFyclsgOF0sIGFyclsgOV0sIGFyclsxMF0sIGFyclsxMV0sXG4gICAgICAgICAgICAgICAgICAgIGFyclsxMl0sIGFyclsxM10sIGFyclsxNF0sIGFyclsxNV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBNYXQzIGluaXRpYWxpemF0aW9uIGZyb20gYSBNYXQ0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXQzfSB0aGUgbmV3bHkgY3JlYXRlZCBtYXRcbiAgICovXG4gIHRvTWF0MygpIHtcbiAgICByZXR1cm4gTWF0My5Gcm9tQXJyYXlSTShbXG4gICAgICAuLi50aGlzLnJvdygwKS50b1ZlYzMoKS52YWx1ZXMsXG4gICAgICAuLi50aGlzLnJvdygxKS50b1ZlYzMoKS52YWx1ZXMsXG4gICAgICAuLi50aGlzLnJvdygyKS50b1ZlYzMoKS52YWx1ZXNcbiAgICBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHJvdyBmcm9tIHRoZSBNYXQ0IGFzIGEgVmVjNC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHRoZSBpbmRleCBvZiB0aGUgcm93XG4gICAqXG4gICAqIEByZXR1cm4ge1ZlYzR9IHRoZSBzZWxlY3RlZCByb3dcbiAgICovXG4gIHJvdyhpbmRleCkge1xuICAgIHJldHVybiBuZXcgVmVjNCh0aGlzLnZhbHVlc1sgMCArIGluZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbIDQgKyBpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzWyA4ICsgaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1sxMiArIGluZGV4XSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBjb2wgZnJvbSB0aGUgTWF0NCBhcyBhIFZlYzQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGNvbHVtblxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWM0fSB0aGUgc2VsZWN0ZWQgY29sdW1uXG4gICAqL1xuICBjb2woaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFZlYzQodGhpcy52YWx1ZXNbaW5kZXggKiA0ICsgMF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2luZGV4ICogNCArIDFdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1tpbmRleCAqIDQgKyAyXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbaW5kZXggKiA0ICsgM10pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgTWF0NC5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge01hdDR9IG1hdCB0aGUgbWF0cml4IHRvIGFwcGx5XG4gICAqXG4gICAqIEByZXR1cm4ge01hdDR9IHRoaXNcbiAgICovXG4gIGFwcGx5KG1hdCkge1xuICAgIGNvbnN0IHYwMCA9IHRoaXMudmFsdWVzWyAwXTtcbiAgICBjb25zdCB2MTAgPSB0aGlzLnZhbHVlc1sgMV07XG4gICAgY29uc3QgdjIwID0gdGhpcy52YWx1ZXNbIDJdO1xuICAgIGNvbnN0IHYzMCA9IHRoaXMudmFsdWVzWyAzXTtcbiAgICBcbiAgICBjb25zdCB2MDEgPSB0aGlzLnZhbHVlc1sgNF07XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbIDVdO1xuICAgIGNvbnN0IHYyMSA9IHRoaXMudmFsdWVzWyA2XTtcbiAgICBjb25zdCB2MzEgPSB0aGlzLnZhbHVlc1sgN107XG4gICAgXG4gICAgY29uc3QgdjAyID0gdGhpcy52YWx1ZXNbIDhdO1xuICAgIGNvbnN0IHYxMiA9IHRoaXMudmFsdWVzWyA5XTtcbiAgICBjb25zdCB2MjIgPSB0aGlzLnZhbHVlc1sxMF07XG4gICAgY29uc3QgdjMyID0gdGhpcy52YWx1ZXNbMTFdO1xuICAgIFxuICAgIGNvbnN0IHYwMyA9IHRoaXMudmFsdWVzWzEyXTtcbiAgICBjb25zdCB2MTMgPSB0aGlzLnZhbHVlc1sxM107XG4gICAgY29uc3QgdjIzID0gdGhpcy52YWx1ZXNbMTRdO1xuICAgIGNvbnN0IHYzMyA9IHRoaXMudmFsdWVzWzE1XTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBjb25zdCBtYXQwID0gbWF0LnZhbHVlc1tpICogNCArIDBdO1xuICAgICAgY29uc3QgbWF0MSA9IG1hdC52YWx1ZXNbaSAqIDQgKyAxXTtcbiAgICAgIGNvbnN0IG1hdDIgPSBtYXQudmFsdWVzW2kgKiA0ICsgMl07XG4gICAgICBjb25zdCBtYXQzID0gbWF0LnZhbHVlc1tpICogNCArIDNdO1xuICAgICAgXG4gICAgICB0aGlzLnZhbHVlc1tpICogNCArIDBdID0gbWF0MCAqIHYwMCArIG1hdDEgKiB2MDEgKyBtYXQyICogdjAyICsgbWF0MyAqIHYwMztcbiAgICAgIHRoaXMudmFsdWVzW2kgKiA0ICsgMV0gPSBtYXQwICogdjEwICsgbWF0MSAqIHYxMSArIG1hdDIgKiB2MTIgKyBtYXQzICogdjEzO1xuICAgICAgdGhpcy52YWx1ZXNbaSAqIDQgKyAyXSA9IG1hdDAgKiB2MjAgKyBtYXQxICogdjIxICsgbWF0MiAqIHYyMiArIG1hdDMgKiB2MjM7XG4gICAgICB0aGlzLnZhbHVlc1tpICogNCArIDNdID0gbWF0MCAqIHYzMCArIG1hdDEgKiB2MzEgKyBtYXQyICogdjMyICsgbWF0MyAqIHYzMztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHRyYW5zbGF0aW9uIHRvIHRoZSBNYXQ0LlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7VmVjM30gdmVjIHRoZSB0cmFuc2xhdGlvbiB0byBhcHBseVxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXQ0fSB0aGlzXG4gICAqL1xuICB0cmFuc2xhdGUodmVjKSB7XG4gICAgdGhpcy52YWx1ZXNbMTJdICs9IHRoaXMudmFsdWVzWyAwXSAqIHZlYy54XG4gICAgICAgICAgICAgICAgICAgICArIHRoaXMudmFsdWVzWyA0XSAqIHZlYy55XG4gICAgICAgICAgICAgICAgICAgICArIHRoaXMudmFsdWVzWyA4XSAqIHZlYy56O1xuICAgIFxuICAgIHRoaXMudmFsdWVzWzEzXSArPSB0aGlzLnZhbHVlc1sgMV0gKiB2ZWMueFxuICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLnZhbHVlc1sgNV0gKiB2ZWMueVxuICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLnZhbHVlc1sgOV0gKiB2ZWMuejtcbiAgICBcbiAgICB0aGlzLnZhbHVlc1sxNF0gKz0gdGhpcy52YWx1ZXNbIDJdICogdmVjLnhcbiAgICAgICAgICAgICAgICAgICAgICsgdGhpcy52YWx1ZXNbIDZdICogdmVjLnlcbiAgICAgICAgICAgICAgICAgICAgICsgdGhpcy52YWx1ZXNbMTBdICogdmVjLno7XG4gICAgXG4gICAgdGhpcy52YWx1ZXNbMTVdICs9IHRoaXMudmFsdWVzWyAzXSAqIHZlYy54XG4gICAgICAgICAgICAgICAgICAgICArIHRoaXMudmFsdWVzWyA3XSAqIHZlYy55XG4gICAgICAgICAgICAgICAgICAgICArIHRoaXMudmFsdWVzWzExXSAqIHZlYy56O1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBzY2FsZSB0byB0aGUgTWF0NC5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1ZlYzN9IHZlYyB0aGUgc2NhbGUgdG8gYXBwbHlcbiAgICpcbiAgICogQHJldHVybiB7TWF0NH0gdGhpc1xuICAgKi9cbiAgc2NhbGUodmVjKSB7XG4gICAgdGhpcy52YWx1ZXNbIDBdICo9IHZlYy54O1xuICAgIHRoaXMudmFsdWVzWyAxXSAqPSB2ZWMueDtcbiAgICB0aGlzLnZhbHVlc1sgMl0gKj0gdmVjLng7XG4gICAgdGhpcy52YWx1ZXNbIDNdICo9IHZlYy54O1xuICAgIFxuICAgIHRoaXMudmFsdWVzWyA0XSAqPSB2ZWMueTtcbiAgICB0aGlzLnZhbHVlc1sgNV0gKj0gdmVjLnk7XG4gICAgdGhpcy52YWx1ZXNbIDZdICo9IHZlYy55O1xuICAgIHRoaXMudmFsdWVzWyA3XSAqPSB2ZWMueTtcbiAgICBcbiAgICB0aGlzLnZhbHVlc1sgOF0gKj0gdmVjLno7XG4gICAgdGhpcy52YWx1ZXNbIDldICo9IHZlYy56O1xuICAgIHRoaXMudmFsdWVzWzEwXSAqPSB2ZWMuejtcbiAgICB0aGlzLnZhbHVlc1sxMV0gKj0gdmVjLno7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHJvdGF0aW9uIHRvIHRoZSBNYXQ0LlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmcgdGhlIGFuZ2xlIHRvIHJvdGF0ZSAoaW4gcmFkaWFucylcbiAgICogQHBhcmFtIHtWZWMzfSB2ZWMgdGhlIE5PUk1BTElaRUQgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gICAqXG4gICAqIEByZXR1cm4ge01hdDR9IHRoaXNcbiAgICovXG4gIHJvdGF0ZShhbmcsIHZlYykge1xuICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmcpO1xuICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmcpO1xuICAgIGNvbnN0IHQgPSAxIC0gYztcbiAgICBcbiAgICBjb25zdCB2MDAgPSB0aGlzLnZhbHVlc1sgMF07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbIDFdO1xuICAgIGNvbnN0IHYyMCA9IHRoaXMudmFsdWVzWyAyXTtcbiAgICBjb25zdCB2MzAgPSB0aGlzLnZhbHVlc1sgM107XG4gICAgXG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbIDRdO1xuICAgIGNvbnN0IHYxMSA9IHRoaXMudmFsdWVzWyA1XTtcbiAgICBjb25zdCB2MjEgPSB0aGlzLnZhbHVlc1sgNl07XG4gICAgY29uc3QgdjMxID0gdGhpcy52YWx1ZXNbIDddO1xuICAgIFxuICAgIGNvbnN0IHYwMiA9IHRoaXMudmFsdWVzWyA4XTtcbiAgICBjb25zdCB2MTIgPSB0aGlzLnZhbHVlc1sgOV07XG4gICAgY29uc3QgdjIyID0gdGhpcy52YWx1ZXNbMTBdO1xuICAgIGNvbnN0IHYzMiA9IHRoaXMudmFsdWVzWzExXTtcblxuICAgIGNvbnN0IHIwMCA9IHZlYy54ICogdmVjLnggKiB0ICsgYztcbiAgICBjb25zdCByMDEgPSB2ZWMueSAqIHZlYy54ICogdCArIHZlYy56ICogcztcbiAgICBjb25zdCByMDIgPSB2ZWMueiAqIHZlYy54ICogdCAtIHZlYy55ICogcztcbiAgICBjb25zdCByMTAgPSB2ZWMueCAqIHZlYy55ICogdCAtIHZlYy56ICogcztcbiAgICBjb25zdCByMTEgPSB2ZWMueSAqIHZlYy55ICogdCArIGM7XG4gICAgY29uc3QgcjEyID0gdmVjLnogKiB2ZWMueSAqIHQgKyB2ZWMueCAqIHM7XG4gICAgY29uc3QgcjIwID0gdmVjLnggKiB2ZWMueiAqIHQgKyB2ZWMueSAqIHM7XG4gICAgY29uc3QgcjIxID0gdmVjLnkgKiB2ZWMueiAqIHQgLSB2ZWMueCAqIHM7XG4gICAgY29uc3QgcjIyID0gdmVjLnogKiB2ZWMueiAqIHQgKyBjO1xuXG4gICAgdGhpcy52YWx1ZXNbIDBdID0gdjAwICogcjAwICsgdjAxICogcjAxICsgdjAyICogcjAyO1xuICAgIHRoaXMudmFsdWVzWyAxXSA9IHYxMCAqIHIwMCArIHYxMSAqIHIwMSArIHYxMiAqIHIwMjtcbiAgICB0aGlzLnZhbHVlc1sgMl0gPSB2MjAgKiByMDAgKyB2MjEgKiByMDEgKyB2MjIgKiByMDI7XG4gICAgdGhpcy52YWx1ZXNbIDNdID0gdjMwICogcjAwICsgdjMxICogcjAxICsgdjMyICogcjAyO1xuICAgIFxuICAgIHRoaXMudmFsdWVzWyA0XSA9IHYwMCAqIHIxMCArIHYwMSAqIHIxMSArIHYwMiAqIHIxMjtcbiAgICB0aGlzLnZhbHVlc1sgNV0gPSB2MTAgKiByMTAgKyB2MTEgKiByMTEgKyB2MTIgKiByMTI7XG4gICAgdGhpcy52YWx1ZXNbIDZdID0gdjIwICogcjEwICsgdjIxICogcjExICsgdjIyICogcjEyO1xuICAgIHRoaXMudmFsdWVzWyA3XSA9IHYzMCAqIHIxMCArIHYzMSAqIHIxMSArIHYzMiAqIHIxMjtcbiAgICBcbiAgICB0aGlzLnZhbHVlc1sgOF0gPSB2MDAgKiByMjAgKyB2MDEgKiByMjEgKyB2MDIgKiByMjI7XG4gICAgdGhpcy52YWx1ZXNbIDldID0gdjEwICogcjIwICsgdjExICogcjIxICsgdjEyICogcjIyO1xuICAgIHRoaXMudmFsdWVzWzEwXSA9IHYyMCAqIHIyMCArIHYyMSAqIHIyMSArIHYyMiAqIHIyMjtcbiAgICB0aGlzLnZhbHVlc1sxMV0gPSB2MzAgKiByMjAgKyB2MzEgKiByMjEgKyB2MzIgKiByMjI7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBkZXRlcm1pbmFudCBvZiB0aGUgTWF0NC5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgZGV0ZXJtaW5hbnRcbiAgICovXG4gIGRldCgpIHtcbiAgICBjb25zdCB2MDAgPSB0aGlzLnZhbHVlc1sgMF07XG4gICAgY29uc3QgdjEwID0gdGhpcy52YWx1ZXNbIDFdO1xuICAgIGNvbnN0IHYyMCA9IHRoaXMudmFsdWVzWyAyXTtcbiAgICBjb25zdCB2MzAgPSB0aGlzLnZhbHVlc1sgM107XG4gICAgXG4gICAgY29uc3QgdjAxID0gdGhpcy52YWx1ZXNbIDRdO1xuICAgIGNvbnN0IHYxMSA9IHRoaXMudmFsdWVzWyA1XTtcbiAgICBjb25zdCB2MjEgPSB0aGlzLnZhbHVlc1sgNl07XG4gICAgY29uc3QgdjMxID0gdGhpcy52YWx1ZXNbIDddO1xuICAgIFxuICAgIGNvbnN0IHYwMiA9IHRoaXMudmFsdWVzWyA4XTtcbiAgICBjb25zdCB2MTIgPSB0aGlzLnZhbHVlc1sgOV07XG4gICAgY29uc3QgdjIyID0gdGhpcy52YWx1ZXNbMTBdO1xuICAgIGNvbnN0IHYzMiA9IHRoaXMudmFsdWVzWzExXTtcbiAgICBcbiAgICBjb25zdCB2MDMgPSB0aGlzLnZhbHVlc1sxMl07XG4gICAgY29uc3QgdjEzID0gdGhpcy52YWx1ZXNbMTNdO1xuICAgIGNvbnN0IHYyMyA9IHRoaXMudmFsdWVzWzE0XTtcbiAgICBjb25zdCB2MzMgPSB0aGlzLnZhbHVlc1sxNV07XG4gICAgXG4gICAgY29uc3QgdG1wMCA9IHYwMCAqIHYxMSAtIHYxMCAqIHYwMTtcbiAgICBjb25zdCB0bXAxID0gdjAwICogdjIxIC0gdjIwICogdjAxO1xuICAgIGNvbnN0IHRtcDIgPSB2MTAgKiB2MjEgLSB2MjAgKiB2MTE7XG4gICAgY29uc3QgdG1wMyA9IHYwMiAqIHYxMyAtIHYxMiAqIHYwMztcbiAgICBjb25zdCB0bXA0ID0gdjAyICogdjIzIC0gdjIyICogdjAzO1xuICAgIGNvbnN0IHRtcDUgPSB2MTIgKiB2MjMgLSB2MjIgKiB2MTM7XG5cbiAgICBjb25zdCB0bXA2ID0gdjAwICogdG1wNSAtIHYxMCAqIHRtcDQgKyB2MjAgKiB0bXAzO1xuICAgIGNvbnN0IHRtcDcgPSB2MDEgKiB0bXA1IC0gdjExICogdG1wNCArIHYyMSAqIHRtcDM7XG4gICAgY29uc3QgdG1wOCA9IHYwMiAqIHRtcDIgLSB2MTIgKiB0bXAxICsgdjIyICogdG1wMDtcbiAgICBjb25zdCB0bXA5ID0gdjAzICogdG1wMiAtIHYxMyAqIHRtcDEgKyB2MjMgKiB0bXAwO1xuXG4gICAgcmV0dXJuIHYzMSAqIHRtcDYgLSB2MzAgKiB0bXA3ICsgdjMzICogdG1wOCAtIHYzMiAqIHRtcDk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgaW52ZXJzZSBvZiB0aGUgTWF0NC5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAdGhyb3dzIEVycm9yIHdoZW4gZGV0KCkgaXMgMFxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXQ0fSB0aGlzXG4gICAqL1xuICBpbnZlcnNlKCkge1xuICAgIGNvbnN0IHYwMCA9IHRoaXMudmFsdWVzWyAwXTtcbiAgICBjb25zdCB2MTAgPSB0aGlzLnZhbHVlc1sgMV07XG4gICAgY29uc3QgdjIwID0gdGhpcy52YWx1ZXNbIDJdO1xuICAgIGNvbnN0IHYzMCA9IHRoaXMudmFsdWVzWyAzXTtcbiAgICBcbiAgICBjb25zdCB2MDEgPSB0aGlzLnZhbHVlc1sgNF07XG4gICAgY29uc3QgdjExID0gdGhpcy52YWx1ZXNbIDVdO1xuICAgIGNvbnN0IHYyMSA9IHRoaXMudmFsdWVzWyA2XTtcbiAgICBjb25zdCB2MzEgPSB0aGlzLnZhbHVlc1sgN107XG4gICAgXG4gICAgY29uc3QgdjAyID0gdGhpcy52YWx1ZXNbIDhdO1xuICAgIGNvbnN0IHYxMiA9IHRoaXMudmFsdWVzWyA5XTtcbiAgICBjb25zdCB2MjIgPSB0aGlzLnZhbHVlc1sxMF07XG4gICAgY29uc3QgdjMyID0gdGhpcy52YWx1ZXNbMTFdO1xuICAgIFxuICAgIGNvbnN0IHYwMyA9IHRoaXMudmFsdWVzWzEyXTtcbiAgICBjb25zdCB2MTMgPSB0aGlzLnZhbHVlc1sxM107XG4gICAgY29uc3QgdjIzID0gdGhpcy52YWx1ZXNbMTRdO1xuICAgIGNvbnN0IHYzMyA9IHRoaXMudmFsdWVzWzE1XTtcblxuICAgIGNvbnN0IHRtcDAgID0gdjAwICogdjExIC0gdjEwICogdjAxO1xuICAgIGNvbnN0IHRtcDEgID0gdjAwICogdjIxIC0gdjIwICogdjAxO1xuICAgIGNvbnN0IHRtcDIgID0gdjAwICogdjMxIC0gdjMwICogdjAxO1xuICAgIGNvbnN0IHRtcDMgID0gdjEwICogdjIxIC0gdjIwICogdjExO1xuICAgIGNvbnN0IHRtcDQgID0gdjEwICogdjMxIC0gdjMwICogdjExO1xuICAgIGNvbnN0IHRtcDUgID0gdjIwICogdjMxIC0gdjMwICogdjIxO1xuICAgIGNvbnN0IHRtcDYgID0gdjAyICogdjEzIC0gdjEyICogdjAzO1xuICAgIGNvbnN0IHRtcDcgID0gdjAyICogdjIzIC0gdjIyICogdjAzO1xuICAgIGNvbnN0IHRtcDggID0gdjAyICogdjMzIC0gdjMyICogdjAzO1xuICAgIGNvbnN0IHRtcDkgID0gdjEyICogdjIzIC0gdjIyICogdjEzO1xuICAgIGNvbnN0IHRtcDEwID0gdjEyICogdjMzIC0gdjMyICogdjEzO1xuICAgIGNvbnN0IHRtcDExID0gdjIyICogdjMzIC0gdjMyICogdjIzO1xuICAgIFxuICAgIHZhciBkZXQgPSB0bXAwICogdG1wMTEgLSB0bXAxICogdG1wMTAgKyB0bXAyICogdG1wOVxuICAgICAgICAgICAgKyB0bXAzICogdG1wOCAgLSB0bXA0ICogdG1wNyAgKyB0bXA1ICogdG1wNjtcblxuICAgIGlmIChkZXQgPT09IDApIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnZlcnNlIG1hdHJpeCBpZiBkZXQgaXMgemVyb1wiKTsgICAgXG5cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICB0aGlzLnZhbHVlc1sgMF0gPSAodjExICogdG1wMTEgLSB2MjEgKiB0bXAxMCArIHYzMSAqIHRtcDkgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgMV0gPSAodjIwICogdG1wMTAgLSB2MTAgKiB0bXAxMSAtIHYzMCAqIHRtcDkgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgMl0gPSAodjEzICogdG1wNSAgLSB2MjMgKiB0bXA0ICArIHYzMyAqIHRtcDMgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgM10gPSAodjIyICogdG1wNCAgLSB2MTIgKiB0bXA1ICAtIHYzMiAqIHRtcDMgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgNF0gPSAodjIxICogdG1wOCAgLSB2MDEgKiB0bXAxMSAtIHYzMSAqIHRtcDcgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgNV0gPSAodjAwICogdG1wMTEgLSB2MjAgKiB0bXA4ICArIHYzMCAqIHRtcDcgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgNl0gPSAodjIzICogdG1wMiAgLSB2MDMgKiB0bXA1ICAtIHYzMyAqIHRtcDEgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgN10gPSAodjAyICogdG1wNSAgLSB2MjIgKiB0bXAyICArIHYzMiAqIHRtcDEgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgOF0gPSAodjAxICogdG1wMTAgLSB2MTEgKiB0bXA4ICArIHYzMSAqIHRtcDYgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sgOV0gPSAodjEwICogdG1wOCAgLSB2MDAgKiB0bXAxMCAtIHYzMCAqIHRtcDYgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sxMF0gPSAodjAzICogdG1wNCAgLSB2MTMgKiB0bXAyICArIHYzMyAqIHRtcDAgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sxMV0gPSAodjEyICogdG1wMiAgLSB2MDIgKiB0bXA0ICAtIHYzMiAqIHRtcDAgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sxMl0gPSAodjExICogdG1wNyAgLSB2MDEgKiB0bXA5ICAtIHYyMSAqIHRtcDYgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sxM10gPSAodjAwICogdG1wOSAgLSB2MTAgKiB0bXA3ICArIHYyMCAqIHRtcDYgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sxNF0gPSAodjEzICogdG1wMSAgLSB2MDMgKiB0bXAzICAtIHYyMyAqIHRtcDAgKSAqIGRldDtcbiAgICB0aGlzLnZhbHVlc1sxNV0gPSAodjAyICogdG1wMyAgLSB2MTIgKiB0bXAxICArIHYyMiAqIHRtcDAgKSAqIGRldDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIFxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBMb29rQXQgbWF0cml4LlxuICAgKlxuICAgKiBAcGFyYW0ge1ZlYzN9IGZyb20gdGhlIHNvdXJjZSBwb2ludFxuICAgKiBAcGFyYW0ge1ZlYzN9IHRvIHRoZSB0YXJnZXQgcG9pbnRcbiAgICogQHBhcmFtIHtWZWMzfSB1cCB0aGUgdXAgZGlyZWN0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge01hdH0gdGhlIG5ld2x5IGNyZWF0ZWQgTWF0NFxuICAgKi9cbiAgc3RhdGljIExvb2tBdChmcm9tLCB0bywgdXApIHtcbiAgICBpZiAoZnJvbS5lcXVhbHModG8pKSByZXR1cm4gTWF0NC5JZGVudGl0eSgpO1xuXG4gICAgY29uc3QgeiA9IGZyb20uY2xvbmUoKS5zdWIodG8pLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHggPSB1cC5jbG9uZSgpLmNyb3NzKHopLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IHkgPSB6LmNsb25lKCkuY3Jvc3MoeCkubm9ybWFsaXplKCk7XG4gICAgXG4gICAgY29uc3QgYXJyID0gbmV3IEFycmF5KDE2KTtcblxuICAgIGFyclsgMF0gPSB4Lng7XG4gICAgYXJyWyAxXSA9IHkueDtcbiAgICBhcnJbIDJdID0gei54O1xuICAgIGFyclsgM10gPSAwO1xuICAgIFxuICAgIGFyclsgNF0gPSB4Lnk7XG4gICAgYXJyWyA1XSA9IHkueTtcbiAgICBhcnJbIDZdID0gei55O1xuICAgIGFyclsgN10gPSAwO1xuXG4gICAgYXJyWyA4XSA9IHguejtcbiAgICBhcnJbIDldID0geS56O1xuICAgIGFyclsxMF0gPSB6Lno7XG4gICAgYXJyWzExXSA9IDA7XG4gICAgXG4gICAgYXJyWzEyXSA9IC14LmRvdChmcm9tKTtcbiAgICBhcnJbMTNdID0gLXkuZG90KGZyb20pO1xuICAgIGFyclsxNF0gPSAtei5kb3QoZnJvbSk7XG4gICAgYXJyWzE1XSA9IDE7XG4gICAgXG4gICAgcmV0dXJuIE1hdDQuRnJvbUFycmF5Q00oYXJyKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgUGVyc3BlY3RpdmUgbWF0cml4LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZm92WSB0aGUgZmllbGQgb2YgdmlldyAoaW4gcmFkaWFucylcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIHRoZSBhc3BlY3QgcmF0aW8gKHR5cGljYWxseSB3L2gpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIHRoZSBuZWFyIFBsYW5lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgdGhlIGZhciBQbGFuZVxuICAgKlxuICAgKiBAcmV0dXJuIHtNYXR9IHRoZSBuZXdseSBjcmVhdGVkIE1hdDRcbiAgICovXG4gIHN0YXRpYyBQZXJzcGVjdGl2ZShmb3ZZLCByYXRpbywgbmVhciwgZmFyKSB7XG4gICAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZvdlkgLyAyKTtcbiAgICBcbiAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoMTYpO1xuICAgIFxuICAgIGFyclsgMF0gPSBmIC8gcmF0aW87XG4gICAgYXJyWyAxXSA9IDA7XG4gICAgYXJyWyAyXSA9IDA7XG4gICAgYXJyWyAzXSA9IDA7XG4gICAgXG4gICAgYXJyWyA0XSA9IDA7XG4gICAgYXJyWyA1XSA9IGY7XG4gICAgYXJyWyA2XSA9IDA7XG4gICAgYXJyWyA3XSA9IDA7XG5cbiAgICBhcnJbIDhdID0gMDtcbiAgICBhcnJbIDldID0gMDtcbiAgICAvLyBhcnJbMTBdXG4gICAgYXJyWzExXSA9IC0xO1xuICAgIFxuICAgIGFyclsxMl0gPSAwO1xuICAgIGFyclsxM10gPSAwO1xuICAgIC8vIGFyclsxNF1cbiAgICBhcnJbMTVdID0gMDtcblxuICAgIGlmIChmICE9PSBOdW1iZXIuSW5maW5pdHkpIHtcbiAgICAgIGNvbnN0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICAgIGFyclsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICAgIGFyclsxNF0gPSAyICogZmFyICogbmVhciAqIG5mO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJbMTBdID0gLTE7XG4gICAgICBhcnJbMTRdID0gLTIgKiBuZWFyO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gTWF0NC5Gcm9tQXJyYXlDTShhcnIpO1xuICB9XG59IiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuY29uc3QgREVHX1RPX1JBRCA9IE1hdGguUEkgLyAxODAuMDtcbmNvbnN0IFJBRF9UT19ERUcgPSAxODAuMCAvIE1hdGguUEk7XG5cbi8qKlxuICogQ29udmVydCBmcm9tIGRlZ3JlZXMgdG8gcmFkaWFucy5cbiAqIFxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIFxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgcmFkaWFucyBlcXVpdmFsZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZChkZWdyZWVzKSB7XG4gIHJldHVybiAoZGVncmVlcyAlIDM2MCkgKiBERUdfVE9fUkFEO1xufVxuXG4vKipcbiAqIENvbnZlcnQgZnJvbSByYWRpYW5zIHRvIGRlZ3JlZXMuXG4gKiBcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIHJhZGlhbnMgZXF1aXZhbGVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EZWcocmFkaWFucykge1xuICByZXR1cm4gKHJhZGlhbnMgKiBSQURfVE9fREVHKSAlIDM2MDtcbn1cbiIsIi8qKiBAYXV0aG9yOiBEYXZpZGUgUmlzYWxpdGkgZGF2ZGFnMjRAZ21haWwuY29tICovXG5cbi8qKlxuICogQGNsYXNzIFZlYyBiYXNlIHZlY3RvciBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFZlYyB7XG4gIHZhbHVlcztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIFZlYy5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheSBvZiBudW1iZXJ9IGFyciB0aGUgYXJyYXkgb2YgdmFsdWVzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICB0aGlzLnZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoYXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZWxlbWVudHMgY291bnQuXG4gICAqIFNob3VsZCBiZSBpbXBsZW1lbnRlZCBieSBzcGVjaWFsaXplZCBjbGFzc2VzLlxuICAgKiBcbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtIG9mIGVsZW1lbnRzXG4gICAqL1xuICBzdGF0aWMgY291bnQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY291bnQoKSBub3QgaW1wbGVtZW50ZWRcIik7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIFZlYyBpbml0aWFsaXphdGlvbiBmcm9tIGFycmF5LlxuICAgKiBTaG91bGQgYmUgaW1wbGVtZW50ZWQgYnkgc3BlY2lhbGl6ZWQgY2xhc3Nlcy5cbiAgICogXG4gICAqIEBwYXJhbSB7YXJyYXkgb2YgbnVtYmVyfSBhcnIgdGhlIGFycmF5IHRvIGNvcHlcbiAgICogXG4gICAqIEByZXR1cm4ge1ZlY30gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgRnJvbUFycmF5KGFycikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZyb21BcnJheSgpIG5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBWZWMgaW5zdGFuY2UuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgKi9cbiAgdG9TdHJpbmcoZGVjaW1hbCA9IDIwKSB7XG4gICAgcmV0dXJuIFwiW1wiICsgWy4uLnRoaXMudmFsdWVzXS5tYXAoKHYpID0+IHYudG9GaXhlZChkZWNpbWFsKSkuam9pbihcIixcIikgKyBcIl1cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlIHRoZSB0d28gVmVjLlxuICAgKlxuICAgKiBAcGFyYW0ge1ZlY30gdmVjIHRoZSB2ZWN0b3IgdG8gY29tcGFyZVxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiB0aGUgVmVjIGFyZSBlcXVhbHNcbiAgICovXG4gIGVxdWFscyh2ZWMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uc3RydWN0b3IuY291bnQoKTsgKytpKVxuICAgICAgaWYgKHRoaXMudmFsdWVzW2ldICE9PSB2ZWMudmFsdWVzW2ldKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3VtIHRvIHRoZSBWZWMgYW5vdGhlciBWZWMuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtWZWN9IHZlYyB0aGUgdmVjdG9yIHRvIHN1bVxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWN9IHRoaXNcbiAgICovXG4gIGFkZCh2ZWMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uc3RydWN0b3IuY291bnQoKTsgKytpKVxuICAgICAgdGhpcy52YWx1ZXNbaV0gKz0gdmVjLnZhbHVlc1tpXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdCB0byB0aGUgVmVjIGFub3RoZXIgVmVjLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7VmVjfSB2ZWMgdGhlIHZlY3RvciB0byBzdWJ0cmFjdFxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWN9IHRoaXNcbiAgICovXG4gIHN1Yih2ZWMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uc3RydWN0b3IuY291bnQoKTsgKytpKVxuICAgICAgdGhpcy52YWx1ZXNbaV0gLT0gdmVjLnZhbHVlc1tpXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FsZSB1cCB0aGUgVmVjIGJ5IGEgZmFjdG9yLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmYWN0b3IgdGhlIHNjYWxlXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlY30gdGhpc1xuICAgKi9cbiAgbXVsKGZhY3Rvcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJ1Y3Rvci5jb3VudCgpOyArK2kpXG4gICAgICB0aGlzLnZhbHVlc1tpXSAqPSBmYWN0b3I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgZG93biB0aGUgVmVjIGJ5IGEgZmFjdG9yLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmYWN0b3IgdGhlIHNjYWxlXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlY30gdGhpc1xuICAgKi9cbiAgZGl2KGZhY3Rvcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJ1Y3Rvci5jb3VudCgpOyArK2kpXG4gICAgICB0aGlzLnZhbHVlc1tpXSAvPSBmYWN0b3I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUm91bmQgdGhlIFZlYy5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVjaW1hbCB0aGUgcm91bmRpbmcgcHJlY2lzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlY30gdGhpc1xuICAgKi9cbiAgcm91bmQoZGVjaW1hbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJ1Y3Rvci5jb3VudCgpOyArK2kpXG4gICAgICB0aGlzLnZhbHVlc1tpXSA9IHRoaXMudmFsdWVzW2ldLnRvRml4ZWQoZGVjaW1hbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRmxvb3IgdGhlIFZlYy5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWN9IHRoaXNcbiAgICovXG4gIGZsb29yKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJ1Y3Rvci5jb3VudCgpOyArK2kpXG4gICAgICB0aGlzLnZhbHVlc1tpXSA9IE1hdGguZmxvb3IodGhpcy52YWx1ZXNbaV0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSB0aGUgVmVjLlxuICAgKiBPcGVyYXRpb25zIGNhbiBiZSBjb25jYXRlbmF0ZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlY30gdGhpc1xuICAgKi9cbiAgbm9ybWFsaXplKCkge1xuICAgIHJldHVybiB0aGlzLmRpdih0aGlzLm1hZ25pdHVkZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZlcnNlIHRoZSBWZWMuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7VmVjfSB0aGlzXG4gICAqL1xuICBpbnZlcnNlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJ1Y3Rvci5jb3VudCgpOyArK2kpXG4gICAgICB0aGlzLnZhbHVlc1tpXSA9IDEgLyB0aGlzLnZhbHVlc1tpXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZWdhdGUgdGhlIFZlYy5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWN9IHRoaXNcbiAgICovXG4gIG5lZ2F0ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uc3RydWN0b3IuY291bnQoKTsgKytpKVxuICAgICAgdGhpcy52YWx1ZXNbaV0gPSAtdGhpcy52YWx1ZXNbaV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiBWZWMuXG4gICAqXG4gICAqIEBwYXJhbSB7VmVjfSB2ZWMgdGhlIHZlY3RvciB0byBtdWx0aXBseVxuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uXG4gICAqL1xuICBkb3QodmVjKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnN0cnVjdG9yLmNvdW50KCk7ICsraSlcbiAgICAgIHN1bSArPSB0aGlzLnZhbHVlc1tpXSAqIHZlYy52YWx1ZXNbaV07XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBsZW5ndGggb2YgdGhlIFZlYy5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbGVuZ3RoXG4gICAqL1xuICBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLm1hZ25pdHVkZVNxdWFyZWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgbGVuZ3RoIHNxdWFyZWQgb2YgdGhlIFZlYy5cbiAgICpcbiAgICogVHJhbnNmb3JtIHRoZSBWZWMgYnkgYSBNYXQuXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGxlbmd0aCBzcXVhcmVkXG4gICAqL1xuICBtYWduaXR1ZGVTcXVhcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmRvdCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIFZlYyBieSBhIE1hdC5cbiAgICogT3BlcmF0aW9ucyBjYW4gYmUgY29uY2F0ZW5hdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge01hdH0gbWF0IHRoZSBtYXRyaXggdG8gYXBwbHlcbiAgICpcbiAgICogQHJldHVybiB7VmVjfSB0aGlzXG4gICAqL1xuICB0cmFuc2Zvcm0obWF0KSB7XG4gICAgY29uc3QgdG1wID0gdGhpcy5jbG9uZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJ1Y3Rvci5jb3VudCgpOyArK2kpIHtcbiAgICAgIHRoaXMudmFsdWVzW2ldID0gbWF0LnJvdyhpKS5kb3QodG1wKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIFZlYyBjbG9uZS5cbiAgICogXG4gICAqIEByZXR1cm4ge1ZlY30gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5Gcm9tQXJyYXkodGhpcy52YWx1ZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWMgaW5pdGlhbGl6YXRpb24gd2l0aCBlcXVhbCB2YWx1ZXMuXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gdiB0aGUgdmFsdWUgdG8gYmUgdXNlZCBmb3IgZXZlcnkgY29vcmRpbmF0ZVxuICAgKiBcbiAgICogQHJldHVybiB7VmVjfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHN0YXRpYyBBbGwodikge1xuICAgIHJldHVybiB0aGlzLkZyb21BcnJheShuZXcgQXJyYXkodGhpcy5jb3VudCgpKS5maWxsKHYpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgVmVjIGluaXRpYWxpemF0aW9uIHdpdGggemVyb3MuXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlY30gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgWmVyb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuQWxsKDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWMgaW5pdGlhbGl6YXRpb24gd2l0aCBvbmVzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWN9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgc3RhdGljIE9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuQWxsKDEpO1xuICB9XG59IiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuaW1wb3J0IHtWZWN9IGZyb20gXCIuL3ZlYy5qc1wiO1xuaW1wb3J0IHtWZWMzfSBmcm9tIFwiLi92ZWMzLmpzXCI7XG5pbXBvcnQge1ZlYzR9IGZyb20gXCIuL3ZlYzQuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVmVjMiByZXByZXNlbnRpbmcgYSB2ZWN0b3Igd2l0aCAyIGRpbWVuc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWZWMyIGV4dGVuZHMgVmVjIHsgIFxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIFZlYzIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aGUgeCBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aGUgeSBjb29yZGluYXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgc3VwZXIoW3gsIHldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgVmVjMyBpbml0aWFsaXphdGlvbiBmcm9tIGEgVmVjMi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHogdGhlIHogY29vcmRpbmF0ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHRvVmVjMyh6KSB7XG4gICAgcmV0dXJuIG5ldyBWZWMzKHRoaXMueCwgdGhpcy55LCB6KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgVmVjNCBpbml0aWFsaXphdGlvbiBmcm9tIGEgVmVjMi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHogdGhlIHogY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdyB0aGUgdyBjb29yZGluYXRlXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlYzR9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgdG9WZWM0KHosIHcpIHtcbiAgICByZXR1cm4gbmV3IFZlYzQodGhpcy54LCB0aGlzLnksIHosIHcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0byByZXRyaWV2ZSBlbGVtZW50cyBjb3VudC5cbiAgICogXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bSBvZiBlbGVtZW50c1xuICAgKi9cbiAgc3RhdGljIGNvdW50KCkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWMyIGluaXRpYWxpemF0aW9uIHdpdGggYW4gYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlYzJ9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgc3RhdGljIEZyb21BcnJheShhcnIpIHtcbiAgICByZXR1cm4gbmV3IFZlYzIoYXJyWzBdLCBhcnJbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciB0byB1cGRhdGUgdGhlIHggb3IgeSBjb29yZGluYXRlLlxuICAgKiBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRoZSBuZXcgdmFsdWVcbiAgICovXG4gIHNldCB4KHZhbHVlKSB7IHRoaXMudmFsdWVzWzBdID0gdmFsdWU7IH1cbiAgc2V0IHkodmFsdWUpIHsgdGhpcy52YWx1ZXNbMV0gPSB2YWx1ZTsgfVxuXG4gIC8vIFN5bnRhY3RpYyBzdWdhciB0byBzdXBwb3J0IFwic2l6ZVwiIGFjY2Vzc29ycyBhcyBjb29yZGluYXRlc1xuICBzZXQgdyh2YWx1ZSkgeyB0aGlzLnZhbHVlc1swXSA9IHZhbHVlOyB9XG4gIHNldCBoKHZhbHVlKSB7IHRoaXMudmFsdWVzWzFdID0gdmFsdWU7IH1cblxuICAvLyBTeW50YWN0aWMgc3VnYXIgdG8gc3VwcG9ydCBcInRleHR1cmVcIiBhY2Nlc3NvcnMgYXMgY29vcmRpbmF0ZXNcbiAgc2V0IHUodmFsdWUpIHsgdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZTsgfVxuICBzZXQgdih2YWx1ZSkgeyB0aGlzLnZhbHVlc1sxXSA9IHZhbHVlOyB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0byByZXRyaWV2ZSB0aGUgeCBvciB5IGNvb3JkaW5hdGUuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBzZWxlY3RlZCBjb29yZGluYXRlXG4gICAqL1xuICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzBdOyB9XG4gIGdldCB5KCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMV07IH1cbiAgXG4gIC8vIFN5bnRhY3RpYyBzdWdhciB0byBzdXBwb3J0IFwic2l6ZVwiIGFjY2Vzc29ycyBhcyBjb29yZGluYXRlc1xuICBnZXQgdygpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzBdOyB9XG4gIGdldCBoKCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMV07IH1cblxuICAvLyBTeW50YWN0aWMgc3VnYXIgdG8gc3VwcG9ydCBcInRleHR1cmVcIiBhY2Nlc3NvcnMgYXMgY29vcmRpbmF0ZXNcbiAgZ2V0IHUoKSB7IHJldHVybiB0aGlzLnZhbHVlc1swXTsgfVxuICBnZXQgdigpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzFdOyB9XG59IiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuaW1wb3J0IHtWZWN9IGZyb20gXCIuL3ZlYy5qc1wiO1xuaW1wb3J0IHtWZWMyfSBmcm9tIFwiLi92ZWMyLmpzXCI7XG5pbXBvcnQge1ZlYzR9IGZyb20gXCIuL3ZlYzQuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVmVjMyByZXByZXNlbnRpbmcgYSB2ZWN0b3Igd2l0aCAzIGRpbWVuc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWZWMzIGV4dGVuZHMgVmVjIHsgIFxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIFZlYzMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aGUgeCBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aGUgeSBjb29yZGluYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aGUgeiBjb29yZGluYXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgc3VwZXIoW3gsIHksIHpdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgdG8gcmV0cmlldmUgZWxlbWVudHMgY291bnQuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW0gb2YgZWxlbWVudHNcbiAgICovXG4gIHN0YXRpYyBjb3VudCgpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIC8qKlxuICAgKiBTeW50YWN0aWMtc3VnYXIgZm9yIGEgVmVjMyBpbml0aWFsaXphdGlvbiB3aXRoIGFuIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHN0YXRpYyBGcm9tQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBWZWMzKGFyclswXSwgYXJyWzFdLCBhcnJbMl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWMyIGluaXRpYWxpemF0aW9uIGZyb20gYSBWZWMzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMyfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHRvVmVjMigpIHtcbiAgICByZXR1cm4gbmV3IFZlYzIodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWM0IGluaXRpYWxpemF0aW9uIGZyb20gYSBWZWMzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdyB0aGUgdyBjb29yZGluYXRlXG4gICAqXG4gICAqIEByZXR1cm4ge1ZlYzR9IHRoZSBuZXdseSBjcmVhdGVkIHZlY3RvclxuICAgKi9cbiAgdG9WZWM0KHcpIHtcbiAgICByZXR1cm4gbmV3IFZlYzQodGhpcy54LCB0aGlzLnksIHRoaXMueiwgdyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIHRvIHVwZGF0ZSB0aGUgeCwgeSBvciB6IGNvb3JkaW5hdGUuXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGhlIG5ldyB2YWx1ZVxuICAgKi9cbiAgc2V0IHgodmFsdWUpIHsgdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZTsgfVxuICBzZXQgeSh2YWx1ZSkgeyB0aGlzLnZhbHVlc1sxXSA9IHZhbHVlOyB9XG4gIHNldCB6KHZhbHVlKSB7IHRoaXMudmFsdWVzWzJdID0gdmFsdWU7IH1cblxuICAvLyBTeW50YWN0aWMgc3VnYXIgdG8gc3VwcG9ydCBcImNvbG9yXCIgY2hhbm5lbHMgYXMgY29vcmRpbmF0ZXNcbiAgc2V0IHIodmFsdWUpIHsgdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZTsgfVxuICBzZXQgZyh2YWx1ZSkgeyB0aGlzLnZhbHVlc1sxXSA9IHZhbHVlOyB9XG4gIHNldCBiKHZhbHVlKSB7IHRoaXMudmFsdWVzWzJdID0gdmFsdWU7IH1cblxuICAvLyBTeW50YWN0aWMgc3VnYXIgdG8gc3VwcG9ydCBcImNvbG9yXCIgY2hhbm5lbHMgYXMgY29vcmRpbmF0ZXNcbiAgc2V0IGgodmFsdWUpIHsgdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZTsgfVxuICBzZXQgcyh2YWx1ZSkgeyB0aGlzLnZhbHVlc1sxXSA9IHZhbHVlOyB9XG4gIHNldCB2KHZhbHVlKSB7IHRoaXMudmFsdWVzWzJdID0gdmFsdWU7IH1cblxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIHRoZSB4LCB5IG9yIHogY29vcmRpbmF0ZS5cbiAgICogXG4gICAqIEByZXR1cm4ge251bWJlcn0gdGhlIHNlbGVjdGVkIGNvb3JkaW5hdGVcbiAgICovXG4gIGdldCB4KCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMF07IH1cbiAgZ2V0IHkoKSB7IHJldHVybiB0aGlzLnZhbHVlc1sxXTsgfVxuICBnZXQgeigpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzJdOyB9XG4gIFxuICAvLyBTeW50YWN0aWMgc3VnYXIgdG8gc3VwcG9ydCBcImNvbG9yXCIgY2hhbm5lbHMgYXMgY29vcmRpbmF0ZXNcbiAgZ2V0IHIoKSB7IHJldHVybiB0aGlzLnZhbHVlc1swXTsgfVxuICBnZXQgZygpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzFdOyB9XG4gIGdldCBiKCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMl07IH1cbiAgXG4gIC8vIFN5bnRhY3RpYyBzdWdhciB0byBzdXBwb3J0IFwiY29sb3JcIiBjaGFubmVscyBhcyBjb29yZGluYXRlc1xuICBnZXQgaCgpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzBdOyB9XG4gIGdldCBzKCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMV07IH1cbiAgZ2V0IHYoKSB7IHJldHVybiB0aGlzLnZhbHVlc1syXTsgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBjcm9zcyBwcm9kdWN0IHdpdGggYW5vdGhlciB2ZWN0b3IuXG4gICAqIE9wZXJhdGlvbnMgY2FuIGJlIGNvbmNhdGVuYXRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtWZWMzfSB2ZWMgdGhlIHZlY3RvciB0byBtdWx0aXBseVxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGlzXG4gICAqL1xuICBjcm9zcyh2ZWMpIHtcbiAgICBjb25zdCB2MCA9IHRoaXMudmFsdWVzWzBdO1xuICAgIGNvbnN0IHYxID0gdGhpcy52YWx1ZXNbMV07XG4gICAgY29uc3QgdjIgPSB0aGlzLnZhbHVlc1syXTtcblxuICAgIHRoaXMudmFsdWVzWzBdID0gKHYxICogdmVjLnopIC0gKHYyICogdmVjLnkpO1xuICAgIHRoaXMudmFsdWVzWzFdID0gKHYyICogdmVjLngpIC0gKHYwICogdmVjLnopO1xuICAgIHRoaXMudmFsdWVzWzJdID0gKHYwICogdmVjLnkpIC0gKHYxICogdmVjLngpO1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLypcbiAgICogQ2FsY3VsYXRlIHRleHR1cmUgdXZzIG9mIHNwaGVyZSB3aXRoIFZlYzMgYXMgcG9pbnQuXG4gICAqXG4gICAqIFNob3VsZCBiZSBub3JtYWxpemVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMyfSB0aGUgdXYgY29vcmRpbmF0ZXNcbiAgICovXG4gIHRvVVZvZlNwaGVyZSgpIHtcbiAgICBjb25zdCB1ID0gKE1hdGguYXRhbjIodGhpcy52YWx1ZXNbMF0sIHRoaXMudmFsdWVzWzJdKSAvIE1hdGguUEkpIC8gMiArIDAuNTtcbiAgICBjb25zdCB2ID0gKE1hdGguYXNpbigtdGhpcy52YWx1ZXNbMV0pIC8gKE1hdGguUEkgLyAyKSkgLyAyICsgMC41O1xuICAgIHJldHVybiBuZXcgVmVjMih1LCB2KTtcbiAgfVxufVxuIiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuaW1wb3J0IHtWZWN9IGZyb20gXCIuL3ZlYy5qc1wiO1xuaW1wb3J0IHtWZWMyfSBmcm9tIFwiLi92ZWMyLmpzXCI7XG5pbXBvcnQge1ZlYzN9IGZyb20gXCIuL3ZlYzMuanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgVmVjNCByZXByZXNlbnRpbmcgYSB2ZWN0b3Igd2l0aCA0IGRpbWVuc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWZWM0IGV4dGVuZHMgVmVjIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBWZWM0LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGhlIHggY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGhlIHkgY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGhlIHogY29vcmRpbmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdGhlIHcgY29vcmRpbmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSwgeiwgdykge1xuICAgIHN1cGVyKFt4LCB5LCB6LCB3XSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHRvIHJldHJpZXZlIGVsZW1lbnRzIGNvdW50LlxuICAgKiBcbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtIG9mIGVsZW1lbnRzXG4gICAqL1xuICBzdGF0aWMgY291bnQoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICAvKipcbiAgICogU3ludGFjdGljLXN1Z2FyIGZvciBhIFZlYzQgaW5pdGlhbGl6YXRpb24gd2l0aCBhbiBhcnJheS5cbiAgICpcbiAgICogQHJldHVybiB7VmVjNH0gdGhlIG5ld2x5IGNyZWF0ZWQgdmVjdG9yXG4gICAqL1xuICBzdGF0aWMgRnJvbUFycmF5KGFycikge1xuICAgIHJldHVybiBuZXcgVmVjNChhcnJbMF0sIGFyclsxXSwgYXJyWzJdLCBhcnJbM10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWMyIGluaXRpYWxpemF0aW9uIGZyb20gYSBWZWM0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMyfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHRvVmVjMigpIHtcbiAgICByZXR1cm4gbmV3IFZlYzIodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bnRhY3RpYy1zdWdhciBmb3IgYSBWZWMzIGluaXRpYWxpemF0aW9uIGZyb20gYSBWZWM0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtWZWMzfSB0aGUgbmV3bHkgY3JlYXRlZCB2ZWN0b3JcbiAgICovXG4gIHRvVmVjMygpIHtcbiAgICByZXR1cm4gbmV3IFZlYzModGhpcy54LCB0aGlzLnksIHRoaXMueik7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIHRvIHVwZGF0ZSB0aGUgeCwgeSwgeiBvciB3IGNvb3JkaW5hdGUuXG4gICAqIFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGhlIG5ldyB2YWx1ZVxuICAgKi9cbiAgc2V0IHgodmFsdWUpIHsgdGhpcy52YWx1ZXNbMF0gPSB2YWx1ZTsgfVxuICBzZXQgeSh2YWx1ZSkgeyB0aGlzLnZhbHVlc1sxXSA9IHZhbHVlOyB9XG4gIHNldCB6KHZhbHVlKSB7IHRoaXMudmFsdWVzWzJdID0gdmFsdWU7IH1cbiAgc2V0IHcodmFsdWUpIHsgdGhpcy52YWx1ZXNbM10gPSB2YWx1ZTsgfVxuXG4gIC8vIFN5bnRhY3RpYyBzdWdhciB0byBzdXBwb3J0IFwiY29sb3JcIiBjaGFubmVscyBhcyBjb29yZGluYXRlc1xuICBzZXQgcih2YWx1ZSkgeyB0aGlzLnZhbHVlc1swXSA9IHZhbHVlOyB9XG4gIHNldCBnKHZhbHVlKSB7IHRoaXMudmFsdWVzWzFdID0gdmFsdWU7IH1cbiAgc2V0IGIodmFsdWUpIHsgdGhpcy52YWx1ZXNbMl0gPSB2YWx1ZTsgfVxuICBzZXQgYSh2YWx1ZSkgeyB0aGlzLnZhbHVlc1szXSA9IHZhbHVlOyB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0byByZXRyaWV2ZSB0aGUgeCwgeSwgeiBvciB3IGNvb3JkaW5hdGUuXG4gICAqIFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBzZWxlY3RlZCBjb29yZGluYXRlXG4gICAqL1xuICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzBdOyB9XG4gIGdldCB5KCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMV07IH1cbiAgZ2V0IHooKSB7IHJldHVybiB0aGlzLnZhbHVlc1syXTsgfVxuICBnZXQgdygpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzNdOyB9XG4gIFxuICAvLyBTeW50YWN0aWMgc3VnYXIgdG8gc3VwcG9ydCBcImNvbG9yXCIgY2hhbm5lbHMgYXMgY29vcmRpbmF0ZXNcbiAgZ2V0IHIoKSB7IHJldHVybiB0aGlzLnZhbHVlc1swXTsgfVxuICBnZXQgZygpIHsgcmV0dXJuIHRoaXMudmFsdWVzWzFdOyB9XG4gIGdldCBiKCkgeyByZXR1cm4gdGhpcy52YWx1ZXNbMl07IH1cbiAgZ2V0IGEoKSB7IHJldHVybiB0aGlzLnZhbHVlc1szXTsgfVxufSIsIi8qKiBAYXV0aG9yOiBEYXZpZGUgUmlzYWxpdGkgZGF2ZGFnMjRAZ21haWwuY29tICovXG5cbi8qKlxuICogQGNsYXNzIFByb2dyYW0gcmVwcmVzZW50aW5nIGFuIE9wZW5HTCBwcm9ncmFtXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9ncmFtIHtcbiAgI2dsO1xuICBcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBQcm9ncmFtLlxuICAgKlxuICAgKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMIGNvbnRleHRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGdsKSB7XG4gICAgdGhpcy4jZ2wgPSBnbDtcbiAgICB0aGlzLmlkID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIHRoaXMuYXR0cnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggYSBzaGFkZXIgdG8gdGhlIFByb2dyYW0uXG4gICAqXG4gICAqIEBwYXJhbSB7U2hhZGVyfSBzaGFkZXIgdGhlIHNoYWRlciB0byBhdHRhY2hcbiAgICovXG4gIGF0dGFjaFNoYWRlcihzaGFkZXIpIHtcbiAgICB0aGlzLiNnbC5hdHRhY2hTaGFkZXIodGhpcy5pZCwgc2hhZGVyLmlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaW5rIHRoZSBQcm9ncmFtLiBbb25jZV1cbiAgICovXG4gIGxpbmsoKSB7XG4gICAgdGhpcy4jZ2wubGlua1Byb2dyYW0odGhpcy5pZCk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLiNnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMuaWQsIHRoaXMuI2dsLkxJTktfU1RBVFVTKTtcbiAgICBjb25zdCBsb2cgICAgPSB0aGlzLiNnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLmlkKTtcblxuICAgIC8vIFZhbGlkYXRlIHByb2dyYW1cbiAgICBpZiAoc3RhdHVzID09PSB0aGlzLiNnbC5HTF9GQUxTRSB8fCBsb2cgIT0gXCJcIikgdGhyb3cgbmV3IEVycm9yKFwie1BST0dSQU0tRVJST1J9OiBcIiArIGxvZyk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoZSBQcm9ncmFtLlxuICAgKi9cbiAgdXNlKCkge1xuICAgIHRoaXMuI2dsLnVzZVByb2dyYW0odGhpcy5pZCk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHByb2dyYW0uXG4gICAqL1xuICBzdGF0aWMgdW5iaW5kKGdsKSB7XG4gICAgZ2wudXNlUHJvZ3JhbShudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGF0dHJpYnV0ZXMgaW5zaWRlIHRoZSBQcm9ncmFtLiBbb25jZV1cbiAgICogZXg6XG4gICAqICAgIFtcbiAgICAgICAgICBbXCJhUG9zXCIsIDIsIGdsLkZMT0FULCAxNiwgMF0sXG4gICAgICAgICAgW1wiYVRleFwiLCAyLCBnbC5GTE9BVCwgMTYsIDhdXG4gICAqICAgIF1cbiAgICpcbiAgICogQHBhcmFtIHtsaXN0IG9mIChzdHJpbmcsIG51bWJlciwgZW51bSwgbnVtYmVyLCBudW1iZXIpfSBhdHRycyB0aGUgYXR0cmlidXRlcyBsaXN0XG4gICAqL1xuICBhdHRyaWJ1dGVzKGF0dHJzKSB7XG4gICAgdGhpcy5hdHRycyA9IGF0dHJzO1xuICAgIGF0dHJzLmZvckVhY2goKFtuYW1lLCBfLCBfXywgX19fLCBfX19fXSwgaW5kKSA9PiB7XG4gICAgICB0aGlzLiNnbC5iaW5kQXR0cmliTG9jYXRpb24odGhpcy5pZCwgaW5kLCBuYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYWxsIHRoZSBhdHRyaWJ1dGVzIGFycmF5cyBhbmQgaW5pdGlhbGl6ZSB0aGVpciBwb2ludGVycyBkYXRhLlxuICAgKi9cbiAgZW5hYmxlQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmF0dHJzLmZvckVhY2goKFtfLCBjb3VudCwgdHlwZSwgc2l6ZSwgb2Zmc2V0XSwgaW5kKSA9PiB7XG4gICAgICB0aGlzLiNnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmQpO1xuICAgICAgdGhpcy4jZ2wudmVydGV4QXR0cmliUG9pbnRlcihpbmQsIGNvdW50LCB0eXBlLCBmYWxzZSwgc2l6ZSwgb2Zmc2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFsbCB0aGUgYXR0cmlidXRlcyBhcnJheXMuXG4gICAqL1xuICBkaXNhYmxlQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmF0dHJzLmZvckVhY2goKF8sIGluZCkgPT4ge1xuICAgICAgdGhpcy4jZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjbGFyZSB0aGF0IGEgdW5pZm9ybSBleGlzdC4gW29uY2VdXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB1bmlmb3JtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHRoZSB0eXBlIG9mIHRoZSB1bmlmb3JtXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gYSByZWZlcmVuY2UgdG8gdGhlIHVuaWZvcm0gb2JqXG4gICAqL1xuICBkZWNsYXJlVW5pZm9ybShuYW1lLCB0eXBlKSB7XG4gICAgY29uc3QgbWV0aG9kID0gKGlkLCB2YWx1ZSkgPT4gdGhpc1tcInVuaWZvcm1cIiArIHR5cGVdKGlkLCB2YWx1ZSk7XG4gICAgY29uc3QgaWQgPSB0aGlzLiNnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5pZCwgbmFtZSk7XG4gICAgdGhpc1tuYW1lXSA9IHsgdXBkYXRlOiAodmFsdWUpID0+IG1ldGhvZChpZCwgdmFsdWUpLCBpZCB9O1xuICAgIHJldHVybiB0aGlzW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY2xhcmUgYSBsaXN0IG9mIHVuaWZvcm0uIFtvbmNlXVxuICAgKiBleDpcbiAgICogICBbXG4gICAqICAgICAgW1widU1hdHJpeFwiLCBcIk1hdHJpeDRmdlwiXSxcbiAgICogICAgICBbXCJ1UG9zXCIsIFwiMmZ2XCJdLFxuICAgKiAgICAgIFtcInVTaXplXCIsIFwiMWZcIl1cbiAgICogICBdXG4gICAqXG4gICAqIEBwYXJhbSB7bGlzdCBvZiAoc3RyaW5nLCBzdHJpbmcpfSB1bmlmb3JtcyB0aGUgdW5pZm9ybSBsaXN0XG4gICAqL1xuICBkZWNsYXJlVW5pZm9ybXModW5pZm9ybXMpIHtcbiAgICB1bmlmb3Jtcy5mb3JFYWNoKChbbmFtZSwgdHlwZV0pID0+IHtcbiAgICAgIHRoaXMuZGVjbGFyZVVuaWZvcm0obmFtZSwgdHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVuaWZvcm0gdmFsdWUgZm9yIHRoZSBQcm9ncmFtLlxuICAgKiBUaGUgUHJvZ3JhbSBtdXN0IGJlIGluIHVzZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIHRoZSB1bmlmb3JtIGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7P30gdmFsdWUgdGhlIHVuaWZvcm0gdmFsdWVcbiAgICovXG4gIHVuaWZvcm0xZihpZCwgdmFsdWUpIHsgdGhpcy4jZ2wudW5pZm9ybTFmKGlkLCB2YWx1ZSk7IH1cbiAgdW5pZm9ybTFpKGlkLCB2YWx1ZSkgeyB0aGlzLiNnbC51bmlmb3JtMWkoaWQsIHZhbHVlKTsgfVxuICB1bmlmb3JtMml2KGlkLCB2YWx1ZSkgeyB0aGlzLiNnbC51bmlmb3JtMml2KGlkLCB2YWx1ZSk7IH1cbiAgdW5pZm9ybTJmdihpZCwgdmFsdWUpIHsgdGhpcy4jZ2wudW5pZm9ybTJmdihpZCwgdmFsdWUpOyB9XG4gIHVuaWZvcm0zaXYoaWQsIHZhbHVlKSB7IHRoaXMuI2dsLnVuaWZvcm0zaXYoaWQsIHZhbHVlKTsgfVxuICB1bmlmb3JtM2Z2KGlkLCB2YWx1ZSkgeyB0aGlzLiNnbC51bmlmb3JtM2Z2KGlkLCB2YWx1ZSk7IH1cbiAgdW5pZm9ybTRpdihpZCwgdmFsdWUpIHsgdGhpcy4jZ2wudW5pZm9ybTRpdihpZCwgdmFsdWUpOyB9XG4gIHVuaWZvcm00ZnYoaWQsIHZhbHVlKSB7IHRoaXMuI2dsLnVuaWZvcm00ZnYoaWQsIHZhbHVlKTsgfVxuICB1bmlmb3JtTWF0cml4MmZ2KGlkLCB2YWx1ZSkgeyB0aGlzLiNnbC51bmlmb3JtTWF0cml4MmZ2KGlkLCBmYWxzZSwgdmFsdWUpOyB9XG4gIHVuaWZvcm1NYXRyaXgzZnYoaWQsIHZhbHVlKSB7IHRoaXMuI2dsLnVuaWZvcm1NYXRyaXgzZnYoaWQsIGZhbHNlLCB2YWx1ZSk7IH1cbiAgdW5pZm9ybU1hdHJpeDRmdihpZCwgdmFsdWUpIHsgdGhpcy4jZ2wudW5pZm9ybU1hdHJpeDRmdihpZCwgZmFsc2UsIHZhbHVlKTsgfVxufVxuIiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuLyoqXG4gKiBAY2xhc3MgU2hhZGVyIHJlcHJlc2VudGluZyBhbiBPcGVuR0wgc2hhZGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFkZXIge1xuICAjZ2w7XG4gIFxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIFNoYWRlci5cbiAgICpcbiAgICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTCBjb250ZXh0XG4gICAqIEBwYXJhbSB7Z2wuRU5VTV9UWVBFfSB0eXBlIHRoZSBTaGFkZXIgdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIHRoZSBTaGFkZXIgc291cmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihnbCwgdHlwZSwgc3JjKSB7XG4gICAgdGhpcy4jZ2wgPSBnbDtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuI2NvbXBpbGVTaGFkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21waWxlcyB0aGUgU2hhZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMIGNvbnRleHRcbiAgICogQHBhcmFtIHtnbC5FTlVNX1RZUEV9IHR5cGUgdGhlIFNoYWRlciB0eXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgdGhlIFNoYWRlciBzb3VyY2VcbiAgICpcbiAgICogQHRocm93cyBhbiBFcnJvciB3aGVuIHRoZSBTaGFkZXIgZG9lcyBub3QgY29tcGlsZSBzdWNjZXNzZnVsbHlcbiAgICovXG4gICNjb21waWxlU2hhZGVyKCkge1xuICAgIC8vIENyZWF0ZSBzaGFkZXIgb2JqZWN0XG4gICAgY29uc3Qgc2hhZGVyID0gdGhpcy4jZ2wuY3JlYXRlU2hhZGVyKHRoaXMudHlwZSk7XG5cbiAgICAvLyBTZXQgc291cmNlIGNvZGVcbiAgICB0aGlzLiNnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCB0aGlzLnNyYyk7XG4gIFxuICAgIC8vIENvbXBpbGUgc2hhZGVyXG4gICAgdGhpcy4jZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgLy8gQ2hlY2sgY29tcGlsYXRpb24gcmVzdWx0c1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuI2dsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuI2dsLkNPTVBJTEVfU1RBVFVTKTtcbiAgICBjb25zdCBsb2cgICAgPSB0aGlzLiNnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG5cbiAgICAvLyBWYWxpZGF0ZSBzaGFkZXJcbiAgICBpZiAoc3RhdHVzID09PSB0aGlzLiNnbC5HTF9GQUxTRSB8fCBsb2cgIT0gXCJcIikgdGhyb3cgbmV3IEVycm9yKFwie1NIQURFUi1FUlJPUn06IFwiICsgbG9nKTtcbiAgXG4gICAgLy8gUmVzdWx0XG4gICAgdGhpcy5pZCA9IHNoYWRlcjtcbiAgfVxufVxuIiwiLyoqIEBhdXRob3I6IERhdmlkZSBSaXNhbGl0aSBkYXZkYWcyNEBnbWFpbC5jb20gKi9cblxuLyoqXG4gKiBAY2xhc3MgVGV4dHVyZSByZXByZXNlbnRpbmcgYW4gT3BlbkdMIHNoYWRlclxuICovXG5leHBvcnQgY2xhc3MgVGV4dHVyZSB7XG4gICNnbDtcbiAgXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgVGV4dHVyZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGdsLCBpZCwgaW1hZ2UpIHtcbiAgICB0aGlzLiNnbCA9IGdsO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5pbnRlcm5hbEZvcm1hdCA9IGdsLlJHQkE7XG4gICAgdGhpcy5zcmNGb3JtYXQgPSBnbC5SR0JBO1xuICAgIHRoaXMuc3JjVHlwZSA9IGdsLlVOU0lHTkVEX0JZVEU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGxvYWQoKSB7XG4gICAgdGhpcy4jZ2wuYmluZFRleHR1cmUodGhpcy4jZ2wuVEVYVFVSRV8yRCwgdGhpcy5pZCk7XG4gICAgdGhpcy4jZ2wudGV4SW1hZ2UyRChcbiAgICAgIHRoaXMuI2dsLlRFWFRVUkVfMkQsXG4gICAgICB0aGlzLmxldmVsLFxuICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCxcbiAgICAgIHRoaXMuc3JjRm9ybWF0LFxuICAgICAgdGhpcy5zcmNUeXBlLFxuICAgICAgdGhpcy5pbWFnZVxuICAgICk7XG4gICAgdGhpcy4jZ2wuYmluZFRleHR1cmUodGhpcy4jZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGJpbmQoKSB7XG4gICAgdGhpcy4jZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLiNnbC5URVhUVVJFMCk7XG4gICAgdGhpcy4jZ2wuYmluZFRleHR1cmUodGhpcy4jZ2wuVEVYVFVSRV8yRCwgdGhpcy5pZCk7XG4gICAgdGhpcy4jZ2wudGV4UGFyYW1ldGVyaSh0aGlzLiNnbC5URVhUVVJFXzJELCB0aGlzLiNnbC5URVhUVVJFX1dSQVBfUywgdGhpcy4jZ2wuUkVQRUFUKTtcbiAgICB0aGlzLiNnbC50ZXhQYXJhbWV0ZXJpKHRoaXMuI2dsLlRFWFRVUkVfMkQsIHRoaXMuI2dsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLiNnbC5SRVBFQVQpO1xuICAgIHRoaXMuI2dsLnRleFBhcmFtZXRlcmkodGhpcy4jZ2wuVEVYVFVSRV8yRCwgdGhpcy4jZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLiNnbC5MSU5FQVIpO1xuICAgIFxuICB0aGlzLiNnbC50ZXhQYXJhbWV0ZXJpKHRoaXMuI2dsLlRFWFRVUkVfMkQsIHRoaXMuI2dsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy4jZ2wuTElORUFSKTtcbiAgICB0aGlzLiNnbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLiNnbC5URVhUVVJFXzJEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGEgVGV4dHVyZSBmcm9tIGFuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCB0aGUgdXJsIHRvIGRvd25sb2FkIHRoZSB0ZXh0dXJlIGZyb21cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxUZXh0dXJlPn0gYSBwcm9taXNlIHdpdGggdGhlIHRleHR1cmVcbiAgICovXG4gIHN0YXRpYyBmcm9tVXJsKGdsLCB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICByZXMobmV3IFRleHR1cmUoZ2wsIHRleHR1cmUsIGltYWdlKSk7XG4gICAgICB9O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICByZWooXCJFcnJvciBsb2FkaW5nIHRoZSBpbWFnZS5cIik7XG4gICAgICB9O1xuICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnJztcbiAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICB9KTtcbiAgfVxufSIsIi8qKiBAYXV0aG9yOiBEYXZpZGUgUmlzYWxpdGkgZGF2ZGFnMjRAZ21haWwuY29tICovXG5cbmltcG9ydCB7VmVjMn0gZnJvbSBcIi4uL2FsbC5qc1wiO1xuXG4vKipcbiAqIFJldHJpZXZlIE9wZW5HTCBFUyBjb250ZXh0LlxuICogXG4gKiBAcGFyYW1zIHtzdHJpbmd9IGVsZW1lbnRJZCB0aGUgaWQgb2YgdGhlIGNhbnZhcyBlbGVtZW50IHRvIHVzZVxuICpcbiAqIEB0aHJvd3MgYW4gRXJyb3Igd2hlbiB0aGUgQ29udGV4dCBjYW5ub3QgYmUgcmV0cmlldmVkXG4gKiBcbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gdGhlIHJldHJpZXZlZCBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBSZXRyaWV2ZVdlYkdMQ29udGV4dChlbGVtZW50SWQpIHtcbiAgLy8gRmluZCBlbGVtZW50XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG5cbiAgLy8gQ2hlY2sgZm9yIGVycm9yc1xuICBpZiAoY2FudmFzID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZWxlbWVudCBpZFwiKTtcblxuICAvLyBJbml0aWFsaXplIHRoZSBHTCBjb250ZXh0XG4gIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcblxuICAvLyBDaGVjayBmb3IgZXJyb3JzXG4gIGlmIChnbCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuXG4gIC8vIEluc2VydCBjYW52YXMgcmVmIGludG8gZ2wgY29udGV4dFxuICBnbC5jYW52YXNFbCA9IGNhbnZhcztcblxuICAvLyBSZXN1bHRcbiAgcmV0dXJuIGdsO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIE1vdXNlIGxpc3RlbmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBNb3VzZUhhbmRsZXIge1xuICBvbk1vdXNlRG93bihldmVudCwgbW91c2VQb3MpIHt9XG4gIG9uTW91c2VNb3ZlKGV2ZW50LCBtb3VzZVBvcykge31cbiAgb25Nb3VzZVVwKGV2ZW50LCBtb3VzZVBvcykge31cbiAgb25Nb3VzZVdoZWVsKGV2ZW50LCBtb3VzZVBvcykge31cbiAgb25Nb3VzZU91dChldmVudCkge31cbn1cblxuLyoqXG4gKiBBZGQgYW4gaGFuZGxlciBmb3IgY29tbW9uIHBvaW50ZXIgb3BlcmF0aW9ucyBhbmQgY29tcHV0ZSB0aGUgcG9zaXRpb24gbWFwcGluZyBwcm9jZXNzLlxuICogXG4gKiBAcGFyYW1zIHtzdHJpbmd9IGVsZW1lbnRJZCB0aGUgaWQgb2YgdGhlIGNhbnZhcyBlbGVtZW50IHRvIHVzZVxuICogXG4gKiBAcGFyYW1zIHtvYmplY3R9IGhhbmRsZXIgYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgY2FsbGJhY2tzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXRNb3VzZUhhbmRsZXIoZWxlbWVudElkLCBoYW5kbGVyKSB7XG4gIC8vIEZpbmQgZWxlbWVudFxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb21wdXRlIHBvc2l0aW9uXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uKGVsKSB7XG4gICAgdmFyIHhQb3NpdGlvbiA9IDA7XG4gICAgdmFyIHlQb3NpdGlvbiA9IDA7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICB4UG9zaXRpb24gKz0gKGVsLm9mZnNldExlZnQgLSBlbC5zY3JvbGxMZWZ0ICsgZWwuY2xpZW50TGVmdCk7XG4gICAgICB5UG9zaXRpb24gKz0gKGVsLm9mZnNldFRvcCAgLSBlbC5zY3JvbGxUb3AgICsgZWwuY2xpZW50VG9wKTtcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xuICAgIH0gICAgXG4gICAgcmV0dXJuIG5ldyBWZWMyKHhQb3NpdGlvbiwgeVBvc2l0aW9uKTtcbiAgfVxuXG4gIC8vIFN0b3JlIHBvc2l0aW9uXG4gIGNvbnN0IGNhbnZhc1BvcyA9IGdldFBvc2l0aW9uKGNhbnZhcyk7XG5cbiAgLy8gTGFtYmRhIHRvIGhlbHAgcmVhZGFiaWxpdHlcbiAgY29uc3QgbW91c2VQb3MgPSAoZXZlbnQpID0+IG5ldyBWZWMyKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpLnN1YihjYW52YXNQb3MpO1xuXG4gIC8vIFJlZ2lzdGVyIHRvIGV2ZW50c1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IGhhbmRsZXIub25Nb3VzZURvd24oZXZlbnQsIG1vdXNlUG9zKGV2ZW50KSkpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IGhhbmRsZXIub25Nb3VzZU1vdmUoZXZlbnQsIG1vdXNlUG9zKGV2ZW50KSkpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiBoYW5kbGVyLm9uTW91c2VVcChldmVudCwgbW91c2VQb3MoZXZlbnQpKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2ZW50KSA9PiBoYW5kbGVyLm9uTW91c2VXaGVlbChldmVudCwgbW91c2VQb3MoZXZlbnQpKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZXZlbnQpID0+IGhhbmRsZXIub25Nb3VzZU91dChldmVudCkpO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIEtleWJvYXJkIGxpc3RlbmVyXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlib2FyZEhhbmRsZXIge1xuICBPbktleURvd24oZXZlbnQpIHt9XG4gIE9uS2V5VXAoZXZlbnQpIHt9XG59XG5cbi8qKlxuICogQWRkIGFuIGhhbmRsZXIgZm9yIGNvbW1vbiBrZXlib2FyZCBldmVudHMuXG4gKiBcbiAqIEBwYXJhbXMge3N0cmluZ30gZWxlbWVudElkIHRoZSBpZCBvZiB0aGUgY2FudmFzIGVsZW1lbnQgdG8gdXNlXG4gKiBcbiAqIEBwYXJhbXMge29iamVjdH0gaGFuZGxlciBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBjYWxsYmFja3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldEtleWJvYXJkSGFuZGxlcihlbGVtZW50SWQsIGhhbmRsZXIpIHtcbiAgLy8gRmluZCBlbGVtZW50XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG5cbiAgLy8gUmVnaXN0ZXIgdG8gZXZlbnRzXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4gaGFuZGxlci5PbktleURvd24oZXZlbnQpKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4gaGFuZGxlci5PbktleVVwKGV2ZW50KSk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgS2V5Ym9hcmQgbGlzdGVuZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc2l6ZUhhbmRsZXIge1xuICBPblJlc2l6ZShjYW52YXNTaXplLCBjb250ZXh0U2l6ZSkge31cbn1cblxuLyoqXG4gKiBBZGQgYW4gaGFuZGxlciBmb3IgdGhlIHJlc2l6ZSBldmVudC5cbiAqIFxuICogQHBhcmFtcyB7c3RyaW5nfSBlbGVtZW50SWQgdGhlIGlkIG9mIHRoZSBjYW52YXMgZWxlbWVudCB0byB1c2VcbiAqIFxuICogQHBhcmFtcyB7b2JqZWN0fSBoYW5kbGVyIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGNhbGxiYWNrc1xuICogXG4gKiBAdGhyb3dzIEVycm9yIHdoZW4gdGhlIHJlc2l6ZSBldmVudCBpcyBub3Qgc3VwcG9ydGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXRSZXNpemVIYW5kbGVyKGVsZW1lbnRJZCwgaGFuZGxlcikge1xuICAvLyBGaW5kIGVsZW1lbnRcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcblxuICAvLyBSZXNpemUgaGVscGVyIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIG9uUmVzaXplKGVudHJpZXMpIHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZSkge1xuICAgICAgICBjb25zdCBjV2lkdGggPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdLmlubGluZVNpemU7XG4gICAgICAgIGNvbnN0IGNIZWlnaHQgPSBlbnRyeS5ib3JkZXJCb3hTaXplWzBdLmJsb2NrU2l6ZTtcbiAgICAgICAgY29uc3QgZ2xXaWR0aCA9IGVudHJ5LmRldmljZVBpeGVsQ29udGVudEJveFNpemVbMF0uaW5saW5lU2l6ZTtcbiAgICAgICAgY29uc3QgZ2xIZWlnaHQgPSBlbnRyeS5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplWzBdLmJsb2NrU2l6ZTtcbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IG5ldyBWZWMyKGNXaWR0aCwgY0hlaWdodCkucm91bmQoMCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHRTaXplID0gbmV3IFZlYzIoZ2xXaWR0aCwgZ2xIZWlnaHQpLnJvdW5kKDApO1xuICAgICAgICBoYW5kbGVyLk9uUmVzaXplKGNhbnZhc1NpemUsIGNvbnRleHRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHJlc2l6ZSBldmVudFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBvYnNlcnZlclxuICBjb25zdCBvYnMgPSBuZXcgUmVzaXplT2JzZXJ2ZXIob25SZXNpemUpO1xuXG4gIC8vIFJlZ2lzdGVyIHRvIHJlc2l6ZSBldmVudFxuICBvYnMub2JzZXJ2ZShjYW52YXMsIHtib3g6IFwiY29udGVudC1ib3hcIn0pO1xufVxuIiwiaW1wb3J0IHsgTWF0NCwgTWF0cml4U3RhY2ssIHRvUmFkLCBWZWMyLCBWZWMzLCBWZWM0IH0gZnJvbSBcIndlYmdsLWJhc2ljLWxpYlwiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuL2xvZ2dlci5qc1wiO1xyXG5pbXBvcnQgeyByZWdpc3RlckNhbWVyYXNEcm9wZG93biwgcmVnaXN0ZXJTa3lib3hEcm9wZG93biwgcmVnaXN0ZXJMaWdodHNPbk9mZkhhbmRsZXIsIHJlZ2lzdGVyTmlnaHRNb2RlIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgb2JqR3JvdXBzLCBza3lib3hlc0dyb3VwLCBncm91bmRHcm91cCB9IGZyb20gXCIuL29ianMvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9vYmpzL3BvaW50LmpzXCI7XHJcbmltcG9ydCB7IGtleWJvYXJkIH0gZnJvbSBcIi4va2V5Ym9hcmQuanNcIjtcclxuaW1wb3J0IHsgT3J0aG9nb25hbCB9IGZyb20gXCIuL21hdDRleHRlbnNpb24uanNcIjtcclxuaW1wb3J0IHsgRGVidWdUZXh0dXJlIH0gZnJvbSBcIi4vZGVidWdTaGFkZXIuanNcIjtcclxuXHJcbmNvbnN0IGZwc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcHMtY291bnRlcicpO1xyXG5cclxuXHJcbmNvbnN0IHBvaW50TGlnaHRPZmYgPSB7XHJcbiAgICBuYW1lOiBcIlBvaW50TGlnaHRPZmZcIixcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogKCkgPT4gbmV3IFZlYzMoMCwgMCwgMCwgMCksXHJcbiAgICBjb2xvcjogbmV3IFZlYzMoMSwgMSwgMSksXHJcbiAgICBsaW5lYXI6IDAuMDksXHJcbiAgICBxdWFkcmF0aWM6IDAuMDMyLFxyXG4gICAgYW1iaWVudDogMCxcclxuICAgIGRpZmZ1c2U6IDAsXHJcbiAgICBzcGVjdWxhcjogMCxcclxufVxyXG5jb25zdCBzcG90TGlnaHRPZmYgPSB7XHJcbiAgICBuYW1lOiBcIlNwb3RMaWdodE9mZlwiLFxyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAoKSA9PiBuZXcgVmVjMygwLCAwLCAwKSxcclxuICAgIGRpcmVjdGlvbjogKCkgPT4gbmV3IFZlYzMoMCwgMSwgMCksXHJcbiAgICBjb2xvcjogbmV3IFZlYzMoMSwgMSwgMSksXHJcbiAgICBjdXRPZmY6IHRvUmFkKDEyKSxcclxuICAgIG91dGVyQ3V0T2ZmOiB0b1JhZCgxNSksXHJcbiAgICBsaW5lYXI6IDAuMDksXHJcbiAgICBxdWFkcmF0aWM6IDAuMDMyLFxyXG4gICAgYW1iaWVudDogMCxcclxuICAgIGRpZmZ1c2U6IDAsXHJcbiAgICBzcGVjdWxhcjogMCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIHN0YWNrID0gbmV3IE1hdHJpeFN0YWNrKCk7XHJcbiAgICBjYW1lcmFzID0ge1xyXG4gICAgICAgIHZhbHVlczogW3tcclxuICAgICAgICAgICAgLy8gbmFtZTogXCJTdGF0aW9uYXJ5XCIsXHJcbiAgICAgICAgICAgIC8vIG1hdHJpeDogKCkgPT4gTWF0NC5Mb29rQXQobmV3IFZlYzMoMCwgMywgLTMpLCBuZXcgVmVjMygwLCAwLCAwKSwgbmV3IFZlYzMoMCwgMSwgMCkpLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlN0YXRpb25hcnlcIixcclxuICAgICAgICAgICAgbWF0cml4OiAoKSA9PiBNYXQ0Lkxvb2tBdChuZXcgVmVjMyg0MCwgMTQsIDUwKSwgbmV3IFZlYzMoMCwgMCwgMCksIG5ldyBWZWMzKDAsIDEsIDApKSxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU2lkZVwiLFxyXG4gICAgICAgICAgICBtYXRyaXg6ICgpID0+IE1hdDQuTG9va0F0KG5ldyBWZWMzKC0zMCwgMSwgMCksIG5ldyBWZWMzKDAsIDAsIDApLCBuZXcgVmVjMygwLCAxLCAwKSksXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgYWN0aXZlSW5kZXg6IDAsXHJcbiAgICB9XHJcbiAgICBsaWdodHMgPSB7XHJcbiAgICAgICAgZGlyZWN0aW9uYWw6IHtcclxuICAgICAgICAgICAgdmFsdWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJEYXlcIixcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbmV3IFZlYzMoMSwgLTEuNSwgMSkubm9ybWFsaXplKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFZlYzMoMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICBhbWJpZW50OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlOiAwLjgsXHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMC4xLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlN1bnNldFwiLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBuZXcgVmVjMygxLCAtMC41LCAxKS5ub3JtYWxpemUoKSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVmVjMygxLCAwLjgsIDAuOCksXHJcbiAgICAgICAgICAgICAgICBhbWJpZW50OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlOiAwLjgsXHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMC4xLFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5pZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG5ldyBWZWMzKDEsIC0xLCAxKS5ub3JtYWxpemUoKSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVmVjMygxLCAxLCAxKSxcclxuICAgICAgICAgICAgICAgIGFtYmllbnQ6IDAuMDA1LFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogMC4wMDUsXHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMC4wMDUsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTm8gTGlnaHRcIixcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbmV3IFZlYzMoMSwgLTEsIDEpLm5vcm1hbGl6ZSgpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBWZWMzKDEsIDEsIDEpLFxyXG4gICAgICAgICAgICAgICAgYW1iaWVudDogMCxcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IDAsXHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMCxcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9pbnRMaWdodDoge1xyXG4gICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgIHBvaW50TGlnaHRPZmYsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcG90TGlnaHQ6IHtcclxuICAgICAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBza3lib3hlcyA9IHNreWJveGVzR3JvdXA7XHJcblxyXG4gICAgZ2xWaWV3cG9ydCA9IHtcclxuICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICBoZWlnaHQ6IDU3NlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnbCkge1xyXG4gICAgICAgIC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqL1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICB0aGlzLmRyYXdQb2ludCA9IG5ldyBQb2ludCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1BvaW50LnNldHVwKGdsKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlciA9IHtcclxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLmdsLmNyZWF0ZUZyYW1lYnVmZmVyKCksXHJcbiAgICAgICAgICAgIGRlcHRoVGV4dHVyZTogdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCksXHJcbiAgICAgICAgICAgIHVudXNlZENvbG9yVGV4dHVyZTogdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCksXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwOTYsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuZGVwdGhUZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLkRFUFRIX0NPTVBPTkVOVCwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci53aWR0aCwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5oZWlnaHQsIDAsIHRoaXMuZ2wuREVQVEhfQ09NUE9ORU5ULCB0aGlzLmdsLlVOU0lHTkVEX0lOVCwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01JTl9GSUxURVIsIHRoaXMuZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX01BR19GSUxURVIsIHRoaXMuZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfUywgdGhpcy5nbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLmdsLkNMQU1QX1RPX0VER0UpO1xyXG5cclxuICAgICAgICAvLyBmb3Igd2ViZ2wxIGNvbXBhdGliaWxpdHkgcmVhc29uLCBhIGNvbG9yIHRleHR1cmUgbXVzdCBhbHNvIGJlIGF0dGFjaGVkIHRvIHRoZSBmcmFtZWJ1ZmZlclxyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLnVudXNlZENvbG9yVGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLndpZHRoLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmhlaWdodCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xyXG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLmdsLk5FQVJFU1QpO1xyXG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMuZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdGhpcy5nbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgICAgLy8gYXR0YWNoIGl0IHRvIHRoZSBmcmFtZWJ1ZmZlclxyXG4gICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuYnVmZmVyKTtcclxuICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuZ2wuREVQVEhfQVRUQUNITUVOVCwgdGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmRlcHRoVGV4dHVyZSwgMCk7XHJcbiAgICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmUyRCh0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLmdsLkNPTE9SX0FUVEFDSE1FTlQwLCB0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuc2hhZG93RnJhbWVCdWZmZXIudW51c2VkQ29sb3JUZXh0dXJlLCAwKTtcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRpbWVzID0gW107XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqIG9mIG9iakdyb3Vwcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIG9iai5lbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwpXHJcbiAgICAgICAgICAgICAgICBlbC5zZXR1cCh0aGlzLmdsKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNhbWVyYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYXMudmFsdWVzLnB1c2goLi4uZWwuY2FtZXJhcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubGlnaHRzPy5kaXJlY3Rpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlnaHRzLmRpcmVjdGlvbmFsLnZhbHVlcy5wdXNoKC4uLmVsLmxpZ2h0cy5kaXJlY3Rpb25hbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubGlnaHRzPy5wb2ludExpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saWdodHMucG9pbnRMaWdodC52YWx1ZXMucHVzaCguLi5lbC5saWdodHMucG9pbnRMaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubGlnaHRzPy5zcG90TGlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0cy5zcG90TGlnaHQudmFsdWVzLnB1c2goLi4uZWwubGlnaHRzLnNwb3RMaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBncm91bmQgb2YgZ3JvdW5kR3JvdXAuZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgZ3JvdW5kLnNldHVwKHRoaXMuZ2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHNreWJveCBvZiB0aGlzLnNreWJveGVzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHNreWJveC5zZXR1cCh0aGlzLmdsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZ2lzdGVyQ2FtZXJhc0Ryb3Bkb3duKHRoaXMuY2FtZXJhcyk7XHJcbiAgICAgICAgcmVnaXN0ZXJTa3lib3hEcm9wZG93bih0aGlzLnNreWJveGVzKTtcclxuICAgICAgICByZWdpc3RlckxpZ2h0c09uT2ZmSGFuZGxlcih0aGlzLmxpZ2h0cyk7XHJcbiAgICAgICAgcmVnaXN0ZXJOaWdodE1vZGUodGhpcylcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkxvb3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodGltZXMubGVuZ3RoID4gMCAmJiB0aW1lc1swXSA8PSBub3cgLSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpbWVzLnB1c2gobm93KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IHRpbWVzW3RpbWVzLmxlbmd0aCAtIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgb2JqcyBhbmQgZHJhd1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR0ID0gbm93IC0gbGFzdDtcclxuICAgICAgICAgICAgICAgICAgICBvYmpHcm91cHMuZm9yRWFjaChvYmpzID0+IG9ianMuZWxlbWVudHMuZm9yRWFjaChvYmogPT4gb2JqLnVwZGF0ZShkdCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiNkcmF3KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbkxvb3ApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpbWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW5Mb29wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWFpbkxvb3ApO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZwc0Rpdi5pbm5lclRleHQgPSBgRlBTOiAke3RpbWVzLmxlbmd0aH1gO1xyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgI2RyYXcoKSB7XHJcbiAgICAgICAgLy8gc2hhZG93IG1hcHBpbmdcclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLndpZHRoLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5nbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XHJcbiAgICAgICAgdGhpcy5nbC5jdWxsRmFjZSh0aGlzLmdsLkZST05UKTtcclxuXHJcbiAgICAgICAgLy8gY29uZmlnIHRvIHZpZXcgYWxsIG1hcCBmcm9tIGRpcmVjdGlvbmFsIGxpZ2h0IGluIGFsbCBjb25kaXRpb25zIChkYXksIHN1bnNldCBhbmQgbmlnaHQpXHJcbiAgICAgICAgY29uc3Qgb3J0aG9nb25hbCA9IE9ydGhvZ29uYWwoLTU4LCA1OCwgLTU4LCA1OCwgMC4xLCAxMDApXHJcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKG9ydGhvZ29uYWwpO1xyXG5cclxuICAgICAgICAvLyBkaXJlY3Rpb25hbCBsaWdodCB2aWV3IG1hdHJpeFxyXG4gICAgICAgIGNvbnN0IGxpZ2h0UG9zaXRpb24gPSB0aGlzLmxpZ2h0cy5kaXJlY3Rpb25hbC52YWx1ZXNbdGhpcy5saWdodHMuZGlyZWN0aW9uYWwuYWN0aXZlSW5kZXhdLmRpcmVjdGlvbi5jbG9uZSgpLm11bCgtNTApO1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0VmlldyA9IE1hdDQuTG9va0F0KGxpZ2h0UG9zaXRpb24sIG5ldyBWZWMzKDAsIDAsIDApLCBuZXcgVmVjMygwLCAxLCAwKSk7XHJcbiAgICAgICAgY29uc3QgbGlnaHRWaWV3UHJvaiA9IHRoaXMuc3RhY2sucHVzaChsaWdodFZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgICAgICAvLyBhY3R1YWwgZHJhdyBzaGFkb3cgbWFwXHJcbiAgICAgICAgZm9yIChjb25zdCBvYmogb2Ygb2JqR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG9iai5zZXR1cFNoYWRvd0RyYXcodGhpcy5nbCk7XHJcbiAgICAgICAgICAgIG9iai5lbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLnNoYWRvd0RyYXcodGhpcy5nbCwgdGhpcy5zdGFjaykpO1xyXG4gICAgICAgICAgICBvYmoudGVhcmRvd25EcmF3KHRoaXMuZ2wpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XHJcbiAgICAgICAgdGhpcy5nbC5jdWxsRmFjZSh0aGlzLmdsLkZST05UKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZ3JvdW5kR3JvdXAuc2V0dXBTaGFkb3dEcmF3KHRoaXMuZ2wpO1xyXG4gICAgICAgIGdyb3VuZEdyb3VwLmVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuc2hhZG93RHJhdyh0aGlzLmdsLCB0aGlzLnN0YWNrKSk7XHJcbiAgICAgICAgZ3JvdW5kR3JvdXAudGVhcmRvd25EcmF3KHRoaXMuZ2wpO1xyXG5cclxuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICAgICAgLy8gcmUtYmluZCB0aGUgZGVmYXVsdCBmcmFtZWJ1ZmZlciBhbmQgY2xlYXIgc2NyZWVuXHJcbiAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsVmlld3BvcnQud2lkdGgsIHRoaXMuZ2xWaWV3cG9ydC5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuQ1VMTF9GQUNFKTtcclxuICAgICAgICB0aGlzLmdsLmN1bGxGYWNlKHRoaXMuZ2wuQkFDSyk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFuIHN0YWNrXHJcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBkZWJ1Z1RleHR1cmUgPSBuZXcgRGVidWdUZXh0dXJlKCk7XHJcbiAgICAgICAgLy8gZGVidWdUZXh0dXJlLnNldHVwKHRoaXMuZ2wpO1xyXG4gICAgICAgIC8vIGF3YWl0IERlYnVnVGV4dHVyZS5zZXR1cERyYXcodGhpcy5nbCk7XHJcbiAgICAgICAgLy8gZGVidWdUZXh0dXJlLmRyYXcodGhpcy5nbCwgdGhpcy5zaGFkb3dGcmFtZUJ1ZmZlci5kZXB0aFRleHR1cmUpO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHBlcnNwZWN0aXZlIG1hdHJpeFxyXG4gICAgICAgIGNvbnN0IHBlcnNwZWN0aXZlID0gTWF0NC5QZXJzcGVjdGl2ZSh0b1JhZCg0NSksIDE2IC8gOSwgMC4xLCAxMDAwKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnB1c2gocGVyc3BlY3RpdmUpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgY2FtZXJhIG1hdHJpeFxyXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhcy52YWx1ZXNbdGhpcy5jYW1lcmFzLmFjdGl2ZUluZGV4XS5tYXRyaXgoKTtcclxuICAgICAgICBjb25zdCBjYW1lcmFXaXRob3V0VHJhbnNsYXRpb24gPSBNYXQ0LkZyb21BcnJheVJNKFtcclxuICAgICAgICAgICAgLi4uY2FtZXJhLnJvdygwKS50b1ZlYzMoKS50b1ZlYzQoMCkudmFsdWVzLFxyXG4gICAgICAgICAgICAuLi5jYW1lcmEucm93KDEpLnRvVmVjMygpLnRvVmVjNCgwKS52YWx1ZXMsXHJcbiAgICAgICAgICAgIC4uLmNhbWVyYS5yb3coMikudG9WZWMzKCkudG9WZWM0KDApLnZhbHVlcyxcclxuICAgICAgICAgICAgLi4ubmV3IFZlYzQoMCwgMCwgMCwgMSkudmFsdWVzLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHNreWJveFxyXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChjYW1lcmFXaXRob3V0VHJhbnNsYXRpb24pO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2t5Ym94ZXMuc2V0dXBEcmF3KHRoaXMuZ2wpO1xyXG4gICAgICAgIHRoaXMuc2t5Ym94ZXMuZWxlbWVudHNbdGhpcy5za3lib3hlcy5hY3RpdmVJbmRleF0uZHJhdyh0aGlzLmdsLCB0aGlzLnN0YWNrKTtcclxuICAgICAgICB0aGlzLnNreWJveGVzLnRlYXJkb3duRHJhdyh0aGlzLmdsKTtcclxuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IG9iamVjdHNcclxuICAgICAgICB0aGlzLnN0YWNrLnB1c2goY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgICAgICBjb25zdCBhY3R1YWxMaWdodHMgPSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbmFsTGlnaHQ6IHRoaXMubGlnaHRzLmRpcmVjdGlvbmFsLnZhbHVlc1t0aGlzLmxpZ2h0cy5kaXJlY3Rpb25hbC5hY3RpdmVJbmRleF0sXHJcbiAgICAgICAgICAgIHBvaW50TGlnaHQ6IHRoaXMubGlnaHRzLnBvaW50TGlnaHQudmFsdWVzLm1hcChsID0+IGwuZW5hYmxlZCA/IGwgOiBwb2ludExpZ2h0T2ZmKS5tYXAobCA9PiAoeyAuLi5sLCBwb3NpdGlvbjogbC5wb3NpdGlvbigpIH0pKSxcclxuICAgICAgICAgICAgc3BvdExpZ2h0OiB0aGlzLmxpZ2h0cy5zcG90TGlnaHQudmFsdWVzLm1hcChsID0+IGwuZW5hYmxlZCA/IGwgOiBzcG90TGlnaHRPZmYpLm1hcChsID0+ICh7IC4uLmwsIHBvc2l0aW9uOiBsLnBvc2l0aW9uKCksIGRpcmVjdGlvbjogbC5kaXJlY3Rpb24oKSB9KSksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaGFkb3dNYXAgPSB7XHJcbiAgICAgICAgICAgIHRleHR1cmU6IHRoaXMuc2hhZG93RnJhbWVCdWZmZXIuZGVwdGhUZXh0dXJlLFxyXG4gICAgICAgICAgICBzaXplOiBuZXcgVmVjMih0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLndpZHRoLCB0aGlzLnNoYWRvd0ZyYW1lQnVmZmVyLmhlaWdodCksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG9iaiBvZiBvYmpHcm91cHMpIHtcclxuICAgICAgICAgICAgYXdhaXQgb2JqLnNldHVwRHJhdyh0aGlzLmdsLCBhY3R1YWxMaWdodHMsIGxpZ2h0Vmlld1Byb2osIHNoYWRvd01hcCk7XHJcbiAgICAgICAgICAgIG9iai5lbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmRyYXcodGhpcy5nbCwgdGhpcy5zdGFjaywgY2FtZXJhKSk7XHJcbiAgICAgICAgICAgIG9iai50ZWFyZG93bkRyYXcodGhpcy5nbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBncm91bmRHcm91cC5zZXR1cERyYXcodGhpcy5nbCwgYWN0dWFsTGlnaHRzLCBsaWdodFZpZXdQcm9qLCBzaGFkb3dNYXApO1xyXG4gICAgICAgIGdyb3VuZEdyb3VwLmVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuZHJhdyh0aGlzLmdsLCB0aGlzLnN0YWNrLCBjYW1lcmEpKTtcclxuICAgICAgICBncm91bmRHcm91cC50ZWFyZG93bkRyYXcodGhpcy5nbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgICAgICBpZiAoa2V5Ym9hcmQuaXNQcmVzc2VkKCdwJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gdGhpcy5saWdodHMucG9pbnRMaWdodC52YWx1ZXMubWFwKGwgPT4gbC5wb3NpdGlvbigpLnZhbHVlcylcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy5saWdodHMuc3BvdExpZ2h0LnZhbHVlcy5tYXAobCA9PiBsLnBvc2l0aW9uKCkudmFsdWVzKSlcclxuICAgICAgICAgICAgICAgIC5mbGF0TWFwKHAgPT4gWy4uLnBdKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFBvaW50LnNldHVwRHJhdyh0aGlzLmdsKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UG9pbnQuZHJhdyh0aGlzLmdsLCB0aGlzLnN0YWNrLCBwb2ludHMpO1xyXG4gICAgICAgICAgICBQb2ludC50ZWFyZG93bkRyYXcodGhpcy5nbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlib2FyZC5pc1ByZXNzZWQoJ28nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludHMgPSB0aGlzLmNhbWVyYXMudmFsdWVzLm1hcChjID0+IGMubWF0cml4KCkuY2xvbmUoKS5pbnZlcnNlKCkuY29sKDMpLnRvVmVjMygpLnZhbHVlcylcclxuICAgICAgICAgICAgICAgIC5mbGF0TWFwKHAgPT4gWy4uLnBdKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFBvaW50LnNldHVwRHJhdyh0aGlzLmdsKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UG9pbnQuZHJhdyh0aGlzLmdsLCB0aGlzLnN0YWNrLCBwb2ludHMpO1xyXG4gICAgICAgICAgICBQb2ludC50ZWFyZG93bkRyYXcodGhpcy5nbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwb3AgY2FtZXJhIGFuZCBwZXJzcGVjdGl2ZVxyXG4gICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hdDQsIFZlYzMsIHRvUmFkIH0gZnJvbSBcIndlYmdsLWJhc2ljLWxpYlwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuL2RyYXdhYmxlLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRPYmosIGxvYWRUZXh0dXJlIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9sb2dnZXIuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1RleHR1cmUgZXh0ZW5kcyBEcmF3YWJsZSB7XHJcbiAgICBkcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCwgdGV4dHVyZSkge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0oRGVidWdUZXh0dXJlLnByb2dyYW1TaGFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBzcXVhcmUgPSBbWy0xLCAtMSwgMF0sIFstMSwgMSwgMF0sIFsxLCAtMSwgMF0sIFstMSwgMSwgMF0sIFsxLCAtMSwgMF0sIFsxLCAxLCAwXV0uZmxhdCgpO1xyXG5cclxuICAgICAgICAvLyBwb3NpdGlvblxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcnMucG9zaXRpb24udmFsdWUpO1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHNxdWFyZSksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIGJpbmQgdGV4dHVyZVxyXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xyXG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0xaShEZWJ1Z1RleHR1cmUudW5pZm9ybUxvY2F0aW9ucy51VGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAgIC8vIGRyYXdcclxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsW0RlYnVnVGV4dHVyZS5nbE1vZGVdLCAwLCBzcXVhcmUubGVuZ3RoIC8gMyk7XHJcblxyXG4gICAgICAgIC8vIGRpc2FibGUgdmVydGV4QXR0cmliQXJyYXlcclxuICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XHJcblxyXG4gICAgICAgIC8vIHVuYmluZCBidWZmZXJcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdsTW9kZSA9IFwiVFJJQU5HTEVTXCI7XHJcbiAgICBzdGF0aWMgdmVydGV4U2hhZGVyU291cmNlID0gYFxyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICBcclxuICAgIC8vIHBvc2l0aW9uXHJcbiAgICBhdHRyaWJ1dGUgdmVjMyBhUG9zaXRpb247XHJcbiAgICBcclxuICAgIC8vIHRleHR1cmVcclxuICAgIHZhcnlpbmcgdmVjMiB2VGV4Q29vcmQ7XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbih2b2lkKSB7XHJcbiAgICAgICAgdlRleENvb3JkID0gYVBvc2l0aW9uLnh5ICogMC41ICsgMC41O1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhUG9zaXRpb24sIDEuMCk7XHJcbiAgICB9XHJcbiAgICBgXHJcbiAgICBzdGF0aWMgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdlRleENvb3JkO1xyXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbih2b2lkKSB7XHJcbiAgICAgICAgZmxvYXQgZGVwdGggPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZUZXhDb29yZCkucjtcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZlYzMoZGVwdGgpLCAxLjApO1xyXG4gICAgfVxyXG4gICAgYFxyXG5cclxuICAgIHN0YXRpYyB1bmlmb3JtTG9jYXRpb25zID0ge31cclxuICAgIHN0YXRpYyBhc3luYyBzZXR1cERyYXcoLyoqIEB0eXBlIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9ICovIGdsKSB7XHJcbiAgICAgICAgYXdhaXQgRHJhd2FibGUuX3NldHVwRHJhdy5iaW5kKERlYnVnVGV4dHVyZSkoZ2wsIG51bGwsXHJcbiAgICAgICAgICAgIGFzeW5jICgvKiogQHR5cGUge1dlYkdMUHJvZ3JhbX0gKi8gcHJvZ3JhbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsIFwiYVBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyAoLyoqIEB0eXBlIHtXZWJHTFByb2dyYW19ICovIHByb2dyYW0pID0+IHtcclxuICAgICAgICAgICAgICAgIERlYnVnVGV4dHVyZS51bmlmb3JtTG9jYXRpb25zLnVUZXh0dXJlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidVRleHR1cmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZWFyZG93bkRyYXcoLyoqIEB0eXBlIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9ICovIGdsKSB7XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShudWxsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hdDQgfSBmcm9tIFwid2ViZ2wtYmFzaWMtbGliXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4vbG9nZ2VyLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjaGVja0dMKHRhZywgbG9nKSB7XHJcbiAgICBpZiAobG9nICE9PSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGAke3RhZ30gJHtsb2d9YC5zcGxpdChcIlxcblwiKS5qb2luKFwiXCIpKTtcclxuICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2FibGUge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSwgbWF0ID0gTWF0NC5JZGVudGl0eSgpKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm1hdCA9IG1hdDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXR1cCgvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ2wuY3JlYXRlQnVmZmVyKCksXHJcbiAgICAgICAgICAgICAgICBkaXJ0eTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4Q29vcmQ6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBnbC5jcmVhdGVCdWZmZXIoKSxcclxuICAgICAgICAgICAgICAgIGRpcnR5OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBnbC5jcmVhdGVCdWZmZXIoKSxcclxuICAgICAgICAgICAgICAgIGRpcnR5OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogZGVsZXRlIHRoZXNlIG9uZXNcclxuICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBnbC5jcmVhdGVCdWZmZXIoKSxcclxuICAgICAgICAgICAgICAgIGRpcnR5OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbGVtZW50OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ2wuY3JlYXRlQnVmZmVyKCksXHJcbiAgICAgICAgICAgICAgICBkaXJ0eTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7fVxyXG4gICAgYnVmZmVycyA9IHt9XHJcbiAgICBtYXQgPSBNYXQ0LklkZW50aXR5KClcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgX3NldHVwRHJhdygvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsIGJlZm9yZSA9IG51bGwsIHByZUxpbmsgPSBhc3luYyAoLyoqIEB0eXBlIHtXZWJHTFByb2dyYW19ICovIHByb2dyYW0pID0+IHsgfSwgcG9zdCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbVNoYWRlcikge1xyXG4gICAgICAgICAgICBpZiAoYmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBiZWZvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuZCBjb21waWxlIHZlcnRleCBzaGFkZXJcclxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XHJcbiAgICAgICAgICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLnZlcnRleFNoYWRlciwgdGhpcy52ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgICAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMudmVydGV4U2hhZGVyKTtcclxuICAgICAgICAgICAgY2hlY2tHTChcIlZTOlwiLCBnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMudmVydGV4U2hhZGVyKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW5kIGNvbXBpbGUgZnJhZ21lbnQgc2hhZGVyXHJcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcclxuICAgICAgICAgICAgZ2wuc2hhZGVyU291cmNlKHRoaXMuZnJhZ21lbnRTaGFkZXIsIHRoaXMuZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgICAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgICAgICBjaGVja0dMKFwiRlM6IFwiLCBnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMuZnJhZ21lbnRTaGFkZXIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbmQgY29tcGlsZSBwcm9ncmFtIGFuZCBsaW5rIHNoYWRlcnNcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtU2hhZGVyID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtU2hhZGVyLCB0aGlzLnZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgICAgIGdsLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW1TaGFkZXIsIHRoaXMuZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgcHJlTGluayh0aGlzLnByb2dyYW1TaGFkZXIpO1xyXG5cclxuICAgICAgICAgICAgZ2wubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtU2hhZGVyKTtcclxuICAgICAgICAgICAgY2hlY2tHTChcIlBTOiBcIiwgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcm9ncmFtU2hhZGVyKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zdCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcG9zdCh0aGlzLnByb2dyYW1TaGFkZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7IH1cclxuICAgIHVwZGF0ZShkdCkgeyB9XHJcbn0iLCJpbXBvcnQgQXBwIGZyb20gXCIuL2FwcC5qc1wiO1xyXG5cclxuY29uc3QgZ2V0V2ViR2xDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcbiAgICBpZiAoIWdsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wgbm90IGF2YWlsYWJsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnbC5kZXB0aF9leHQgPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlcHRoX3RleHR1cmUnKTtcclxuICAgIGlmICghZ2wuZGVwdGhfZXh0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibmVlZCBXRUJHTF9kZXB0aF90ZXh0dXJlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdsLmZyYWdfZGVwdGhfZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfZnJhZ19kZXB0aCcpO1xyXG5cclxuICAgIC8vIGlmICghZ2wuZnJhZ19kZXB0aF9leHQpIHtcclxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJuZWVkIEVYVF9mcmFnX2RlcHRoXCIpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiBnbDtcclxufVxyXG5cclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi9sb2dnZXIuanNcIjtcclxubG9nZ2VyLmRlYnVnID0gdHJ1ZTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGdsID0gZ2V0V2ViR2xDb250ZXh0KClcclxuICAgICAgICBjb25zdCBhcHAgPSBuZXcgQXBwKGdsKVxyXG5cclxuICAgICAgICByZWdpc3RlckNsaWNrSGFuZGxlcnMoYXBwKTtcclxuICAgICAgICByZWdpc3RlcldpbmRvd1Jlc2l6ZUhhbmRsZXIoYXBwKTtcclxuXHJcbiAgICAgICAgYXBwLnJ1bigpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvcilcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckNsaWNrSGFuZGxlcnMoYXBwKSB7XHJcbiAgICBjb25zdCBydW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bi1idXR0b25cIik7XHJcbiAgICBydW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhcHAuaXNSdW5uaW5nID0gIWFwcC5pc1J1bm5pbmdcclxuICAgICAgICBydW5CdXR0b24uY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gYXBwLmlzUnVubmluZyA/IFwicGF1c2VcIiA6IFwicGxheV9hcnJvd1wiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyV2luZG93UmVzaXplSGFuZGxlcihhcHApIHtcclxuICAgIGxldCBpc0Z1bGxzY3JlZW4gPSBmYWxzZTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3QgaW5pdGlhbFdpZHRoID0gMTAyNDtcclxuICAgIGNvbnN0IGluaXRpYWxIZWlnaHQgPSA1NzY7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKG1heFdpZHRoLCBjdXJXaWR0aCwgbWF4SGVpZ2h0LCBjdXJIZWlnaHQpIHtcclxuICAgICAgICBpZiAobWF4V2lkdGggPT0gY3VyV2lkdGggJiYgbWF4SGVpZ2h0ID09IGN1ckhlaWdodCkge1xyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LnRvZ2dsZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICBhcHAuZ2xWaWV3cG9ydC53aWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgICAgICBhcHAuZ2xWaWV3cG9ydC5oZWlnaHQgPSBtYXhIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QudG9nZ2xlKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW5pdGlhbFdpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcclxuICAgICAgICAgICAgYXBwLmdsVmlld3BvcnQud2lkdGggPSBpbml0aWFsV2lkdGg7XHJcbiAgICAgICAgICAgIGFwcC5nbFZpZXdwb3J0LmhlaWdodCA9IGluaXRpYWxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXRpYWwgcmVzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSBpbml0aWFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW5pdGlhbEhlaWdodDtcclxuICAgIGFwcC5nbC52aWV3cG9ydCgwLCAwLCBpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpO1xyXG4gICAgcmVzaXplQ2FudmFzKFxyXG4gICAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgd2luZG93LnNjcmVlbi5oZWlnaHQsXHJcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBhZGQgbGlzdGVuZXJcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGN1ckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBjb25zdCBjdXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICByZXNpemVDYW52YXMobWF4V2lkdGgsIGN1cldpZHRoLCBtYXhIZWlnaHQsIGN1ckhlaWdodCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDYW1lcmFzRHJvcGRvd24oY2FtZXJhcykge1xyXG4gICAgY29uc3QgY2FtZXJhc0Ryb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW1lcmFzLWRyb3Bkb3duXCIpO1xyXG4gICAgY2FtZXJhcy52YWx1ZXMuZm9yRWFjaCgoY2FtZXJhLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gY2FtZXJhLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChjYW1lcmEubmFtZSA9PT0gXCJDaGFzaW5nXCIpIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FtZXJhcy5hY3RpdmVJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW1lcmFzRHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhbWVyYXNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICBjYW1lcmFzLmFjdGl2ZUluZGV4ID0gY2FtZXJhc0Ryb3Bkb3duLnNlbGVjdGVkSW5kZXg7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJjXCIpIHtcclxuICAgICAgICAgICAgY2FtZXJhc0Ryb3Bkb3duLnNlbGVjdGVkSW5kZXggPSAoY2FtZXJhcy5hY3RpdmVJbmRleCArIDEpICUgY2FtZXJhcy52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBjYW1lcmFzRHJvcGRvd24uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNreWJveERyb3Bkb3duKHNreWJveEdyb3VwKSB7XHJcbiAgICBjb25zdCBza3lib3hEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2t5Ym94LWRyb3Bkb3duXCIpO1xyXG4gICAgc2t5Ym94R3JvdXAuZWxlbWVudHMuZm9yRWFjaCgoc2t5Ym94LCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gc2t5Ym94Lm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChza3lib3gubmFtZSA9PT0gXCJkYXlcIikge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBza3lib3hHcm91cC5hY3RpdmVJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBza3lib3hEcm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2t5Ym94RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2t5Ym94R3JvdXAuYWN0aXZlSW5kZXggPSBza3lib3hEcm9wZG93bi5zZWxlY3RlZEluZGV4O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwidlwiKSB7XHJcbiAgICAgICAgICAgIHNreWJveERyb3Bkb3duLnNlbGVjdGVkSW5kZXggPSAoc2t5Ym94R3JvdXAuYWN0aXZlSW5kZXggKyAxKSAlIHNreWJveEdyb3VwLmVsZW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgc2t5Ym94RHJvcGRvd24uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckxpZ2h0c09uT2ZmSGFuZGxlcihsaWdodHMpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbmFsRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpcmVjdGlvbmFsLWRyb3Bkb3duXCIpO1xyXG4gICAgY29uc3QgcG9pbnREcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9pbnQtZHJvcGRvd25cIik7XHJcbiAgICBjb25zdCBzcG90RHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwb3QtZHJvcGRvd25cIik7XHJcblxyXG4gICAgLy8gZGlyZWN0aW9uYWwgbGlnaHRzXHJcbiAgICBsaWdodHMuZGlyZWN0aW9uYWwudmFsdWVzLmZvckVhY2goKGwsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBsLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGlnaHRzLmRpcmVjdGlvbmFsLmFjdGl2ZUluZGV4ID0gaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbmFsRHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpcmVjdGlvbmFsRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGlnaHRzLmRpcmVjdGlvbmFsLmFjdGl2ZUluZGV4ID0gZGlyZWN0aW9uYWxEcm9wZG93bi5zZWxlY3RlZEluZGV4O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcG9pbnQgbGlnaHRzXHJcbiAgICBwb2ludERyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxpZ2h0cy5wb2ludExpZ2h0LnZhbHVlcy5mb3JFYWNoKGwgPT4ge1xyXG4gICAgICAgICAgICBsLmVuYWJsZWQgPSBwb2ludERyb3Bkb3duLnNlbGVjdGVkSW5kZXggPT0gMDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNwb3QgbGlnaHRzXHJcbiAgICBzcG90RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGlnaHRzLnNwb3RMaWdodC52YWx1ZXMuZm9yRWFjaChsID0+IHtcclxuICAgICAgICAgICAgbC5lbmFibGVkID0gc3BvdERyb3Bkb3duLnNlbGVjdGVkSW5kZXggPT0gMDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBhZGQga2V5IGxpc3RlbmVycyBmb3IgYWxsIGxpZ2h0c1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiYlwiKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbmFsRHJvcGRvd24uc2VsZWN0ZWRJbmRleCA9IChsaWdodHMuZGlyZWN0aW9uYWwuYWN0aXZlSW5kZXggKyAxKSAlIGxpZ2h0cy5kaXJlY3Rpb25hbC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBkaXJlY3Rpb25hbERyb3Bkb3duLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIm5cIikge1xyXG4gICAgICAgICAgICBwb2ludERyb3Bkb3duLnNlbGVjdGVkSW5kZXggPSAocG9pbnREcm9wZG93bi5zZWxlY3RlZEluZGV4ICsgMSkgJSAyO1xyXG4gICAgICAgICAgICBwb2ludERyb3Bkb3duLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIm1cIikge1xyXG4gICAgICAgICAgICBzcG90RHJvcGRvd24uc2VsZWN0ZWRJbmRleCA9IChzcG90RHJvcGRvd24uc2VsZWN0ZWRJbmRleCArIDEpICUgMjtcclxuICAgICAgICAgICAgc3BvdERyb3Bkb3duLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSBoZWFkbGlnaHRzXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcImhcIikge1xyXG4gICAgICAgICAgICBsaWdodHMuc3BvdExpZ2h0LnZhbHVlcy5maWx0ZXIobCA9PiBbXCJIZWFkbGlnaHRMZWZ0XCIsIFwiSGVhZExpZ2h0UmlnaHRcIl0uaW5jbHVkZXMobC5uYW1lKSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGwuZW5hYmxlZCA9ICFsLmVuYWJsZWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0b2dnbGUgY2FyIGxlZnQgZGlyZWN0aW9uYWwgbGlnaHRzXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcImtcIikge1xyXG4gICAgICAgICAgICBsaWdodHMuc3BvdExpZ2h0LnZhbHVlcy5maWx0ZXIobCA9PiBbXCJSZWFyRGlyZWN0aW9uYWxMZWZ0XCIsIFwiRnJvbnREaXJlY3Rpb25hbExlZnRcIl0uaW5jbHVkZXMobC5uYW1lKSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGwub24gPSAhbC5vblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRvZ2dsZSBjYXIgcmlnaHQgZGlyZWN0aW9uYWwgbGlnaHRzXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcImxcIikge1xyXG4gICAgICAgICAgICBsaWdodHMuc3BvdExpZ2h0LnZhbHVlcy5maWx0ZXIobCA9PiBbXCJSZWFyRGlyZWN0aW9uYWxSaWdodFwiLCBcIkZyb250RGlyZWN0aW9uYWxSaWdodFwiXS5pbmNsdWRlcyhsLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5vbiA9ICFsLm9uXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmlnaHRNb2RlKGFwcCkge1xyXG4gICAgbGV0IGlzTmlnaHQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG5pZ2h0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaWdodC1idXR0b25cIik7XHJcbiAgICBjb25zdCBza3lib3hEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2t5Ym94LWRyb3Bkb3duXCIpO1xyXG5cclxuICAgIG5pZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc05pZ2h0KSB7XHJcbiAgICAgICAgICAgIGlzTmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBhcHAubGlnaHRzLmRpcmVjdGlvbmFsLmFjdGl2ZUluZGV4ID0gYXBwLmxpZ2h0cy5kaXJlY3Rpb25hbC52YWx1ZXMuZmluZEluZGV4KGxpZ2h0ID0+IGxpZ2h0Lm5hbWUgPT09IFwiTmlnaHRcIik7XHJcbiAgICAgICAgICAgIGFwcC5saWdodHMuc3BvdExpZ2h0LnZhbHVlcy5maWx0ZXIobCA9PiBbXCJIZWFkbGlnaHRMZWZ0XCIsIFwiSGVhZExpZ2h0UmlnaHRcIl0uaW5jbHVkZXMobC5uYW1lKSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGwuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXBwLmxpZ2h0cy5wb2ludExpZ2h0LnZhbHVlcy5maWx0ZXIobCA9PiBbXCJMYW1wUG9zdFwiXS5pbmNsdWRlcyhsLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBza3lib3hEcm9wZG93bi5zZWxlY3RlZEluZGV4ID0gYXBwLnNreWJveGVzLmVsZW1lbnRzLmZpbmRJbmRleChzID0+IHMubmFtZSA9PT0gXCJOaWdodFwiKTtcclxuICAgICAgICAgICAgc2t5Ym94RHJvcGRvd24uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuICAgICAgICAgICAgbmlnaHRCdXR0b24uY2hpbGRyZW5bMF0uaW5uZXJIVE1MID0gXCJ3Yl9zdW5ueVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzTmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXBwLmxpZ2h0cy5kaXJlY3Rpb25hbC5hY3RpdmVJbmRleCA9IGFwcC5saWdodHMuZGlyZWN0aW9uYWwudmFsdWVzLmZpbmRJbmRleChsaWdodCA9PiBsaWdodC5uYW1lID09PSBcIkRheVwiKTtcclxuICAgICAgICAgICAgYXBwLmxpZ2h0cy5zcG90TGlnaHQudmFsdWVzLmZpbHRlcihsID0+IFtcIkhlYWRsaWdodExlZnRcIiwgXCJIZWFkTGlnaHRSaWdodFwiXS5pbmNsdWRlcyhsLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXBwLmxpZ2h0cy5wb2ludExpZ2h0LnZhbHVlcy5maWx0ZXIobCA9PiBbXCJMYW1wUG9zdFwiXS5pbmNsdWRlcyhsLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2t5Ym94RHJvcGRvd24uc2VsZWN0ZWRJbmRleCA9IGFwcC5za3lib3hlcy5lbGVtZW50cy5maW5kSW5kZXgocyA9PiBzLm5hbWUgPT09IFwiRGF5XCIpO1xyXG4gICAgICAgICAgICBza3lib3hEcm9wZG93bi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG4gICAgICAgICAgICBuaWdodEJ1dHRvbi5jaGlsZHJlblswXS5pbm5lckhUTUwgPSBcImJyaWdodG5lc3NfM1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcInhcIikge1xyXG4gICAgICAgICAgICBuaWdodEJ1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsaWNrXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImNvbnN0IGtleWJvYXJkID0ge1xyXG4gICAgaXNQcmVzc2VkKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpc1trZXldO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBrZXlib2FyZFtldmVudC5rZXldID0gdHJ1ZTtcclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgIGtleWJvYXJkW2V2ZW50LmtleV0gPSBmYWxzZTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBrZXlib2FyZCB9OyIsImxldCBsb2dzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dzXCIpO1xyXG5cclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIGRlYnVnID0gZmFsc2U7XHJcblxyXG4gICAgZChtc2csIGRlYnVnKSB7IHRoaXMuI2xvZyhgW0RFQlVHXTogJHttc2d9YCwgXCJibGFja1wiLCBkZWJ1ZyA/PyB0aGlzLmRlYnVnKSB9XHJcbiAgICBpKG1zZywgZGVidWcpIHsgdGhpcy4jbG9nKGBbSU5GT106ICR7bXNnfWAsIFwiYmx1ZVwiLCBkZWJ1ZyA/PyB0aGlzLmRlYnVnKSB9XHJcbiAgICB3KG1zZywgZGVidWcpIHsgdGhpcy4jbG9nKGBbV0FSTl06ICR7bXNnfWAsIFwib3JhbmdlXCIsIGRlYnVnID8/IHRoaXMuZGVidWcpIH1cclxuICAgIGUobXNnLCBkZWJ1ZykgeyB0aGlzLiNsb2coYFtFUlJPUl06ICR7bXNnfWAsIFwicmVkXCIsIGRlYnVnID8/IHRoaXMuZGVidWcpIH1cclxuICAgICNsb2cobWVzc2FnZSwgY29sb3IsIGRlYnVnID0gdGhpcy5kZWJ1Zykge1xyXG4gICAgICAgIGxldCBsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxvZy5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIGxvZy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2UsIG1vbm9zcGFjZVwiO1xyXG4gICAgICAgIGxvZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlKSk7XHJcblxyXG4gICAgICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICAgICAgICBuZXcgRXJyb3IoKS5zdGFjay5zcGxpdChcIlxcblwiKS5zbGljZSgzKS5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhY2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHN0YWNrVGV4dC5pbm5lclRleHQgPSBsaW5lO1xyXG4gICAgICAgICAgICAgICAgc3RhY2tUZXh0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIzMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBsb2cuYXBwZW5kQ2hpbGQoc3RhY2tUZXh0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxvZy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChsb2dzLmNoaWxkRWxlbWVudENvdW50ID4gNTApIHtcclxuICAgICAgICAgICAgbG9ncy5yZW1vdmVDaGlsZChsb2dzLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsb2dzLmFwcGVuZENoaWxkKGxvZyk7XHJcbiAgICAgICAgbG9ncy5zY3JvbGxUb3AgPSBsb2dzLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuICAgIGVycm9yKGVyciwgZGVidWcgPSB0aGlzLmRlYnVnKSB7XHJcbiAgICAgICAgbGV0IGxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbG9nLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICBsb2cuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlLCBtb25vc3BhY2VcIjtcclxuICAgICAgICBsb2cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFtFUlJPUl06ICR7ZXJyLnN0YWNrLnNwbGl0KFwiXFxuXCIpWzBdfWApKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGVidWcpIHtcclxuICAgICAgICAgICAgZXJyLnN0YWNrLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDEpLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgc3RhY2tUZXh0LmlubmVyVGV4dCA9IGxpbmU7XHJcbiAgICAgICAgICAgICAgICBzdGFja1RleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjMwcHhcIjtcclxuICAgICAgICAgICAgICAgIGxvZy5hcHBlbmRDaGlsZChzdGFja1RleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbG9nLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMTBweFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKGxvZ3MuY2hpbGRFbGVtZW50Q291bnQgPiA1MCkge1xyXG4gICAgICAgICAgICBsb2dzLnJlbW92ZUNoaWxkKGxvZ3MuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxvZ3MuYXBwZW5kQ2hpbGQobG9nKTtcclxuICAgICAgICBsb2dzLnNjcm9sbFRvcCA9IGxvZ3Muc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjsiLCJpbXBvcnQgeyBNYXQ0LCBNYXQgfSBmcm9tIFwid2ViZ2wtYmFzaWMtbGliXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHRoZSBPcnRob2dvbmFsIG1hdHJpeC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgdGhlIGxlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IHRoZSByaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIHRoZSBib3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCB0aGUgdG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIHRoZSBuZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgdGhlIGZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKlxyXG4gKiBAcmV0dXJuIHtNYXR9IHRoZSBuZXdseSBjcmVhdGVkIE1hdDRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBPcnRob2dvbmFsKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgICBjb25zdCBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KTtcclxuICAgIGNvbnN0IGJ0ID0gMSAvIChib3R0b20gLSB0b3ApO1xyXG4gICAgY29uc3QgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xyXG5cclxuICAgIGNvbnN0IGFyciA9IG5ldyBBcnJheSgxNik7XHJcblxyXG4gICAgYXJyWzBdID0gLTIgKiBscjtcclxuICAgIGFyclsxXSA9IDA7XHJcbiAgICBhcnJbMl0gPSAwO1xyXG4gICAgYXJyWzNdID0gMDtcclxuICAgIGFycls0XSA9IDA7XHJcbiAgICBhcnJbNV0gPSAtMiAqIGJ0O1xyXG4gICAgYXJyWzZdID0gMDtcclxuICAgIGFycls3XSA9IDA7XHJcbiAgICBhcnJbOF0gPSAwO1xyXG4gICAgYXJyWzldID0gMDtcclxuICAgIGFyclsxMF0gPSAyICogbmY7XHJcbiAgICBhcnJbMTFdID0gMDtcclxuICAgIGFyclsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xyXG4gICAgYXJyWzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XHJcbiAgICBhcnJbMTRdID0gKGZhciArIG5lYXIpICogbmY7XHJcbiAgICBhcnJbMTVdID0gMTtcclxuXHJcbiAgICByZXR1cm4gTWF0NC5Gcm9tQXJyYXlDTShhcnIpO1xyXG59IiwiaW1wb3J0IHsgTWF0NCwgVmVjMywgVmVjNCwgdG9SYWQgfSBmcm9tIFwid2ViZ2wtYmFzaWMtbGliXCI7XHJcbmltcG9ydCB7IGtleWJvYXJkIH0gZnJvbSBcIi4uL2tleWJvYXJkLmpzXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL2xvZ2dlci5qc1wiO1xyXG5pbXBvcnQgeyBPYmogfSBmcm9tIFwiLi9vYmouanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBPYmoge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSwgbWF0ID0gTWF0NC5JZGVudGl0eSgpLCBtb2RlbERpcmVjdGlvbiA9IE1hdDQuSWRlbnRpdHkoKSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEsIG1hdCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbERpcmVjdGlvbiA9IG1vZGVsRGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGNvbnN0IGZvcndhcmRTcGVlZCA9IGtleWJvYXJkLmlzUHJlc3NlZChcIndcIikgPyAtMSA6IDA7XHJcbiAgICAgICAgY29uc3QgYmFja3dhcmRzU3BlZWQgPSBrZXlib2FyZC5pc1ByZXNzZWQoXCJzXCIpID8gMSA6IDA7XHJcbiAgICAgICAgY29uc3QgbW92ZW1lbnRTcGVlZCA9IChmb3J3YXJkU3BlZWQgKyBiYWNrd2FyZHNTcGVlZCkgKiAoZHQgLyA1MClcclxuXHJcbiAgICAgICAgY29uc3QgbW92ZW1lbnQgPSBuZXcgVmVjMyhcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgbW92ZW1lbnRTcGVlZFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY29uc3QgbGVmdFNwZWVkID0ga2V5Ym9hcmQuaXNQcmVzc2VkKFwiYVwiKSA/IDEgOiAwO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0U3BlZWQgPSBrZXlib2FyZC5pc1ByZXNzZWQoXCJkXCIpID8gLTEgOiAwO1xyXG4gICAgICAgIC8vIHJvdGF0ZSBvbmx5IGlmIGNhciBpcyBtb3ZpbmcgYW5kIFwiaGFuZGxlXCIgYmFja3dhcmRzIHR1cm5pbmdcclxuICAgICAgICBjb25zdCByb3RhdGlvblNwZWVkID0gKChsZWZ0U3BlZWQgKyByaWdodFNwZWVkKSAqIChkdCAvIDEwKSkgKiAobW92ZW1lbnRTcGVlZCA+IDAgPyAtMSA6IDEpO1xyXG5cclxuICAgICAgICB0aGlzLm1hdFxyXG4gICAgICAgICAgICAucm90YXRlKHRvUmFkKHJvdGF0aW9uU3BlZWQpLCBuZXcgVmVjMygwLCAxLCAwKSlcclxuICAgICAgICAgICAgLnRyYW5zbGF0ZShtb3ZlbWVudCk7XHJcblxyXG4gICAgICAgIGlmIChrZXlib2FyZC5pc1ByZXNzZWQoXCJxXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0LnRyYW5zbGF0ZShuZXcgVmVjMygwLCAxLCAwKS5tdWwoZHQgLyA1MCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5Ym9hcmQuaXNQcmVzc2VkKFwiZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdC50cmFuc2xhdGUobmV3IFZlYzMoMCwgLTEsIDApLm11bChkdCAvIDUwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBicmFrZXNPbiA9IGtleWJvYXJkLmlzUHJlc3NlZChcImpcIilcclxuICAgICAgICB0aGlzLmxpZ2h0cy5zcG90TGlnaHQuZmlsdGVyKGxpZ2h0ID0+IFtcIkJyYWtlTGVmdFwiLCBcIkJyYWtlUmlnaHRcIl0uaW5jbHVkZXMobGlnaHQubmFtZSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGxpZ2h0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0LmVuYWJsZWQgPSBicmFrZXNPbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5saWdodHMuc3BvdExpZ2h0LmZpbHRlcihsaWdodCA9PiBbXCJSZWFyUmlnaHRcIiwgXCJSZWFyTGVmdFwiXS5pbmNsdWRlcyhsaWdodC5uYW1lKSlcclxuICAgICAgICAgICAgLmZvckVhY2gobGlnaHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlnaHQuZW5hYmxlZCA9IG1vdmVtZW50U3BlZWQgPiAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmFzID0gW3tcclxuICAgICAgICBuYW1lOiBcIkNoYXNpbmdcIixcclxuICAgICAgICBtYXRyaXg6ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9va0F0ID0gTWF0NC5Mb29rQXQobmV3IFZlYzMoMCwgNCwgMTUpLCBuZXcgVmVjMygwLCAwLCAwKSwgbmV3IFZlYzMoMCwgMSwgMCkpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdCA9IHRoaXMubWF0LmNsb25lKCkuaW52ZXJzZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvb2tBdC5hcHBseShtYXQpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJDaGFzaW5nIENsb3NlXCIsXHJcbiAgICAgICAgbWF0cml4OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBdCA9IE1hdDQuTG9va0F0KG5ldyBWZWMzKDAsIDIsIDcpLCBuZXcgVmVjMygwLCAxLCAwKSwgbmV3IFZlYzMoMCwgMSwgMCkpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdCA9IHRoaXMubWF0LmNsb25lKCkuaW52ZXJzZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvb2tBdC5hcHBseShtYXQpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJSZXZlcnNlXCIsXHJcbiAgICAgICAgbWF0cml4OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBdCA9IE1hdDQuTG9va0F0KG5ldyBWZWMzKDAsIDQsIC0xNSksIG5ldyBWZWMzKDAsIDAsIDApLCBuZXcgVmVjMygwLCAxLCAwKSlcclxuICAgICAgICAgICAgY29uc3QgbWF0ID0gdGhpcy5tYXQuY2xvbmUoKS5pbnZlcnNlKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbG9va0F0LmFwcGx5KG1hdCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlJldmVyc2UgQ2xvc2VcIixcclxuICAgICAgICBtYXRyaXg6ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9va0F0ID0gTWF0NC5Mb29rQXQobmV3IFZlYzMoMCwgMiwgLTkpLCBuZXcgVmVjMygwLCAxLCAwKSwgbmV3IFZlYzMoMCwgMSwgMCkpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdCA9IHRoaXMubWF0LmNsb25lKCkuaW52ZXJzZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvb2tBdC5hcHBseShtYXQpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJDYXIgRnJvbnRcIixcclxuICAgICAgICBtYXRyaXg6ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbG9va0F0ID0gTWF0NC5Mb29rQXQobmV3IFZlYzMoMCwgMS4xLCAtMC43KSwgbmV3IFZlYzMoMCwgMSwgLTE1KSwgbmV3IFZlYzMoMCwgMSwgMCkpXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdCA9IHRoaXMubWF0LmNsb25lKCkuaW52ZXJzZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvb2tBdC5hcHBseShtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1dXHJcblxyXG4gICAgbGlnaHRzID0ge1xyXG4gICAgICAgIHNwb3RMaWdodDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkhlYWRsaWdodExlZnRcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KC0wLjcyNSwgMC43OCwgLTEuNjUsIDEpLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICgpID0+IG5ldyBWZWM0KDAsIC0wLjEsIC0xLCAwKS50cmFuc2Zvcm0odGhpcy5tYXQpLnRvVmVjMygpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBWZWMzKDEsIDEsIDEpLFxyXG4gICAgICAgICAgICAgICAgY3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCg3KSksXHJcbiAgICAgICAgICAgICAgICBvdXRlckN1dE9mZjogTWF0aC5jb3ModG9SYWQoMTUpKSxcclxuICAgICAgICAgICAgICAgIGxpbmVhcjogMC4wMDMsXHJcbiAgICAgICAgICAgICAgICBxdWFkcmF0aWM6IDAuMDAzMixcclxuICAgICAgICAgICAgICAgIGFtYmllbnQ6IDAuNSxcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IDAuOCxcclxuICAgICAgICAgICAgICAgIHNwZWN1bGFyOiAwLjIsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSGVhZExpZ2h0UmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KDAuNzI1LCAwLjc4LCAtMS42NSwgMSkudHJhbnNmb3JtKHRoaXMubWF0KS50b1ZlYzMoKSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogKCkgPT4gbmV3IFZlYzQoMCwgLTAuMSwgLTEsIDApLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFZlYzMoMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICBjdXRPZmY6IE1hdGguY29zKHRvUmFkKDcpKSxcclxuICAgICAgICAgICAgICAgIG91dGVyQ3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCgxNSkpLFxyXG4gICAgICAgICAgICAgICAgbGluZWFyOiAwLjAwMyxcclxuICAgICAgICAgICAgICAgIHF1YWRyYXRpYzogMC4wMDMyLFxyXG4gICAgICAgICAgICAgICAgYW1iaWVudDogMC41LFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogMC44LFxyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXI6IDAuMixcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCcmFrZUxlZnRcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KC0wLjg3NSwgMC44MywgMS43MywgMSkudHJhbnNmb3JtKHRoaXMubWF0KS50b1ZlYzMoKSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogKCkgPT4gbmV3IFZlYzQoMCwgLTAuMSwgMSwgMCkudHJhbnNmb3JtKHRoaXMubWF0KS50b1ZlYzMoKSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVmVjMygxLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgIGN1dE9mZjogTWF0aC5jb3ModG9SYWQoNTApKSxcclxuICAgICAgICAgICAgICAgIG91dGVyQ3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCg3MCkpLFxyXG4gICAgICAgICAgICAgICAgbGluZWFyOiAwLjEsXHJcbiAgICAgICAgICAgICAgICBxdWFkcmF0aWM6IDAuMSxcclxuICAgICAgICAgICAgICAgIGFtYmllbnQ6IDAuMixcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IDAuOCxcclxuICAgICAgICAgICAgICAgIHNwZWN1bGFyOiAwLjUsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQnJha2VSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogKCkgPT4gbmV3IFZlYzQoMC44NzUsIDAuODMsIDEuNzMsIDEpLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICgpID0+IG5ldyBWZWM0KDAsIC0wLjEsIDEsIDApLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFZlYzMoMSwgMCwgMCksXHJcbiAgICAgICAgICAgICAgICBjdXRPZmY6IE1hdGguY29zKHRvUmFkKDUwKSksXHJcbiAgICAgICAgICAgICAgICBvdXRlckN1dE9mZjogTWF0aC5jb3ModG9SYWQoNzApKSxcclxuICAgICAgICAgICAgICAgIGxpbmVhcjogMC4xLFxyXG4gICAgICAgICAgICAgICAgcXVhZHJhdGljOiAwLjEsXHJcbiAgICAgICAgICAgICAgICBhbWJpZW50OiAwLjIsXHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlOiAwLjgsXHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMC41LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlYXJEaXJlY3Rpb25hbExlZnRcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KC0wLjg3NSwgMC43MjUsIDEuNzMsIDEpLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICgpID0+IG5ldyBWZWM0KC0wLjUsIC0wLjEsIDEsIDApLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFZlYzMoMjU1IC8gMjU1LCA5NSAvIDI1NSwgMzEgLyAyNTUpLFxyXG4gICAgICAgICAgICAgICAgY3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCgyMCkpLFxyXG4gICAgICAgICAgICAgICAgb3V0ZXJDdXRPZmY6IE1hdGguY29zKHRvUmFkKDQwKSksXHJcbiAgICAgICAgICAgICAgICBsaW5lYXI6IDAuMyxcclxuICAgICAgICAgICAgICAgIHF1YWRyYXRpYzogMC4zLFxyXG4gICAgICAgICAgICAgICAgYW1iaWVudDogMC4yLFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogMC41LFxyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXI6IDAuNSxcclxuICAgICAgICAgICAgICAgIG9uOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlYXJEaXJlY3Rpb25hbFJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAoKSA9PiBuZXcgVmVjNCgwLjg3NSwgMC43MjUsIDEuNzMsIDEpLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICgpID0+IG5ldyBWZWM0KDAuNSwgLTAuMSwgMSwgMCkudHJhbnNmb3JtKHRoaXMubWF0KS50b1ZlYzMoKSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVmVjMygyNTUgLyAyNTUsIDk1IC8gMjU1LCAzMSAvIDI1NSksXHJcbiAgICAgICAgICAgICAgICBjdXRPZmY6IE1hdGguY29zKHRvUmFkKDIwKSksXHJcbiAgICAgICAgICAgICAgICBvdXRlckN1dE9mZjogTWF0aC5jb3ModG9SYWQoNDApKSxcclxuICAgICAgICAgICAgICAgIGxpbmVhcjogMC4zLFxyXG4gICAgICAgICAgICAgICAgcXVhZHJhdGljOiAwLjMsXHJcbiAgICAgICAgICAgICAgICBhbWJpZW50OiAwLjIsXHJcbiAgICAgICAgICAgICAgICBkaWZmdXNlOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMC41LFxyXG4gICAgICAgICAgICAgICAgb246IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRnJvbnREaXJlY3Rpb25hbExlZnRcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KC0wLjg5LCAwLjc4LCAtMS42NSwgMSkudHJhbnNmb3JtKHRoaXMubWF0KS50b1ZlYzMoKSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogKCkgPT4gbmV3IFZlYzQoLTAuNSwgLTAuMSwgLTEsIDApLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFZlYzMoMjU1IC8gMjU1LCA5NSAvIDI1NSwgMzEgLyAyNTUpLFxyXG4gICAgICAgICAgICAgICAgY3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCgyMCkpLFxyXG4gICAgICAgICAgICAgICAgb3V0ZXJDdXRPZmY6IE1hdGguY29zKHRvUmFkKDQwKSksXHJcbiAgICAgICAgICAgICAgICBsaW5lYXI6IDAuMyxcclxuICAgICAgICAgICAgICAgIHF1YWRyYXRpYzogMC4zLFxyXG4gICAgICAgICAgICAgICAgYW1iaWVudDogMC40LFxyXG4gICAgICAgICAgICAgICAgZGlmZnVzZTogMC41LFxyXG4gICAgICAgICAgICAgICAgc3BlY3VsYXI6IDAuNSxcclxuICAgICAgICAgICAgICAgIG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGcm9udERpcmVjdGlvbmFsUmlnaHRcIixcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KDAuODksIDAuNzgsIC0xLjY1LCAxKS50cmFuc2Zvcm0odGhpcy5tYXQpLnRvVmVjMygpLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAoKSA9PiBuZXcgVmVjNCgwLjUsIC0wLjEsIC0xLCAwKS50cmFuc2Zvcm0odGhpcy5tYXQpLnRvVmVjMygpLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IG5ldyBWZWMzKDI1NSAvIDI1NSwgOTUgLyAyNTUsIDMxIC8gMjU1KSxcclxuICAgICAgICAgICAgICAgIGN1dE9mZjogTWF0aC5jb3ModG9SYWQoMjApKSxcclxuICAgICAgICAgICAgICAgIG91dGVyQ3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCg0MCkpLFxyXG4gICAgICAgICAgICAgICAgbGluZWFyOiAwLjMsXHJcbiAgICAgICAgICAgICAgICBxdWFkcmF0aWM6IDAuMyxcclxuICAgICAgICAgICAgICAgIGFtYmllbnQ6IDAuNCxcclxuICAgICAgICAgICAgICAgIGRpZmZ1c2U6IDAuNSxcclxuICAgICAgICAgICAgICAgIHNwZWN1bGFyOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6IFwiUmVhclJpZ2h0XCIsXHJcbiAgICAgICAgICAgIC8vICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KDAuODc1LCAwLjY2LCAxLjczLCAxKS50cmFuc2Zvcm0odGhpcy5tYXQpLnRvVmVjMygpLFxyXG4gICAgICAgICAgICAvLyAgICAgZGlyZWN0aW9uOiAoKSA9PiBuZXcgVmVjNCgwLCAtMC4xLCAxLCAwKS50cmFuc2Zvcm0odGhpcy5tYXQpLnRvVmVjMygpLFxyXG4gICAgICAgICAgICAvLyAgICAgY29sb3I6IG5ldyBWZWMzKDEsIDEsIDEpLFxyXG4gICAgICAgICAgICAvLyAgICAgY3V0T2ZmOiBNYXRoLmNvcyh0b1JhZCgxNSkpLFxyXG4gICAgICAgICAgICAvLyAgICAgb3V0ZXJDdXRPZmY6IE1hdGguY29zKHRvUmFkKDMwKSksXHJcbiAgICAgICAgICAgIC8vICAgICBsaW5lYXI6IDAuMSxcclxuICAgICAgICAgICAgLy8gICAgIHF1YWRyYXRpYzogMC4xLFxyXG4gICAgICAgICAgICAvLyAgICAgYW1iaWVudDogMC4zLFxyXG4gICAgICAgICAgICAvLyAgICAgZGlmZnVzZTogMC44LFxyXG4gICAgICAgICAgICAvLyAgICAgc3BlY3VsYXI6IDAuNSxcclxuICAgICAgICAgICAgLy8gfSwge1xyXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogXCJSZWFyTGVmdFwiLFxyXG4gICAgICAgICAgICAvLyAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiAoKSA9PiBuZXcgVmVjNCgtMC44NzUsIDAuNjYsIDEuNzMsIDEpLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgIC8vICAgICBkaXJlY3Rpb246ICgpID0+IG5ldyBWZWM0KDAsIC0wLjEsIDEsIDApLnRyYW5zZm9ybSh0aGlzLm1hdCkudG9WZWMzKCksXHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogbmV3IFZlYzMoMSwgMSwgMSksXHJcbiAgICAgICAgICAgIC8vICAgICBjdXRPZmY6IE1hdGguY29zKHRvUmFkKDE1KSksXHJcbiAgICAgICAgICAgIC8vICAgICBvdXRlckN1dE9mZjogTWF0aC5jb3ModG9SYWQoMzApKSxcclxuICAgICAgICAgICAgLy8gICAgIGxpbmVhcjogMC4xLFxyXG4gICAgICAgICAgICAvLyAgICAgcXVhZHJhdGljOiAwLjEsXHJcbiAgICAgICAgICAgIC8vICAgICBhbWJpZW50OiAwLjEsXHJcbiAgICAgICAgICAgIC8vICAgICBkaWZmdXNlOiAwLjgsXHJcbiAgICAgICAgICAgIC8vICAgICBzcGVjdWxhcjogMC41LFxyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXR1cCgvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRzLnNwb3RMaWdodC5maWx0ZXIobCA9PiBbXCJSZWFyRGlyZWN0aW9uYWxMZWZ0XCIsIFwiUmVhckRpcmVjdGlvbmFsUmlnaHRcIiwgXCJGcm9udERpcmVjdGlvbmFsTGVmdFwiLCBcIkZyb250RGlyZWN0aW9uYWxSaWdodFwiXS5pbmNsdWRlcyhsLm5hbWUpKVxyXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwub24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5lbmFibGVkID0gIWwuZW5hYmxlZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICBhd2FpdCBzdXBlci5zZXR1cChnbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsIHN0YWNrLCBjYW1lcmEpIHtcclxuICAgICAgICB0aGlzLm1hdC5hcHBseSh0aGlzLm1vZGVsRGlyZWN0aW9uKTtcclxuICAgICAgICBzdXBlci5kcmF3KGdsLCBzdGFjaywgY2FtZXJhKTtcclxuICAgICAgICB0aGlzLm1hdC5hcHBseSh0aGlzLm1vZGVsRGlyZWN0aW9uLmludmVyc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hhZG93RHJhdygvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsIHN0YWNrKSB7XHJcbiAgICAgICAgdGhpcy5tYXQuYXBwbHkodGhpcy5tb2RlbERpcmVjdGlvbik7XHJcbiAgICAgICAgc3VwZXIuc2hhZG93RHJhdyhnbCwgc3RhY2spO1xyXG4gICAgICAgIHRoaXMubWF0LmFwcGx5KHRoaXMubW9kZWxEaXJlY3Rpb24uaW52ZXJzZSgpKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2FyID0gbmV3IENhcihcclxuICAgIHtcclxuICAgICAgICB1cmxzOiB7XHJcbiAgICAgICAgICAgIG9iajogXCIuLi8uLi9hc3NldHMvb2Jqcy9jYXIvY2FyLm9ialwiLFxyXG4gICAgICAgICAgICB0ZXh0dXJlOiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9jYXIvY29sb3IuanBnXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIE1hdDQuSWRlbnRpdHkoKS5yb3RhdGUodG9SYWQoMTgwKSwgbmV3IFZlYzMoMCwgMSwgMCkpLnRyYW5zbGF0ZShuZXcgVmVjMygwLCAwLCAzMCkpLFxyXG4gICAgTWF0NC5JZGVudGl0eSgpLnJvdGF0ZSh0b1JhZCgxODApLCBuZXcgVmVjMygwLCAxLCAwKSlcclxuKTtcclxuXHJcbmV4cG9ydCB7IGNhciB9OyIsImltcG9ydCB7IE1hdDQsIFZlYzMsIH0gZnJvbSBcIndlYmdsLWJhc2ljLWxpYlwiO1xyXG5pbXBvcnQgeyBPYmogfSBmcm9tIFwiLi9vYmouanNcIjtcclxuaW1wb3J0IHsgbG9hZFRleHR1cmUgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91bmQgZXh0ZW5kcyBPYmoge1xyXG4gICAgYXN5bmMgc2V0dXAoLyoqIEB0eXBlIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9ICovIGdsKSB7XHJcbiAgICAgICAgYXdhaXQgc3VwZXIuc2V0dXAoZ2wsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgbG9hZFRleHR1cmUoZ2wsIHRoaXMudGV4dHVyZSwgdGhpcy5kYXRhLnVybHMudGV4dHVyZSwge1xyXG4gICAgICAgICAgICB0ZXh0dXJlS2luZDogZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgICAgdGFyZ2V0OiBnbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgICB0ZXh0dXJlV3JhcDogZ2wuUkVQRUFULFxyXG4gICAgICAgICAgICBtaXBtYXA6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBncmFzc1NpemUgPSA4MDtcclxuY29uc3Qgcm9hZExlbmd0aCA9IGdyYXNzU2l6ZTtcclxuXHJcbmNvbnN0IGdyb3VuZCA9IFtcclxuICAgIG5ldyBHcm91bmQoe1xyXG4gICAgICAgIHZlcnRpY2VzOiBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgLTEsIDAsIDEsXHJcbiAgICAgICAgICAgIDEsIDAsIDEsXHJcbiAgICAgICAgICAgIC0xLCAwLCAtMSxcclxuXHJcbiAgICAgICAgICAgIC0xLCAwLCAtMSxcclxuICAgICAgICAgICAgMSwgMCwgMSxcclxuICAgICAgICAgICAgMSwgMCwgLTEsXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdGV4Q29vcmRzOiBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMCwgZ3Jhc3NTaXplIC8gMTAsXHJcbiAgICAgICAgICAgIGdyYXNzU2l6ZSAvIDEwLCBncmFzc1NpemUgLyAxMCxcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgZ3Jhc3NTaXplIC8gMTAsIGdyYXNzU2l6ZSAvIDEwLFxyXG4gICAgICAgICAgICBncmFzc1NpemUgLyAxMCwgMCxcclxuICAgICAgICBdKSxcclxuICAgICAgICBub3JtYWxzOiBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICBdKSxcclxuICAgICAgICB1cmxzOiB7XHJcbiAgICAgICAgICAgIHRleHR1cmU6IFwiLi4vLi4vYXNzZXRzL3RleHR1cmVzL2dyb3VuZC9ncmFzcy9HcmFzc18wMDVfQmFzZUNvbG9yLmpwZ1wiLFxyXG4gICAgICAgIH1cclxuICAgIH0sIE1hdDQuSWRlbnRpdHkoKS5zY2FsZShuZXcgVmVjMyhncmFzc1NpemUgLyAyLCAxLCBncmFzc1NpemUgLyAyKSkpLFxyXG4gICAgbmV3IEdyb3VuZCh7XHJcbiAgICAgICAgdmVydGljZXM6IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAtMSwgMCwgMSxcclxuICAgICAgICAgICAgMSwgMCwgMSxcclxuICAgICAgICAgICAgLTEsIDAsIC0xLFxyXG5cclxuICAgICAgICAgICAgLTEsIDAsIC0xLFxyXG4gICAgICAgICAgICAxLCAwLCAxLFxyXG4gICAgICAgICAgICAxLCAwLCAtMSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0ZXhDb29yZHM6IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAwLCBncmFzc1NpemUgLyAxMCxcclxuICAgICAgICAgICAgMSwgZ3Jhc3NTaXplIC8gMTAsXHJcbiAgICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICAgIDEsIGdyYXNzU2l6ZSAvIDEwLFxyXG4gICAgICAgICAgICAxLCAwLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHVybHM6IHtcclxuICAgICAgICAgICAgdGV4dHVyZTogXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvZ3JvdW5kL3JvYWQvUm9hZF8wMDFfYmFzZWNvbG9yLmpwZ1wiLFxyXG4gICAgICAgIH1cclxuICAgIH0sIE1hdDQuSWRlbnRpdHkoKS5zY2FsZShuZXcgVmVjMyg0LCAxLCByb2FkTGVuZ3RoIC8gMikpLnRyYW5zbGF0ZShuZXcgVmVjMygwLCAwLjAxLCAwKSkpLFxyXG5dXHJcblxyXG5leHBvcnQgeyBncm91bmQgfTsiLCJpbXBvcnQgeyBncm91bmQsIEdyb3VuZCB9IGZyb20gXCIuL2dyb3VuZC5qc1wiO1xyXG4vLyBpbXBvcnQgeyBvYmpzLCBPYmogfSBmcm9tIFwiLi9vYmouanNcIjtcclxuaW1wb3J0IHsgY2FyLCBDYXIgfSBmcm9tIFwiLi9jYXIuanNcIjtcclxuaW1wb3J0IHsgc2t5Ym94ZXMsIFNreWJveCB9IGZyb20gXCIuL3NreWJveC5qc1wiO1xyXG5pbXBvcnQgeyBvYmpzLCBPYmogfSBmcm9tIFwiLi9vYmouanNcIjtcclxuXHJcbmNvbnN0IG9iakdyb3VwcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImNhclwiLFxyXG4gICAgICAgIHNldHVwRHJhdzogQ2FyLnNldHVwRHJhdyxcclxuICAgICAgICB0ZWFyZG93bkRyYXc6IENhci50ZWFyZG93bkRyYXcsXHJcbiAgICAgICAgc2V0dXBTaGFkb3dEcmF3OiBDYXIuc2V0dXBTaGFkb3dEcmF3LFxyXG4gICAgICAgIGVsZW1lbnRzOiBbY2FyXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJvYmpzXCIsXHJcbiAgICAgICAgc2V0dXBEcmF3OiBPYmouc2V0dXBEcmF3LFxyXG4gICAgICAgIHRlYXJkb3duRHJhdzogT2JqLnRlYXJkb3duRHJhdyxcclxuICAgICAgICBzZXR1cFNoYWRvd0RyYXc6IE9iai5zZXR1cFNoYWRvd0RyYXcsXHJcbiAgICAgICAgZWxlbWVudHM6IFsuLi5vYmpzXSxcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBncm91bmRHcm91cCA9IHtcclxuICAgIG5hbWU6IFwiZ3JvdW5kXCIsXHJcbiAgICBzZXR1cERyYXc6IEdyb3VuZC5zZXR1cERyYXcsXHJcbiAgICB0ZWFyZG93bkRyYXc6IEdyb3VuZC50ZWFyZG93bkRyYXcsXHJcbiAgICBzZXR1cFNoYWRvd0RyYXc6IEdyb3VuZC5zZXR1cFNoYWRvd0RyYXcsXHJcbiAgICBlbGVtZW50czogWy4uLmdyb3VuZF0sXHJcbn1cclxuXHJcbmNvbnN0IHNreWJveGVzR3JvdXAgPSB7XHJcbiAgICBuYW1lOiBcInNreWJveFwiLFxyXG4gICAgc2V0dXBEcmF3OiBTa3lib3guc2V0dXBEcmF3LFxyXG4gICAgdGVhcmRvd25EcmF3OiBTa3lib3gudGVhcmRvd25EcmF3LFxyXG4gICAgZWxlbWVudHM6IFsuLi5za3lib3hlc10sXHJcbiAgICBhY3RpdmVJbmRleDogMCxcclxufVxyXG5cclxuZXhwb3J0IHsgb2JqR3JvdXBzLCBza3lib3hlc0dyb3VwLCBncm91bmRHcm91cCB9OyIsImltcG9ydCB7IE1hdDQsIFZlYzQsIFZlYzMsIHRvUmFkIH0gZnJvbSBcIndlYmdsLWJhc2ljLWxpYlwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuLi9kcmF3YWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkT2JqLCBsb2FkVGV4dHVyZSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi9sb2dnZXIuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPYmogZXh0ZW5kcyBEcmF3YWJsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBtYXQgPSBuZXcgTWF0NCgpLCB0ZXh0dXJlT3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKGRhdGEsIG1hdCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlT3B0aW9ucyA9IHRleHR1cmVPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldHVwKC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCwgaXNDaGlsZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgYXdhaXQgc3VwZXIuc2V0dXAoZ2wpO1xyXG5cclxuICAgICAgICBpZiAoIWlzQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBsb2FkVGV4dHVyZShnbCwgdGhpcy50ZXh0dXJlLCB0aGlzLmRhdGEudXJscy50ZXh0dXJlLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlS2luZDogZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgICAgICAgIG1pcG1hcDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS51cmxzLm9iaikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqcyA9IGF3YWl0IGxvYWRPYmoodGhpcy5kYXRhLnVybHMub2JqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5PYmogPSBvYmpzLnNoaWZ0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haW5PYmopXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheShtYWluT2JqLnZlcnRpY2VzKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXhDb29yZHM6IG5ldyBGbG9hdDMyQXJyYXkobWFpbk9iai50ZXhDb29yZHMpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkobWFpbk9iai5ub3JtYWxzKSxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gb2Jqcy5tYXAob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ldyBPYmooe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogbmV3IEZsb2F0MzJBcnJheShvYmoudmVydGljZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXhDb29yZHM6IG5ldyBGbG9hdDMyQXJyYXkob2JqLnRleENvb3JkcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbHM6IG5ldyBGbG9hdDMyQXJyYXkob2JqLm5vcm1hbHMpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMubWF0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGV4dHVyZSA9IHRoaXMudGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnNldHVwKGdsLCB0cnVlKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCwgc3RhY2ssIGNhbWVyYSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvYWRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC51c2VQcm9ncmFtKE9iai5wcm9ncmFtU2hhZGVyKTtcclxuXHJcbiAgICAgICAgLy8gcG9zaXRpb25cclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXJzLnBvc2l0aW9uLnZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5idWZmZXJzLnBvc2l0aW9uLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVycy5wb3NpdGlvbi5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5kYXRhLnZlcnRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8gdGV4Q29vcmRcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXJzLnRleENvb3JkLnZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5idWZmZXJzLnRleENvb3JkLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVycy50ZXhDb29yZC5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5kYXRhLnRleENvb3JkcywgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDEsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIG5vcm1hbFxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcnMubm9ybWFsLnZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5idWZmZXJzLm5vcm1hbC5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcnMubm9ybWFsLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmRhdGEubm9ybWFscywgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgyKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDIsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB1bmlmb3Jtc1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudU1hdE1vZGVsLCBmYWxzZSwgdGhpcy5tYXQudmFsdWVzKTtcclxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KE9iai51bmlmb3JtTG9jYXRpb25zLnVNYXRNb2RlbEludmVyc2VUcmFuc3Bvc2UsIGZhbHNlLCB0aGlzLm1hdC5jbG9uZSgpLmludmVyc2UoKS50cmFuc3Bvc2UoKS52YWx1ZXMpO1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudU1hdFZpZXdQcm9qZWN0aW9uLCBmYWxzZSwgc3RhY2suaGVhZCgpLnZhbHVlcyk7XHJcbiAgICAgICAgZ2wudW5pZm9ybTNmdihPYmoudW5pZm9ybUxvY2F0aW9ucy51Vmlld1BvcywgY2FtZXJhLmNsb25lKCkuaW52ZXJzZSgpLmNvbCgzKS50b1ZlYzMoKS52YWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBiaW5kIHRleHR1cmVcclxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0xaShPYmoudW5pZm9ybUxvY2F0aW9ucy51Q29sb3JUZXh0dXJlLCAwKTtcclxuXHJcbiAgICAgICAgLy8gZHJhd1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2xbT2JqLmdsTW9kZV0sIDAsIHRoaXMuZGF0YS52ZXJ0aWNlcy5sZW5ndGggLyAzKTtcclxuXHJcbiAgICAgICAgLy8gZGlzYWJsZSB2ZXJ0ZXhBdHRyaWJBcnJheVxyXG4gICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcclxuXHJcbiAgICAgICAgLy8gdW5iaW5kIGJ1ZmZlclxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmRyYXcoZ2wsIHN0YWNrLCBjYW1lcmEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdsTW9kZSA9IFwiVFJJQU5HTEVTXCI7XHJcbiAgICBzdGF0aWMgdHlwZXMgPSBgXHJcbiAgICBgXHJcbiAgICBzdGF0aWMgdmVydGV4U2hhZGVyU291cmNlID0gYFxyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICBcclxuICAgIC8vIHBvc2l0aW9uXHJcbiAgICBhdHRyaWJ1dGUgdmVjMyBhUG9zaXRpb247XHJcbiAgICB1bmlmb3JtIG1hdDQgdU1hdE1vZGVsO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVNYXRNb2RlbEludmVyc2VUcmFuc3Bvc2U7XHJcbiAgICB1bmlmb3JtIG1hdDQgdU1hdFZpZXdQcm9qZWN0aW9uO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVNYXRMaWdodFNwYWNlVmlld1Byb2plY3Rpb247XHJcbiAgICB2YXJ5aW5nIHZlYzMgdldvcmxkU3BhY2VQb3NpdGlvbjtcclxuICAgIHZhcnlpbmcgdmVjNCB2TGlnaHRTcGFjZVBvc2l0aW9uO1xyXG4gICAgXHJcbiAgICAvLyB0ZXh0dXJlXHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhVGV4Q29vcmQ7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdlRleENvb3JkO1xyXG4gICAgXHJcbiAgICAvLyBub3JtYWxcclxuICAgIGF0dHJpYnV0ZSB2ZWMzIGFOb3JtYWw7XHJcbiAgICB2YXJ5aW5nIHZlYzMgdk5vcm1hbDtcclxuICAgIFxyXG4gICAgdm9pZCBtYWluKHZvaWQpIHtcclxuICAgICAgICB2VGV4Q29vcmQgPSBhVGV4Q29vcmQ7XHJcbiAgICAgICAgdk5vcm1hbCA9IG1hdDModU1hdE1vZGVsSW52ZXJzZVRyYW5zcG9zZSkgKiBhTm9ybWFsO1xyXG4gICAgICAgIHZXb3JsZFNwYWNlUG9zaXRpb24gPSAodU1hdE1vZGVsICogdmVjNChhUG9zaXRpb24sIDEuMCkpLnh5ejtcclxuICAgICAgICB2TGlnaHRTcGFjZVBvc2l0aW9uID0gdU1hdExpZ2h0U3BhY2VWaWV3UHJvamVjdGlvbiAqIHZlYzQodldvcmxkU3BhY2VQb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICB2TGlnaHRTcGFjZVBvc2l0aW9uID0gdmVjNCh2TGlnaHRTcGFjZVBvc2l0aW9uLnh5eiArIHZOb3JtYWwgKiA0LjAgKiAoMS4wIC8gNDA5Ni4wKSwgMS4wKTtcclxuICAgICAgICBnbF9Qb3NpdGlvbiA9IHVNYXRWaWV3UHJvamVjdGlvbiAqIHVNYXRNb2RlbCAqIHZlYzQoYVBvc2l0aW9uLCAxLjApO1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBzdGF0aWMgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuICAgIFxyXG4gICAgLy8gZGVmaW5lIHR5cGVzXHJcbiAgICBzdHJ1Y3QgRGlyZWN0aW9uYWxMaWdodCB7XHJcbiAgICAgICAgdmVjMyBkaXJlY3Rpb247XHJcbiAgICAgICAgdmVjMyBjb2xvcjtcclxuICAgICAgICBcclxuICAgICAgICBmbG9hdCBhbWJpZW50O1xyXG4gICAgICAgIGZsb2F0IGRpZmZ1c2U7XHJcbiAgICAgICAgZmxvYXQgc3BlY3VsYXI7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzdHJ1Y3QgUG9pbnRMaWdodCB7ICAgIFxyXG4gICAgICAgIHZlYzMgcG9zaXRpb247XHJcbiAgICAgICAgdmVjMyBjb2xvcjtcclxuICAgICAgICBcclxuICAgICAgICBmbG9hdCBsaW5lYXI7XHJcbiAgICAgICAgZmxvYXQgcXVhZHJhdGljO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsb2F0IGFtYmllbnQ7XHJcbiAgICAgICAgZmxvYXQgZGlmZnVzZTtcclxuICAgICAgICBmbG9hdCBzcGVjdWxhcjtcclxuICAgIH07IFxyXG4gICAgXHJcbiAgICBzdHJ1Y3QgU3BvdExpZ2h0IHtcclxuICAgICAgICB2ZWMzIHBvc2l0aW9uO1xyXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uO1xyXG4gICAgICAgIHZlYzMgY29sb3I7XHJcbiAgICAgICAgZmxvYXQgY3V0T2ZmO1xyXG4gICAgICAgIGZsb2F0IG91dGVyQ3V0T2ZmO1xyXG4gICAgXHJcbiAgICAgICAgZmxvYXQgbGluZWFyO1xyXG4gICAgICAgIGZsb2F0IHF1YWRyYXRpYztcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IGFtYmllbnQ7XHJcbiAgICAgICAgZmxvYXQgZGlmZnVzZTtcclxuICAgICAgICBmbG9hdCBzcGVjdWxhcjsgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHBvc2l0aW9uXHJcbiAgICB2YXJ5aW5nIHZlYzMgdldvcmxkU3BhY2VQb3NpdGlvbjtcclxuICAgIHZhcnlpbmcgdmVjNCB2TGlnaHRTcGFjZVBvc2l0aW9uO1xyXG4gICAgXHJcbiAgICAvLyB0ZXh0dXJlXHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB1Q29sb3JUZXh0dXJlO1xyXG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdVNoYWRvd01hcDtcclxuICAgIHVuaWZvcm0gdmVjMiB1U2hhZG93TWFwU2l6ZTtcclxuICAgIHZhcnlpbmcgdmVjMiB2VGV4Q29vcmQ7XHJcbiAgICBcclxuICAgIC8vIG5vcm1hbFxyXG4gICAgdmFyeWluZyB2ZWMzIHZOb3JtYWw7XHJcbiAgICBcclxuICAgIC8vIGxpZ2h0XHJcbiAgICB1bmlmb3JtIHZlYzMgdVZpZXdQb3M7XHJcbiAgICB1bmlmb3JtIERpcmVjdGlvbmFsTGlnaHQgdURpcmVjdGlvbmFsTGlnaHQ7XHJcbiAgICB1bmlmb3JtIFBvaW50TGlnaHQgdVBvaW50TGlnaHRbTl9QT0lOVExJR0hUU107XHJcbiAgICB1bmlmb3JtIFNwb3RMaWdodCB1U3BvdExpZ2h0W05fU1BPVExJR0hUU107XHJcblxyXG4gICAgZmxvYXQgY2FsY3VsYXRlU2hhZG93KHZlYzQgbGlnaHRTcGFjZVBvc2l0aW9uLCB2ZWMzIG5vcm0sIHZlYzMgbGlnaHREaXIpIHtcclxuICAgICAgICAvLyBmbG9hdCBzaGFkb3dCaWFzID0gbWF4KDAuMDA1ICogKDEuMCAtIGRvdChub3JtLCBsaWdodERpcikpLCAwLjAwMDUpO1xyXG4gICAgICAgIC8vIGZsb2F0IHNoYWRvd0JpYXMgPSAwLjAwMTtcclxuICAgICAgICBmbG9hdCBzaGFkb3dCaWFzID0gMC4wO1xyXG5cclxuICAgICAgICAvLyBwZXJmb3JtIHBlcnNwZWN0aXZlIGRpdmlkZVxyXG4gICAgICAgIHZlYzMgcHJvakNvb3JkcyA9IGxpZ2h0U3BhY2VQb3NpdGlvbi54eXogLyBsaWdodFNwYWNlUG9zaXRpb24udztcclxuICAgICAgICBwcm9qQ29vcmRzID0gcHJvakNvb3JkcyAqIDAuNSArIDAuNTsgLy8gbWFwIHRvIFswLCAxXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZsb2F0IGNsb3Nlc3REZXB0aCA9IHRleHR1cmUyRCh1U2hhZG93TWFwLCBwcm9qQ29vcmRzLnh5KS5yOyAgIFxyXG4gICAgICAgIGZsb2F0IGN1cnJlbnREZXB0aCA9IHByb2pDb29yZHMuejtcclxuXHJcbiAgICAgICAgZmxvYXQgc2hhZG93ID0gMC4wO1xyXG4gICAgICAgIHZlYzIgdGV4ZWxTaXplID0gMS4wIC8gdVNoYWRvd01hcFNpemU7XHJcbiAgICAgICAgZm9yKGludCB4ID0gLTE7IHggPD0gMTsgKyt4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGludCB5ID0gLTE7IHkgPD0gMTsgKyt5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdCBwY2ZEZXB0aCA9IHRleHR1cmUyRCh1U2hhZG93TWFwLCBwcm9qQ29vcmRzLnh5ICsgdmVjMih4LCB5KSAqIHRleGVsU2l6ZSkucjsgXHJcbiAgICAgICAgICAgICAgICBzaGFkb3cgKz0gY3VycmVudERlcHRoIC0gc2hhZG93QmlhcyA+IHBjZkRlcHRoID8gMS4wIDogMC4wOyAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoYWRvdyAvPSA5LjA7XHJcblxyXG4gICAgICAgIHJldHVybiBzaGFkb3c7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjMyBjYWxjdWxhdGVEaXJlY3Rpb25hbExpZ2h0KERpcmVjdGlvbmFsTGlnaHQgbGlnaHQsIHZlYzMgbm9ybSwgdmVjMyB2aWV3RGlyKSB7XHJcbiAgICAgICAgdmVjMyBsaWdodERpciA9IG5vcm1hbGl6ZSgtdURpcmVjdGlvbmFsTGlnaHQuZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgZmxvYXQgZGlmZiA9IG1heChkb3Qodk5vcm1hbCwgbGlnaHREaXIpLCAwLjApO1xyXG5cclxuICAgICAgICAvLyB2ZWMzIHJlZmxlY3REaXIgPSByZWZsZWN0KC1saWdodERpciwgbm9ybSk7XHJcbiAgICAgICAgdmVjMyBoYWxmd2F5RGlyID0gbm9ybWFsaXplKGxpZ2h0RGlyICsgdmlld0Rpcik7IFxyXG4gICAgICAgIGZsb2F0IHNwZWMgPSBwb3cobWF4KGRvdCh2aWV3RGlyLCBoYWxmd2F5RGlyKSwgMC4wKSwgMi4wKTtcclxuXHJcbiAgICAgICAgdmVjMyBjb2xvciA9IHRleHR1cmUyRCh1Q29sb3JUZXh0dXJlLCB2VGV4Q29vcmQpLnJnYjtcclxuICAgICAgICB2ZWMzIGFtYmllbnQgPSBsaWdodC5hbWJpZW50ICogY29sb3I7XHJcbiAgICAgICAgdmVjMyBkaWZmdXNlID0gbGlnaHQuZGlmZnVzZSAqIGRpZmYgKiBjb2xvcjtcclxuICAgICAgICB2ZWMzIHNwZWN1bGFyID0gbGlnaHQuc3BlY3VsYXIgKiBzcGVjICogdmVjMygxLCAxLCAxKTtcclxuXHJcbiAgICAgICAgZmxvYXQgc2hhZG93ID0gY2FsY3VsYXRlU2hhZG93KHZMaWdodFNwYWNlUG9zaXRpb24sIG5vcm0sIGxpZ2h0RGlyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChhbWJpZW50ICsgKDEuMCAtIHNoYWRvdykgKiAoZGlmZnVzZSArIHNwZWN1bGFyKSkgKiBsaWdodC5jb2xvcjtcclxuICAgIH1cclxuICAgIHZlYzMgY2FsY3VsYXRlUG9pbnRMaWdodChQb2ludExpZ2h0IGxpZ2h0LCB2ZWMzIG5vcm0sIHZlYzMgd29ybGRTcGFjZVBvc2l0aW9uLCB2ZWMzIHZpZXdEaXIpIHtcclxuICAgICAgICB2ZWMzIGxpZ2h0RGlyID0gbm9ybWFsaXplKGxpZ2h0LnBvc2l0aW9uIC0gd29ybGRTcGFjZVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgZmxvYXQgZGlmZiA9IG1heChkb3Qobm9ybSwgbGlnaHREaXIpLCAwLjApO1xyXG5cclxuICAgICAgICAvLyB2ZWMzIHJlZmxlY3REaXIgPSByZWZsZWN0KC1saWdodERpciwgbm9ybSk7XHJcbiAgICAgICAgdmVjMyBoYWxmd2F5RGlyID0gbm9ybWFsaXplKGxpZ2h0RGlyICsgdmlld0Rpcik7IFxyXG4gICAgICAgIGZsb2F0IHNwZWMgPSBwb3cobWF4KGRvdCh2aWV3RGlyLCBoYWxmd2F5RGlyKSwgMC4wKSwgMi4wKTtcclxuXHJcbiAgICAgICAgZmxvYXQgZGlzdGFuY2UgPSBsZW5ndGgobGlnaHQucG9zaXRpb24gLSB3b3JsZFNwYWNlUG9zaXRpb24pO1xyXG4gICAgICAgIGZsb2F0IGF0dGVudWF0aW9uID0gMS4wIC8gKDEuMCArIGxpZ2h0LmxpbmVhciAqIGRpc3RhbmNlICsgKGxpZ2h0LnF1YWRyYXRpYyAqIGRpc3RhbmNlICogZGlzdGFuY2UpKTtcclxuXHJcbiAgICAgICAgdmVjMyBjb2xvciA9IHRleHR1cmUyRCh1Q29sb3JUZXh0dXJlLCB2VGV4Q29vcmQpLnJnYjtcclxuICAgICAgICB2ZWMzIGFtYmllbnQgPSBsaWdodC5hbWJpZW50ICogY29sb3I7XHJcbiAgICAgICAgdmVjMyBkaWZmdXNlID0gbGlnaHQuZGlmZnVzZSAqIGRpZmYgKiBjb2xvcjtcclxuICAgICAgICB2ZWMzIHNwZWN1bGFyID0gbGlnaHQuc3BlY3VsYXIgKiBzcGVjICogdmVjMygxLCAxLCAxKTtcclxuICAgICAgICBhbWJpZW50ICo9IGF0dGVudWF0aW9uO1xyXG4gICAgICAgIGRpZmZ1c2UgKj0gYXR0ZW51YXRpb247XHJcbiAgICAgICAgc3BlY3VsYXIgKj0gYXR0ZW51YXRpb247XHJcblxyXG4gICAgICAgIHJldHVybiAoYW1iaWVudCArIGRpZmZ1c2UgKyBzcGVjdWxhcikgKiBsaWdodC5jb2xvcjtcclxuICAgIH1cclxuICAgIHZlYzMgY2FsY3VsYXRlU3BvdExpZ2h0KFNwb3RMaWdodCBsaWdodCwgdmVjMyBub3JtLCB2ZWMzIHdvcmxkU3BhY2VQb3NpdGlvbiwgdmVjMyB2aWV3RGlyKSB7XHJcbiAgICAgICAgdmVjMyBsaWdodERpciA9IG5vcm1hbGl6ZShsaWdodC5wb3NpdGlvbiAtIHdvcmxkU3BhY2VQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIGZsb2F0IGRpZmYgPSBtYXgoZG90KG5vcm0sIGxpZ2h0RGlyKSwgMC4wKTtcclxuXHJcbiAgICAgICAgLy8gdmVjMyByZWZsZWN0RGlyID0gcmVmbGVjdCgtbGlnaHREaXIsIG5vcm0pO1xyXG4gICAgICAgIHZlYzMgaGFsZndheURpciA9IG5vcm1hbGl6ZShsaWdodERpciArIHZpZXdEaXIpOyBcclxuICAgICAgICBmbG9hdCBzcGVjID0gcG93KG1heChkb3Qodmlld0RpciwgaGFsZndheURpciksIDAuMCksIDIuMCk7XHJcblxyXG4gICAgICAgIGZsb2F0IGRpc3RhbmNlID0gbGVuZ3RoKGxpZ2h0LnBvc2l0aW9uIC0gd29ybGRTcGFjZVBvc2l0aW9uKTtcclxuICAgICAgICBmbG9hdCBhdHRlbnVhdGlvbiA9IDEuMCAvICgxLjAgKyBsaWdodC5saW5lYXIgKiBkaXN0YW5jZSArIChsaWdodC5xdWFkcmF0aWMgKiBkaXN0YW5jZSAqIGRpc3RhbmNlKSk7XHJcblxyXG4gICAgICAgIGZsb2F0IHRoZXRhID0gZG90KGxpZ2h0RGlyLCBub3JtYWxpemUoLWxpZ2h0LmRpcmVjdGlvbikpO1xyXG4gICAgICAgIGZsb2F0IGVwc2lsb24gPSBsaWdodC5jdXRPZmYgLSBsaWdodC5vdXRlckN1dE9mZjtcclxuICAgICAgICBmbG9hdCBpbnRlbnNpdHkgPSBjbGFtcCgodGhldGEgLSBsaWdodC5vdXRlckN1dE9mZikgLyBlcHNpbG9uLCAwLjAsIDEuMCk7XHJcblxyXG4gICAgICAgIHZlYzMgY29sb3IgPSB0ZXh0dXJlMkQodUNvbG9yVGV4dHVyZSwgdlRleENvb3JkKS5yZ2I7XHJcbiAgICAgICAgdmVjMyBhbWJpZW50ID0gbGlnaHQuYW1iaWVudCAqIGNvbG9yO1xyXG4gICAgICAgIHZlYzMgZGlmZnVzZSA9IGxpZ2h0LmRpZmZ1c2UgKiBkaWZmICogY29sb3I7XHJcbiAgICAgICAgdmVjMyBzcGVjdWxhciA9IGxpZ2h0LnNwZWN1bGFyICogc3BlYyAqIHZlYzMoMSwgMSwgMSk7XHJcbiAgICAgICAgYW1iaWVudCAqPSBhdHRlbnVhdGlvbiAqIGludGVuc2l0eTtcclxuICAgICAgICBkaWZmdXNlICo9IGF0dGVudWF0aW9uICogaW50ZW5zaXR5O1xyXG4gICAgICAgIHNwZWN1bGFyICo9IGF0dGVudWF0aW9uICogaW50ZW5zaXR5O1xyXG5cclxuICAgICAgICByZXR1cm4gKGFtYmllbnQgKyBkaWZmdXNlICsgc3BlY3VsYXIpICogbGlnaHQuY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgdm9pZCBtYWluKHZvaWQpIHtcclxuICAgICAgICB2ZWMzIG5vcm0gPSBub3JtYWxpemUodk5vcm1hbCk7XHJcbiAgICAgICAgdmVjMyB2aWV3RGlyID0gbm9ybWFsaXplKHVWaWV3UG9zIC0gdldvcmxkU3BhY2VQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHZlYzMgcmVzdWx0ID0gdmVjMygwLCAwLCAwKTtcclxuICAgICAgICByZXN1bHQgKz0gY2FsY3VsYXRlRGlyZWN0aW9uYWxMaWdodCh1RGlyZWN0aW9uYWxMaWdodCwgbm9ybSwgdmlld0Rpcik7XHJcbiAgICAgICAgZm9yKGludCBpID0gMDsgaSA8IE5fUE9JTlRMSUdIVFM7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gY2FsY3VsYXRlUG9pbnRMaWdodCh1UG9pbnRMaWdodFtpXSwgbm9ybSwgdldvcmxkU3BhY2VQb3NpdGlvbiwgdmlld0Rpcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihpbnQgaSA9IDA7IGkgPCBOX1NQT1RMSUdIVFM7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gY2FsY3VsYXRlU3BvdExpZ2h0KHVTcG90TGlnaHRbaV0sIG5vcm0sIHZXb3JsZFNwYWNlUG9zaXRpb24sIHZpZXdEaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHJlc3VsdCwgMS4wKTtcclxuICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgc3RhdGljIHVuaWZvcm1Mb2NhdGlvbnMgPSB7fVxyXG4gICAgc3RhdGljIGFzeW5jIHNldHVwRHJhdygvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsIGxpZ2h0cywgbGlnaHRWaWV3UHJvaiwgc2hhZG93TWFwKSB7XHJcbiAgICAgICAgYXdhaXQgRHJhd2FibGUuX3NldHVwRHJhdy5iaW5kKE9iaikoZ2wsXHJcbiAgICAgICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIE9iai5mcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcclxuICAgICAgICAgICAgICAgICAgICAjZGVmaW5lIE5fUE9JTlRMSUdIVFMgJHtsaWdodHMucG9pbnRMaWdodC5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgI2RlZmluZSBOX1NQT1RMSUdIVFMgJHtsaWdodHMuc3BvdExpZ2h0Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAke09iai5mcmFnbWVudFNoYWRlclNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iai5mcmFnbWVudFNoYWRlclNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jICgvKiogQHR5cGUge1dlYkdMUHJvZ3JhbX0gKi8gcHJvZ3JhbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsIFwiYVBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDEsIFwiYVRleENvb3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDIsIFwiYU5vcm1hbFwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgKC8qKiBAdHlwZSB7V2ViR0xQcm9ncmFtfSAqLyBwcm9ncmFtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51TWF0TW9kZWwgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1TWF0TW9kZWxcIik7XHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51TWF0TW9kZWxJbnZlcnNlVHJhbnNwb3NlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidU1hdE1vZGVsSW52ZXJzZVRyYW5zcG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIE9iai51bmlmb3JtTG9jYXRpb25zLnVNYXRWaWV3UHJvamVjdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVNYXRWaWV3UHJvamVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIE9iai51bmlmb3JtTG9jYXRpb25zLnVNYXRMaWdodFNwYWNlVmlld1Byb2plY3Rpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1TWF0TGlnaHRTcGFjZVZpZXdQcm9qZWN0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iai51bmlmb3JtTG9jYXRpb25zLnVDb2xvclRleHR1cmUgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1Q29sb3JUZXh0dXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVNoYWRvd01hcCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVTaGFkb3dNYXBcIik7XHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51U2hhZG93TWFwU2l6ZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVTaGFkb3dNYXBTaXplXCIpO1xyXG4gICAgICAgICAgICAgICAgT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVZpZXdQb3MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1Vmlld1Bvc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51RGlyZWN0aW9uYWxMaWdodCA9IHt9XHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51RGlyZWN0aW9uYWxMaWdodC5kaXJlY3Rpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1RGlyZWN0aW9uYWxMaWdodC5kaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51RGlyZWN0aW9uYWxMaWdodC5jb2xvciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVEaXJlY3Rpb25hbExpZ2h0LmNvbG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgT2JqLnVuaWZvcm1Mb2NhdGlvbnMudURpcmVjdGlvbmFsTGlnaHQuYW1iaWVudCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVEaXJlY3Rpb25hbExpZ2h0LmFtYmllbnRcIik7XHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51RGlyZWN0aW9uYWxMaWdodC5kaWZmdXNlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidURpcmVjdGlvbmFsTGlnaHQuZGlmZnVzZVwiKTtcclxuICAgICAgICAgICAgICAgIE9iai51bmlmb3JtTG9jYXRpb25zLnVEaXJlY3Rpb25hbExpZ2h0LnNwZWN1bGFyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidURpcmVjdGlvbmFsTGlnaHQuc3BlY3VsYXJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVBvaW50TGlnaHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxpZ2h0cy5wb2ludExpZ2h0LmZvckVhY2goKGwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51UG9pbnRMaWdodC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVBvaW50TGlnaHRbJHtpfV0ucG9zaXRpb25gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVBvaW50TGlnaHRbJHtpfV0uY29sb3JgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgYHVQb2ludExpZ2h0WyR7aX1dLmxpbmVhcmApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFkcmF0aWM6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVBvaW50TGlnaHRbJHtpfV0ucXVhZHJhdGljYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtYmllbnQ6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVBvaW50TGlnaHRbJHtpfV0uYW1iaWVudGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmdXNlOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgYHVQb2ludExpZ2h0WyR7aX1dLmRpZmZ1c2VgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXI6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVBvaW50TGlnaHRbJHtpfV0uc3BlY3VsYXJgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51U3BvdExpZ2h0ID0gW107XHJcbiAgICAgICAgICAgICAgICBsaWdodHMuc3BvdExpZ2h0LmZvckVhY2goKGwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBPYmoudW5pZm9ybUxvY2F0aW9ucy51U3BvdExpZ2h0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLnBvc2l0aW9uYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLmRpcmVjdGlvbmApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLmNvbG9yYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1dE9mZjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLmN1dE9mZmApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRlckN1dE9mZjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLm91dGVyQ3V0T2ZmYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhcjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLmxpbmVhcmApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFkcmF0aWM6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVNwb3RMaWdodFske2l9XS5xdWFkcmF0aWNgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1iaWVudDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLmFtYmllbnRgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlmZnVzZTogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGB1U3BvdExpZ2h0WyR7aX1dLmRpZmZ1c2VgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXI6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBgdVNwb3RMaWdodFske2l9XS5zcGVjdWxhcmApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShPYmoucHJvZ3JhbVNoYWRlcik7XHJcblxyXG4gICAgICAgIC8vIHNldCB1bmlmb3Jtc1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudU1hdExpZ2h0U3BhY2VWaWV3UHJvamVjdGlvbiwgZmFsc2UsIGxpZ2h0Vmlld1Byb2oudmFsdWVzKTtcclxuXHJcbiAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSk7XHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgc2hhZG93TWFwLnRleHR1cmUpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0xaShPYmoudW5pZm9ybUxvY2F0aW9ucy51U2hhZG93TWFwLCAxKTtcclxuXHJcbiAgICAgICAgZ2wudW5pZm9ybTJmdihPYmoudW5pZm9ybUxvY2F0aW9ucy51U2hhZG93TWFwU2l6ZSwgc2hhZG93TWFwLnNpemUudmFsdWVzKTtcclxuXHJcbiAgICAgICAgZ2wudW5pZm9ybTNmdihPYmoudW5pZm9ybUxvY2F0aW9ucy51RGlyZWN0aW9uYWxMaWdodC5kaXJlY3Rpb24sIGxpZ2h0cy5kaXJlY3Rpb25hbExpZ2h0LmRpcmVjdGlvbi52YWx1ZXMpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0zZnYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudURpcmVjdGlvbmFsTGlnaHQuY29sb3IsIGxpZ2h0cy5kaXJlY3Rpb25hbExpZ2h0LmNvbG9yLnZhbHVlcyk7XHJcbiAgICAgICAgZ2wudW5pZm9ybTFmKE9iai51bmlmb3JtTG9jYXRpb25zLnVEaXJlY3Rpb25hbExpZ2h0LmFtYmllbnQsIGxpZ2h0cy5kaXJlY3Rpb25hbExpZ2h0LmFtYmllbnQpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0xZihPYmoudW5pZm9ybUxvY2F0aW9ucy51RGlyZWN0aW9uYWxMaWdodC5kaWZmdXNlLCBsaWdodHMuZGlyZWN0aW9uYWxMaWdodC5kaWZmdXNlKTtcclxuICAgICAgICBnbC51bmlmb3JtMWYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudURpcmVjdGlvbmFsTGlnaHQuc3BlY3VsYXIsIGxpZ2h0cy5kaXJlY3Rpb25hbExpZ2h0LnNwZWN1bGFyKTtcclxuXHJcbiAgICAgICAgbGlnaHRzLnBvaW50TGlnaHQuZm9yRWFjaCgobCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KE9iai51bmlmb3JtTG9jYXRpb25zLnVQb2ludExpZ2h0W2ldLnBvc2l0aW9uLCBsLnBvc2l0aW9uLnZhbHVlcyk7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVBvaW50TGlnaHRbaV0uY29sb3IsIGwuY29sb3IudmFsdWVzKTtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKE9iai51bmlmb3JtTG9jYXRpb25zLnVQb2ludExpZ2h0W2ldLmxpbmVhciwgbC5saW5lYXIpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVBvaW50TGlnaHRbaV0ucXVhZHJhdGljLCBsLnF1YWRyYXRpYyk7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihPYmoudW5pZm9ybUxvY2F0aW9ucy51UG9pbnRMaWdodFtpXS5hbWJpZW50LCBsLmFtYmllbnQpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVBvaW50TGlnaHRbaV0uZGlmZnVzZSwgbC5kaWZmdXNlKTtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKE9iai51bmlmb3JtTG9jYXRpb25zLnVQb2ludExpZ2h0W2ldLnNwZWN1bGFyLCBsLnNwZWN1bGFyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlnaHRzLnNwb3RMaWdodC5mb3JFYWNoKChsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0zZnYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVNwb3RMaWdodFtpXS5wb3NpdGlvbiwgbC5wb3NpdGlvbi52YWx1ZXMpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KE9iai51bmlmb3JtTG9jYXRpb25zLnVTcG90TGlnaHRbaV0uZGlyZWN0aW9uLCBsLmRpcmVjdGlvbi52YWx1ZXMpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtM2Z2KE9iai51bmlmb3JtTG9jYXRpb25zLnVTcG90TGlnaHRbaV0uY29sb3IsIGwuY29sb3IudmFsdWVzKTtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKE9iai51bmlmb3JtTG9jYXRpb25zLnVTcG90TGlnaHRbaV0uY3V0T2ZmLCBsLmN1dE9mZik7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihPYmoudW5pZm9ybUxvY2F0aW9ucy51U3BvdExpZ2h0W2ldLm91dGVyQ3V0T2ZmLCBsLm91dGVyQ3V0T2ZmKTtcclxuICAgICAgICAgICAgZ2wudW5pZm9ybTFmKE9iai51bmlmb3JtTG9jYXRpb25zLnVTcG90TGlnaHRbaV0ubGluZWFyLCBsLmxpbmVhcik7XHJcbiAgICAgICAgICAgIGdsLnVuaWZvcm0xZihPYmoudW5pZm9ybUxvY2F0aW9ucy51U3BvdExpZ2h0W2ldLnF1YWRyYXRpYywgbC5xdWFkcmF0aWMpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVNwb3RMaWdodFtpXS5hbWJpZW50LCBsLmFtYmllbnQpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVNwb3RMaWdodFtpXS5kaWZmdXNlLCBsLmRpZmZ1c2UpO1xyXG4gICAgICAgICAgICBnbC51bmlmb3JtMWYoT2JqLnVuaWZvcm1Mb2NhdGlvbnMudVNwb3RMaWdodFtpXS5zcGVjdWxhciwgbC5zcGVjdWxhcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdGVhcmRvd25EcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCkge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0obnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGFsdGVybmF0aXZlIHNoYWRlciBmb3Igc2hhZG93IG1hcHBpbmdcclxuICAgIHN0YXRpYyBzaGFkb3dNYXBwaW5nVmVydGV4U2hhZGVyU291cmNlID0gYFxyXG4gICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgICAgICAvLyBwb3NpdGlvblxyXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzIGFQb3NpdGlvbjtcclxuICAgICAgICB1bmlmb3JtIG1hdDQgdU1hdE1vZGVsO1xyXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1TWF0TGlnaHRTcGFjZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyB2YXJ5aW5nIHZlYzMgdlBvcztcclxuXHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAvLyB2UG9zID0gdU1hdExpZ2h0U3BhY2UgKiB1TWF0TW9kZWwgKiB2ZWM0KGFQb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSB1TWF0TGlnaHRTcGFjZSAqIHVNYXRNb2RlbCAqIHZlYzQoYVBvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcbiAgICBzdGF0aWMgc2hhZG93TWFwcGluZ0ZyYWdtZW50U2hhZGVyU291cmNlID0gYFxyXG4gICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cclxuICAgICAgICAvLyB2YXJ5aW5nIHZlYzMgdlBvcztcclxuXHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuMCwgMS4wLCAwLjAsIDEuMCk7XHJcbiAgICAgICAgICAgIC8vIGdsX0ZyYWdDb2xvciA9IHZlYzQodmVjMyh2UG9zKS56LCAxLjApO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgc3RhdGljIHNoYWRvd01hcHBpbmdQcm9ncmFtU2hhZGVyID0gbnVsbDtcclxuICAgIHN0YXRpYyBzaGFkb3dVbmlmb3JtTG9jYXRpb25zID0ge307XHJcbiAgICBzdGF0aWMgYXN5bmMgc2V0dXBTaGFkb3dEcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCkge1xyXG4gICAgICAgIGlmICghT2JqLnNoYWRvd01hcHBpbmdQcm9ncmFtU2hhZGVyKSB7XHJcbiAgICAgICAgICAgIC8vIHN3aXRjaCBzdGF0aWMgc2hhZGVyc1xyXG4gICAgICAgICAgICBPYmouZHJhd1Byb2dyYW1TaGFkZXIgPSBPYmoucHJvZ3JhbVNoYWRlcjtcclxuICAgICAgICAgICAgT2JqLnByb2dyYW1TaGFkZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgT2JqLmRyYXdWZXJ0ZXhTaGFkZXJTb3VyY2UgPSBPYmoudmVydGV4U2hhZGVyU291cmNlO1xyXG4gICAgICAgICAgICBPYmouZHJhd0ZyYWdtZW50U2hhZGVyU291cmNlID0gT2JqLmZyYWdtZW50U2hhZGVyU291cmNlO1xyXG4gICAgICAgICAgICBPYmoudmVydGV4U2hhZGVyU291cmNlID0gT2JqLnNoYWRvd01hcHBpbmdWZXJ0ZXhTaGFkZXJTb3VyY2U7XHJcbiAgICAgICAgICAgIE9iai5mcmFnbWVudFNoYWRlclNvdXJjZSA9IE9iai5zaGFkb3dNYXBwaW5nRnJhZ21lbnRTaGFkZXJTb3VyY2U7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhZG93IG1hcHBpbmcnLCBPYmouZnJhZ21lbnRTaGFkZXJTb3VyY2UsIE9iai5zaGFkb3dNYXBwaW5nRnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgRHJhd2FibGUuX3NldHVwRHJhdy5iaW5kKE9iaikoZ2wsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBhc3luYyAoLyoqIEB0eXBlIHtXZWJHTFByb2dyYW19ICovIHByb2dyYW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgMCwgXCJhUG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXN5bmMgKC8qKiBAdHlwZSB7V2ViR0xQcm9ncmFtfSAqLyBwcm9ncmFtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqLnNoYWRvd1VuaWZvcm1Mb2NhdGlvbnMudU1hdE1vZGVsID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidU1hdE1vZGVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iai5zaGFkb3dVbmlmb3JtTG9jYXRpb25zLnVNYXRMaWdodFNwYWNlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidU1hdExpZ2h0U3BhY2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggc3RhdGljIHNoYWRlcnMgYmFja1xyXG4gICAgICAgICAgICBPYmouc2hhZG93TWFwcGluZ1Byb2dyYW1TaGFkZXIgPSBPYmoucHJvZ3JhbVNoYWRlcjtcclxuICAgICAgICAgICAgT2JqLnByb2dyYW1TaGFkZXIgPSBPYmouZHJhd1Byb2dyYW1TaGFkZXI7XHJcbiAgICAgICAgICAgIE9iai52ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBPYmouZHJhd1ZlcnRleFNoYWRlclNvdXJjZTtcclxuICAgICAgICAgICAgT2JqLmZyYWdtZW50U2hhZGVyU291cmNlID0gT2JqLmRyYXdGcmFnbWVudFNoYWRlclNvdXJjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdsLnVzZVByb2dyYW0oT2JqLnNoYWRvd01hcHBpbmdQcm9ncmFtU2hhZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzaGFkb3dEcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCwgc3RhY2spIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShPYmouc2hhZG93TWFwcGluZ1Byb2dyYW1TaGFkZXIpO1xyXG5cclxuICAgICAgICAvLyBwb3NpdGlvblxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcnMucG9zaXRpb24udmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcnMucG9zaXRpb24uZGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJzLnBvc2l0aW9uLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmRhdGEudmVydGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyBzZXQgdW5pZm9ybXNcclxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KE9iai5zaGFkb3dVbmlmb3JtTG9jYXRpb25zLnVNYXRNb2RlbCwgZmFsc2UsIHRoaXMubWF0LnZhbHVlcyk7XHJcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihPYmouc2hhZG93VW5pZm9ybUxvY2F0aW9ucy51TWF0TGlnaHRTcGFjZSwgZmFsc2UsIHN0YWNrLmhlYWQoKS52YWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBkcmF3XHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbFtPYmouZ2xNb2RlXSwgMCwgdGhpcy5kYXRhLnZlcnRpY2VzLmxlbmd0aCAvIDMpO1xyXG5cclxuICAgICAgICAvLyBkaXNhYmxlIHZlcnRleEF0dHJpYkFycmF5XHJcbiAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xyXG5cclxuICAgICAgICAvLyB1bmJpbmQgYnVmZmVyXHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuc2hhZG93RHJhdyhnbCwgc3RhY2spKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGxhbXBQb3N0ID0gbmV3IE9iaihcclxuICAgIHtcclxuICAgICAgICB1cmxzOiB7XHJcbiAgICAgICAgICAgIG9iajogXCIvYXNzZXRzL29ianMvbGlnaHRzL2xhbXBfcG9zdC9TdHJlZXRfTGFtcF9vYmoub2JqXCIsXHJcbiAgICAgICAgICAgIHRleHR1cmU6IFwiL2Fzc2V0cy90ZXh0dXJlcy9saWdodHMvbGFtcF9wb3N0L2xhbWJhX0RlZmF1bHRNYXRlcmlhbF9CYXNlQ29sb3IucG5nXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuICAgICwgTWF0NC5JZGVudGl0eSgpXHJcbiAgICAgICAgLnNjYWxlKG5ldyBWZWMzKDMsIDMsIDMpKVxyXG4gICAgICAgIC50cmFuc2xhdGUobmV3IFZlYzMoLTEuODUsIDAsIDUuNSkpKTtcclxubGFtcFBvc3QubGlnaHRzID0ge1xyXG4gICAgcG9pbnRMaWdodDogW3tcclxuICAgICAgICBuYW1lOiBcIkxhbXBQb3N0XCIsXHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgcG9zaXRpb246ICgpID0+IG5ldyBWZWM0KDAuMzUsIDMsIDAsIDEpLnRyYW5zZm9ybShsYW1wUG9zdC5tYXQpLnRvVmVjMygpLFxyXG4gICAgICAgIGNvbG9yOiBuZXcgVmVjMygxLCAxLCAxKSxcclxuICAgICAgICBsaW5lYXI6IDAuMDAzLFxyXG4gICAgICAgIHF1YWRyYXRpYzogMC4wNyxcclxuICAgICAgICBhbWJpZW50OiAwLjksXHJcbiAgICAgICAgZGlmZnVzZTogMSxcclxuICAgICAgICBzcGVjdWxhcjogMC41XHJcbiAgICB9XVxyXG59XHJcblxyXG5jb25zdCBvYmpzID0gW1xyXG4gICAgLy8gY3ViZSAxXHJcbiAgICAvLyBuZXcgT2JqKFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgdXJsczoge1xyXG4gICAgLy8gICAgICAgICAgICAgb2JqOiBcIi4uLy4uL2Fzc2V0cy9vYmpzL2N1YmUvY3ViZS5vYmpcIixcclxuICAgIC8vICAgICAgICAgICAgIHRleHR1cmU6IFsweGZmLCAweDAwLCAweDAwLCAweGZmXSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLCBNYXQ0LklkZW50aXR5KClcclxuICAgIC8vICAgICAgICAgLnRyYW5zbGF0ZShuZXcgVmVjMygwLCAwLCAwKSlcclxuICAgIC8vICAgICAgICAgLnNjYWxlKG5ldyBWZWMzKDEsIDEsIDEpKVxyXG4gICAgLy8gKSxcclxuICAgIG5ldyBPYmooXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmxzOiB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFwiLi4vLi4vYXNzZXRzL29ianMvYnVpbGRpbmdzL2J1aWxkaW5nMS9Db3R0YWdlX0ZSRUUub2JqXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9idWlsZGluZ3MvYnVpbGRpbmcxL0NvdHRhZ2VfRGlydF9CYXNlX0NvbG9yLmpwZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgICAsIE1hdDQuSWRlbnRpdHkoKVxyXG4gICAgICAgICAgICAuc2NhbGUobmV3IFZlYzMoMiwgMiwgMikpXHJcbiAgICAgICAgICAgIC5yb3RhdGUodG9SYWQoOTApLCBuZXcgVmVjMygwLCAxLCAwKSlcclxuICAgICAgICAgICAgLnRyYW5zbGF0ZShuZXcgVmVjMygwLCAwLCAxMCkpKSxcclxuICAgIGxhbXBQb3N0LFxyXG4gICAgLy8gbmV3IE9iaihcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHVybHM6IHtcclxuICAgIC8vICAgICAgICAgICAgIG9iajogXCIuLi8uLi9hc3NldHMvb2Jqcy9yb2FkX2l0ZW1zL2NvbmUvdHJhZmZpY19jb25lLm9ialwiLFxyXG4gICAgLy8gICAgICAgICAgICAgdGV4dHVyZTogXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvcm9hZF9pdGVtcy9jb25lL3RyYWZmaWMgY29uZV9CYXNlQ29sb3IucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgICwgTWF0NC5JZGVudGl0eSgpXHJcbiAgICAvLyAgICAgICAgIC5zY2FsZShuZXcgVmVjMygyLCAyLCAyKSlcclxuICAgIC8vICAgICAgICAgLnRyYW5zbGF0ZShuZXcgVmVjMygwLCAwLCAtNDUpKSksXHJcbiAgICAvLyBuZXcgT2JqKFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgdXJsczoge1xyXG4gICAgLy8gICAgICAgICAgICAgb2JqOiBcIi4uLy4uL2Fzc2V0cy9vYmpzL3JvYWRfaXRlbXMvY29uZS90cmFmZmljX2NvbmUub2JqXCIsXHJcbiAgICAvLyAgICAgICAgICAgICB0ZXh0dXJlOiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9yb2FkX2l0ZW1zL2NvbmUvdHJhZmZpYyBjb25lX0Jhc2VDb2xvci5wbmdcIixcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLCBNYXQ0LklkZW50aXR5KClcclxuICAgIC8vICAgICAgICAgLnNjYWxlKG5ldyBWZWMzKDIsIDIsIDIpKVxyXG4gICAgLy8gICAgICAgICAudHJhbnNsYXRlKG5ldyBWZWMzKDEsIDAsIC00NCkpKSxcclxuICAgIC8vIG5ldyBPYmooXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICB1cmxzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBvYmo6IFwiLi4vLi4vYXNzZXRzL29ianMvcm9hZF9pdGVtcy9jb25lL3RyYWZmaWNfY29uZS5vYmpcIixcclxuICAgIC8vICAgICAgICAgICAgIHRleHR1cmU6IFwiLi4vLi4vYXNzZXRzL3RleHR1cmVzL3JvYWRfaXRlbXMvY29uZS90cmFmZmljIGNvbmVfQmFzZUNvbG9yLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAsIE1hdDQuSWRlbnRpdHkoKVxyXG4gICAgLy8gICAgICAgICAuc2NhbGUobmV3IFZlYzMoMiwgMiwgMikpXHJcbiAgICAvLyAgICAgICAgIC50cmFuc2xhdGUobmV3IFZlYzMoLTEuNSwgMCwgLTQ0LjMzKSkpLFxyXG5dXHJcblxyXG5leHBvcnQgeyBvYmpzIH07IiwiaW1wb3J0IHsgTWF0NCwgVmVjMywgdG9SYWQgfSBmcm9tIFwid2ViZ2wtYmFzaWMtbGliXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4uL2RyYXdhYmxlLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRPYmosIGxvYWRUZXh0dXJlIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL2xvZ2dlci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IGV4dGVuZHMgRHJhd2FibGUge1xyXG4gICAgZHJhdygvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wsIHN0YWNrLCBwb2ludHMpIHtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKFBvaW50LnByb2dyYW1TaGFkZXIpO1xyXG5cclxuICAgICAgICAvLyBwb3NpdGlvblxyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmJ1ZmZlcnMucG9zaXRpb24udmFsdWUpO1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHBvaW50cyksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB1bmlmb3Jtc1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoUG9pbnQudW5pZm9ybUxvY2F0aW9ucy51TWF0Vmlld1Byb2plY3Rpb24sIGZhbHNlLCBzdGFjay5oZWFkKCkudmFsdWVzKTtcclxuXHJcbiAgICAgICAgLy8gZHJhd1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2xbUG9pbnQuZ2xNb2RlXSwgMCwgcG9pbnRzLmxlbmd0aCAvIDMpO1xyXG5cclxuICAgICAgICAvLyBkaXNhYmxlIHZlcnRleEF0dHJpYkFycmF5XHJcbiAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xyXG5cclxuICAgICAgICAvLyB1bmJpbmQgYnVmZmVyXHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnbE1vZGUgPSBcIlBPSU5UU1wiO1xyXG4gICAgc3RhdGljIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgXHJcbiAgICAvLyBwb3NpdGlvblxyXG4gICAgYXR0cmlidXRlIHZlYzMgYVBvc2l0aW9uO1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVNYXRWaWV3UHJvamVjdGlvbjtcclxuICAgIFxyXG4gICAgdm9pZCBtYWluKHZvaWQpIHtcclxuICAgICAgICBnbF9Qb3NpdGlvbiA9IHVNYXRWaWV3UHJvamVjdGlvbiAqIHZlYzQoYVBvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgIGdsX1BvaW50U2l6ZSA9IDUuMDtcclxuICAgIH1cclxuICAgIGBcclxuICAgIHN0YXRpYyBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4odm9pZCkge1xyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMSwgMCwgMCwgMS4wKTtcclxuICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBzdGF0aWMgdW5pZm9ybUxvY2F0aW9ucyA9IHt9XHJcbiAgICBzdGF0aWMgYXN5bmMgc2V0dXBEcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCkge1xyXG4gICAgICAgIGF3YWl0IERyYXdhYmxlLl9zZXR1cERyYXcuYmluZChQb2ludCkoZ2wsIG51bGwsXHJcbiAgICAgICAgICAgIGFzeW5jICgvKiogQHR5cGUge1dlYkdMUHJvZ3JhbX0gKi8gcHJvZ3JhbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsIFwiYVBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyAoLyoqIEB0eXBlIHtXZWJHTFByb2dyYW19ICovIHByb2dyYW0pID0+IHtcclxuICAgICAgICAgICAgICAgIFBvaW50LnVuaWZvcm1Mb2NhdGlvbnMudU1hdFZpZXdQcm9qZWN0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidU1hdFZpZXdQcm9qZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShQb2ludC5wcm9ncmFtU2hhZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGVhcmRvd25EcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCkge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0obnVsbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYXQ0LCBWZWMzIH0gZnJvbSBcIndlYmdsLWJhc2ljLWxpYlwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuLi9kcmF3YWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkVGV4dHVyZSwgemlwIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL2xvZ2dlci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNreWJveCBleHRlbmRzIERyYXdhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIG5hbWUsIG1hdCA9IE1hdDQuSWRlbnRpdHkoKSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEsIG1hdCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXR1cCgvKiogQHR5cGUge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gKi8gZ2wpIHtcclxuICAgICAgICBhd2FpdCBzdXBlci5zZXR1cChnbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAtMS4wLCAxLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcclxuICAgICAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAxLjAsIDEuMCwgLTEuMCxcclxuICAgICAgICAgICAgLTEuMCwgMS4wLCAtMS4wLFxyXG5cclxuICAgICAgICAgICAgLTEuMCwgLTEuMCwgMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAtMS4wLCAxLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgLTEuMCxcclxuICAgICAgICAgICAgLTEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDEuMCxcclxuXHJcbiAgICAgICAgICAgIDEuMCwgLTEuMCwgLTEuMCxcclxuICAgICAgICAgICAgMS4wLCAtMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDEuMCwgMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXHJcblxyXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAxLjAsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAxLjAsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDEuMCxcclxuICAgICAgICAgICAgLTEuMCwgLTEuMCwgMS4wLFxyXG5cclxuICAgICAgICAgICAgLTEuMCwgMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAxLjAsIDEuMCwgLTEuMCxcclxuICAgICAgICAgICAgMS4wLCAxLjAsIDEuMCxcclxuICAgICAgICAgICAgMS4wLCAxLjAsIDEuMCxcclxuICAgICAgICAgICAgLTEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgLTEuMCxcclxuXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDEuMCxcclxuICAgICAgICAgICAgMS4wLCAtMS4wLCAtMS4wLFxyXG4gICAgICAgICAgICAxLjAsIC0xLjAsIC0xLjAsXHJcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDEuMCxcclxuICAgICAgICAgICAgMS4wLCAtMS4wLCAxLjBcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRzID0gW1xyXG4gICAgICAgICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksXHJcbiAgICAgICAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcclxuICAgICAgICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aLFxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoemlwKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLnVybHMpLCB0YXJnZXRzKS5tYXAoKHsgZmlyc3Q6IHVybCwgc2Vjb25kOiB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9hZFRleHR1cmUoZ2wsIHRoaXMudGV4dHVyZSwgdXJsLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlS2luZDogZ2wuVEVYVFVSRV9DVUJFX01BUCxcclxuICAgICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCwgc3RhY2spIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShTa3lib3gucHJvZ3JhbVNoYWRlcik7XHJcblxyXG4gICAgICAgIC8vIHBvc2l0aW9uXHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVycy5wb3NpdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVycy5wb3NpdGlvbi5kaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcnMucG9zaXRpb24uZGlydHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRoaXMuZGF0YS52ZXJ0aWNlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIHNldCB1bmlmb3Jtc1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoU2t5Ym94LnVuaWZvcm1Mb2NhdGlvbnMudU1hdCwgZmFsc2UsIHN0YWNrLmhlYWQoKS52YWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBiaW5kIHRleHR1cmVcclxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0aGlzLnRleHR1cmUpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0xaShTa3lib3gudW5pZm9ybUxvY2F0aW9ucy51Q3ViZU1hcCwgMCk7XHJcblxyXG4gICAgICAgIC8vIGRyYXdcclxuICAgICAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcclxuICAgICAgICAvLyBnbC5kcmF3RWxlbWVudHMoZ2xbU2t5Ym94LmdsTW9kZV0sIHRoaXMuZGF0YS5pbmRpY2VzLmxlbmd0aCwgZ2wuVU5TSUdORURfU0hPUlQsIDApO1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2xbU2t5Ym94LmdsTW9kZV0sIDAsIHRoaXMuZGF0YS52ZXJ0aWNlcy5sZW5ndGggLyAzKTtcclxuICAgICAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVTUyk7XHJcblxyXG4gICAgICAgIC8vIGRpc2FibGUgdmVydGV4QXR0cmliQXJyYXlcclxuICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XHJcblxyXG4gICAgICAgIC8vIHVuYmluZCB0ZXh0dXJlXHJcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgbnVsbCk7XHJcblxyXG4gICAgICAgIC8vIHVuYmluZCBidWZmZXJcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnbE1vZGUgPSBcIlRSSUFOR0xFU1wiO1xyXG4gICAgc3RhdGljIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgYXR0cmlidXRlIHZlYzMgYVBvc2l0aW9uO1xyXG4gIFxyXG4gICAgdW5pZm9ybSBtYXQ0IHVNYXQ7XHJcbiAgXHJcbiAgICB2YXJ5aW5nIHZlYzMgdGV4Q29vcmRzO1xyXG4gIFxyXG4gICAgdm9pZCBtYWluKHZvaWQpIHtcclxuICAgICAgICB0ZXhDb29yZHMgPSBhUG9zaXRpb247XHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSB1TWF0ICogdmVjNChhUG9zaXRpb24sIDEuMCk7XHJcbiAgICB9XHJcbiAgICBgXHJcbiAgICBzdGF0aWMgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuXHJcbiAgICB1bmlmb3JtIHNhbXBsZXJDdWJlIHVDdWJlTWFwO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjMyB0ZXhDb29yZHM7XHJcblxyXG4gICAgdm9pZCBtYWluKHZvaWQpIHtcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlQ3ViZSh1Q3ViZU1hcCwgdGV4Q29vcmRzKTtcclxuICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBzdGF0aWMgdW5pZm9ybUxvY2F0aW9ucyA9IHt9XHJcbiAgICBzdGF0aWMgYXN5bmMgc2V0dXBEcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCkge1xyXG4gICAgICAgIGF3YWl0IERyYXdhYmxlLl9zZXR1cERyYXcuYmluZChTa3lib3gpKGdsLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBhc3luYyAoLyoqIEB0eXBlIHtXZWJHTFByb2dyYW19ICovIHByb2dyYW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAwLCBcImFQb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgKC8qKiBAdHlwZSB7V2ViR0xQcm9ncmFtfSAqLyBwcm9ncmFtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTa3lib3gudW5pZm9ybUxvY2F0aW9ucy51TWF0ID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidU1hdFwiKTtcclxuICAgICAgICAgICAgICAgIFNreWJveC51bmlmb3JtTG9jYXRpb25zLnVDdWJlTWFwID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidUN1YmVNYXBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBnbC51c2VQcm9ncmFtKFNreWJveC5wcm9ncmFtU2hhZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGVhcmRvd25EcmF3KC8qKiBAdHlwZSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSAqLyBnbCkge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0obnVsbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNreWJveGVzID0gW1xyXG4gICAgLy8gZGF5XHJcbiAgICBuZXcgU2t5Ym94KHtcclxuICAgICAgICB1cmxzOiB7XHJcbiAgICAgICAgICAgIHBvc3g6IFwiLi4vLi4vYXNzZXRzL3RleHR1cmVzL3NreWJveC9kYXkvcG9zeC5qcGdcIixcclxuICAgICAgICAgICAgbmVneDogXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvc2t5Ym94L2RheS9uZWd4LmpwZ1wiLFxyXG4gICAgICAgICAgICBwb3N5OiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9za3lib3gvZGF5L3Bvc3kuanBnXCIsXHJcbiAgICAgICAgICAgIG5lZ3k6IFwiLi4vLi4vYXNzZXRzL3RleHR1cmVzL3NreWJveC9kYXkvbmVneS5qcGdcIixcclxuICAgICAgICAgICAgcG9zejogXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvc2t5Ym94L2RheS9wb3N6LmpwZ1wiLFxyXG4gICAgICAgICAgICBuZWd6OiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9za3lib3gvZGF5L25lZ3ouanBnXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sIFwiRGF5XCIpLFxyXG4gICAgLy8gbmlnaHRcclxuICAgIG5ldyBTa3lib3goe1xyXG4gICAgICAgIHVybHM6IHtcclxuICAgICAgICAgICAgcG9zeDogXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvc2t5Ym94L25pZ2h0L3Bvc3gucG5nXCIsXHJcbiAgICAgICAgICAgIG5lZ3g6IFwiLi4vLi4vYXNzZXRzL3RleHR1cmVzL3NreWJveC9uaWdodC9uZWd4LnBuZ1wiLFxyXG4gICAgICAgICAgICBwb3N5OiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9za3lib3gvbmlnaHQvcG9zeS5wbmdcIixcclxuICAgICAgICAgICAgbmVneTogXCIuLi8uLi9hc3NldHMvdGV4dHVyZXMvc2t5Ym94L25pZ2h0L25lZ3kucG5nXCIsXHJcbiAgICAgICAgICAgIHBvc3o6IFwiLi4vLi4vYXNzZXRzL3RleHR1cmVzL3NreWJveC9uaWdodC9wb3N6LnBuZ1wiLFxyXG4gICAgICAgICAgICBuZWd6OiBcIi4uLy4uL2Fzc2V0cy90ZXh0dXJlcy9za3lib3gvbmlnaHQvbmVnei5wbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgfSwgXCJOaWdodFwiKSxcclxuXVxyXG5cclxuZXhwb3J0IHsgc2t5Ym94ZXMgfTsiLCJpbXBvcnQgbG9nZ2VyIGZyb20gXCIuL2xvZ2dlci5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRPYmoodXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICBsb2dnZXIuZShgRmFpbGVkIHRvIGxvYWQgb2JqOiAke3VybH1gKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggb2JqXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICBjb25zdCBvYmogPSBwYXJzZU9iaih0ZXh0KTtcclxuICAgIFxyXG4gICAgbG9nZ2VyLmQoYE9iajogTG9hZGVkICR7dXJsfWAsIGZhbHNlKTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlT2JqKC8qKiBAdHlwZSB7c3RyaW5nfSAqL3RleHQpIHtcclxuICAgIGNvbnN0IG9ianMgPSBbXVxyXG4gICAgbGV0IHJhd0RhdGEgPSB7XHJcbiAgICAgICAgdmVydGljZXM6IFtbMCwgMCwgMF1dLFxyXG4gICAgICAgIG5vcm1hbHM6IFtbMCwgMCwgMF1dLFxyXG4gICAgICAgIHRleENvb3JkczogW1swLCAwXV0sXHJcbiAgICB9O1xyXG4gICAgbGV0IG9iaiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0ZXh0LnNwbGl0KFwiXFxuXCIpLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2ZpcnN0LCAuLi5yZXN0XSA9IGxpbmUudHJpbSgpLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChmaXJzdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI1wiOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGNvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwib1wiOiB7XHJcbiAgICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVzdC5qb2luKFwiX1wiKSxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4Q29vcmRzOiBbXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2XCI6IHtcclxuICAgICAgICAgICAgICAgIHJhd0RhdGEudmVydGljZXMucHVzaChyZXN0Lm1hcChwYXJzZUZsb2F0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidm5cIjoge1xyXG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsXHJcbiAgICAgICAgICAgICAgICByYXdEYXRhLm5vcm1hbHMucHVzaChyZXN0Lm1hcChwYXJzZUZsb2F0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidnRcIjoge1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgcmF3RGF0YS50ZXhDb29yZHMucHVzaChyZXN0Lm1hcChwYXJzZUZsb2F0KSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZlwiOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWNlXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGRWZXJ0ZXgoLyoqIEB0eXBlIHtzdHJpbmd9ICovIHZlcnRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdmVydGV4LnNwbGl0KFwiL1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnZlcnRpY2VzLnB1c2goLi4ucmF3RGF0YS52ZXJ0aWNlc1twYXJzZUludChwYXJ0c1swXSldKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmoudGV4Q29vcmRzLnB1c2goLi4ucmF3RGF0YS50ZXhDb29yZHNbcGFyc2VJbnQocGFydHNbMV0pXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm5vcm1hbHMucHVzaCguLi5yYXdEYXRhLm5vcm1hbHNbcGFyc2VJbnQocGFydHNbMl0pXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtVHJpYW5nbGVzID0gcmVzdC5sZW5ndGggLSAyO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UcmlhbmdsZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFZlcnRleChyZXN0WzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRWZXJ0ZXgocmVzdFtpICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFZlcnRleChyZXN0W2kgKyAyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwic1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZ1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwibXRsbGliXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VtdGxcIjpcclxuICAgICAgICAgICAgY2FzZSBcIlwiOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmUgc21vb3RoaW5nIGdyb3VwLCBncm91cCBhbmQgbWF0ZXJpYWxzXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIudyhcIlVuaGFuZGxlZCB0b2tlbjogXCIgKyBmaXJzdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJhd0RhdGEpO1xyXG5cclxuICAgIHJldHVybiBvYmpzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRleHR1cmUoLyoqIEB0eXBlIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9ICovIGdsLCB0ZXgsIHNvdXJjZSwgb3B0aW9ucykge1xyXG4gICAgZ2wuYmluZFRleHR1cmUob3B0aW9ucy50ZXh0dXJlS2luZCwgdGV4KTtcclxuICAgIGdsLnRleEltYWdlMkQob3B0aW9ucy50YXJnZXQsIDAsIGdsLlJHQkEsIDEsIDEsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG5ldyBVaW50OEFycmF5KFsweGZmLCAweGZmLCAweGZmLCAweGZmXSkpO1xyXG4gICAgZ2wuYmluZFRleHR1cmUob3B0aW9ucy50ZXh0dXJlS2luZCwgbnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKG9wdGlvbnMudGV4dHVyZUtpbmQsIHRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2wudGV4SW1hZ2UyRChvcHRpb25zLnRhcmdldCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkob3B0aW9ucy50ZXh0dXJlS2luZCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShvcHRpb25zLnRleHR1cmVLaW5kLCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKG9wdGlvbnMudGV4dHVyZUtpbmQsIGdsLlRFWFRVUkVfV1JBUF9TLCBvcHRpb25zLnRleHR1cmVXcmFwID8/IGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShvcHRpb25zLnRleHR1cmVLaW5kLCBnbC5URVhUVVJFX1dSQVBfVCwgb3B0aW9ucy50ZXh0dXJlV3JhcCA/PyBnbC5DTEFNUF9UT19FREdFKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5taXBtYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKG9wdGlvbnMudGV4dHVyZUtpbmQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKG9wdGlvbnMudGV4dHVyZUtpbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKG9wdGlvbnMudGV4dHVyZUtpbmQsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvZ2dlci5kKGBUZXh0dXJlOiBMb2FkZWQgJHtzb3VyY2V9YCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVycihcIkVycm9yIGxvYWRpbmcgdGV4dHVyZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKG9wdGlvbnMudGFyZ2V0LCB0ZXgpO1xyXG4gICAgICAgICAgICBnbC50ZXhJbWFnZTJEKG9wdGlvbnMudGFyZ2V0LCAwLCBnbC5SR0JBLCAxLCAxLCAwLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBuZXcgVWludDhBcnJheShzb3VyY2UpKTtcclxuICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUob3B0aW9ucy50YXJnZXQsIG51bGwpO1xyXG4gICAgICAgICAgICBsb2dnZXIuZChgVGV4dHVyZTogTG9hZGVkIHJhd2ApO1xyXG4gICAgICAgICAgICByZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWooXCJJbnZhbGlkIHRleHR1cmUgc291cmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gemlwKGEsIGIpIHtcclxuICAgIHJldHVybiBhLm1hcCgoaywgaSkgPT4gKHsgZmlyc3Q6IGssIHNlY29uZDogYltpXSB9KSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9