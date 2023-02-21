import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {OrderPizza} from "../../interfaces/order-pizza";
import {LocalStrorageService} from "../../../core/services/local-strorage.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderArr$: BehaviorSubject<OrderPizza[]> = new BehaviorSubject<OrderPizza[]>(this.storage.getOrderFromStorage(this.storage.localOrder));
  totalPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private storage: LocalStrorageService) { }

  ngOnInit(): void {
    this.priceSum();
  }

  priceSum(){
    let priceOrder = 0;
    this.orderArr$.pipe(
      tap((el: OrderPizza[]) => priceOrder = el.reduce((sum,num) => num.price ? sum + ((+num.price) * num.count) : 0,0)),
      tap(() => this.totalPrice$.next(priceOrder))
    ).subscribe()
  }

  clearCart(){
    this.storage.setOrderToStorage(this.storage.localOrder, []);
    this.orderArr$.next([])
  }
}
