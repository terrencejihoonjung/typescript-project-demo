"use strict";
// If anyone wants to create a feature, they must always follow this interface
// To successfully implement an interface, a class MUST have the same data as the interface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// What if I want more data? More than the interface? --> Simply add more!, it's okay.
// What if we have multiple interfaces? --> adhere to both!
class YouTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
