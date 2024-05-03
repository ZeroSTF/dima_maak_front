import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users!:any;
  constructor(private userService:UserService, private router:Router) {

  }
  ngOnInit(){
    this.userService.findAllUsers().subscribe(users=>{
      this.users=users;
    });
  }
  delete(u: any) {
    this.userService.delete(u.id)
  }
  edit(u:any){
    this.router.navigate([`/admin/editUser/${u.id}`])
  }
}
