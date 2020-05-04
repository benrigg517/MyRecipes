const initialRecipe = {
  ingredients: [],
  totalCost: 0,
  cookTime: 0,
  prepTime: 0,
  name: 'First Dish',
  description: 'My First Dish',
};
const initialState = {
  recipes: [initialRecipe],
};

export const RecipeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addRecipe':
      const newRecipe = action.payload;
      const newList = {
        recipes: [...state.recipes, newRecipe],
      };
      return newList;
    default:
      return state;
  }
};
