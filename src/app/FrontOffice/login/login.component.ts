import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../Service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({

      email: ['', Validators.required],

      password: ['', Validators.required],

      rememberMe: [false]

    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.login({ email, password })
        .subscribe((response : any) => {
          // handle successful login response
          console.log(response);
          localStorage.setItem('token', response.jwt);  // Save token to local storage
          this.router.navigate(['/']);
        }, error => {
          // handle login error
          console.error(error);
        });
    }
  }
}
