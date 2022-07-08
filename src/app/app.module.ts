import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {LoginComponent} from "./header/login/login.component";
import {HeaderComponent} from "./header/header.component";
import {AboutUsComponent} from "./header/about-us/about-us.component";
import {MainBannerComponent} from "./header/main-page/main-banner/main-banner.component";
import {MainPageComponent} from "./header/main-page/main-page.component";
import {PromotionsComponent} from "./header/promotions/promotions.component";
import {SwiperModule} from "swiper/angular";
import {MatButtonModule} from "@angular/material/button";
import {HeaderRoutingModule} from "./header/header-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    MainPageComponent,
    PromotionsComponent,
    MainBannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatButtonModule,
    HeaderRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
