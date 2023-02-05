import {Component, OnInit} from '@angular/core';
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

  constructor(
    private bannerSlidesService: BannerSlidesService,
   ) {}

  ngOnInit(): void {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])
    this.bannerSlidesService.getBannerItems();
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    autoplay: {
      delay: 2500
    }
  };

  onSwiper() {
  }

  onSlideChange() {
  }

}


