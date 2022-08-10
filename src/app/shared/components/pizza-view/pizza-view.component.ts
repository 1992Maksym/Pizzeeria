import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss']
})
export class PizzaViewComponent implements OnInit{

  pizza: Pizza= {} as Pizza;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pizza = this.route.snapshot.data['pizza'][0];
    // console.log(this.route.snapshot.data['pizza'][0])
  }
}
