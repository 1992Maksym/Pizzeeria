import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Navigation, Scrollbar, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    // spaceBetween: 50,
    // navigation: true,
    // pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 2500
    }
  };
  onSwiper([swiper]: any) {
    // console.log('swiper');
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
