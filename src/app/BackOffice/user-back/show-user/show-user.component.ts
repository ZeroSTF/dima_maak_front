import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../Service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as L from 'leaflet';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  user: any;
  imageData: any;
  userId?: string;
  current = false;
  map: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.fetchProfile();
    });
  }

  async fetchProfile() {
    let data;
    if (this.userId) {
      data = await this.userService.getUser(this.userId).toPromise();
    } else {
      data = await this.userService.getProfile().toPromise();
      this.current = true;
    }
    this.processProfile(data);
  }

  processProfile(data: any) {
    this.user = data;
    this.initMap();
    this.userService.getPhoto(this.user.photo).subscribe((imageBlob: Blob) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageData = event.target.result;
      };
      reader.readAsDataURL(imageBlob);
    });
  }

  initMap() {
    if (!this.map) {
      this.map = L.map('map').setView([this.user.address.latitude, this.user.address.longitude], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(this.map);
      L.marker([this.user.address.latitude, this.user.address.longitude]).addTo(this.map);
    } else {
      this.map.setView([this.user.address.latitude, this.user.address.longitude]);
    }
  }
  delete() {
    this.userService.delete(this.user.id).subscribe(() => {
      this.router.navigate(['/admin/user']);
    });
  }
  edit(){
    this.router.navigate([`/admin/editUser/${this.user.id}`])
  }
}
