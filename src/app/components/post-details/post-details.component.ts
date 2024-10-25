import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Comment } from '../../core/models';  // Import Comment interface
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  standalone: true,
  imports: [CommonModule ]
})
export class PostDetailsComponent implements OnInit {
  @Input() postId!: number;  // Add "!" to assume that this property will be initialized later
  comments: Comment[] = [];
  constructor(private apiService: ApiService,
    private dialogRef: MatDialogRef<PostDetailsComponent>) {}

  ngOnInit(): void {
    if (this.postId) {
      this.apiService.getComments(this.postId).subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
    }
  }
  onClose() {
    this.dialogRef.close(); 
  }
}
