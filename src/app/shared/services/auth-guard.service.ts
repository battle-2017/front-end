import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {

  // constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable <boolean> | boolean {
  
    return true;

  }

  // canActivate(): Observable <boolean> | boolean {
  //   return this.authService.authenticated.map(auth => {
  //     if(auth) {
  //       return true; 
  //     } else {
  //       this.router.navigate(['']);
  //       return false;
  //     }
  //   });
  // }

}
