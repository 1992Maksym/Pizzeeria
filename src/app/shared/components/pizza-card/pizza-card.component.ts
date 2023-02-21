import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from "../../interfaces/pizza";
import {Router} from "@angular/router";
import {OrderPizza} from "../../interfaces/order-pizza";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() item: Pizza = {} as Pizza;
  @Output() pizzaOrder: EventEmitter<OrderPizza> = new EventEmitter<OrderPizza>();

  pizzaPrice: number|null|undefined = 0;
  order:OrderPizza = {} as OrderPizza;

  constructor(private router: Router) {}

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
    this.pizzaOrder.emit(this.order);
  }

}
