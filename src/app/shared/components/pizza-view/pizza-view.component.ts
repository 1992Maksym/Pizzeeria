import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../interfaces/pizza';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {LocalStrorageService} from "../../../core/services/local-strorage.service";
import {OrderPizza} from "../../interfaces/order-pizza";
import {AddOrderService} from "../../../core/services/add-order.service";

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss']
})
export class PizzaViewComponent implements OnInit, DoCheck {
  similarPizzas$: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);

  orderArr = this.storage.getOrderFromStorage(this.storage.localOrder);
  pizza: Pizza = {} as Pizza;
  order:OrderPizza = {} as OrderPizza;

  pizzaSizeForm = new FormGroup({
    price: new FormControl<number>(0),
  });

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private storage: LocalStrorageService,
    private addOrderService: AddOrderService
  ) {}

  ngOnInit(): void {
    this.getPizzaList();
  }
  ngDoCheck() {
    this.pizza = this.route.snapshot.data['pizza'][0];
  }

  randomPizza(pizzaListArr: Pizza[]){
    const randomPizzaArr = [];
    for (let i=0; i<3; i++){
      const randomIndex = Math.floor(Math.random() * (pizzaListArr.length - 1));
      randomPizzaArr.push(pizzaListArr[randomIndex]);
      pizzaListArr = pizzaListArr.filter((el:Pizza) => el != pizzaListArr[randomIndex]);
    }
    return randomPizzaArr;
  }

  getPizzaList(){
    this.http.get<Pizza[]>('http://localhost:3000/pizza_arr').pipe(
        tap(el => this.similarPizzas$.next(this.randomPizza(el)))
        ).subscribe()
  }

  setToCart(){
    this.addOrderService.addOrderToCart(this.orderArr, this.order);
  }

  createOrder(size:number, price:number){
    this.order.size = size;
    this.order.image = this.pizza.image;
    this.order.title = this.pizza.title;
    this.order.id = this.pizza.id;
    this.order.price = price;
    this.order.count = 1;
  }

}
