import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  // admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // user: BehaviorSubject<User> = new BehaviorSubject<User>({name: '', email: '', type: '', password: ''});

  constructor() { }

  userIsLog(){
    this.user.next(true);
  }
  userIsLogout(){
    this.user.next(false);
  }

}
