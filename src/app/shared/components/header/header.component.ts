import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { GuardService } from '../../../core/services/guard.service';
import {LoginComponent} from "../../../login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  userLogged$: BehaviorSubject<boolean> = this.authGuard.user;

  constructor(private authGuard: GuardService, private matDialog: MatDialog) { }

  openLoginForm(): void{
    this.matDialog
      .open<LoginComponent>(LoginComponent, {
        panelClass: 'login-window',
        backdropClass: 'login-backdrop',
      })
      .afterClosed()
      .subscribe();
  }

}
