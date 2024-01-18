const listWithId = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${listWithId.length}`);

listWithId.forEach(category => {
const categoryTitle = category.querySelector('h2').textContent;
const elementsList = category.querySelectorAll('ul li').length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${elementsList}`);
});