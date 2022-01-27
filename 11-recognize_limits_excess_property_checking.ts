// Things to Remember

// When you assign an object literal to a variable or pass it as an argument to a function, it undergoes excess property checking.
// Excess property checking is an effective way to find errors, but it is distinct from the usual structural assignability checks done by the TypeScript type checker. Conflating these processes will make it harder for you to build a mental model of assignability.
// Be aware of the limits of excess property checking: introducing an intermediate variable will remove these checks.

interface Room {
  numDoors: number;
  ceilingHeight: number;
}

const obj = {
  numDoors: 2,
  ceilingHeight: 10,
  elephant: "present",
};

// const room: Room = {
//   numDoors: 2,
//   ceilingHeight: 10,
//   elephant: "present",
// };

const r: Room = obj;
