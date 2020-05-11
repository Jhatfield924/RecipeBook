import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService, private router: Router) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientstoShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.recipeService.setEditMode(true);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe();
    this.router.navigate(['']);
  }
}
