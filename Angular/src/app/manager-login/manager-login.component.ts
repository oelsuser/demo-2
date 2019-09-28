import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  
  onLoginSubmit(){
    console.log(this.loginForm.value);
  }

}
