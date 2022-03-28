import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingriedients: Ingredient[];
}

interface Ingredient {
  name: string;
  value: string;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipesList: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes();

    this.recipeService.recipeList$.subscribe(
      (list) => (this.recipesList = list)
    );
  }
}
