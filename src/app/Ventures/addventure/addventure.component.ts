import {Component, OnInit} from '@angular/core';
import {Venture} from "../../Models/venture";
import {VentureService} from "../../Services/venture.service";

@Component({
  selector: 'app-addventure',
  templateUrl: './addventure.component.html',
  styleUrls: ['./addventure.component.css']
})
export class AddventureComponent implements OnInit {

  ventures: Venture[] = [];
  ngOnInit() {
    this.loadVentures();
  }

  constructor(private ventureService: VentureService) {

  }


  loadVentures(): void {
    this.ventureService.getAllVenture().subscribe(ventures => {
      this.ventures = ventures;

    });
  }
}
