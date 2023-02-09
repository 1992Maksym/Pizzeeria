import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GuardService } from 'src/app/core/services/guard.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStrorageService } from "../../../core/services/local-strorage.service";

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss']
})
export class HeaderLoggedComponent implements OnInit {
  userLoggedName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: AuthService,
    private router: Router,
    private authGuard: GuardService,
    private localStrorageService: LocalStrorageService,
  ) { }

  userTypeCheck(){
    if(JSON.parse(localStorage.getItem(this.auth.localAuth) || '{}').type === 'user'){
      this.userLogged$.next(true);
    }
  }
  ngOnInit(): void {
    const user = this.localStrorageService.getToLocalStorage(this.localStrorageService.localAuth);
    this.userLoggedName$.next(user.name);
    this.userTypeCheck();
  }
  logOut(){
    this.authGuard.userIsLogout();
    this.router.navigate(['/']);
    localStorage.clear();
  }
  navigateUser(){
    this.router.navigate(['user', this.userLoggedName$.getValue()]);
  }

}
