import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthHelper} from '../services/security/auth.helper';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authHelper: AuthHelper) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // go to default page if the user is logged out
    const isUserLogged = this.authHelper.isUserLogged();
    if (!isUserLogged) {
      this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
    }

    return true;
  }
}
