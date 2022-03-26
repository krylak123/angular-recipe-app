import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSortFormComponent } from './search-sort-form.component';

describe('SearchSortFormComponent', () => {
  let component: SearchSortFormComponent;
  let fixture: ComponentFixture<SearchSortFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSortFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
