import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-type-busers',
  templateUrl: './type-busers.component.html',
  styleUrls: ['./type-busers.component.css']
})
export class TypeBusersComponent implements OnInit {

  users: any;

  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this.loadAllTypeBUsers();
  }

  loadAllTypeBUsers(){
    this._service.loadAllUsersFromUserType("TYPE_B").subscribe(
      data =>{
        console.log("response received");
        this.users = data;
        },
      error=>{
        console.log("exception occured")        
        }     
    );
  }

}
