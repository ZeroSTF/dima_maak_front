import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AssetService } from 'src/app/Service/asset.service';
// asset.model.ts

export class Asset {
  assetid!: number;
  type!: string;
  description!: string;
  initialAmount!: number;
  purchasedate!: Date; // Assuming string format for simplicity
  warrantyExpirationDate!: Date; // Assuming string format for simplicity
  maintenanceStatus!: string;
  lastMaintenanceDate!: string; // Assuming string format for simplicity
  functions!: string;
  power!: number;
  price!:number
  productionCapacity!: number;
  operationalEfficiency!: string;
  serviceLevel!: string;
  fuelConsumption!: string;
  engineCondition!: string;
  mileage!: number;
  annualInterestRate!: number;
}


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  assetForm!: FormGroup;
role:any
  constructor(private fb: FormBuilder, private assetService: AssetService) { }

  ngOnInit(): void {
    //this.role=JSON.parse(String(localStorage.getItem("roledima")))
this.assetService.getasset().subscribe(data=>{
  console.log(this.assets);

  this.assets=data
})
  }
  AssetType:any= [ "agricultural" 
    , "commercial"
     , "medical" 
     , "vehicles"]
   
     assets:any[]=[]
 
getall(){
  this.assetService.getasset().subscribe(data=>{
    this.assets=data
    console.log(this.assets);
    
  })
}
file!:File
selectimage(event:any){
this.file=event.target.files[0]
}
  onSubmit(ngform:NgForm) {
    if (ngform.valid) {
      const asset: Asset = ngform.value;
      const formData = new FormData
      formData.append("adsImages",this.file )
      formData.append("description",ngform.value.description)
      formData.append("price",ngform.value.price)
      formData.append("type",ngform.value.type)
      console.log(formData);
      
      this.assetService.asset(formData)
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
  asset=new Asset()
  copyobj(x:any){
   localStorage.setItem("editasset",JSON.stringify(x))
this.asset=JSON.parse(String(localStorage.getItem("editasset")))
console.log(this.asset);

  }
  update(){
this.assetService.updateasset(this.asset,this.asset.assetid).subscribe(data=>{
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
    const index = this.assets.findIndex((a: any) => a.assetid === x);
    if (index !== -1) {
      const confirmation = confirm("Are you sure you want to delete this asset?");
      if (confirmation) {
        this.assets.splice(index, 1);
        this.assetService.deleteasset(x).subscribe();
      }
    }
  }
  
}
