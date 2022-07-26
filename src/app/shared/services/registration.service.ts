import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap,map,mergeMap, switchMap, of, catchError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  dbUsers = 'http://localhost:3001/users';
  usersPassword:string[] = [];
  error:string = '';

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService,) { }
  checkPasswords(){
  }
  registerUser(user: User){
    this.http.get(this.dbUsers).pipe(
      tap((el:any) => el.map((el:User) => {
        this.usersPassword.push(el.password)
      })),
      switchMap(el => {
        if(this.usersPassword.includes(user.password)){
          catchError(err => {
            this.error = err.message;
            this.showError()
            return of('Такой пароль уже существует');
          })
              // alert('Такой пароль уже существует')
              // return of(null);
        }else{
              user.type = 'user';
              this.router.navigate(['user', user.name]);
              return this.http.post(this.dbUsers,user)
        }
      })
    ).subscribe()
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: this.error});
  }

}
