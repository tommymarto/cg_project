import { Mat4, Mat } from "webgl-basic-lib";

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
export function Orthogonal(left, right, bottom, top, near, far) {
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

    return Mat4.FromArrayCM(arr);
}