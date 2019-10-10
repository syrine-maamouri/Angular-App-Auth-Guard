import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;

  constructor() {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  btnLogin(){
    console.log(this.loginForm.value)
  }
}
