import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../components/recipe-form/recipe-form.component';
import { LoginComponent } from '../layouts/login/login.component';
import { MainComponent } from '../layouts/main/main.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'panel',
    component: MainComponent,
    children: [
      {
        path: 'form',
        component: RecipeFormComponent,
      },
      {
        path: 'details/:id',
        component: RecipeDetailsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'panel/form',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'panel/form',
  },
];
