// Things to Remember

// Understand that arrays are objects, so their keys are strings, not numbers. number as an index signature is a purely TypeScript construct which is designed to help catch bugs.
// Prefer Array, tuple, or ArrayLike types to using number in an index signature yourself.

const arr = [1, 2, 3];

for (const i in arr) {
  console.log(typeof i);
}
