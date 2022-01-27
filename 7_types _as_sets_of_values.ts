/* Things to Remember

Think of types as sets of values (the type’s domain). These sets can either be finite (e.g., boolean or literal types) or infinite (e.g., number or string).
TypeScript types form intersecting sets (a Venn diagram) rather than a strict hierarchy. Two types can overlap without either being a subtype of the other.
Remember that an object can still belong to a type even if it has additional properties that were not mentioned in the type declaration.
Type operations apply to a set’s domain. The intersection of A and B is the intersection of A’s domain and B’s domain. For object types, this means that values in A & B have the properties of both A and B.
Think of “extends,” “assignable to,” and “subtype of” as synonyms for “subset of.”
*/

const x: never = 12;
// ~ Type '12' is not assignable to type 'never'

// The next smallest sets are those which contain single values. These correspond to literal types in TypeScript, also known as unit types:

type A = "A";
type B = "B";
type Twelve = 12;
// To form types with two or three values, you can union unit types:

type AB = "A" | "B";
type AB12 = "A" | "B" | 12;
// and so on. Union types correspond to unions of sets of values.

// The word “assignable” appears in many TypeScript errors.
// In the context of sets of values, it means either “member of” (for a relationship between a value and a type) or “subset of” (for a relationship between two types):

const a: AB = "A"; // OK, value 'A' is a member of the set {'A', 'B'}
const c: AB = "C";
// ~ Type '"C"' is not assignable to type 'AB'

// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}

declare let twelve: AB12;
const back: AB = twelve;
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

// The & operator computes the intersection of two types. What sorts of values belong to the PersonSpan type?
// On first glance the Person and Lifespan interfaces have no properties in common, so you might expect
// it to be the empty set (i.e., the never type). But type operations apply to the sets of values (the domain of the type), not to the properties in the interface. And remember that values with additional properties still belong to a type. So a value that has the properties of both Person and Lifespan will belong to the intersection type:

const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07"),
}; // OK

type K = keyof (Person | Lifespan); // Type is never

// keyof (A&B) = (keyof A) | (keyof B)
// keyof (A|B) = (keyof A) & (keyof B)

// Another perhaps more common way to write the PersonSpan type would be with extends:

interface Person1 {
  name: string;
}
interface PersonSpan1 extends Person1 {
  birth: string;
  death?: string;
}

interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point;

type Nums = ["one", "two", "three"];

type NumKeys = keyof Nums;

const p1: PersonSpan1 = {
  name: "John",
  birth: "01-02-2022",
  death: "01-02-2022",
};

type T1 = typeof p1;
const v1 = typeof p1;
