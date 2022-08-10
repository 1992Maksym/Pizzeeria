import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pizza } from '../../shared/interfaces/pizza';
import { PizzaServerService } from './pizza-server.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaListResolver implements Resolve<Pizza> {
  constructor(private pizzaServer: PizzaServerService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pizza> {
    return this.pizzaServer.getPizzaData();
  }
}
