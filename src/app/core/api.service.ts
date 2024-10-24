import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Comment, User } from '../core/models';  // Import interfaces

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(page: number, limit: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts?_page=${page}&_limit=${limit}`);
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/comments?postId=${postId}`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users/${userId}`);
  }

  addPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}/posts`, post);
  }

  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.BASE_URL}/posts/${post.id}`, post);
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/posts/${postId}`);
  }
}
