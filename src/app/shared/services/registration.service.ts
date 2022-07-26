import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap,map,mergeMap, switchMap, of } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  dbUsers = 'http://localhost:3001/users';
  usersPassword:string[] = [];

  constructor(private http: HttpClient, private router: Router) { }
  checkPasswords(){
  }
  registerUser(user: User){
    this.http.get(this.dbUsers).pipe(
      tap((el:any) => el.map((el:User) => {
        this.usersPassword.push(el.password)
      })),
      switchMap(el => {
        if(this.usersPassword.includes(user.password)){
              
              alert('Такой пароль уже существует')
              return of(null);
        }else{
              user.type = 'user';
              this.router.navigate(['user', user.name]);
              return this.http.post(this.dbUsers,user)
        }
      })
    ).subscribe()
   
  }
}
