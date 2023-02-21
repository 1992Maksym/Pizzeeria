import { Injectable } from '@angular/core';
import { LocalStrorageService } from "./local-strorage.service";
import { OrderPizza } from "../../shared/interfaces/order-pizza";


@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  constructor(private storage: LocalStrorageService) { }

  addOrderToCart(pizzaOrders: OrderPizza[], order: OrderPizza):void {
    let index = -1;
    for(let item of pizzaOrders){
      if(item.id === order.id && item.price === order.price){
        index = pizzaOrders.indexOf(item);
      }
    }
    index >= 0 ? pizzaOrders[index].count++ : pizzaOrders.push(order);
    this.storage.setOrderToStorage(this.storage.localOrder, pizzaOrders);
  }

  removeOrderItem(pizzaOrders: OrderPizza[], order: OrderPizza):void {
    let index = -1;
    for(let item of pizzaOrders){
      if(item.id === order.id && item.price === order.price){
        index = pizzaOrders.indexOf(item);
      }
    }
    if(index >= 0){
      if(pizzaOrders[index].count === 1){
        pizzaOrders.splice(index,1);
      }else {
        pizzaOrders[index].count--;
      }
    }
    this.storage.setOrderToStorage(this.storage.localOrder, pizzaOrders);
  }
}
