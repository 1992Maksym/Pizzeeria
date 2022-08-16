import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  localUser:string = 'localGuard';
  user: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem(this.localUser) || 'false'));

  constructor() { }

  userIsLog(){
    this.user.next(true);
    localStorage.setItem(this.localUser, JSON.stringify(true));
  }
  userIsLogout(){
    this.user.next(false);
    localStorage.setItem(this.localUser, JSON.stringify(false));
  }
  verifyUser(){

  }

}
