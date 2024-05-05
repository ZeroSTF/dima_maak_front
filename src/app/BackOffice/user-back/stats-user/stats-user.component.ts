import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";
import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables);
import * as L from 'leaflet';

@Component({
  selector: 'app-stats-user',
  templateUrl: './stats-user.component.html',
  styleUrls: ['./stats-user.component.css']
})
export class StatsUserComponent implements OnInit {
  map: any;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    //user statistics by salary
    this.userService.countUsers().subscribe((data: any) => {
      this.renderBarChart(data);
    });
    //user statistics by age
    this.userService.countUsersByAge().subscribe((data: any) => {
      this.renderPieChart(data);
    });

    //user statistics by location
this.userService.countUsersByLocation().subscribe((data: any) => {
      this.renderMap(data);
    });
  }
  //barchart for user statistics by salary
  renderBarChart(data:any){
    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Below 1000', '1000-3000', '3000-6000', 'Above 6000'],
        datasets: [{
          label: 'Users by Salary (TND/Month)',
          data: [data[1], data[2], data[3], data[4]],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  //piechart for user statistics by age
  renderPieChart(data:any){
    new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['Below 18', '18-25', '25-40', 'Above 40'],
        datasets: [{
          label: 'Users by Age',
          data: [data[0], data[1], data[2], data[3]],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  //map for user statistics by location
  renderMap(data:any){
    this.map = L.map('map').setView([36.8188, 10.1658], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.map);
    console.log(data);
    for (let i = 0; i < data.length; i++) {

      L.marker([data[i][0], data[i][1]]).addTo(this.map);
    }
  }

}
