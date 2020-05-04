const initialList = {
  ingredients: [],
};

export const IngredientReducer = (state = initialList, action) => {
  switch (action.type) {
    case 'addIngredient':
      const newIngredientList = {
        ingredients: [...state.ingredients, action.payload],
      };
      return newIngredientList;
    default:
      return state;
  }
};
