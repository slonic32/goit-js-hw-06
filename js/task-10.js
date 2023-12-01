function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const containerBoxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  const baseSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = baseSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  containerBoxes.append(...boxes);
}

function destroyBoxes() {
  containerBoxes.innerHTML = "";
}

buttonCreate.addEventListener("click", () => {
  createBoxes(inputNumber.value);
});

buttonDestroy.addEventListener("click", destroyBoxes);
