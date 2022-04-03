import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const canActivatesRole = route.data['roles'] as string[];

    return this.userService.user$.pipe(
      map((role) => canActivatesRole.includes(role!.role)),
      tap((canActivate) => {
        if (canActivate) {
          return;
        }

        this.router.navigate(['panel', 'details', '1']);
      })
    );
  }
}
