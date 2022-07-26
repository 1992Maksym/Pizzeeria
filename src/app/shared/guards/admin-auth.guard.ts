import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private authGuard: AuthGuardService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(123)
      if(this.authGuard.admin.getValue()){
        return true
      }else{
        return this.router.navigate(['not-found'], {queryParams: {auth: false}})
      }
  }
}
