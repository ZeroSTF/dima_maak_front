import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/Service/comment.service';
import { Comment } from 'src/app/Model/Comment';
import { User } from 'src/app/Model/User';
import { Post } from 'src/app/Model/Post';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit {
  commentId!: number;
  usr !: User;
  p !: Post;
  comment: Comment = {
    id: 0,
    content: '',
    createdDate: new Date(),
    user: this.usr,
    post: this.p,
  
    rating: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.commentId = params['id'];
      this.loadComment();
    });
    
  }

  loadComment(): void {
    this.commentService.getComment(this.commentId).subscribe(
      comment => {
        this.comment = comment;
      },
      error => {
        console.error('Error fetching comment:', error);
      }
    );
  }

  updateComment(): void {
    this.commentService.updateComment(this.comment).subscribe(
      response => {
        console.log('Comment updated successfully:', response);
        // Rediriger vers la page de détails du commentaire ou une autre page appropriée après la mise à jour
        this.router.navigate(['/admin/ListCommentBack']);
      },
      error => {
        console.error('Error updating comment:', error);
      }
    );
    this.router.navigate(['/admin/ListCommentBack']);
  }
}
