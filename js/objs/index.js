import { ground, Ground } from "./ground.js";
// import { objs, Obj } from "./obj.js";
import { car, Car } from "./car.js";
import { skyboxes, Skybox } from "./skybox.js";
import { objs, Obj } from "./obj.js";

const objGroups = [
    // {
    //     name: "objs",
    //     setupDraw: Obj.setupDraw,
    //     teardownDraw: Obj.teardownDraw,
    //     elements: [...objs],
    // },
    {
        name: "car",
        setupDraw: Car.setupDraw,
        teardownDraw: Car.teardownDraw,
        elements: [car],
    },
    {
        name: "objs",
        setupDraw: Obj.setupDraw,
        teardownDraw: Obj.teardownDraw,
        elements: [...objs],
    },
    {
        name: "ground",
        setupDraw: Ground.setupDraw,
        teardownDraw: Ground.teardownDraw,
        elements: [...ground],
    },
];

const skyboxesGroup = {
    name: "skybox",
    setupDraw: Skybox.setupDraw,
    teardownDraw: Skybox.teardownDraw,
    elements: [...skyboxes],
    activeIndex: 0,
}

export { objGroups, skyboxesGroup };