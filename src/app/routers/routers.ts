import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from '../components/recipe-form/recipe-form.component';
import { Role } from '../enums/role.enum';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { LoginComponent } from '../layouts/login/login.component';
import { MainComponent } from '../layouts/main/main.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'panel',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'form',
        component: RecipeFormComponent,
        canActivate: [RoleGuard],
        data: { roles: [Role.Author] },
      },
      {
        path: 'details',
        redirectTo: 'form',
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
    component: PageNotFoundComponent,
  },
];
