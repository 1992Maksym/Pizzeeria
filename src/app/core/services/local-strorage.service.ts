import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../shared/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class LocalStrorageService {
  localAuth:string =  'localService';

  constructor() {}

  setToLocalStorage(key:string, value: any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getToLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

}
