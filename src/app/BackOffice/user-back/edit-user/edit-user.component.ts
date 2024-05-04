import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as L from "leaflet";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;
  imageData: any;
  userId?: string;
  current = false;
  map: any;
  userForm: FormGroup;
  fileData = new FormData();
  isPhotoSelected = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: [''],
      surname: [''],
      name: [''],
      job: [''],
      salary: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        country: [''],
        postalCode: ['']
      }),
      cin: [''],
      rib: [''],
      balance: [''],
      lp: [''],
      birthDate: [''],
      role: [''],
      status: ['']
    });
  }

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
    }
    this.processProfile(data);
  }

  processProfile(data: any) {
    this.user = data;
    this.populateForm();
    this.initMap();
    this.userService.getPhoto(this.user.photo).subscribe((imageBlob: Blob) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageData = event.target.result;
      };
      reader.readAsDataURL(imageBlob);
    });
  }

  populateForm() {
    this.userForm.patchValue({
      email: this.user.email,
      surname: this.user.surname,
      name: this.user.name,
      job: this.user.job,
      salary: this.user.salary,
      address: {
        city: this.user.address.city,
        state: this.user.address.state,
        country: this.user.address.country,
        postalCode: this.user.address.postalCode
      },
      cin: this.user.cin,
      rib: this.user.rib,
      balance: this.user.balance,
      lp: this.user.lp,
      birthDate: this.user.birthDate,
      role: this.user.role[0].id,
      status: this.user.status
    });
    this.userForm.controls['address'].disable();
  }

  initMap() {
    if (!this.map) {
      this.map = L.map('map').setView([this.user.address.latitude, this.user.address.longitude], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(this.map);
      let marker = L.marker([this.user.address.latitude, this.user.address.longitude]).addTo(this.map);
      let clickedAddress = this.user.address.city + ", " + this.user.address.state + ", " + this.user.address.country + " " + this.user.address.postalCode;
      marker.bindPopup(clickedAddress).openPopup();
      this.map.on('click', (e: any) => {
        this.updateMarker(e.latlng.lat, e.latlng.lng);
      });
    } else {
      this.map.setView([this.user.address.latitude, this.user.address.longitude]);
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
            postalCode: data.address.postcode
          }
        });
      })
      .catch(error => {
        console.error("Error fetching address:", error);
      });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = {
        email: this.userForm.get('email')?.value,
        cin: this.userForm.get('cin')?.value,
        rib: this.userForm.get('rib')?.value,
        balance: this.userForm.get('balance')?.value,
        lp: this.userForm.get('lp')?.value,
        role: this.userForm.get('role')?.value,
        status: this.userForm.get('status')?.value,
        name: this.userForm.get('name')?.value,
        surname: this.userForm.get('surname')?.value,
        birthDate: this.userForm.get('birthDate')?.value,
        salary: this.userForm.get('salary')?.value,
        job: this.userForm.get('job')?.value,
        city: this.userForm.get('address.city')?.value,
        state: this.userForm.get('address.state')?.value,
        country: this.userForm.get('address.country')?.value,
        postalCode: this.userForm.get('address.postalCode')?.value
      };
      this.user.email = formData.email;
      this.user.cin = formData.cin;
      this.user.rib = formData.rib;
      this.user.balance = formData.balance;
      this.user.lp = formData.lp;
      this.user.status = formData.status;
      this.user.name = formData.name;
      this.user.surname = formData.surname;
      this.user.birthDate = formData.birthDate;
      this.user.salary = formData.salary;
      this.user.job = formData.job;
      this.user.address.city = formData.city;
      this.user.address.state = formData.state;
      this.user.address.country = formData.country;
      this.user.address.postalCode = formData.postalCode;
      this.user.role[0].id = formData.role;
      this.userService.update(this.user)
        .subscribe((response: any) => {
          console.log(response);
          if (this.isPhotoSelected) {
            // Call the userService.uploadPhoto() function to upload the photo
            this.userService.uploadPhoto(this.fileData, response.id).subscribe(
              (response: any) => {
                console.log('Photo uploaded successfully:', response);
                this.router.navigate([`/admin/profile/${this.user.id}`]);
              },
              (error: any) => {
                console.error('Failed to upload photo:', error);
                this.router.navigate([`/admin/profile/${this.user.id}`]);
              }
            );
          }
          else this.router.navigate([`/admin/profile/${this.user.id}`]);
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
    this.imageData = URL.createObjectURL(file);

    // Populate fileData object to send the file
    this.fileData.append('file', file);
    this.isPhotoSelected = true;
  }
}
