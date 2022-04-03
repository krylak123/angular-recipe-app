import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { UserApiService } from './user-api.service';

export interface User {
  id: number;
  role: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );

  public get user$() {
    return this.user.asObservable();
  }

  constructor(
    private userApiService: UserApiService,
    private authService: AuthService
  ) {
    this.authService.authorized$.subscribe(() => {
      this.updateUser(JSON.parse(localStorage.getItem('isLogged') || '{}'));
    });
  }

  public updateUser(value: User) {
    this.user.next(value);
  }

  public getUser(email: string, password: string) {
    return this.userApiService.getUser(email, password);
  }
}
