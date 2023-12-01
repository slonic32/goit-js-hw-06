const fontSizeControl = document.querySelector("input#font-size-control");
const Abracadabra = document.querySelector("span#text");
Abracadabra.style.fontSize = fontSizeControl.value + "px";

function changeFontSize() {
  Abracadabra.style.fontSize = fontSizeControl.value + "px";
}

fontSizeControl.addEventListener("input", changeFontSize);
