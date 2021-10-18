import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private _service: UserService, private _router: Router) { 
    
  }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        localStorage.setItem('user', JSON.stringify(data));
        this._router.navigate(['/loginsuccess']);
        },
      error=>{
        console.log("exception occured")
        this.msg = "Bad credentials, Please enter valid email id and password!";
      }
    );
  }

  gotoRegistration(){
    this._router.navigate(['/registration']);
  }

  
  

}
