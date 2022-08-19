import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {OrderPizza} from "../../interfaces/order-pizza";
import {LocalStrorageService} from "../../../core/services/local-strorage.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderArr$: BehaviorSubject<OrderPizza[]> = new BehaviorSubject<OrderPizza[]>(this.storage.getOrderFromStorage(this.storage.localOrder));

  constructor(private storage: LocalStrorageService) { }

  ngOnInit(): void {
  }

}
