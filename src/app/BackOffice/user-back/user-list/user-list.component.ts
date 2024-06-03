import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";
import {Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:any;
  searchTerm:string='';
  searchType:string='surname';
  filteredUsers:any[]=[];
  constructor(private userService:UserService, private router:Router, private cdr: ChangeDetectorRef) {
  }
  ngOnInit(){
    this.fetchUsers();
  }
  fetchUsers(){
    this.userService.findAllUsers().subscribe((users: any) => {
      this.users = users;
      // Create an array of observables
      const riskObservables = users.map((user:any) => this.userService.assessRisk(user.id));

      // Use forkJoin to wait for all HTTP requests to complete
      forkJoin(riskObservables).subscribe((riskCategories: any) => {
        // Assign the risk category to each user
        this.users.forEach((user: any, index: number) => {
          // Extract the risk category from the string
          const riskCategory = riskCategories[index];
          user['riskCategory'] = riskCategory;
        });

        // Trigger change detection to update the view
        this.cdr.detectChanges();

        // Call the filterUsers method after the users array is updated
        this.filterUsers();
      });
    });
  }
  filterUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = this.users;
      return;
    }
    this.filteredUsers = this.users.filter((user: any) => {
        if (this.searchType==='address'){
          return user.address.city.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.address.state.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.address.country.toLowerCase().includes(this.searchTerm.toLowerCase()) || user.address.postalCode.toLowerCase().includes(this.searchTerm.toLowerCase());
        }
        if (this.searchType==='role'){
          return user.role[0].type.toLowerCase().includes(this.searchTerm.toLowerCase());
        }
        return user[this.searchType].toLowerCase().includes(this.searchTerm.toLowerCase());
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
