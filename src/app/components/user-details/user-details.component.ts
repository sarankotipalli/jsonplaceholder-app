import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { User } from '../../core/models';  // Import User interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UserDetailsComponent implements OnInit {
  @Input() userId!: number;
  userDetails: User | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.apiService.getUser(this.userId).subscribe((user: User) => {
        this.userDetails = user;
      });
    }
  }
}
