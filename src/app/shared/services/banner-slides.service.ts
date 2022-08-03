import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Slide } from '../interfaces/slide';

@Injectable({
  providedIn: 'root'
})
export class BannerSlidesService {
  bannerSlides$: BehaviorSubject<Slide[]> = new BehaviorSubject<Slide[]>([])

  constructor(private http: HttpClient) { }

  getBannerItems(){
    this.http.get('http://localhost:3001/banner_items').pipe(
      tap((el:any) => this.bannerSlides$.next(el))
    ).subscribe()
  }
}
