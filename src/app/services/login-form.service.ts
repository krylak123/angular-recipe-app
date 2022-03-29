import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor(private formBuild: FormBuilder) {}

  createForm() {
    const form = this.formBuild.group({
      login: this.formBuild.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    return form;
  }
}
