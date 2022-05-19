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

export { keyboard };