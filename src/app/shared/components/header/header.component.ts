import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {BehaviorSubject, filter} from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { GuardService } from '../../../core/services/guard.service';
import {Router, Scroll} from "@angular/router";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userLogged$: BehaviorSubject<boolean> = this.authGuard.user;

  constructor(private authGuard: GuardService, private router: Router, private viewportScroller: ViewportScroller,) { }

  ngOnInit(): void {
  }

}
