import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  image: any = './assets/img/faces/avatar.jpg';
  constructor() { }

  ngOnInit() {
  }

  change(event){
    console.log(event.target.files[0]);
    
    let reader = new FileReader();
   reader.readAsDataURL(event.target.files[0]);

   reader.onload = ()=>{
    this.image = reader.result;
  };
  
 
  
  }
}
