import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../Service/auth.service";
import { Router } from '@angular/router';
import { AssetService } from 'src/app/Service/asset.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private asset:AssetService, private authService: AuthService, private router: Router) {
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
            this.router.navigate(['/']);
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
    this.asset.login(email,password).subscribe((data:any)=>{
 
      const datauser= JSON.parse(data)
      localStorage.setItem("roledima",datauser.role)
      localStorage.setItem("iddima",datauser.id)
      if(datauser.role ==="ROLE_ADMIN"){
        this.router.navigate(['/admin/asset']);
      }else if(datauser.role ==="ROLE_USER"){
        this.router.navigate(['/assetclient']);
      }
      
    console.log(JSON.parse(data));
    
    })
  }
}
