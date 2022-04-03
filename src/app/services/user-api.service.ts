import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly API_URL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public getUser(email: string, password: string) {
    return this.http.get<User[]>(
      `${this.API_URL}?email=${email}&password=${password}`
    );
  }
}
