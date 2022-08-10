import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacePipe } from "./pipes/space.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { PizzaListComponent } from "./components/pizza-list/pizza-list.component";
import { PizzaViewComponent } from "./components/pizza-view/pizza-view.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import {MainBannerComponent} from "./components/main-banner/main-banner.component";



@NgModule({
  declarations: [
    SpacePipe,
    PizzaListComponent,
    PizzaViewComponent,
    NotFoundComponent,
    // MainBannerComponent,
  ],
  exports: [
    SpacePipe,
    PizzaListComponent,
    PizzaViewComponent,
    NotFoundComponent,
    // MainBannerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
