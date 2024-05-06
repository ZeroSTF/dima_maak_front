import {Component, OnInit} from '@angular/core';
import {Role, User, UStatus} from "../../Models/user";
import {UserService} from "../../Services/user.service";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();

  }

  loadUsers(): void {
    this.userService.retrieveAllUsers().subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.log('Error loading users:', error);
        }
    );
  }

  removeUser(id: number): void {
    this.userService.removeUser(id).subscribe(
        data => {
          console.log('user deleted:', data);
          this.loadUsers(); // Rechargez la liste des Ventures après la suppression
        },
        error => {
          console.log('Error deleting user:', error);
        }
    );
  }


  newUser: User = {
    id: 0,
    cin: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    salary: 0,
    job: '',
    photo: '',
    balance: 0,
    rib: 0,
    role: Role.Investor,
    status: UStatus.ACTIVE,
    lp: 0,
    investments: []  };
}
