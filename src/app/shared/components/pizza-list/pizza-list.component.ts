import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../../interfaces/pizza';
import { OrderPizza } from "../../interfaces/order-pizza";
import { LocalStrorageService } from "../../../core/services/local-strorage.service";
import { AddOrderService } from "../../../core/services/add-order.service";


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzaOrders = this.storage.getOrderFromStorage(this.storage.localOrder);
  pizzaArr: Pizza[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStrorageService,
    private addOrderService: AddOrderService
    ) { }

  ngOnInit(): void {
    this.pizzaArr = this.route.snapshot.data['pizzaList'];
  }

  addOrder(order: OrderPizza):void{
    this.addOrderService.addOrderToCart(this.pizzaOrders, order)
  }

}
