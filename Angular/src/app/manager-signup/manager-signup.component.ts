import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-signup',
  templateUrl: './manager-signup.component.html',
  styleUrls: ['./manager-signup.component.css']
})
export class ManagerSignupComponent implements OnInit {
  signupForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname : ['', [Validators.required]],
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
      dob : ['', [Validators.required]],
      company : ['', [Validators.required]],
      address : ['', [Validators.required]],
      confirmpassword : ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  onSignupSubmit(){
    console.log(this.signupForm.value);
  }

}
