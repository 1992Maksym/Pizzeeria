import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { RegistrationComponent } from "../registration/registration.component";
import { GuardService } from "../core/services/guard.service";
import { tap } from "rxjs/operators";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userLoggedCheck$ = this.authGuard.user.asObservable();
  unsubscribe$ = new Subject();

  loggedIncorrectly = false;
  loginForm!: UntypedFormGroup;

  constructor(
    private authService: AuthService,
    private matDialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
    private authGuard: GuardService,
  ) { }

  ngOnInit(): void {
    this.loginForm = new UntypedFormGroup({
      'email': new UntypedFormControl('',[Validators.required, Validators.email]),
      'password': new UntypedFormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }

  get formControls() {
    return this.loginForm.controls;
  }

  openRegistrationForm(){
    this.dialogRef.close();

    this.matDialog
      .open<RegistrationComponent>(RegistrationComponent, {
        panelClass: 'login-window',
        backdropClass: 'login-backdrop',
      })
      .afterClosed()
      .subscribe();
  }
  closeDialogWindow(){
    this.dialogRef.close();
  }

  submitLogin() {
    this.authService.logIn(this.loginForm.value);
    this.checkUser();
  }

  checkUser():void{
    this.userLoggedCheck$.pipe(
      tap(el => {
        if(!el) {
          this.loggedIncorrectly = true;
        }else{
          this.loggedIncorrectly = false;
          this.dialogRef.close();
        }
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe()
  }

  ngOnDestroy():void{
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }
}
