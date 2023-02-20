import { Injectable } from '@angular/core';
import {OrderPizza} from "../../shared/interfaces/order-pizza";

@Injectable({
  providedIn: 'root'
})
export class LocalStrorageService {
  localAuth:string =  'localService';
  localOrder:string = 'localOrder';



  constructor() {}

  setToLocalStorage(key:string, value: any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getToLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  setOrderToStorage(key:string, value: OrderPizza[]){
    localStorage.setItem(key,JSON.stringify(value));
  }
  getOrderFromStorage(key:string,){
    return JSON.parse(localStorage.getItem(key) || '[]');
  }


}
