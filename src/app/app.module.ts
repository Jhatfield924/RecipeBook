import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list-components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-components/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-components/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-components/recipe-detail/recipe-detail.component';
import { RecipeComponentsComponent } from './recipe-components/recipe-components.component';
import { ShoppingListComponentsComponent } from './shopping-list-components/shopping-list-components.component';
import { ShoppingListservice } from './shopping-list-components/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeStartComponent } from './recipe-components/recipe-list/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-components/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponentsComponent,
    ShoppingListComponentsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [ShoppingListservice],
  bootstrap: [AppComponent],
})
export class AppModule {}
