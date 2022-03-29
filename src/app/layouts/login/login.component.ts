import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormService } from 'src/app/services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(private loginFormService: LoginFormService) {}

  ngOnInit(): void {
    this.form = this.loginFormService.createForm();
  }

  public handleOnSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.error('niepoprawny formualarz');
      return;
    }

    // CHECK VALUES
    console.log('gitarła');
    this.form.reset();
  }
}
