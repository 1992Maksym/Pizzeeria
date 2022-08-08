import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators'
import { Pizza } from '../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaViewService {
    
  constructor(private http: HttpClient) { }

  getSelectedPizzaId(id: string){
    return this.http.get<Pizza>(`http://localhost:3001/pizza_arr?id=${id}`).pipe(
      map((el: Pizza) => el)
      );
  }
}
