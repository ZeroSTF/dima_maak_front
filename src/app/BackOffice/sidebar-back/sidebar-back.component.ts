import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user/user.service";

@Component({
  selector: 'app-sidebar-back',
  templateUrl: './sidebar-back.component.html',
  styleUrls: ['./sidebar-back.component.css']
})
export class SidebarBackComponent implements OnInit{
  profile: any;
  imageData: any;
  constructor(private userService:UserService) {
  }
  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      this.processProfile(data);
    });
  }
  processProfile(data: any) {
    this.profile = data;
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
