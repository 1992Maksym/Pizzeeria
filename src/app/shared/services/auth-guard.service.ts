import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  adminIsLog(){
    this.admin.next(true);
  }
  adminIsLogout(){
    this.admin.next(false);
  }
  userIsLog(){
    this.user.next(true);
  }
  userIsLogout(){
    this.user.next(false);
  }

}
