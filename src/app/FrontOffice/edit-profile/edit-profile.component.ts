import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Service/auth.service";

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
  constructor(private formBuilder: FormBuilder,private userService: UserService, private route: ActivatedRoute, private authService:AuthService, private router:Router) {
    this.editForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      job: ['', Validators.required],
      salary: ['', Validators.required],
      birthDate: ['', Validators.required]
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
    this.userService.getPhoto(this.profile.photo).subscribe(
      (imageBlob: Blob) => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageData = event.target.result;
        };
        reader.readAsDataURL(imageBlob);

        //fill form
        this.editForm.patchValue({
          firstName:this.profile.surname,
          lastName:this.profile.name,
          job:this.profile.job,
        });
      },
    );
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const formData = {
        cin: this.editForm.get('cin')?.value,
        name: this.editForm.get('lastName')?.value,
        surname: this.editForm.get('firstName')?.value,
        //address: this.location,
        birthDate: this.editForm.get('birthDate')?.value,
        email: this.editForm.get('email')?.value,
        password: this.editForm.get('password')?.value,
        salary: this.editForm.get('salary')?.value,
        job: this.editForm.get('job')?.value,
        rib: this.editForm.get('rib')?.value
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
