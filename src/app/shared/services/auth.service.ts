import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dbDataAdmin = 'http://localhost:3001/administrator';
  dbDataUsers = 'http://localhost:3001/users';
  constructor(private http: HttpClient,private router: Router) { }

  // admin:BehaviorSubject<string> = new BehaviorSubject<string>('Войти')
  admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  logIn(loginForm: {email: string, password: string}){
    this.http.get(this.dbDataAdmin).pipe(
      tap((el: any) => {
        if(el[0].email == loginForm.email && el[0].password == loginForm.password){
          this.admin.next(true);
          this.router.navigate(['admin'])
        }
      }),
    ).subscribe()
    this.http.get(this.dbDataUsers).pipe(
      tap((arr: any) => {
        arr.map((el: User) => {
          if(el.email == loginForm.email && el.password == loginForm.password){
            this.user.next(true);
            this.router.navigate(['user', el.name])
          }
        })
        
      }),
    ).subscribe()
  }


}
