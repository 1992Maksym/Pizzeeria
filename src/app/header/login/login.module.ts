import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { RoutingModule } from "../routing.module";

import { LoginComponent } from "./login.component";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from "./registration/registration.component";
import { MessageService } from 'primeng/api';


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
        RoutingModule,
        ToastModule,
        RippleModule,
        ButtonModule
    ],
    providers: [
        MessageService,
    ],
})
export class LoginModule{}
