// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { CommentService } from 'src/app/Service/comment.service';
// import { Chart } from 'chart.js';
// import { Comment } from 'src/app/Model/Comment';

// @Component({
//   selector: 'app-stat-post',
//   templateUrl: './stat-post.component.html',
//   styleUrls: ['./stat-post.component.css']
// })
// export class StatPostComponent implements OnInit {
//   @ViewChild('myChart') myChart!: ElementRef;
//   comments: Comment[] = [];;

//   constructor(private commentService: CommentService) { }

//   ngOnInit(): void {
//     this.commentService.getAllComments().subscribe((data) => {
//       this.comments = data;

//       const labels = this.comments.map((comment: Comment) => comment.content);


//       const ratings = this.comments.map((comment: Comment) => comment.rating);

//       // Créer le graphique avec les données actualisées
//       if (this.myChart) {
//         this.createChart(labels, ratings);
//       }
//     });
//   }

//   createChart(labels: string[], data: number[]) {
//     const ctx = this.myChart.nativeElement.getContext('2d');
//     const myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels, 
//         datasets: [{
//           label: 'rating',
//           data: data,
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 0.5,
//         }],
//       },
//       options: {
//         scales: {
//           y: {
//             type: 'linear',
//             position: 'left',
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }
// }




// import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import Chart, { ChartConfiguration } from 'chart.js/auto';
// import { CommentService } from 'src/app/Service/comment.service';
// import { Comment } from 'src/app/Model/Comment';
// @Component({
//   selector: 'app-stat-post',
//   templateUrl: './stat-post.component.html',
//   styleUrls: ['./stat-post.component.css']
// })
// export class StatPostComponent implements AfterViewInit {
//   @Input() ratingsData: number[] = []; // Tableau des données de ratings
//   @ViewChild('ratingChart') ratingChart!: ElementRef<HTMLCanvasElement>;
//   comments: Comment[] = [];
//   constructor( private commentService: CommentService) { }

//   ngAfterViewInit(): void {
//     this.createRatingChart();
//     this.commentService.getAllComments().subscribe((data) => {
//       this.comments = data;
      
//       // Extraire les noms des foyers
//       const labels = this.comments.map((comment: Comment) => comment.content);

//       // Extraire les capacités des foyers
//       const ratings = this.comments.map((comment: Comment) => comment.rating);

//       // Créer le graphique avec les données actualisées
//       this.createRatingChart();
//       // Capacité disponible
 
    
//     });
//   }

//   createRatingChart(): void {
//     const ctx = this.ratingChart.nativeElement.getContext('2d');
//     if (!ctx) {
//       console.error('Canvas context not available');
//       return;
//     }

//     const chartConfig: ChartConfiguration = {
//       type: 'bar',
//       data: {
//         labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
//         datasets: [{
//           label: 'Rating Distribution',
//           data: this.ratingsData,
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     };

//     new Chart(ctx, chartConfig);
//   }
// }

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommentService } from 'src/app/Service/comment.service';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-stat-post',
  templateUrl: './stat-post.component.html',
  styleUrls: ['./stat-post.component.css']
})
export class StatPostComponent implements AfterViewInit {
  @ViewChild('ratingChart') ratingChart!: ElementRef<HTMLCanvasElement>;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngAfterViewInit(): void {
    this.commentService.getAllComments().subscribe((data) => {
      this.comments = data;
      this.createRatingChart();
    });
  }

  createRatingChart(): void {
    const ctx = this.ratingChart.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not available');
      return;
    }

    const labels: string[] = [];
    const ratings: number[] = [];

    // Extraction des données des commentaires
    this.comments.forEach((comment: Comment) => {
      labels.push(comment.content);
      ratings.push(comment.rating);
    });

    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Rating',
          data: ratings,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
    };

    new Chart(ctx, chartConfig);
  }
}
