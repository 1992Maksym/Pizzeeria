import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { Pizza } from 'src/app/shared/interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaServerService {
    constructor(private http: HttpClient){}

    dbData = 'http://localhost:3001/pizza_arr';
    // pizzaArr$:BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);
    getPizzaData(){
        // this.http.get(this.dbData).pipe(
        //     map((el:any) => this.pizzaArr$.next(el)),
        //     ).subscribe()
        return this.http.get<Pizza>(this.dbData).pipe(
            map((el:Pizza) => el),
            )
    }
}
