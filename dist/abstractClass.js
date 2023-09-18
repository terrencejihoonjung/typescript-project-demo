"use strict";
// No new object can be created from abstract classes. They are like blueprints
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculations
        return 8;
    }
}
// It is the responsibility of this class to create the objects
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burstPhoto) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstPhoto = burstPhoto;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const tj = new Instagram("test", "test", 3);
tj.getReelTime();
