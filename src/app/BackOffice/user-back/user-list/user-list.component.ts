import {Component, OnInit} from '@angular/core';
import {User} from "../../../Model/User";
import {UserService} from "../../../Service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:User[]=[];
  constructor(private userService:UserService) {

  }
  ngOnInit(){
    this.userService.findAllUsers().subscribe(users=>{
      this.users=users;
    });
  }
}
