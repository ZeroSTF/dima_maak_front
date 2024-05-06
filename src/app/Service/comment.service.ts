import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Model/Comment';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8085/comment';
  currentUser !: User ;
  constructor(private http: HttpClient) { }

  addComment(postId: number, content: string): Observable<any> {
    const comment: Comment = {
      id: 0,
      content: content,
      createdDate: new Date(),
      user: this.currentUser, // Assurez-vous de remplacer currentUser par l'utilisateur actuel
      post: { id: postId, title: '', content: '', createdDate: new Date(), likes: 0, favorites: [], user : this.currentUser, comments: [] }, // Créez un objet post avec juste l'ID pour associer le commentaire au post
      rating: 0,
     
    };
    return this.http.post<any>(`${this.baseUrl}/save`, comment); // Correction ici

  }
  

  updateComment(comment: Comment): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, comment);
  }
  

  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/get/${id}`);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/all`);
  }

  assignCommentToPost(commentId: number, postId: number): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/assigncommenttopost/${commentId}/${postId}`, null);
  }
  addCommentAndAssignPost(comment: Comment, postId: number): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/addAffect/${postId}`, comment);
  }
  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/post/${postId}`);
  }
  likeComment(commentId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${commentId}/like`, null);
  }

  dislikeComment(commentId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${commentId}/dislike`, null);
  }
}
