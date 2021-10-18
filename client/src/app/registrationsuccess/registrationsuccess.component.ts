import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registrationsuccess',
  templateUrl: './registrationsuccess.component.html',
  styleUrls: ['./registrationsuccess.component.css']
})
export class RegistrationsuccessComponent implements OnInit {
  user = new User();
  isTypeA = false;
  isTypeB = false;

  constructor() { }

  ngOnInit(): void {
    var stringvalue = localStorage.getItem("user");
    if (stringvalue!=null){
       this.user = JSON.parse(stringvalue); 
    }
    if(this.user.usertype=="TYPE_A") this.isTypeA = true;
    else if(this.user.usertype=="TYPE_B") this.isTypeB = true;
  }

  logout(){
    localStorage.removeItem('user');
  }

}
