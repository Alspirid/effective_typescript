/* 
Things to Remember

Understand how TypeScript infers a type from a constant by widening it.
Familiarize yourself with the ways you can affect this behavior: const, type annotations, context, and as const.
*/

interface Vector {
  x: number;
  y: number;
  z: number;
}

function getComponent(v: Vector, axis: "x" | "y" | "z") {
  return v[axis];
}

let axis = "x"; // const will fix the error
let vec = { x: 1, y: 2, z: 3 };
getComponent(vec, axis);

const mixed = ["x", 1];
/*
what should the type of mixed be? Here are a few possibilities:

('x' | 1)[]
['x', 1]
[string, number]
readonly [string, number]
(string|number)[]
readonly (string|number)[]
[any, any]
any[]

*/

const v1_1 = {
  x: 1,
  y: 2,
}; // type is { x: number; y: number; }

const v1_2 = {
  x: 1 as const,
  y: 2,
}; // type is { x: 1; y: number; }

const v1_3 = {
  x: 1,
  y: 2,
} as const; // type is { readonly x: number; readonly y: number; }

// When you write as const after a value, TypeScript will infer
// the narrowest possible type for it. There is no widening.

const a1 = [1, 2, 3]; // type is number[]

const a2 = [1, 2, 3] as const; // type is readonly number[]

const a3: readonly number[] = [1, 2, 3]; // type is readonly number[]

const a4: ReadonlyArray<number> = [1, 2, 3]; // type is readonly number[]
