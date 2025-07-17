import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  UserList = [
    { id: 1, name: 'User 1', email: 'user1@example.com', isActive: true },
    { id: 2, name: 'User 2', email: 'user2@example.com', isActive: false },
    { id: 3, name: 'User 3', email: 'user3@example.com', isActive: false },
    { id: 4, name: 'User 4', email: 'user4@exxample.com', isActive: true },
  ]
}