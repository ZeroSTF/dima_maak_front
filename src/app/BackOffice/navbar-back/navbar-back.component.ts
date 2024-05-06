import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent {
  constructor(){ 

  }
logout(){
  localStorage.clear()
  window.location.href="/login"
}
}
