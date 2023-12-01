let counterValue = 0;
const displayValue = document.querySelector("span#value");
console.log(counterValue);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

buttonDecrement.addEventListener("click", () => {
  counterValue--;
  displayValue.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue++;
  displayValue.textContent = counterValue;
});
