import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'shared/ingredient.model';
import { ShoppingListservice } from '../shopping-list-components/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chorizo Mozarella Gnocchi',
      'This is so good!!',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
      [new Ingredient('Chorizo', 2), new Ingredient('Mozarella', 5)]
    ),
    new Recipe(
      'Spaghetti and Meatballs!',
      'A classic spaghetti and meatball!',
      'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg',
      [
        new Ingredient('Spaghetti', 4),
        new Ingredient('Marinara', 1),
        new Ingredient('Meatballs', 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListservice) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
