import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, switchMap, of, catchError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { MessageService } from 'primeng/api';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // [x: string]: any;
  dbUsers = 'http://localhost:3001/users';
  usersPassword:string[] = [];
  error:string = '';

  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private authGuard: AuthGuardService,
    private router: Router,
    ) { }
  checkPasswords(){
  }
  registerUser(user: User){
    // this.http.get(this.dbUsers).pipe(
      // tap((el:any) => el.map((el:User) => {
      //   this.usersPassword.push(el.password)
      // })),
      // switchMap(el => {
      //   if(this.usersPassword.includes(user.password)){
      //         // alert('Такой пароль уже существует')
      //         this.showError()
      //         return of(null);
      //   }else{
      //         user.type = 'user';

      //         // this.router.navigate(['user', user.name]);
      //         return this.http.post(this.dbUsers,user);
      //   }
      // }),
      // catchError(err => {
      //   this.error = err.message;
      //   return of('Такой пароль уже существует');
      // })
    // ).subscribe()

    this.http.get(`http://localhost:3001/users?password=${user.password}`).pipe(
      switchMap((el:any) => {
          if(el[0]){
                // this.showError()
                console.log(el);
                return of(null);
          }else{
                user.type = 'user';
                this.authGuard.userIsLog()
                this.router.navigate(['user', user.name]);
                return this.http.post(this.dbUsers,user);
          }
      }),
      catchError(err => {
        // this.error = err.message;
        // console.log(this.error);
        this.showError(err.message)
        return of(null);
      })
    ).subscribe()
  }

  showError(message:string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }
}
