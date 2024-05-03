import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users!:any;
  constructor(private userService:UserService) {

  }
  ngOnInit(){
    this.userService.findAllUsers().subscribe(users=>{
      this.users=users;
    });
  }
  delete(u: any) {
    this.userService.delete(u.id)
  }
}
