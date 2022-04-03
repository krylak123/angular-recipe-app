import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
  private user: Subject<User> = new Subject<User>();

  public get user$() {
    return this.user.asObservable();
  }

  constructor(private userApiService: UserApiService) {}

  public updateUser(value: User) {
    this.user.next(value);
  }

  public getUser(email: string, password: string) {
    return this.userApiService.getUser(email, password);
  }
}
