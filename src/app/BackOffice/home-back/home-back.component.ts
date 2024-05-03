import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user/user.service";

@Component({
  selector: 'app-home-back',
  templateUrl: './home-back.component.html',
  styleUrls: ['./home-back.component.css']
})
export class HomeBackComponent implements OnInit {
  profile: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.fetchProfile();
  }

  fetchProfile() {
    this.userService.getProfile().subscribe(data => {
      this.profile = data;
      console.log(this.profile);
    });
  }

}
