import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from "./login.component";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from "./registration/registration.component";
import { HeaderRoutingModule } from "../header-routing.module";


@NgModule({
    declarations: [
        LoginComponent,
        AdminComponent,
        UserComponent,
        RegistrationComponent,
      ],
    imports: [
        ReactiveFormsModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HeaderRoutingModule
    ]
})
export class LoginModule{}