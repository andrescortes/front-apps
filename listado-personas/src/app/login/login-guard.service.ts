import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
