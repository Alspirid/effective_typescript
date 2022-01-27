// Things to Remember

// Prefer type declarations (: Type) to type assertions (as Type).
// Know how to annotate the return type of an arrow function.
// Use type assertions and non-null assertions when you know something about types that TypeScript does not.

interface Person {
  name: string;
}

const alice: Person = { name: "Alice" }; // Type is Person
const bob = { name: "Bob" } as Person; // Type is Person

// In general, you should prefer type declarations to type assertions. Here’s why:

const Alice: Person = {};
// ~~~~~ Property 'name' is missing in type '{}'
//       but required in type 'Person'
const Bob = {} as Person; // No error

const Alicee: Person = {
  name: "Alice",
  occupation: "TypeScript developer",
  // ~~~~~~~~~ Object literal may only specify known properties
  //           and 'occupation' does not exist in type 'Person'
};
const Bo = {
  name: "Bob",
  occupation: "JavaScript developer",
} as Person; // No error

const BB = <Person>{}; // original syntax for assertions in TS === const BB = {} as Person;

const people = ["alice", "bob", "jan"].map((name) => {
  const person: Person = { name };
  return person;
}); // Type is Person[]

const ppl: Person[] = ["alice", "bob", "jan"].map((name): Person => ({ name }));
