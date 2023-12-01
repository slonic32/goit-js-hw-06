const textInput = document.querySelector("input#validation-input");
textInput.classList.add("invalid");
const validLength = parseInt(textInput.dataset.length);

function inputValidation() {
  if (textInput.value.length === validLength) {
    textInput.classList.replace("invalid", "valid");
  } else {
    textInput.classList.replace("valid", "invalid");
  }
}

textInput.addEventListener("blur", inputValidation);
