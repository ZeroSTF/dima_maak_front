import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../Service/user/user.service";
import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-stats-user',
  templateUrl: './stats-user.component.html',
  styleUrls: ['./stats-user.component.css']
})
export class StatsUserComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    //user statistics by salary
    this.userService.countUsers().subscribe((data: any) => {
      console.log(data);
      this.renderBarChart(data);
    });
    //user statistics by age
    this.userService.countUsersByAge().subscribe((data: any) => {
      console.log(data);
      this.renderPieChart(data);
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

}
