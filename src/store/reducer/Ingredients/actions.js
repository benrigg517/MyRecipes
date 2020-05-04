export function addNewIngredient(payload) {
  console.log(payload);
  return {
    type: 'addIngredient',
    payload: payload,
  };
}
