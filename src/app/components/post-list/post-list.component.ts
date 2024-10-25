import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { Post } from '../../core/models';  // Import Post interface
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  userId = 0; // Ensure this is defined properly
  limit = 10;
  page = 1;

  constructor(private apiService: ApiService, private authService: AuthService, private dialog: MatDialog) {}

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
    // Open PostDetailsComponent modal to show comments for this post
    this.dialog.open(PostDetailsComponent, {
      data: { postId }
    });
  }

  showUserDetails(userId: number) {
    this.dialog.open(UserDetailsComponent, {
      data: { userId }
    });
  }
}
