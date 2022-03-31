import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authorized!: BehaviorSubject<boolean>;

  public get authorized$() {
    return this.authorized.asObservable();
  }

  constructor(private router: Router) {
    this.authorized = new BehaviorSubject<boolean>(
      !!localStorage.getItem('isLogged')
    );
  }

  public updateAuthorized(value: boolean) {
    this.authorized.next(value);
  }

  public logout() {
    localStorage.removeItem('isLogged');
    this.updateAuthorized(false);
    this.router.navigate(['login']);
  }
}
