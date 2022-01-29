type Vec3D = Record<"x" | "y" | "z", number>;
// Type Vec3D = {
//   x: number;
//   y: number;
//   z: number;
// }

type Vec3D1 = { [k in "x" | "y" | "z"]: number };
// Same as above
type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };
// Type ABC = {
//   a: number;
//   b: string;
//   c: number;
// }
