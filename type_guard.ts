/* 
Things to Remember

Understand how TypeScript narrows types based on conditionals and other types of control flow.
Use tagged/discriminated unions and user-defined type guards to help the process of narrowing.
*/

interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}
