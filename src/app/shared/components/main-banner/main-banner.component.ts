import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import SwiperCore, {SwiperOptions, Pagination, Navigation, Scrollbar, Autoplay} from 'swiper';
import {Slide} from '../../interfaces/slide';
import {BannerSlidesService} from '../../../core/services/banner-slides.service';


@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {
  slides$: BehaviorSubject<Slide[]> = this.bannerSlidesService.bannerSlides$;

  constructor(private bannerSlidesService: BannerSlidesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])
    this.bannerSlidesService.getBannerItems();
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    // spaceBetween: 50,
    navigation: true,
    // pagination: { clickable: true },
    // scrollbar: {draggable: true},
    autoplay: {
      delay: 2500
    }
  };

  onSwiper() {
    // console.log('swiper');
  }

  onSlideChange() {
    // console.log('slide change');
  }

}

function scrollIntoView() {
  throw new Error('Function not implemented.');
}

