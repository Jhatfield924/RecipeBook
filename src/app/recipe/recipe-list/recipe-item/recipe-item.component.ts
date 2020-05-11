import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | undefined;
  @Input() index: number;
  selected = this.recipeService.selectedRecipeIndex.pipe(
    map((index) => parseInt(index, 10))
  );

  constructor(private recipeService: RecipeService) {}

  onNavigate(index) {
    this.recipeService.selectRecipe(index);
  }
}
