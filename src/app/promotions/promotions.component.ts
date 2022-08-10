import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Promotion } from 'src/app/shared/interfaces/promotion';
import { PromotionsService } from 'src/app/core/services/promotions.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit, AfterViewInit {
  promotions$: BehaviorSubject<Promotion[]> = this.promotions.promotions$;
  fragment: any;
  constructor(
    private promotions: PromotionsService,
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.promotions.getPromotions();
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(el => this.fragment = el)
    this.viewportScroller.scrollToAnchor(this.fragment);
  }

}
