// this pattern is known as a "tagged union" or "discriminated union"
interface UploadEvent {
  type: "upload";
  filename: string;
  contents: string;
}
interface DownloadEvent {
  type: "download";
  filename: string;
}
type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
      e; // Type is DownloadEvent
      break;
    case "upload":
      e; // Type is UploadEvent
      break;
  }
}

/* 
If TypeScript isn’t able to figure out a type, 
you can even introduce a custom function to help it out: 
*/

function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    el; // Type is HTMLInputElement
    return el.value;
  }
  el; // Type is HTMLElement
  return el.textContent;
}

const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Javier"];

const members = ["Janet", "Michael"].map((who) =>
  jackson5.find((name) => name === who)
);

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const members1 = ["Janet", "Michael"]
  .map((who) => jackson5.find((n) => n === who))
  .filter(isDefined);

// pet is Fish is our preidcate function
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
