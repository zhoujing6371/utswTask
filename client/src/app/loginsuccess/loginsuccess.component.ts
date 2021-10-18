import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

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
