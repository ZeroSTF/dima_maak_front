import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-paypremium',
  templateUrl: './paypremium.component.html',
  styleUrls: ['./paypremium.component.css']
})
export class PaypremiumComponent  implements OnInit {



  constructor(private http: HttpClient,private routeractivated:ActivatedRoute,private router:Router) {

  }
  chargeRequest= new ChargeRequest()
  host = "http://localhost:8080"

  charge() {

    console.log(this.chargeRequest);

    this.chargeRequest.amount=50*100
    this.http.post('http://localhost:8080/payment/charge?iduser='+this.iduser+"&idpr="+this.idpr, this.chargeRequest).subscribe(

      (data) => {
        console.log(data);
   
        alert('Payment successful!');
        //this.router.navigate(['/'])

      },
      (error) => {
        console.log({message: error.message});
        alert('Payment failed. Please try again.');
      }
    );
  }
  shoppingList: any[]=[];
iduser:any
idpr:any
amount:any
  ngOnInit(): void {
    this.iduser=JSON.parse(String(localStorage.getItem("userId")))
    console.log(this.iduser);
    
   // this.idcour=JSON.parse(String(localStorage.getItem("idcourfropayment")))

    this.routeractivated.paramMap.forEach(a=>{
     this.idpr=a.get("id")
     this.amount=a.get("amount")
    })
    console.log(this.idpr,this.amount);
    
   

  }
  valeurmin=0

quantite=0
num=0




}
