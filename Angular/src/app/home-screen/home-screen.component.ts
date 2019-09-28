import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  signupForm: FormGroup;

  public employees:any = [];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.signupForm = this.fb.group({
      eid: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mno: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
   }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((res) =>{
      this.employees = res;
    });

    console.log(this.employees);
  }

  onEmployeeSubmit(){

  }

}
