import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthApiService } from '../services/auth-api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  dataResponseLogin;

  constructor(private authApi: AuthApiService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  get fieldErrors() {
    return this.loginForm.controls;
  }

  btnLogin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authApi.login(this.loginForm.value).subscribe((result)=>{
      console.log("response of login: ",result);
      this.dataResponseLogin = result;
     }); 

    console.log("==>",this.loginForm.value)
  }
}
