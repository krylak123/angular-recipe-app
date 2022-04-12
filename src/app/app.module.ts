import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './routers/routers';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { ContainerComponent } from './layouts/main/container/container.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { UppercaseFirstLetterPipe } from './pipes/uppercase-first-letter.pipe';
import { RatingPipe } from './pipes/rating.pipe';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchSortFormComponent } from './components/search-sort-form/search-sort-form.component';
import { LoginComponent } from './layouts/login/login.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { MailNamePipe } from './pipes/mail-name.pipe';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ContainerComponent,
    RecipeListComponent,
    UppercaseFirstLetterPipe,
    RatingPipe,
    RecipeFormComponent,
    RecipeDetailsComponent,
    LoaderComponent,
    SearchSortFormComponent,
    LoginComponent,
    PageNotFoundComponent,
    MailNamePipe,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
