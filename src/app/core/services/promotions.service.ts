import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Promotion } from '../../shared/interfaces/promotion';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  promotions$: BehaviorSubject<Promotion[]> = new BehaviorSubject<Promotion[]>([])

  constructor(private http: HttpClient) { }

  getPromotions(){
    this.http.get('http://localhost:3001/promotions').pipe(
      tap((el:any) => this.promotions$.next(el))
    ).subscribe()
  }
}
