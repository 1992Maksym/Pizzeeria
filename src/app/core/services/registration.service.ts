import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, of, catchError } from 'rxjs';
import { User } from '../../shared/interfaces/user.interface';
import { MessageService } from 'primeng/api';
import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  dbUsers = 'http://localhost:3001/users';
  // usersPassword:string[] = [];
  error:string = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private authGuard: AuthGuardService,
    private authService: AuthService,
    private router: Router,
    ) { }

  registerUser(user: User){
    this.http.get(`http://localhost:3001/users?password=${user.password}`).pipe(
      switchMap((el:any) => {
          if(el[0]){
            throw new Error();
            console.log(el);
            return of(null);
          }else{
                user.type = 'user';
                this.authGuard.userIsLog();
                localStorage.setItem(this.authService.localUser, JSON.stringify(el));

                // this.authService.userLogged$.next(user);
                this.router.navigate(['user', user.name]);
                return this.http.post(this.dbUsers,user);
          }
      }),
      catchError(err => {
        this.showError(err.message)
        return of(null);
      })
    ).subscribe()
  }

  showError(message:string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }
}
