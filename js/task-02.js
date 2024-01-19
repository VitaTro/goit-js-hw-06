const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
const list =  document.querySelector('#ingredients');
for(let i = 0; i < ingredients.length; i++) {
  const items = document.createElement('li');
  items.textContent = ingredients[i];
 items.classList.add('items'); 
 list.append(items);
}


