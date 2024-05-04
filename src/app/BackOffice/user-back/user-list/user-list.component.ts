import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users!:any;
  constructor(private userService:UserService, private router:Router, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(){
    this.fetchUsers();
  }
  fetchUsers(){
    this.userService.findAllUsers().subscribe(users=>{
      this.users=users;
    });
  }
  delete(u: any) {
    this.userService.delete(u.id).subscribe(() => {
      // Remove the deleted user from the users array
      this.users = this.users.filter((user: any) => user.id !== u.id);
      this.cdr.detectChanges();
    });
  }
  edit(u:any){
    this.router.navigate([`/admin/editUser/${u.id}`])
  }
}
