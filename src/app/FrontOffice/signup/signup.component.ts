import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Service/auth.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpForm: FormGroup;
  location:any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private http:HttpClient) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      job: ['', Validators.required],
      salary: ['', Validators.required],
      cin: ['', Validators.required],
      rib: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      await this.getLocationData(latitude, longitude);
    })
  }
  async getLocationData(latitude: number, longitude: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    const response = await this.http.get<any>(url).toPromise();
    const city = response.address.residential || '';
    const state = response.address.state || '';
    const country = response.address.country || '';
    const postalCode = response.address.postcode || '';
    this.location={
      city: city,
      state: state,
      country: country,
      postalCode: postalCode,
      longitude: longitude,
      latitude: latitude
    }
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const formData = {
        cin: this.signUpForm.get('cin')?.value,
        name: this.signUpForm.get('lastName')?.value,
        surname: this.signUpForm.get('firstName')?.value,
        address: this.location,
        birthDate: this.signUpForm.get('birthDate')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value,
        salary: this.signUpForm.get('salary')?.value,
        job: this.signUpForm.get('job')?.value,
        rib: this.signUpForm.get('rib')?.value
      };
      this.authService.register(formData)
        .subscribe((response : any) => {
          console.log(response);
          this.router.navigate(['/login']);
        }, error => {
          console.error(error);
        });
    }
  }

}
