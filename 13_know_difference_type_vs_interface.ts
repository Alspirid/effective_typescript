// Things to Remember

// Understand the differences and similarities between type and interface.
// Know how to write the same types using either syntax.
// In deciding which to use in your project, consider the established style and whether augmentation might be beneficial.

type TState = {
  name: string;
  capital: string;
};

interface IState {
  name: string;
  capital: string;
}

const wyoming: TState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500_000,
};

type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = (x) => "" + x; // OK
const toStrI: IFn = (x) => "" + x; // OK

// both type aliases and interfaces can be generic

type TPair<T> = {
  first: T;
  second: T;
};

interface IPair<T> {
  first: T;
  second: T;
}

// An interface can extend a type (with some caveats, explained momentarily), and a type can extend an interface:

interface IStateWithPopulation extends TState {
  population: number;
}

type TStateWithPopulation = IState & { population: number };

// A class can implement either an interface or a simple type:

class StateT implements TState {
  name: string = "";
  capital: string = "";
}
class StateI implements IState {
  name: string = "";
  capital: string = "";
}

// Difference between type and interface
// there are union types but no union interfaces:

type AorB = "a" | "b";

type Input = {
  /* ... */
};
type Output = {
  /* ... */
};
interface VariableMap {
  [name: string]: Input | Output;
}

type NamedVariable = (Input | Output) & { name: string };

type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];

// You can express something like a tuple using interface:

interface Tuple {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple = [10, 20]; // OK

interface IState {
  population: number;
}

const wyoming1: IState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500_000,
};
