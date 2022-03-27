import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeFormService } from 'src/app/services/recipe-form.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  public ratingOptions: number[] = [5, 4, 3, 2, 1];
  public isModalOpen: boolean = false;
  public form!: FormGroup;

  get ingredientsFormArray() {
    return this.form.controls['ingriedients'] as FormArray;
  }

  get ingredientsControls() {
    return this.ingredientsFormArray.controls as FormGroup[];
  }

  constructor(
    private formBuild: FormBuilder,
    private recipeFormService: RecipeFormService
  ) {}

  ngOnInit() {
    this.form = this.recipeFormService.createForm();
  }

  public addIngredient() {
    this.ingredientsFormArray.push(
      new FormGroup({
        name: this.formBuild.control('', [Validators.required]),
        value: this.formBuild.control('', [Validators.required]),
      })
    );
  }

  public removeIngredient(array: FormArray, index: number) {
    array.removeAt(index);
  }

  public handleOnOpenModal() {
    if (this.form.invalid) {
      console.error('niepoprawny formualarz');
      return;
    }

    this.form.controls['rating'].addValidators([Validators.required]);
    this.form.controls['rating'].updateValueAndValidity();

    this.isModalOpen = true;
  }

  public handleOnSubmit() {
    this.form.markAllAsTouched();
    this.isModalOpen = false;

    if (this.form.invalid) {
      console.error('niepoprawny formualarz');
      return;
    }

    // SEND TO API
    console.log(this.form.valid, this.form.value);
    this.form.reset();
  }
}
