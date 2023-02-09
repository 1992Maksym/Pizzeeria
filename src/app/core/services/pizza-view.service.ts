import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Pizza } from '../../shared/interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaViewService {

  constructor(private http: HttpClient) { }

  getSelectedPizzaId(id: string){
    return this.http.get<Pizza>(`http://localhost:3000/pizza_arr?id=${id}`).pipe(
      map((el: Pizza) => el)
      );
  }
}
