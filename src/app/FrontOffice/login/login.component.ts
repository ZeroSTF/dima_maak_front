import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../Service/auth.service";
import { Router } from '@angular/router';
import {UserService} from "../../Service/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user:any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService:UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.login({ email, password })
        .subscribe((response : any) => {
          // handle successful login response
          console.log(response);
          if(response.jwt=="Invalid email/password supplied"){
            console.log('login error'); //TODO handle login error
          }
          else {
            localStorage.setItem('token', response.jwt);  // Save token to local storage
            this.userService.getProfile().subscribe(data => {
              this.user = data;
              if(this.user.role[0].id==1){
                this.router.navigate(['/admin']);
              }else{
                this.router.navigate(['/']);
              }
            });
          }
        }, error => {
          // handle login error
          console.error(error);
        });
    }
  }
  login(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
this.service.login(email,password).subscribe((data:any)=>{
  console.log(data.role[0].authority,data.id);
  localStorage.setItem('userId', data.id); 
    localStorage.setItem('userRole', data.role[0].authority); 

   if(data.role[0].authority==="ADMIN")
    {
      this.router.navigate(['/admin/packlist']); 
    }else{
      this.router.navigate(['/InsurancePacks']); 
    }
  
  
})
  }
}
