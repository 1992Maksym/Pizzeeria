import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './header/login/login.module';
import { SwiperModule } from "swiper/angular";
import { MatButtonModule } from "@angular/material/button";
import { RoutingModule } from "./routing.module";
import { MatBadgeModule } from '@angular/material/badge';

// import {MatIconRegistry} from '@angular/material/icon';
// import {DomSanitizer} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";
import { AboutUsComponent } from "./core/components/about-us/about-us.component";
import { MainBannerComponent } from "./shared/main-banner/main-banner.component";
import { MainPageComponent } from "./core/components/main-page/main-page.component";
import { PromotionsComponent } from "./core/components/promotions/promotions.component";
import { PizzaListComponent } from './shared/pizza-list/pizza-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SpacePipe } from './shared/pipes/space.pipe';
import { HeaderLoggedComponent } from './header/header-logged/header-logged.component';
import { PizzaViewComponent } from './shared/pizza-view/pizza-view.component';


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
    SpacePipe,
    HeaderLoggedComponent,
    PizzaViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatButtonModule,
    RoutingModule,
    HttpClientModule,
    LoginModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
  //   matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityResourceUrl('/assets/mdi.svg'));
  // }
}
