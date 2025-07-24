import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users = [
    {id: 1, ten_nguoi_dung: "Nguyen Van A",email: "Nguyenvana@gmail.com",mat_khau: "123456"},
    {id: 2, ten_nguoi_dung: "Tran Thi B",email: "Tranthib@gmail.com",mat_khau: "abcdef"},
     {id: 3, ten_nguoi_dung: "Le Van C",email: "Levanc@gamil.com",mat_khau: "qwerty"},
  ];

  filterText = '';

  filterusers() {
    return this.users.filter((user) =>
      user.ten_nguoi_dung.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}