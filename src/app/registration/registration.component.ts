import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/core/services/registration.service';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm! : UntypedFormGroup;

  constructor(
    private register: RegistrationService,
    private dialogRef: MatDialogRef<RegistrationComponent>
  ) { }

  ngOnInit(): void {
    this.registerForm = new UntypedFormGroup({
      'name' : new UntypedFormControl('',[Validators.required]),
      'email': new UntypedFormControl('',[Validators.required, Validators.email]),
      'password': new UntypedFormControl('',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }

  get formControls(){
    return this.registerForm.controls
  }

  closeDialogWindow(): void{
    this.dialogRef.close();
  }

  submitRegister(): void{
    this.register.registerUser(this.registerForm.value);
  }

}
