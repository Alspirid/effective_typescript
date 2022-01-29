// Things to Remember

// Consider applying type annotations to entire function expressions, rather than to their parameters and return type.
// If you’re writing the same type signature repeatedly, factor out a function type or look for an existing one. If you’re a library author, provide types for common callbacks.
// Use typeof fn to match the signature of another function.

type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = (sides) => {
  /* ... */
};

type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;

const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};
