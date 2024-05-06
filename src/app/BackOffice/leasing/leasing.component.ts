import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/Service/asset.service';
export class LoanData {
  leaseid!:number
  startdate!: string;
  enddate!: string;
  monthlypayment!: number;
  status!: string;
  depositamount!: number;
  penaltyfee!: number;
  additionalfee!: number;
  renwealoption!: boolean;
  paymentstatus!: string;
  initialValue!: number;
}

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.css']
})
export class LeasingComponent implements OnInit {
 status:any=[
  "Accepted",
  "Pending",
  "Denied",
  "Offer"
 ]
 pstatus:any =[ "Active",
 "Paid_off",
 "In_default"]
 

  constructor( private assetService: AssetService,private Activated:ActivatedRoute) { }
idd:any
  ngOnInit(): void {
    this.Activated.paramMap.forEach(a=>{
      this.idd=a.get("id")
    })
this.assetService.getall(this.idd).subscribe(data=>{
  this.assets=data
  console.log(data);
  
})
  }
  AssetType:any= [ "agricultural" 
    , "commercial"
     , "medical" 
     , "vehicles"]
   
     assets:any[]=[]
 
getall(){
  this.assetService.getall(this.idd).subscribe(data=>{
    this.assets=data
    console.log(data);
    
  })
}
  onSubmit(ngform:NgForm) {
    if (ngform.valid) {

console.log(ngform.value);
      this.assetService.addleasing(ngform.value,this.idd)
        .subscribe(data => {
          console.log( data);
          alert("added successfully ..")
          this.getall()
        }, (error:any) => {
          alert("error ....")
          console.error( error);
        });
    } else {
      console.error('Invalid form data. Please check your input.');
    }
  }
  loanData=new LoanData()
  copyobj(x:any){
   localStorage.setItem("editleasing",JSON.stringify(x))
this.loanData=JSON.parse(String(localStorage.getItem("editleasing")))
console.log(this.loanData);

  }
  update(){
this.assetService.updateleasing(this.loanData.leaseid,this.loanData).subscribe(data=>{
  console.log(data);
  alert("update successfully..")
  this.getall()
}, (error)=>{
    alert("error .... ")
    console.error(error);
    
}
)
  }
  delete(x: any): void {
    const index = this.assets.findIndex((a: any) => a.leaseid === x);
    if (index !== -1) {
      const confirmation = confirm("Are you sure you want to delete this leasing?");
      if (confirmation) {
        this.assets.splice(index, 1);
        this.assetService.deleteleasing(x).subscribe(data=>{
          console.log(data);
          
        });
      }
    }
  }
  
}
