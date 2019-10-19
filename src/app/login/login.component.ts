import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthApiService } from '../services/auth-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  dataResponseLogin;
  errorMessage;

  constructor(private authApi: AuthApiService, private router : Router) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {}

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
      if(this.dataResponseLogin){
        let message = this.dataResponseLogin.message;
        if(message === "OK"){
          let acessToken = this.dataResponseLogin.acessToken;
          localStorage.setItem('token',acessToken);
          this.router.navigateByUrl('/team');
        }
      }
     }); 

    
    //console.log("==>",this.loginForm.value)
  }
}
