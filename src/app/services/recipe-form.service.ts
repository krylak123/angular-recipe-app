import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RecipeFormService {
  constructor(private formBuild: FormBuilder) {}

  public createForm() {
    const form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.min(3),
      ]),
      description: this.formBuild.control('', [
        Validators.required,
        Validators.min(10),
      ]),
      ingredients: this.formBuild.array([
        this.formBuild.group({
          nameOfIngredient: this.formBuild.control('', [
            Validators.required,
            Validators.min(3),
          ]),
          amountOfIngredient: this.formBuild.control('', [
            Validators.required,
            Validators.min(2),
          ]),
        }),
      ]),
    });

    return form;
  }
}