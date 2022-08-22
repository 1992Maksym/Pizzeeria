import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../interfaces/pizza";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() item: Pizza = {} as Pizza;
  pizzaPrice = '0';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPizza(pizza: Pizza){
    this.router.navigate(['pizza', pizza.id]);
  }

  getPrice(price: string){
    this.pizzaPrice = price;
  }

}
