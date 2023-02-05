import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Slide } from '../../shared/interfaces/slide';

@Injectable({
  providedIn: 'root'
})
export class BannerSlidesService {
  bannerSlides$: BehaviorSubject<Slide[]> = new BehaviorSubject<Slide[]>([])

  constructor(private http: HttpClient) { }

  getBannerItems(){
    this.http.get('http://localhost:3000/banner_items').pipe(
      tap((el:any) => this.bannerSlides$.next(el))
    ).subscribe()
  }
}
