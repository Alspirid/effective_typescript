/* Things to Remember

Be aware of how context is used in type inference.
If factoring out a variable introduces a type error, consider adding a type declaration.
If the variable is truly a constant, use a const assertion (as const). But be aware that this may result in errors surfacing at use, rather than definition.
 */
type Language = "JavaScript" | "TypeScript" | "Python";
interface GovernedLanguage {
  language: Language;
  organization: string;
}

function complain(language: GovernedLanguage) {
  /* ... */
}

complain({ language: "TypeScript", organization: "Microsoft" }); // OK

const ts: GovernedLanguage = {
  language: "TypeScript",
  organization: "Microsoft",
};
complain(ts);
