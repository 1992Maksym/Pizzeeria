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

//   pizza_arr = [
//     {
//         image: 'img/napoletana.jfif',
//         title: 'Napoletana',
//         size: [25,30,35],
//         price: [80,100,120],
//         description: ['ветчина','сыр','кукуруза','грибы','помидор'],
//         id: 'pizzaNapoletana',
//         counter: 0,
//     },
//     {
//         image: 'img/4chees.jpg',
//         title: '4chees',
//         size: [25,30,35],
//         price: [90,105,130],
//         description: ['чедер','гауда','брынза','с плесенью'],
//         id: 'pizza4chees',
//         counter: 0,
//     },
//     {
//         image: 'img/mexicano.jfif',
//         title: 'Mexicano',
//         size: [25,30,35],
//         price: [70,95,110],
//         description: ['кабаноси','сыр','халапеньо','огурец','помидор'],
//         id: 'pizzaMexicano',
//         counter: 0,
//     },
//     {
//         image: 'img/hawaii.jfif',
//         title: 'Hawaii',
//         size: [25,30,35],
//         price: [75,90,100],
//         description: ['курица','сыр','ананасы'],
//         id: 'pizzaHawaii',
//         counter: 0,
//     },
//     {
//       image: 'img/napoletana.jfif',
//       title: 'Napoletana',
//       size: [25,30,35],
//       price: [80,100,120],
//       description: ['ветчина','сыр','кукуруза','грибы','помидор'],
//       id: 'pizzaNapoletana',
//       counter: 0,
//   },
//   {
//       image: 'img/4chees.jpg',
//       title: '4chees',
//       size: [25,30,35],
//       price: [90,105,130],
//       description: ['чедер','гауда','брынза','с плесенью'],
//       id: 'pizza4chees',
//       counter: 0,
//   },
//   {
//       image: 'img/mexicano.jfif',
//       title: 'Mexicano',
//       size: [25,30,35],
//       price: [70,95,110],
//       description: ['кабаноси','сыр','халапеньо','огурец','помидор'],
//       id: 'pizzaMexicano',
//       counter: 0,
//   },
//   {
//       image: 'img/hawaii.jfif',
//       title: 'Hawaii',
//       size: [25,30,35],
//       price: [75,90,100],
//       description: ['курица','сыр','ананасы'],
//       id: 'pizzaHawaii',
//       counter: 0,
//   },
//   {
//     image: 'img/napoletana.jfif',
//     title: 'Napoletana',
//     size: [25,30,35],
//     price: [80,100,120],
//     description: ['ветчина','сыр','кукуруза','грибы','помидор'],
//     id: 'pizzaNapoletana',
//     counter: 0,
// },
// {
//     image: 'img/4chees.jpg',
//     title: '4chees',
//     size: [25,30,35],
//     price: [90,105,130],
//     description: ['чедер','гауда','брынза','с плесенью'],
//     id: 'pizza4chees',
//     counter: 0,
// },
// {
//     image: 'img/mexicano.jfif',
//     title: 'Mexicano',
//     size: [25,30,35],
//     price: [70,95,110],
//     description: ['кабаноси','сыр','халапеньо','огурец','помидор'],
//     id: 'pizzaMexicano',
//     counter: 0,
// },
// {
//     image: 'img/hawaii.jfif',
//     title: 'Hawaii',
//     size: [25,30,35],
//     price: [75,90,100],
//     description: ['курица','сыр','ананасы'],
//     id: 'pizzaHawaii',
//     counter: 0,
// },
// ];

dbData = 'http://localhost:3001/pizza_arr';
pizzaArr$:BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);
getPizzaData(){
    this.http.get(this.dbData).pipe(
        map((el:any) => this.pizzaArr$.next(el)),
        ).subscribe()
    }
}
