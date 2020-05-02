import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListservice } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-components',
  templateUrl: './shopping-list-components.component.html',
  styleUrls: ['./shopping-list-components.component.css'],
})
export class ShoppingListComponentsComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListservice) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
