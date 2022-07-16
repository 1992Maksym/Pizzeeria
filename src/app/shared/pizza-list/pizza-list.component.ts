import { Component, OnInit } from '@angular/core';
import { PizzaServerService } from '../../header/main-page/pizza-server.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaServer: PizzaServerService) { }

  ngOnInit(): void {
  }

  pizzaArr = this.pizzaServer.pizza_arr;

}
