const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");
let arrayListItems = [];
ingredients.forEach((element) => {
  const listItem = document.createElement("li");
  listItem.textContent = element;

  listItem.classList.add("item");
  arrayListItems.push(listItem);
});
ingredientsList.append(...arrayListItems);
