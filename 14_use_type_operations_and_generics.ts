// Things to Remember

// The DRY (don’t repeat yourself) principle applies to types as much as it applies to logic.
// Name types rather than repeating them. Use extends to avoid repeating fields in interfaces.
// Build an understanding of the tools provided by TypeScript to map between types. These include keyof, typeof, indexing, and mapped types.
// Generic types are the equivalent of functions for types. Use them to map between types instead of repeating types. Use extends to constrain generic types.
// Familiarize yourself with generic types defined in the standard library such as Pick, Partial, and ReturnType.

type Person = {
  fname: string;
  lname: string;
};

type Options = {
  /* ... */
};

type PersonWithAge = Person & { age: number };

function get(url: string, opts: Options): Promise<Response> {
  /* ... */
}
function post(url: string, opts: Options): Promise<Response> {
  /* ... */
}

// Then you can factor out a named type for this signature:

type HTTPFunction = (url: string, opts: Options) => Promise<Response>;
const get: HTTPFunction = (url, opts) => {
  /* ... */
};
const post: HTTPFunction = (url, opts) => {
  /* ... */
};

interface IPerson {
  fname: string;
  lname: string;
}

interface IPersonWithAge extends IPerson {
  age: number;
}

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// interface TopNavState {
//   userId: string;
//   pageTitle: string;
//   recentFiles: string[];
// }

// improvement 1:
type TopNavState = {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
};

// improvement 2:
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

// type Pick<T, K> = { [k in K]: T[k] };

// improvement 3:
type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">;

interface SaveAction {
  type: "save";
}

interface LoadAction {
  type: "load";
}

type Action = SaveAction | LoadAction;

type ActionType = Action["type"];

type ActionRect = Pick<Action, "type">;

interface WidgetOptions {
  width: number;
  height: number;
  color: string;
  label: string;
}

interface WidgetOptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}
class UIWidget {
  constructor(init: Options) {
    /* ... */
  }
  update(options: WidgetOptionsUpdate) {
    /* ... */
  }
}

type OptionsUpdate = { [k in keyof WidgetOptions]?: WidgetOptions[k] };

class UIWidget1 {
  constructor(init: Options) {
    /* ... */
  }
  update(options: Partial<Options>) {
    /* ... */
  }
}

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
};
// interface Options {
//   width: number;
//   height: number;
//   color: string;
//   label: string;
// }

type OptionsInitialized = typeof INIT_OPTIONS;

function getUserInfo(userId: string) {
  // ...
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  };
}
// Return type inferred as { userId: string; name: string; age: number, ... }

type UserInfo = ReturnType<typeof getUserInfo>;

interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
  { first: "Alice", last: "Smith" },
  { first: "Bob", last: "Smith" },
];
const couple2: DancingDuo<{ first: string }> = [
  // ~~~~~~~~~~~~~~~
  // Property 'last' is missing in type
  // '{ first: string; }' but required in type 'Name'
  { first: "Sonny" },
  { first: "Cher" },
];

type Pick1<T, K extends keyof T> = { [k in K]: T[k] }; // OK

type FirstLast = Pick1<Name, "first" | "last">; // OK
type FirstMiddle = Pick1<Name, "first" | "middle">;
// ~~~~~~~~~~~~~~~~~~
// Type '"middle"' is not assignable
// to type '"first" | "last"'

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type Ommit<T, K extends keyof T> = { [k in Exclude<keyof T, K>]: T[k] };

type TodoPreview = Omit<Todo, "description" | "createdAt">;

type TN = NonNullable<null | undefined>;

function ffn(arg: { a: number; b: number }) {}

type TF = Parameters<typeof Function>;
