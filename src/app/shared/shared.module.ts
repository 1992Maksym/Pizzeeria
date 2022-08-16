import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacePipe } from "./pipes/space.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { PizzaListComponent } from "./components/pizza-list/pizza-list.component";
import { PizzaViewComponent } from "./components/pizza-view/pizza-view.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { MainBannerComponent } from "./components/main-banner/main-banner.component";
import { SwiperModule } from "swiper/angular";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderLoggedComponent } from "./components/header-logged/header-logged.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "../app-routing.module";
import { WithoutQuotesPipe } from './pipes/without-quotes.pipe';



@NgModule({
  declarations: [
    SpacePipe,
    PizzaListComponent,
    PizzaViewComponent,
    NotFoundComponent,
    MainBannerComponent,
    FooterComponent,
    HeaderComponent,
    HeaderLoggedComponent,
    WithoutQuotesPipe,
  ],
  exports: [
    SpacePipe,
    PizzaListComponent,
    PizzaViewComponent,
    NotFoundComponent,
    MainBannerComponent,
    FooterComponent,
    HeaderComponent,
    HeaderLoggedComponent,
    WithoutQuotesPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    SwiperModule,
    MatBadgeModule,
    MatButtonModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
