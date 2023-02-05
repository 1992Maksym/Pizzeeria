import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new UntypedFormGroup({
      'email': new UntypedFormControl('',[Validators.required, Validators.email]),
      'password': new UntypedFormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })

  }

  get formControls() {
    return this.loginForm.controls;
  }

  submitLogin() {
    this.authService.logIn(this.loginForm.value)
  }
}
