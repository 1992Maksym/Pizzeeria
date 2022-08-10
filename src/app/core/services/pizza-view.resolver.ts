import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pizza } from '../../shared/interfaces/pizza';
import { PizzaViewService } from './pizza-view.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaViewResolver implements Resolve<Pizza | null> {
  constructor(private pizzaView: PizzaViewService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pizza | null> {
    const param = route.paramMap.get('id');
    if(param === null){
      return of(null)
    }
    return this.pizzaView.getSelectedPizzaId(param);
  }
}
