import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  msg:any = '';
  user = new User();
  usertypes = ['TYPE_A', 'TYPE_B'];
  constructor(private _service: UserService, private _router: Router) { 
    
  }
  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        localStorage.setItem('user', JSON.stringify(data));
        this._router.navigate(['/registrationsuccess']);
        },
      error=>{
        console.log("exception occured")
        this.msg = error.error;    
          if (error.error instanceof ErrorEvent) {
              this.msg = `Error: ${error.error.message}`;
          } else {
              this.msg = `Error: ${error.message}`;
          }
        }
      
    );
  }

  
 

}
