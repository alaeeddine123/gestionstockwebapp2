import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../user';
import { AuthService } from  '../../auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  Email!: string;
  Password!: string;



  
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  loginForm!: FormGroup;
  isSubmitted  =  false;

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/home');
  }


  
/*
  LoginUser(){

    if(this.Email == "admin@gmail.com" && this.Password == "password"){

      alert('success login');
      console.log("login sucessfully");
    }else{
      alert('call to function failed');
    }
  }
  */

}
