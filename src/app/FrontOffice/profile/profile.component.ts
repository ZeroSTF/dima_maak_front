import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user/user.service";
import {AuthService} from "../../Service/auth.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile:any;
  imageData:any;
  constructor(private userService:UserService, private authService:AuthService, private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.userService.getProfile().subscribe(
      data => {
        this.profile = data;
        this.userService.getPhoto(this.profile.photo).subscribe(
          (imageBlob: Blob) => {
            const reader = new FileReader();
            reader.onload = (event: any) => {
              this.imageData = event.target.result;
            };
            reader.readAsDataURL(imageBlob);
          },
          error => alert(error.error.message)
        );
      },
      error => alert(error.error.message)
    );
  }
  getImage(): void {
    this.userService.getPhoto(this.profile.photo).subscribe(
      (data: any) => {
        this.imageData = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
