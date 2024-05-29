import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssetService } from 'src/app/Service/asset.service';
import {UserService} from "../../Service/user/user.service";

@Component({
  selector: 'app-assetclient',
  templateUrl: './assetclient.component.html',
  styleUrls: ['./assetclient.component.css']
})
export class AssetclientComponent implements OnInit{
  constructor(private assetService: AssetService, private userService:UserService) { }
id:any
assets:any[]=[]
  ngOnInit(): void {
    this.userService.getProfile().subscribe((data:any)=>{
      this.id=data.id;
    })
  this.assetService.getasset().subscribe(data=>{
  this.assets=data
  console.log(data);

})
this.loadData();
  }
  add(id:number): void {
    this.newDemand.requestDate= new Date
    this.newDemand.status= 'Pending'
    this.assetService.adddemande(this.newDemand,this.id,id).subscribe(
      data => {
        console.log(data);
        alert("added successfully ...")
        this.loadData()
      },
      error=> {
        console.error('Error fetching data: ', error);
        alert("You send before ")
      }
    );
  }
  newDemand: any = {
    id: null,
    requestDate: null,
    status: 'Pending'
  };





  resetForm(): void {
    this.newDemand = {
      id: null,
      requestDate: null,
      status: 'Pending'
    };
  }
  showtable!:boolean
  etat(b:boolean){
    this.showtable=b
  }
  data:any[]=[]
  loadData(): void {
    this.assetService.getalld().subscribe(
      (response: any[]) => {
        this.data = response;
        console.log(response);

      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }
}
