import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../interfaces/pizza';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {LocalStrorageService} from "../../../core/services/local-strorage.service";
import {OrderPizza} from "../../interfaces/order-pizza";

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss']
})
export class PizzaViewComponent implements OnInit, DoCheck{
  similarPizzas$: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);
  orderArr$:BehaviorSubject<OrderPizza[]> = new BehaviorSubject<OrderPizza[]>(this.storage.getOrderFromStorage(this.storage.localOrder));

  pizza: Pizza = {} as Pizza;
  pizzaSize:number = 0;

  pizzaSizeForm = new FormGroup({
    price: new FormControl<number>(0),
  });


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private storage: LocalStrorageService,
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
    this.http.get<Pizza[]>('http://localhost:3001/pizza_arr').pipe(
        tap(el => this.similarPizzas$.next(this.randomPizza(el)))
        ).subscribe()
  }
  getSize(size: number){
    this.pizzaSize = size;
  }
  setToCart(){
    this.createOrder();
    this.storage.setOrderToStorage(this.storage.localOrder, this.orderArr$.getValue());
  }

  createOrder(){
    const order:OrderPizza = {} as OrderPizza;
    order.size = this.pizzaSize;
    order.image = this.pizza.image;
    order.title = this.pizza.title;
    order.id = this.pizza.id;
    order.price = this.pizzaSizeForm.value.price;
    this.orderArr$.pipe(
      tap(el => el.push(order)),
    ).subscribe()
  }


}
