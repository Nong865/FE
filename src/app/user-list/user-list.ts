import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports : [CommonModule, FormsModule, RouterLink],
    templateUrl: './user-list.html',
    styleUrl: './user-list.css',
})
export class UserList {
    users = [
    {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901234567",
    role: "admin",
    status: true
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@example.com",
    phone: "0902345678",
    role: "user",
    status: true
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@example.com",
    phone: "0903456789",
    role: "user",
    status: false
  }
  ];
  filterText = '';

  filterUsers() {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
