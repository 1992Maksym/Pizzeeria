import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Promotion } from 'src/app/shared/interfaces/promotion';
import { PromotionsService } from 'src/app/shared/services/promotions.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  promotions$: BehaviorSubject<Promotion[]> = this.promotions.promotions$;

  constructor(private promotions: PromotionsService, private router: Router) { }

  ngOnInit(): void {
    this.promotions.getPromotions();
  }

}
