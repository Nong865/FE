import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css'
})
export class UserDetail {
    user = {
      id: 1, 
      name: 'Wika',
      email: "cdsd@gmail.com",
      phone : '021154114',
      role: 'admin',
      status: true
  };
  userId : string | null = null;
    
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.userId  = this.route.snapshot.paramMap.get('id');
    }
}
