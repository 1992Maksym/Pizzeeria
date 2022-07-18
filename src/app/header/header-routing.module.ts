import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PromotionsComponent} from "./promotions/promotions.component";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class HeaderRoutingModule{}
