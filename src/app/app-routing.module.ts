import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponentsComponent } from './recipe-components/recipe-components.component';
import { ShoppingListComponentsComponent } from './shopping-list-components/shopping-list-components.component';
import { RecipeStartComponent } from './recipe-components/recipe-list/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-components/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeComponentsComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      // load hardcoded routes first before dynamic ones
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
