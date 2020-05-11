import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponentsComponent } from './recipe/recipe.component';
import { ShoppingListComponentsComponent } from './shopping-list-components/shopping-list-components.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeComponentsComponent,
  },
  { path: 'shopping-list', component: ShoppingListComponentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
