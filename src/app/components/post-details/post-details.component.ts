import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Comment } from '../../core/models';  // Import Comment interface

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() postId!: number;  // Add "!" to assume that this property will be initialized later
  comments: Comment[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.postId) {
      this.apiService.getComments(this.postId).subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
    }
  }
}
