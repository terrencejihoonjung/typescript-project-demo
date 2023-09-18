// interface TakePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }

// // If anyone wants to create a feature, they must always follow this interface
// // To successfully implement an interface, a class MUST have the same data as the interface
// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }

// interface Story {
//   createStory(): void;
// }

// // What if I want more data? More than the interface? --> Simply add more!, it's okay.
// // What if we have multiple interfaces? --> adhere to both!
// class YouTube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     public short: string
//   ) {}

//   createStory(): void {
//     console.log("Story was created");
//   }
// }
