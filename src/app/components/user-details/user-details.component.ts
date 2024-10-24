import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { User } from '../../core/models';  // Import User interface

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() userId!: number;  // Add "!" to avoid the error related to non-initialized property
  userDetails: User | undefined;  // Define as undefined initially

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.apiService.getUser(this.userId).subscribe((user: User) => {
        this.userDetails = user;
      });
    }
  }
}
