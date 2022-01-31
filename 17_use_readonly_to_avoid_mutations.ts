/* Things to Remember

If your function does not modify its parameters then declare them readonly. This makes its contract clearer and prevents inadvertent mutations in its implementation.
Use readonly to prevent errors with mutation and to find the places in your code where mutations occur.
Understand the difference between const and readonly.
Understand that readonly is shallow.
*/

function arraySum(arr: readonly number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    // ~~~ 'pop' does not exist on type 'readonly number[]'
    sum += num;
  }
  return sum;
}

/*
When you declare a parameter readonly, a few things happen:

TypeScript checks that the parameter isn’t mutated in the function body.
Callers are assured that your function doesn’t mutate the parameter.
Callers may pass your function a readonly array.

*/
