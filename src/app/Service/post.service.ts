import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:8085/post';

  constructor(private http: HttpClient) { }

  addPost(post: Post): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, post);
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, post);
  }

  favoritePost(idPost: number, idUser: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/favorites?idpost=${idPost}&iduser=${idUser}`, null);
  }

  getPost(idPost: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/get/${idPost}`);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/all`);
  }

  likePost(postId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${postId}/like`, null);
  }

  dislikePost(postId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${postId}/dislike`, null);
  }

  calculatePercentagePerTitle(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/calculatePercentagePerTitle/${title}`);
  }
}
