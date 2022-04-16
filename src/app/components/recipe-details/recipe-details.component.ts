import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipe$: Observable<Recipe> = this.recipeService.recipe$;
  public recipeID: string = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((value) => {
    //   this.recipeID = value['id'];

    //   this.recipeService.getRecipe(this.recipeID);
    // });

    this.route.params
      .pipe(
        switchMap(async (value) => this.recipeService.getRecipe(value['id']))
      )
      .subscribe();
  }
}
