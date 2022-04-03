import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { Role } from '../enums/role.enum';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const canActivatesRole = route.data['roles'] as string[];
    const userRoleValues: string[] = Object.values(
      JSON.parse(localStorage.getItem('isLogged') || '{}')
    );

    if (canActivatesRole[0] === userRoleValues[0]) {
      return true;
    } else {
      this.router.navigate(['panel', 'details', '1']);
      return false;
    }

    // return this.userService.user$.pipe(
    //   map(({ role }) => canActivatesRole.includes(role)),
    //   tap((canActivate) => {
    //     console.log(canActivate);

    //     if (canActivate) {
    //       return;
    //     }

    //     this.router.navigate(['panel', 'details', '1']);
    //   })
    // );

    // console.log('role guard', canActivatesRole, Object.values(userRole));
    // return true;
  }
}
