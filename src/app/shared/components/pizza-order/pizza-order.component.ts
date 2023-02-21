import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderPizza} from "../../interfaces/order-pizza";
import { LocalStrorageService } from "../../../core/services/local-strorage.service";
import {AddOrderService} from "../../../core/services/add-order.service";

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.scss']
})
export class PizzaOrderComponent implements OnInit {
  @Input() order: OrderPizza = {} as OrderPizza;
  @Output() checkPizzaItem: EventEmitter<OrderPizza[]> = new EventEmitter<OrderPizza[]>();

  orderArr = this.storage.getOrderFromStorage(this.storage.localOrder);

  constructor(private storage: LocalStrorageService, private addOrderService: AddOrderService) {}

  ngOnInit(): void {}

  addPizza():void{
    this.addOrderService.addOrderToCart(this.orderArr, this.order);
    this.checkPizzaItem.emit(this.storage.getOrderFromStorage(this.storage.localOrder))
  }
  removePizza():void{
    this.order.count > 0 ? this.addOrderService.removeOrderItem(this.orderArr, this.order) : 0;
    // this.addOrderService.removeOrderItem(this.orderArr, this.order);
    this.checkPizzaItem.emit(this.storage.getOrderFromStorage(this.storage.localOrder))
  }

}
