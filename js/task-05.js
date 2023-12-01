let textOutput = document.querySelector("span#name-output");
const textInput = document.querySelector("input#name-input");

textInput.addEventListener("input", onInput);

function onInput() {
  if (textInput.value === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = textInput.value;
  }
}
