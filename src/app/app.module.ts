import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { ContainerComponent } from './layouts/main/container/container.component';
import { LeftPanelComponent } from './layouts/main/left-panel/left-panel.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { UppercaseFirstLetterPipe } from './pipes/uppercase-first-letter.pipe';
import { RatingPipe } from './pipes/rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ContainerComponent,
    LeftPanelComponent,
    RecipeListComponent,
    UppercaseFirstLetterPipe,
    RatingPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
