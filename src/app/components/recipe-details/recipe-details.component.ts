import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipeID: string = '';
  public recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeApiService: RecipeApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.recipeID = value['id'];

      this.recipeApiService.getRecipe(this.recipeID).subscribe((recipe) => {
        this.recipe = recipe;
      });
    });
  }
}
