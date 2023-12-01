function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector("button.change-color");
const textColor = document.querySelector("span.color");
const body = document.querySelector("body");

function changeColor() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  textColor.textContent = currentColor;
}

buttonChangeColor.addEventListener("click", changeColor);
