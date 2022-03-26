import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map } from 'rxjs';
import { RecipeApiService } from 'src/app/services/recipe-api.service';

@Component({
  selector: 'app-search-sort-form',
  templateUrl: './search-sort-form.component.html',
  styleUrls: ['./search-sort-form.component.scss'],
})
export class SearchSortFormComponent implements AfterViewInit {
  @ViewChild('searchBy') public searchBy!: ElementRef<HTMLInputElement>;
  @ViewChild('sortBy') public sortBy!: ElementRef<HTMLSelectElement>;

  constructor(private recipeApiService: RecipeApiService) {}

  ngAfterViewInit(): void {
    this.handleSearchBy();
    this.handleSortBy();
  }

  public handleSearchBy() {
    fromEvent(this.searchBy.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        map((e) => (e.target as HTMLSelectElement).value),
        filter((value) => value.length >= 3)
      )
      .subscribe((value) => {
        console.log(value);
      });
  }

  public handleSortBy() {
    fromEvent(this.sortBy.nativeElement, 'change')
      .pipe(map((e) => (e.target as HTMLSelectElement).value))
      .subscribe((value) => {
        console.log(value);
      });
  }
}
