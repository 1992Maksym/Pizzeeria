import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from '../../core/services/guard.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private router: Router, private authGuard: GuardService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authGuard.user.getValue()){
      console.log('user is login');
      return true
    }else{
      return this.router.navigate(['not-found'], {queryParams: {auth: false}})
    }
  }

}
