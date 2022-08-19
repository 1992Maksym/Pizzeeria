import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../interfaces/pizza';
import { FormControl, FormGroup } from '@angular/forms';
import { tap, map } from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {LocalStrorageService} from "../../../core/services/local-strorage.service";
import {OrderPizza} from "../../interfaces/order-pizza";

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss']
})
export class PizzaViewComponent implements OnInit{
  similarPizzas$: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);
  orderArr$:BehaviorSubject<OrderPizza[]> = new BehaviorSubject<OrderPizza[]>(this.storage.getOrderFromStorage(this.storage.localOrder));

  pizza: Pizza = {} as Pizza;
  // orderPizza: OrderPizza = {} as OrderPizza;

  pizzaSize:number = 0;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private storage: LocalStrorageService
  ) {}

  ngOnInit(): void {
    this.pizza = this.route.snapshot.data['pizza'][0];
    this.getPizzaList();
  }

  pizzaSizeForm = new FormGroup({
    price: new FormControl<number>(0),
  });


  randomPizza(pizzaListArr: Pizza[], randomPizzaArr: Pizza[]){
    for (let i=0; i<3; i++){
      const randomIndex = Math.floor(Math.random() * (pizzaListArr.length - 1));
      randomPizzaArr.push(pizzaListArr[randomIndex]);
      pizzaListArr = pizzaListArr.filter((el:Pizza) => el != pizzaListArr[randomIndex]);
    }
  }

  getPizzaList(){
    const arr: Pizza[] = []
    this.http.get('http://localhost:3001/pizza_arr').pipe(
        tap((el:any) => {
          this.randomPizza(el, arr);
        }),
        tap(el => this.similarPizzas$.next(arr))
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
      tap(el => console.log(el))
    ).subscribe()
  }


}
