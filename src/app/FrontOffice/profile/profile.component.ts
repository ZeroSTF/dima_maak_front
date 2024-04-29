import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user/user.service";
import {AuthService} from "../../Service/auth.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  imageData: any;
  userId?: string;
  current=false;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.fetchProfile();
    });
  }

  fetchProfile() {
    if (this.userId) {
      // Fetch profile of the specified user
      this.userService.getUser(this.userId).subscribe((data) => {
        this.processProfile(data);
      });
    } else {
      // For current user
      this.current=true;
      this.userService.getProfile().subscribe(data => {
        this.processProfile(data);
      });
    }
  }

  processProfile(data: any) {
    this.profile = data;
    console.log(this.profile);
    this.userService.getPhoto(this.profile.photo).subscribe(
      (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageData = event.target.result;
        };
        reader.readAsDataURL(imageBlob);
      },
    );
  }
}
