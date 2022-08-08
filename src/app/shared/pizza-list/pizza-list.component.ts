import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PizzaServerService } from '../../header/main-page/pizza-server.service';
import { Pizza } from '../interfaces/pizza';
import { PizzaViewService } from '../services/pizza-view.service';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(
    private pizzaServer: PizzaServerService, 
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.pizzaServer.getPizzaData()
  }

  pizzaArr$:BehaviorSubject<Pizza[]> = this.pizzaServer.pizzaArr$;
  

  showPizza(pizza: Pizza){
    this.router.navigate(['pizza', pizza.id]);
  }
}
