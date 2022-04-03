import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { Role } from 'src/app/enums/role.enum';
import { AuthService } from 'src/app/services/auth.service';
import { LoginFormService } from 'src/app/services/login-form.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoading: boolean = false;
  public form!: FormGroup;

  constructor(
    private loginFormService: LoginFormService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.loginFormService.createForm();
  }

  public handleOnSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.error('niepoprawny formularz');
      return;
    }

    this.isLoading = true;

    this.userService
      .getUser(this.form.value['login'], this.form.value['password'])
      .pipe(map((item) => item[0]))
      .subscribe((item) => {
        this.isLoading = false;

        if (item) {
          const role = item.role === 'user' ? Role.User : Role.Author;

          this.userService.updateUser(item);
          this.authService.login(role);
        } else {
          alert('podany uzytkownik nie istnieje');
        }

        this.form.reset();
      });
  }
}
