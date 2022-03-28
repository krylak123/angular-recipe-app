import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-search-sort-form',
  templateUrl: './search-sort-form.component.html',
  styleUrls: ['./search-sort-form.component.scss'],
})
export class SearchSortFormComponent implements AfterViewInit {
  @ViewChild('searchBy') public searchBy!: ElementRef<HTMLInputElement>;
  @ViewChild('sortBy') public sortBy!: ElementRef<HTMLSelectElement>;

  constructor(private recipeService: RecipeService) {}

  ngAfterViewInit(): void {
    this.handleSearchBy();
    this.handleSortBy();
  }

  public handleSearchBy() {
    fromEvent(this.searchBy.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((e) => (e.target as HTMLSelectElement).value),
        map((value) => value.trim().toLowerCase()),
        distinctUntilChanged()
      )
      .subscribe((value) => this.recipeService.getRecipiesBySearch(value));
  }

  public handleSortBy() {
    fromEvent(this.sortBy.nativeElement, 'change')
      .pipe(map((e) => (e.target as HTMLSelectElement).value))
      .subscribe((value) => this.recipeService.getRecipesBySort(value));
  }
}
