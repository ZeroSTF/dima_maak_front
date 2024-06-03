import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../../Service/user/user.service";
class ChargeRequest  {

  name!:string
  email!:string
  cardNumber!:string
  exp_month!:string
  exp_year!:string
  cvv!:string
   amount!:number
  currency="usd"
  description!:string
}


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {



  constructor(private http: HttpClient,private routeractivated:ActivatedRoute,private router:Router, private userService:UserService) {

  }
  chargeRequest= new ChargeRequest()
  host = "http://localhost:8080"

  charge() {
    console.log(this.chargeRequest);
    this.chargeRequest.amount=520
    this.http.post('http://localhost:8080/payment/charge?iduser='+this.iduser, this.chargeRequest).subscribe(

      (data) => {
        console.log(data);

        alert('Payment successful!');
        this.router.navigate(['/assetclient'])

      },
      (error) => {
        console.log(error);
        alert('Payment failed. Please try again.');
      }
    );
  }
  shoppingList: any[]=[];
iduser:any
abonne:any
idcour:any
  ngOnInit(): void {
  this.userService.getProfile().subscribe((data:any)=>{
    this.iduser=data.id;
  })
   // this.idcour=JSON.parse(String(localStorage.getItem("idcourfropayment")))

    // this.routeractivated.paramMap.forEach(a=>{
    //  this.abonne=a.get("id")
    // })


  }





}
