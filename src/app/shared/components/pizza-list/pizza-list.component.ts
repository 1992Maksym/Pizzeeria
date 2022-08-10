import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PizzaServerService } from '../../../core/services/pizza-server.service';
import { Pizza } from '../../interfaces/pizza';
// import { PizzaViewService } from '../services/pizza-view.service';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzaArr: Pizza[] = []
  constructor(
    // private pizzaServer: PizzaServerService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.pizzaArr = this.route.snapshot.data['pizzaList'];
    // this.pizzaServer.getPizzaData()
  }

  // pizzaArr$:BehaviorSubject<Pizza[]> = this.pizzaServer.pizzaArr$;


  showPizza(pizza: Pizza){
    this.router.navigate(['pizza', pizza.id]);
  }
}
