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
        Validators.minLength(3),
      ]),
      description: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      ingriedients: this.formBuild.array([
        this.formBuild.group({
          name: this.formBuild.control('', [
            Validators.required,
            Validators.minLength(3),
          ]),
          value: this.formBuild.control('', [
            Validators.required,
            Validators.minLength(2),
          ]),
        }),
      ]),
      rating: this.formBuild.control(''),
    });

    return form;
  }
}
