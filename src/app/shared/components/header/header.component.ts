import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { GuardService } from '../../../core/services/guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userLogged$: BehaviorSubject<boolean> = this.authGuard.user;

  constructor(private authGuard: GuardService) { }

  ngOnInit(): void {
  }

}
