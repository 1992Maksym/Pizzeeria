import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Pizza } from 'src/app/shared/interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaServerService {
    constructor(private http: HttpClient){}

    dbData = 'http://localhost:3000/pizza_arr';
    getPizzaData(){
        return this.http.get<Pizza>(this.dbData).pipe(
            map((el:Pizza) => el),
            )
    }
}
