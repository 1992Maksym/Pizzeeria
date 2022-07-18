import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from "./login.component";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


@NgModule({
    declarations: [
        LoginComponent,
        AdminComponent,
        UserComponent
      ],
    imports: [
        ReactiveFormsModule,
        MatButtonModule,
        BrowserAnimationsModule
    ]
})
export class LoginModule{}