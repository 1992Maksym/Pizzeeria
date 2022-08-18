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
  @Output() checkboxSizes: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.checkboxSizes.emit(this.pizzaSizeForm.value.price);
  }
  pizzaSizeForm = new FormGroup({
    price: new FormControl(0),
  });
  changeSize(){
    this.checkboxSizes.emit(this.pizzaSizeForm.value.price);
  }

}
