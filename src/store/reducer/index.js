import {combineReducers} from 'redux';
import {AppReducer} from './App/appReducer';
import {RecipeReducer} from './Recipe/recipeReducer';
import {RecipeListReducer} from './RecipeList/recipeListReducer';
import {IngredientReducer} from './Ingredients/ingredientReducer';
import {ProfileReducer} from './Profile/profile-reducer';

export const rootReducer = combineReducers({
  app: AppReducer,
  recipe: RecipeReducer,
  recipeList: RecipeListReducer,
  ingredients: IngredientReducer,
  profile: ProfileReducer,
});
