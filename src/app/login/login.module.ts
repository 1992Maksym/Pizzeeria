import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { AppRoutingModule } from "../app-routing.module";

import { LoginComponent } from "./login.component";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from "../registration/registration.component";
import { MessageService } from 'primeng/api';
import {MatIconModule} from "@angular/material/icon";


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
        AppRoutingModule,
        ToastModule,
        RippleModule,
        ButtonModule,
        MatIconModule
    ],
    providers: [
        MessageService,
    ],
})
export class LoginModule{}
