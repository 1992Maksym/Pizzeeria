import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  userLogged$: BehaviorSubject<User> = new BehaviorSubject<User>({name: '',email: '',password: '',type: ''});
  dbDataUsers = 'http://localhost:3001/users'; 

  constructor(private http: HttpClient,private router: Router, private authGuard: AuthGuardService) { }

  logIn(loginForm: {email: string, password: string}){
    this.http.get(this.dbDataUsers).pipe(
      tap((arr: any) => {
        arr.map((el: User) => {
          if(el.email == loginForm.email && el.password == loginForm.password){
            this.userLogged$.next(el);
            
            if(el.type === 'admin') {
            // this.authGuard.adminIsLog();
            
            this.authGuard.userIsLog();
            this.router.navigate(['admin'])
            }
            else {
              this.authGuard.userIsLog();
              this.router.navigate(['user', el.name])
            }
          }
        })
      }),
    ).subscribe()
  }

}