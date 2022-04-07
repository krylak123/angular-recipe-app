import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisible$: Observable<boolean> = this.authService.authorized$;
  public userName$: Observable<User | null> = this.userService.user$;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  handleOnLogoutClick() {
    this.authService.logout();
  }
}
