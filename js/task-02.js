const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
const list =  document.createElement('ul');
list.id = 'ingredients';

ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    list.appendChild(item);
});
document.body.appendChild(list);