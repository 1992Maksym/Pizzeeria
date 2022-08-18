import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../../interfaces/pizza";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() item: Pizza = {} as Pizza;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  pizzaSizeForm = new FormGroup({
    price: new FormControl(0),
  });
  showPizza(pizza: Pizza){
    this.router.navigate(['pizza', pizza.id]);
  }

}
