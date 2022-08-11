import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss']
})
export class HeaderLoggedComponent implements OnInit {
  userLoggedName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private auth: AuthService, private router: Router, private authGuard: AuthGuardService) { }

  userTypeCheck(){
    if(this.auth.userLogged$.getValue().type === 'user'){
      this.userLogged$.next(true)
    }
  }
  ngOnInit(): void {
    this.userLoggedName$.next(this.auth.userLogged$.getValue().name);
    this.userTypeCheck();
  }
  logOut(){
    this.authGuard.userIsLogout();
    this.router.navigate(['/']);
  }

}
