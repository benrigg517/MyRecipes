const initialRecipe = {
  ingredients: [],
  totalCost: '£0.00',
  cookTime: 0,
  prepTime: 0,
  name: '',
  description: '',
};

export const RecipeReducer = (state = initialRecipe, action) => {
  switch (action.type) {
    case 'setCurrentRecipe':
      return action.payload;
    case 'addIngredient':
      const newIngredientList = {
        ingredients: [...state.ingredients, action.payload],
        prepTime: state.prepTime,
        cookTime: state.cookTime,
        totalCost: state.totalCost,
        name: state.name,
        description: state.description,
      };
      return newIngredientList;
    default:
      return state;
  }
};
