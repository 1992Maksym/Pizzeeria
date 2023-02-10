import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PromotionsComponent} from "./promotions/promotions.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {UserComponent} from "./login/user/user.component";
import {AdminComponent} from "./login/admin/admin.component";
import { UserAuthGuard } from "./shared/guards/user-auth.guard";
import { PizzaViewComponent } from "./shared/components/pizza-view/pizza-view.component";
import { PizzaViewResolver } from "./core/services/pizza-view.resolver";
import { PizzaListResolver } from "./core/services/pizza-list.resolver";
import {CartComponent} from "./shared/components/cart/cart.component";

const routes: Routes = [
  { path: '', component: MainPageComponent, resolve:{pizzaList: PizzaListResolver} },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [UserAuthGuard] },
  { path: 'user/:id', component: UserComponent, canActivate: [UserAuthGuard] },
  { path: 'pizza/:id', component: PizzaViewComponent, resolve:{pizza: PizzaViewResolver} },
  { path: 'cart', component: CartComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
