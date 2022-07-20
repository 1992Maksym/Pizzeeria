import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }

  
  submitLogin() {
    this.authService.logIn(this.loginForm.value)
    // this.authService.logIn(this.loginForm.value).subscribe({
    //   next:() => this.router.navigate(['admin']),
    //   error:(err:any) => alert(err.message)
    // })
    // if(this.authService.admin == true){
    //   this.router.navigate(['admin']);
    // } else if(this.authService.user == true){
    //   this.router.navigate(['user']);
    // }else alert('такого пользователя нет');
  }

  get formControls() {
    return this.loginForm.controls;
  }
}