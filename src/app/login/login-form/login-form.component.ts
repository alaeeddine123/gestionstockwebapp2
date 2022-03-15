import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  Email!: string;
  Password!: string;



  
  constructor() { }

  ngOnInit(): void {
  }

  

  LoginUser(){

    if(this.Email == "admin@gmail.com" && this.Password == "password"){

      alert('success login');
      console.log("login sucessfully");
    }else{
      alert('call to function failed');
    }
  }

}
