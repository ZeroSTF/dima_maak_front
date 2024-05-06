import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../Service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as L from "leaflet";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  map: any;
  userForm: FormGroup;
  fileData = new FormData();
  isPhotoSelected = false;
  selectedImageUrl: string | ArrayBuffer | null = '/assets/default.jpg';
  user:any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: [''],
      password:[''],
      surname: [''],
      name: [''],
      job: [''],
      salary: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        country: [''],
        postalCode: [''],
        latitude:[''],
        longitude:['']
      }),
      cin: [''],
      rib: [''],
      balance: [''],
      lp: [''],
      birthDate: [''],
      role: [''],
      status: ['']
    });
    this.userForm.controls['address'].disable();
  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    if (!this.map) {
      this.map = L.map('map').setView([36.9045944, 10.1874519], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(this.map);
      this.map.on('click', (e: any) => {
        this.updateMarker(e.latlng.lat, e.latlng.lng);
      });
    } else {
      this.map.setView([36.9045944, 10.1874519]);
    }
  }

  updateMarker(latitude: number, longitude: number) {
    if (!this.map) return;
    // Clear existing marker
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    // Use a reverse geocoding service to get the address based on lat/lng
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        let clickedAddress = data.display_name;
        let marker = L.marker([latitude, longitude]).addTo(this.map);
        marker.bindPopup(clickedAddress).openPopup();
        this.userForm.patchValue({
          address: {
            city: data.address.county,
            state: data.address.state,
            country: data.address.country,
            postalCode: data.address.postcode,
            latitude: data.lat,
            longitude: data.lon
          }
        });
        console.log(data.address);
      })
      .catch(error => {
        console.error("Error fetching address:", error);
      });
  }

  onSubmit() {
    console.log("in sub");
    if (this.userForm.valid) {
      const formData = {
        email: this.userForm.get('email')?.value,
        password: this.userForm.get('password')?.value,
        cin: this.userForm.get('cin')?.value,
        rib: this.userForm.get('rib')?.value,
        balance: this.userForm.get('balance')?.value,
        lp: this.userForm.get('lp')?.value,
        status: this.userForm.get('status')?.value,
        name: this.userForm.get('name')?.value,
        surname: this.userForm.get('surname')?.value,
        birthDate: this.userForm.get('birthDate')?.value,
        salary: this.userForm.get('salary')?.value,
        job: this.userForm.get('job')?.value,
        city: this.userForm.get('address.city')?.value,
        state: this.userForm.get('address.state')?.value,
        country: this.userForm.get('address.country')?.value,
        postalCode: this.userForm.get('address.postalCode')?.value,
        latitude: this.userForm.get('address.latitude')?.value,
        longitude: this.userForm.get('address.longitude')?.value
      };
      this.user=formData;
      this.user.role=[];
      this.user.role[0]={id: this.userForm.get('role')?.value};
      this.user.address={};
      this.user.address.city=formData.city;
      this.user.address.state=formData.state;
      this.user.address.country=formData.country;
      this.user.address.postalCode=formData.postalCode;
      this.user.address.latitude=formData.latitude;
      this.user.address.longitude=formData.longitude;
      this.user.photo="default.jpg";
      console.log(this.user);
      this.userService.add(this.user)
        .subscribe((response: any) => {
          console.log(response);
          if (this.isPhotoSelected) {
            // Call the userService.uploadPhoto() function to upload the photo
            this.userService.uploadPhoto(this.fileData, response.id).subscribe(
              (response: any) => {
                console.log('Photo uploaded successfully:', response);
              },
              (error: any) => {
                console.error('Failed to upload photo:', error);
              }
            );
          }
          this.router.navigate([`/admin/user`]);
        }, error => {
          console.error(error);
        });
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    // Check if the file type is JPG
    if (file.type !== 'image/jpeg') {
      alert('Please select a JPG image file.');
      return;
    }
    // Create a URL object from the file
    const fileUrl = URL.createObjectURL(file);
    this.selectedImageUrl = fileUrl;

    // Populate fileData object to send the file
    this.fileData.append('file', file);
    this.isPhotoSelected = true;
  }
}
