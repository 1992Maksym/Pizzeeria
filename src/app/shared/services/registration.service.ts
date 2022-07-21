import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap,map,mergeMap } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  dbUsers = 'http://localhost:3001/users';
  usersPassword:any = [];

  constructor(private http: HttpClient) { }

  checkPasswords(){
    
  }
  registerUser(user: User){
    this.http.get(this.dbUsers).pipe(
      tap((el:any) => el.map((el:User) => {
        this.usersPassword.push(el.password)
      })),
      tap(el => {
        if(this.usersPassword.includes(user.password)){
          alert('Такой пароль уже существует')
        }else{
          this.http.post(this.dbUsers,user).subscribe()
        }
      })
    ).subscribe()
    
    // this.http.post(this.dbUsers,user).subscribe()
  }
}
