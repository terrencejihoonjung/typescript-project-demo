// No new object can be created from abstract classes. They are like blueprints
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculations
    return 8;
  }
}

// It is the responsibility of this class to create the objects
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstPhoto: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }

  // Override
  //   getReelTime(): number {
  //     return 4;
  //   }
}

const tj = new Instagram("test", "test", 3);
tj.getReelTime();
