import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListservice } from '../shopping-list-components/shopping-list.service';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { map, take, shareReplay, tap, filter } from 'rxjs/operators';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class RecipeService {
  selectedRecipeIndex = this.route.queryParamMap.pipe(
    map((params) => params.get('index'))
  );
  recipes = this.dbService.recipes.pipe(shareReplay(1));

  currentRecipe = combineLatest([this.recipes, this.selectedRecipeIndex]).pipe(
    map(([recipes, index]) => recipes[index])
  );

  editMode = new BehaviorSubject<boolean>(false);
  creationMode = new BehaviorSubject<boolean>(false);

  constructor(
    private slService: ShoppingListservice,
    private dbService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async updateRecipes(recipe: Recipe) {
    try {
      const updatedList = await this.recipes.pipe(take(1)).toPromise();
      const index = await this.selectedRecipeIndex.pipe(take(1)).toPromise();
      updatedList[index] = recipe;
      this.dbService.updateRecipes(updatedList);
    } catch (err) {
      console.log(err);
    } finally {
      this.editMode.next(false);
    }
  }

  // Manual Input from user
  addIngredientstoShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  setEditMode(state: boolean) {
    this.editMode.next(state);
  }

  setCreationMode(state: boolean) {
    this.router.navigate(['']);
    this.creationMode.next(state);
  }

  async createRecipe(recipe: Recipe) {
    try {
      const updatedList = await this.recipes.pipe(take(1)).toPromise();
      updatedList.push(recipe);
      this.dbService.updateRecipes(updatedList);
    } catch (err) {
      console.log('ya done goofed');
    } finally {
      this.creationMode.next(false);
    }
  }

  onCancel() {
    this.router.navigate(['']);
    this.editMode.next(false);
    this.creationMode.next(false);
  }

  async deleteRecipe() {
    try {
      const updatedList = await this.recipes.pipe(take(1)).toPromise();
      const index = await this.selectedRecipeIndex.pipe(take(1)).toPromise();
      updatedList.splice(parseInt(index, 10), 1);
      this.dbService.updateRecipes(updatedList);
    } catch (err) {
      console.log('ya done goofed');
    } finally {
      this.editMode.next(false);
      this.router.navigate(['']);
    }
  }

  selectRecipe(index: number) {
    console.log('hit');
    this.creationMode.next(false);
    this.editMode.next(false);
    this.router.navigate(['/recipes'], { queryParams: { index } });
  }
}
