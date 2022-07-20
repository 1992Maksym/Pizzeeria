import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,mergeMap } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  dbUsers = 'http://localhost:3001/users';
  users = [];

  constructor(private http: HttpClient) { }

  checkPasswords(){
    
  }
  registerUser(user: User){
    this.http.get(this.dbUsers).pipe(
      map(el => console.log(Array.isArray(el)))
    ).subscribe()
    
    // this.http.post(this.dbUsers,user).subscribe()
  }
}
