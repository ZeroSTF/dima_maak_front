import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssetService } from 'src/app/Service/asset.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  data: any[] = [];

  constructor(private dataService: AssetService) { }

  ngOnInit(): void {
    this.loadData();
  }
  updatedemande(type:string,id:number){
  this.dataService.updatedemande(type,id).subscribe(data=>{
    console.log(data);
    alert("added successuffly ...")
    this.loadData()
    
  })
  }
  object:any
  getasset(id:number){
    this.dataService.getassetofdemande(id).subscribe(data=>{
      this.object=data
      console.log(data);
      
    })
  }
  user:any
  getusers(id:number){
    this.dataService.getuserofdemande(id).subscribe((data:any)=>{
      this.user=data
      console.log(data);
      
    })
  }
  loadData(): void {
    this.dataService.getalld().subscribe(
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
