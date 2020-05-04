export function addIngredient(ingredient, price, type) {
  const Payload = {
    type: type,
    cost: price,
    name: ingredient,
  };
  return {
    type: 'addIngredient',
    payload: Payload,
  };
}

export function setCurrentRecipe(recipe) {
  return {
    type: 'setCurrentRecipe',
    payload: recipe,
  };
}
