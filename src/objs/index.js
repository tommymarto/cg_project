import { ground, Ground } from "./ground.js";
// import { objs, Obj } from "./obj.js";
import { car, Car } from "./car.js";
import { skyboxes, Skybox } from "./skybox.js";
import { objs, Obj } from "./obj.js";

const objGroups = [
    {
        name: "car",
        setupDraw: Car.setupDraw,
        teardownDraw: Car.teardownDraw,
        setupShadowDraw: Car.setupShadowDraw,
        elements: [car],
    },
    {
        name: "objs",
        setupDraw: Obj.setupDraw,
        teardownDraw: Obj.teardownDraw,
        setupShadowDraw: Obj.setupShadowDraw,
        elements: [...objs],
    },
];

const groundGroup = {
    name: "ground",
    setupDraw: Ground.setupDraw,
    teardownDraw: Ground.teardownDraw,
    setupShadowDraw: Ground.setupShadowDraw,
    elements: [...ground],
}

const skyboxesGroup = {
    name: "skybox",
    setupDraw: Skybox.setupDraw,
    teardownDraw: Skybox.teardownDraw,
    elements: [...skyboxes],
    activeIndex: 0,
}

export { objGroups, skyboxesGroup, groundGroup };