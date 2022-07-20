import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dbDataAdmin = 'http://localhost:3001/administrator';
  constructor(private http: HttpClient,private router: Router) { }

 
  admin = false;
  user = false;
  logIn(loginForm: {email: string, password: string}){
    this.http.get(this.dbDataAdmin).pipe(
      tap((el: any) => {
        if(el[0].email == loginForm.email && el[0].password == loginForm.password){
          this.admin = true;
          this.router.navigate(['admin'])
        }
      }),
    ).subscribe()
  }
}
