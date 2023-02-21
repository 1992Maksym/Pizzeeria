import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from "../../interfaces/pizza";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pizza-sizes-form',
  templateUrl: './pizza-sizes-form.component.html',
  styleUrls: ['./pizza-sizes-form.component.scss']
})
export class PizzaSizesFormComponent implements OnInit {
  @Input() item: Pizza = {} as Pizza;
  @Output() checkboxSizes: EventEmitter<{size: number, price: number|null|undefined, item: Pizza}> = new EventEmitter<{size: number, price: number|null|undefined, item: Pizza}>();
  pizzaSize = 0
  constructor() { }

  ngOnInit(): void {
    this.checkboxSizes.emit({size: this.pizzaSize, price: this.pizzaSizeForm.value.price, item: this.item});
  }
  pizzaSizeForm = new FormGroup({
    price: new FormControl(0),
  });
  changeSize(size: number){
    this.pizzaSize = size;
    const pizzaSizeAndPrice = {
      size: size,
      price: Number(this.pizzaSizeForm.value.price),
      item: this.item,
    }
    this.checkboxSizes.emit(pizzaSizeAndPrice);
  }

}
