import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  image: any = './assets/img/faces/avatar.jpg';
  registerForm : FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required,Validators.maxLength(8),Validators.minLength(8)]),
      email : new FormControl('', [Validators.email, Validators.required]),
      password : new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('(?=.*[A-Z])')]),
      confirmPassword : new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('(?=.*[A-Z])')])
    },
    )
   }

  ngOnInit() {
  }


  change(event){
    console.log(event.target.files[0]);
    let reader = new FileReader();
   reader.readAsDataURL(event.target.files[0]);
   reader.onload = ()=>{
    this.image = reader.result;
  }
  }

  
  btnRegister(){
    console.log(this.registerForm)
  }
}
