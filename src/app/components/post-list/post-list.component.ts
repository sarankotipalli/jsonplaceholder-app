import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Post } from '../../core/models';  // Import Post interface

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  userId = 0; // Ensure this is defined properly
  limit = 10;
  page = 1;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.apiService.getPosts(this.page, this.limit).subscribe((posts: Post[]) => {
      this.posts = [...this.posts, ...posts];
      this.loading = false;
    });
  }

  onScroll() {
    this.page++;
    this.loadPosts();
  }

  addPost() {
    const newPost: Partial<Post> = {
      title: 'New Post',
      body: 'This is a new post',
      userId: this.userId
    };
    this.apiService.addPost(newPost).subscribe((post: Post) => {
      this.posts.unshift(post);
    });
  }

  editPost(post: Post) {
    post.title = 'Updated Post';
    this.apiService.editPost(post).subscribe((updatedPost: Post) => {
      const index = this.posts.findIndex(p => p.id === post.id);
      this.posts[index] = updatedPost;
    });
  }

  deletePost(postId: number) {
    this.apiService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
    });
  }

  showComments(postId: number) {
    // Logic to open PostDetailsComponent modal to show comments
  }

  showUserDetails(userId: number) {
    // Logic to open UserDetailsComponent modal to show user details
  }
}
