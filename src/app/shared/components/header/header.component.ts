import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {BehaviorSubject, filter} from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { AuthGuardService } from '../../../core/services/auth-guard.service';
import {Router, Scroll} from "@angular/router";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userLogged$: BehaviorSubject<boolean> = this.authGuard.user;
  // userLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authGuard: AuthGuardService, private router: Router, private viewportScroller: ViewportScroller,) { }

  ngOnInit(): void {
  }




}
