const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
const listUl =  document.querySelector('#ingredients');

const arrayLi = ingredients.map((ingredient) => {
const li = document.createElement('li');
li.textContent = ingredient;
li.classList.add("item");
return li;
});

listUl.append(...arrayLi);

