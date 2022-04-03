import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

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
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipesList: Recipe[] = [];
  public subscription!: Subscription;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.recipeService.getRecipes();

    this.recipeService.recipeList$.subscribe(
      (list) => (this.recipesList = list)
    );

    this.subscription = this.userService.user$.subscribe((item) => {
      if (item?.role === 'author') {
        this.recipeService.getAuthorRecipes(item.id);
      } else {
        this.recipeService.getRecipes();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
