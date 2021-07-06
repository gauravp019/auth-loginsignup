import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdsGuard implements CanActivate {
  constructor(private router: Router, private authservice: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (this.authservice.signupList) {
      return true;
    } else {
      alert('dont have permision')
      this.router.navigate(['login'])
    }
  }

}

