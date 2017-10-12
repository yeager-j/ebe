import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    return this.userService.getCurrent().map(user => {
      if (user.rank < 2) {
        return true;
      }

      this.router.navigate(['/landing']);
      return false;
    });
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }
}
