import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/Comment';

@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.css']
})
export class DetailCommentComponent implements OnInit {
  comment: Comment | undefined;

  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComment();
  }

  loadComment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'ID du commentaire depuis l'URL
    this.commentService.getComment(id).subscribe(
      comment => {
        this.comment = comment;
      },
      error => {
        console.error('Error fetching comment:', error);
      }
    );
  }
}
