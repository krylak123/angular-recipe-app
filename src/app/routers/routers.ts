import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../components/recipe-form/recipe-form.component';

export const routes: Routes = [
  {
    path: 'form',
    component: RecipeFormComponent,
  },
  {
    path: 'details/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'form',
  },
];
