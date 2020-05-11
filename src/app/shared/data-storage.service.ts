import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/recipe/recipe.model';
import { tap, switchMap, startWith, map } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  // Subject and behaviorSubject
  private recipeListUpdates = new Subject<void>();

  recipes = this.recipeListUpdates.pipe(
    startWith(undefined),
    switchMap(() =>
      this.http.get<Recipe[]>(
        'https://recipebookproject-16283.firebaseio.com/recipes.json'
      )
    ),
    map((recipes) =>
      recipes.map((recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients ? recipe.ingredients : [],
      }))
    ),
    tap((recipes) => console.log('updated', recipes))
  );

  updateRecipes(recipes: Recipe[]): Observable<Recipe[]> {
    return this.http
      .put<Recipe[]>(
        'https://recipebookproject-16283.firebaseio.com/recipes.json',
        recipes
      )
      .pipe(tap(() => this.recipeListUpdates.next()));
  }
}
