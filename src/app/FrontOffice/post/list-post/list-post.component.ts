import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/Model/Post';
import { CommentService } from 'src/app/Service/comment.service';
import { PostService } from 'src/app/Service/post.service';
import { Comment } from 'src/app/Model/Comment';
import { User } from 'src/app/Model/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import {UserService} from "../../../Service/user/user.service";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];
  showCommentFormId: number | null = null; // ID du post pour lequel le formulaire de commentaire est affiché
  commentContent: string = '';
  updatedContent: string = '';// Contenu du commentaire
  currentUser:any;
  usr !: User;
  p !: Post;
  showUpdateFormId: number | null = null;
  updatedPost !: Post ;
  showAddPostForm: boolean = false;
  newPost: Post = {
    id: 0,
    title: '',
    content: '',
    createdDate: new Date(),
    likes: 0,
    favorites: [],
    user: null,
    comments: []
  };

  constructor(private postService: PostService, private commentService: CommentService,
    private router: Router , private authService : AuthService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data:any)=>{
      this.currentUser=data;
    });
    this.loadPosts();


  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe(
      posts => {
        this.posts = posts;
      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  likePost(postId: number): void {
    this.postService.likePost(postId).subscribe(
      () => {
        console.log("Post liked successfully.");
        // Actualisez la liste des posts après avoir aimé le post
        this.loadPosts();
      },
      error => {
        console.error('Error liking post:', error);
      }
    );
    window.location.reload();
  }

  dislikePost(postId: number): void {
    this.postService.dislikePost(postId).subscribe(
      () => {
        console.log("Post disliked successfully.");
        // Actualisez la liste des posts après avoir désaimé le post
        this.loadPosts();
      },
      error => {
        console.error('Error disliking post:', error);
      }
    );
    window.location.reload();
  }


  viewComments(postId: number): void {
    this.showCommentFormId = postId; // Afficher le formulaire de commentaire pour ce post
    this.loadComments(postId); // Charger les commentaires pour ce post
  }
  loadComments(postId: number): void {
    this.commentService.getCommentsByPostId(postId).subscribe(
      comments => {
        this.comments = comments;
        console.log("Comments:", this.comments);

        // Réinitialiser showCommentFormId une fois les commentaires chargés
        this.showCommentFormId = null;

        // Mettre à jour le nombre de likes de chaque commentaire
        this.comments.forEach(comment => {
          // Vous pouvez ici ajouter la logique pour calculer le nombre total de likes de chaque commentaire
        });
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }


  showCommentForm(postId: number): void {
    this.showCommentFormId = postId; // Afficher le formulaire de commentaire pour ce post
  }


  addComment(postId: number): void {
    if (this.commentContent.trim() === '') {
      return; // Ne pas ajouter de commentaire vide
    }

    const newComment: Comment = {
      id: 0,
      content: this.commentContent,
      createdDate: new Date(),
      user: this.currentUser, // Remplacez null par l'utilisateur actuel si nécessaire
      post: this.p, // Remplacez null par les détails du post si nécessaire
      rating: 0// Si vous avez des évaluations à inclure
    };

    this.commentService.addCommentAndAssignPost(newComment, postId).subscribe(
      () => {
        console.log("Comment added and assigned to post successfully.");
        // Réinitialiser le formulaire et masquer le formulaire de commentaire
        this.commentContent = '';
        this.showCommentFormId = null;
        // Actualiser la liste des posts pour afficher le nouveau commentaire ajouté
        this.loadPosts();
      },
      error => {
        console.error('Error adding comment and assigning to post:', error);
      }
    );
    window.location.reload();
  }


  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(
      () => {
        console.log("Comment deleted successfully.");
        // Recharger les commentaires après la suppression

        this.showCommentFormId = null;

        this.loadPosts();
      },
      error => {
        console.error('Error deleting comment:', error);
      }
    );
    window.location.reload();
  }
  updatePost(post: Post): void {
    this.postService.updatePost(post).subscribe(
      () => {
        console.log("Post updated successfully.");
        // Actualisez la liste des posts après la mise à jour
        this.loadPosts();
        // Réinitialisez showUpdateFormId pour fermer la partie du formulaire
        this.showUpdateFormId = null;
      },
      error => {
        console.error('Error updating post:', error);
      }
    );

    this.showUpdateFormId = null;
    window.location.reload();
  }

  showUpdateForm(postId: number): void {
    this.showUpdateFormId = postId;
    // Charger les détails du post à mettre à jour
    this.postService.getPost(postId).subscribe(
      post => {
        this.updatedPost = post;
      },
      error => {
        console.error('Error fetching post details:', error);
      }
    );
  }


  updateComment(comment: Comment): void {
    comment.createdDate = new Date();
    this.commentService.updateComment(comment).subscribe(
      () => {
        console.log("Comment updated successfully.");
        // Actualiser les commentaires après la mise à jour
        this.loadComments(this.showCommentFormId!);
      },
      error => {
        console.error('Error updating comment:', error);
      }
    );
    window.location.reload();

  }

//add post
toggleAddPostForm(): void {
  this.showAddPostForm = !this.showAddPostForm; // Inverser la valeur de la variable
}
addPost(newPost: any): void {
  this.postService.addPost(newPost).subscribe(
    (data:any) => {
      console.log(data);
      console.log("Post added successfully.");
      // Actualisez la liste des posts après l'ajout du nouveau post
      this.loadPosts();
    },
    error => {
      console.log(newPost);
      console.error('Error adding post:', error);
    }
  );
}
onSubmit(): void {
  if (!this.newPost.title || !this.newPost.content) {
    console.error("Title and content are required.");
    return;
  }
  this.newPost.id=-1;
  this.newPost.user=this.currentUser;
  this.addPost(this.newPost);
  // Réinitialisez les valeurs du nouveau post après l'ajout
  this.newPost = {
    id: 0,
    title: '',
    content: '',
    createdDate: new Date(),
    likes: 0,
    favorites: [],
    user: null, // Remplacez null par l'utilisateur actuel si nécessaire
    comments: []
  };
  this.toggleAddPostForm();
  window.location.reload();
}
//delete post
deletePost(postId: number): void {
  const confirmDelete = window.confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    this.postService.deletePost(postId).subscribe(
      () => {
        console.log("Post deleted successfully.");
        // Actualisez la liste des posts après la suppression du post
        this.loadPosts();
      },
      error => {
        console.error('Error deleting post:', error);
      }
    );
  }
  window.location.reload();
}
likeComment(commentId: number): void {
  console.log("hiii");
  this.commentService.likeComment(commentId).subscribe(
    () => {
      console.log("Comment liked successfully.");
      // Rechargez les commentaires après l'action de like
      this.loadComments(this.showCommentFormId!);
    },
    error => {
      console.error('Error liking comment:', error);
    }
  );
  window.location.reload();
}

dislikeComment(commentId: number): void {
  this.commentService.dislikeComment(commentId).subscribe(
    () => {
      console.log("Comment disliked successfully.");
      // Rechargez les commentaires après l'action de dislike
      this.loadComments(this.showCommentFormId!);
    },
    error => {
      console.error('Error disliking comment:', error);
    }
  );
  window.location.reload();
}




}
