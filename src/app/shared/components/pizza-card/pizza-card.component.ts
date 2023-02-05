import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../interfaces/pizza";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {LocalStrorageService} from "../../../core/services/local-strorage.service";
import {OrderPizza} from "../../interfaces/order-pizza";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() item: Pizza = {} as Pizza;
  pizzaPrice: number|null|undefined = 0;
  pizzaSize= 0;
  pizzaOrders = this.storage.getOrderFromStorage(this.storage.localOrder);
  order:OrderPizza = {} as OrderPizza;
  // order$:BehaviorSubject<OrderPizza[]> = new BehaviorSubject<OrderPizza[]>(this.storage.getOrderFromStorage(this.storage.localOrder));


  constructor(private router: Router, private storage: LocalStrorageService) {}

  ngOnInit(): void {
  }

  showPizza(pizza: Pizza){
    this.router.navigate(['pizza', pizza.id]);
  }

  getOrder(sizeAndPrice: {size: number, price: number|null|undefined}){
    this.pizzaPrice = sizeAndPrice.price;

    this.order.size = sizeAndPrice.size;
    this.order.image = this.item.image;
    this.order.title = this.item.title;
    this.order.id = this.item.id;
    this.order.price = sizeAndPrice.price;
    this.order.count = 1;
  }

  pushOrder(){
    this.pizzaOrders.push(this.order);
    this.storage.setOrderToStorage(this.storage.localOrder, this.pizzaOrders);
  }

}
