import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBootstrapProject';
  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl(''),
  });



  get isValid (){
    return this.loginForm.get('email');
  }

  userData={
    email:'svmmalviya@gmail.com',
    password:'slohar420@929'
  }

  onSubmit(){
   console.warn(this.loginForm.value)
  }
}
