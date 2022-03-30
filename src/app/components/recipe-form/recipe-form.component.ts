import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeFormService } from 'src/app/services/recipe-form.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  public ratingOptions: number[] = [5, 4, 3, 2, 1];
  public isModalOpen: boolean = false;
  public form!: FormGroup;

  get nameValue() {
    return this.form.controls['name'] as FormGroup;
  }

  get descriptionValue() {
    return this.form.controls['description'] as FormGroup;
  }

  get ingredientsFormArray() {
    return this.form.controls['ingriedients'] as FormArray;
  }

  get ingredientsControls() {
    return this.ingredientsFormArray.controls as FormGroup[];
  }

  constructor(
    private formBuild: FormBuilder,
    private recipeFormService: RecipeFormService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.form = this.recipeFormService.createForm();
  }

  public addIngredient() {
    this.ingredientsFormArray.push(
      new FormGroup({
        name: this.formBuild.control('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        value: this.formBuild.control('', [
          Validators.required,
          Validators.minLength(2),
        ]),
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

    this.form.patchValue({
      name: (this.nameValue.value as string).trim().toLowerCase(),
      description: (this.descriptionValue.value as string)
        .trim()
        .toLowerCase()
        .split('\n'),
    });

    this.recipeService.postRecipe(this.form.value);
    this.form.reset();
  }
}
