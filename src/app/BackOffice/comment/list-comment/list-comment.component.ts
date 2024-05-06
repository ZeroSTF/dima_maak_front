import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/Comment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService ,  private router: Router) { }

  ngOnInit(): void {
    this.loadComments();
  }
  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(
      response => {
        console.log('Comment deleted successfully:', response);
        // Rechargez la liste des commentaires après la suppression
        this.loadComments();
      },
      error => {
        console.error('Error deleting comment:', error);
      }
    );
  }
  updateComment(id: number): void {
    this.router.navigate(['/admin/updateCommentBack', id]);
  }
  DetailComment(id: number): void {
    this.router.navigate(['/admin/detailCommentBack', id]);
  }
  loadComments(): void {
    this.commentService.getAllComments().subscribe(
      comments => {
        this.comments = comments;
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}
