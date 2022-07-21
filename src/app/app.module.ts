import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './header/login/login.module';
import { SwiperModule } from "swiper/angular";
import { MatButtonModule } from "@angular/material/button";
import { HeaderRoutingModule } from "./header/header-routing.module";


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";
import { AboutUsComponent } from "./header/about-us/about-us.component";
import { MainBannerComponent } from "./shared/main-banner/main-banner.component";
import { MainPageComponent } from "./header/main-page/main-page.component";
import { PromotionsComponent } from "./header/promotions/promotions.component";
import { PizzaListComponent } from './shared/pizza-list/pizza-list.component';
import { NotFoundComponent } from './header/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    MainPageComponent,
    PromotionsComponent,
    MainBannerComponent,
    PizzaListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatButtonModule,
    HeaderRoutingModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
