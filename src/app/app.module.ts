import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";

import {AppComponent} from './app.component';
import {AboutUsComponent} from "./about-us/about-us.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {PromotionsComponent} from "./promotions/promotions.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MainPageComponent,
    PromotionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
  //   matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityResourceUrl('/assets/mdi.svg'));
  // }
}
