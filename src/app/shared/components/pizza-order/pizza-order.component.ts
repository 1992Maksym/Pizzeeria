import {Component, Input, OnInit} from '@angular/core';
import {OrderPizza} from "../../interfaces/order-pizza";

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss']
})
export class PizzaOrderComponent implements OnInit {
  @Input() order: OrderPizza = {} as OrderPizza;

  constructor() { }

  ngOnInit(): void {}

}
