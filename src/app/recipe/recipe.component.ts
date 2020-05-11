import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponentsComponent {
  currentRecipe = this.recipeService.currentRecipe;
  editMode = this.recipeService.editMode;
  creationMode = this.recipeService.creationMode;

  constructor(private recipeService: RecipeService) {}
}
