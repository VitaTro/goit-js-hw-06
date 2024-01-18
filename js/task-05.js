const inputText =  document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', () => {
outputText.textContent = inputText.value;
if(inputText.value === "") {
outputText.textContent = "Anonymous";
}
});