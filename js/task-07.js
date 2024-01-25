const controlInputRange = document.querySelector('#font-size-control');
const textSize = document.querySelector("#text");
textSize.style.fontSize = `${controlInputRange.value}px`;
controlInputRange.addEventListener("input", () => {
  textSize.style.fontSize = `${controlInputRange.value}px`;
});