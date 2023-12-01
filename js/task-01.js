const categoriesList = document.querySelector("ul#categories");
console.log("Number of categories:", categoriesList.children.length);
console.log("");
let categoriesItems = Object.values(categoriesList.children);
categoriesItems.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);
  let categoriesNumber = element.querySelector("ul").children.length;
  console.log(`Elements: ${categoriesNumber}`);
  console.log("");
});
