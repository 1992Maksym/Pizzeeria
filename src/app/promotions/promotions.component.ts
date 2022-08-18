import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Scroll} from '@angular/router';
import {BehaviorSubject, filter} from 'rxjs';
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
  fragment: string | null = '';
  constructor(
    private promotions: PromotionsService,
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }



  ngOnInit(): void {
    this.promotions.getPromotions();
  }

  ngAfterViewInit(): void {
    // this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
    //   console.log(e);
    //   this.viewportScroller.scrollToAnchor(e.anchor);
    // })
    this.route.fragment.subscribe(el => {
      this.fragment = el;
      if (this.fragment != null) {
        this.viewportScroller.scrollToAnchor(this.fragment);
      }
    })
  }

}
