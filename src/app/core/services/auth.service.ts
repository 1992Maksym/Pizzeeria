import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces/user.interface';
import { GuardService } from './guard.service';
import {LocalStrorageService} from "./local-strorage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  userLogged$: BehaviorSubject<User> = new BehaviorSubject<User>({name: '',email: '',password: '',type: ''});
  dbDataUsers = 'http://localhost:3000/users';
  localAuth: string = 'localService';

  constructor(
    private storage: LocalStrorageService,
    private http: HttpClient,
    private router: Router,
    private authGuard: GuardService, ) { }

  logIn(loginForm: {email: string, password: string}){
    this.http.get(this.dbDataUsers).pipe(
      tap((arr: any) => {
        arr.map((el: User) => {
          if(el.email === loginForm.email && el.password === loginForm.password){
            this.storage.setToLocalStorage(this.localAuth, el)

            if(el.type === 'admin') {
              this.authGuard.userIsLog();
              this.router.navigate(['admin']);
            }
              else {
                this.authGuard.userIsLog();
                this.router.navigate(['user', el.name]);
              }
          }
        })
      }),
    ).subscribe()
  }

  ngOnInit(){

  }

}
