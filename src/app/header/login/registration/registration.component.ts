import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm! : FormGroup;

  constructor(private register: RegistrationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name' : new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }

  get formControls(){
    return this.registerForm.controls
  }

  // getName(value){
  //   this.
  // }

  submitRegister(){
    this.register.registerUser(this.registerForm.value)
    // console.log(this.registerForm.value)
  }

}
