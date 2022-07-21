import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PromotionsComponent} from "./promotions/promotions.component";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegistrationComponent} from "./login/registration/registration.component";
import {UserComponent} from "./login/user/user.component";
import {AdminComponent} from "./login/admin/admin.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class HeaderRoutingModule{}
