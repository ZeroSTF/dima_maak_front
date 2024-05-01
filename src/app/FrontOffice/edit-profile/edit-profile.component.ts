import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Service/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  profile: any;
  imageData: any;
  userId?: string;
  editForm: FormGroup;
  isChanged=false;
  location:any;
  constructor(private formBuilder: FormBuilder,private userService: UserService, private route: ActivatedRoute, private authService:AuthService, private router:Router, private http:HttpClient) {
    this.editForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      job: ['', Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      salary: ['', Validators.required],
      birthDate: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],

    })
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.fetchProfile();
    });
  }

  fetchProfile() {
      this.userService.getProfile().subscribe(data => {
        this.processProfile(data);
      });
    }
  processProfile(data: any) {
    this.profile = data;
    console.log(this.profile);
    //fill form
    console.log("IM RIGHT HERE");
    this.editForm.patchValue({
      firstName:this.profile.surname,
      lastName:this.profile.name,
      job:this.profile.job,
      birthDate:this.profile.birthDate,
      email:this.profile.email,
      salary:this.profile.salary,
      city:this.profile.address.city,
      state:this.profile.address.state,
      country:this.profile.address.country,
      postalCode:this.profile.address.postalCode
    });
    if(this.profile.photo!=null){
    this.userService.getPhoto(this.profile.photo).subscribe(
      (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageData = event.target.result;
        };
        reader.readAsDataURL(imageBlob);
      },
    );}
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const formData = {
        name: this.editForm.get('lastName')?.value,
        surname: this.editForm.get('firstName')?.value,
        birthDate: this.editForm.get('birthDate')?.value,
        salary: this.editForm.get('salary')?.value,
        job: this.editForm.get('job')?.value,
        city:this.editForm.get('city')?.value,
        state:this.editForm.get('state')?.value,
        country:this.editForm.get('country')?.value,
        postalCode:this.editForm.get('postalCode')?.value
      };
      this.profile.name=formData.name;
      this.profile.surname=formData.surname;
      this.profile.birthDate=formData.birthDate;
      this.profile.salary=formData.salary;
      this.profile.job=formData.job;
      this.profile.address.city=formData.city;
      this.profile.address.state=formData.state;
      this.profile.address.country=formData.country;
      this.profile.address.postalCode=formData.postalCode;
      //continue by editing location in backend and adding the editprofile service in the service file in the frontend
     /* this.authService.editProfile(formData)
        .subscribe((response : any) => {
          console.log(response);
          this.router.navigate(['/login']);
        }, error => {
          console.error(error);
        });*/
    }
  }
  changeLocation(){
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
    this.location = {
      city: city,
      state: state,
      country: country,
      postalCode: postalCode,
      longitude: longitude,
      latitude: latitude
    }
    this.editForm.patchValue({
      city:city,
      state:state,
      country:country,
      postalCode:postalCode
    });

  }
}
