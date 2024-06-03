import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsurancePack } from 'src/app/Model/InsurancePack';
import { InsurancePackServiceService } from 'src/app/Service/Insurance-Pack/insurance-pack-service.service';
import { InsuranceServicesService } from 'src/app/Service/Insurance/insurance-services.service';
import {UserService} from "../../../Service/user/user.service";

@Component({
  selector: 'app-insurance-pack-offers',
  templateUrl: './insurance-pack-offers.component.html',
  styleUrls: ['./insurance-pack-offers.component.css']
})
export class InsurancePackOffersComponent implements OnInit {
  insurancepacks:InsurancePack[]=[];
  constructor(private insurancepackservice:InsurancePackServiceService,private service:InsuranceServicesService, private userService:UserService) {

  }
  id:any
  ngOnInit(){
    this.userService.getProfile().subscribe((data:any)=>{
      this.id=data.id
    });
    this.getallbyuser()
    this.insurancepackservice.findallinsurancepacks().subscribe(data=>{
      this.insurancepacks=data;
      console.log(data);

    });
  }
choose(x:any){
this.service.addins(x,this.id).subscribe(data=>{
  console.log(data);
  alert("added successfully ...")

})
}
listebyuser:any[]=[]
getallbyuser(){
  this.service.findallibyuser(this.id).subscribe(data=>{
this.listebyuser=data
console.log(data);

  })
}
idclaim:any
copy(x:number){
  this.idclaim=x
}
addclaim(ng:NgForm){
  this.service.addclaim(ng.value,this.idclaim).subscribe(data=>{
    console.log(data);
    alert("added ....")

  })
}
premium:any[]=[]
getallpr(x:any){
  this.service.getallprbyins(x).subscribe(data=>{
    this.premium=data;
    console.log(data);
  });
}
etat!:boolean
change(b:boolean){
this.etat=b
}
}
