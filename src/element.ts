//Element. TypeScript doesn't about markup
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement ", someElement.value);