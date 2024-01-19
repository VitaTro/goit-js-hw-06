const controlInputRange = document.querySelector('input[type="range"]');
const textSize = document.querySelector("#text");

controlInputRange.addEventListener("input", () => {
  let fontSize = controlInputRange.value;
  textSize.style.fontSize = fontSize + "px";
});