import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-type-ausers',
  templateUrl: './type-ausers.component.html',
  styleUrls: ['./type-ausers.component.css']
})
export class TypeAusersComponent implements OnInit {
  users: any;

  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this.loadAllTypeAUsers();
  }

  loadAllTypeAUsers(){
    this._service.loadAllUsersFromUserType("TYPE_A").subscribe(
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
