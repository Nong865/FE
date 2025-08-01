import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User, UserService } from '../user-services/user.service';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports : [CommonModule, FormsModule, RouterLink],
    templateUrl: './user-list.html',
    styleUrl: './user-list.css',
})
export class UserList {
     users: User[] = [];
    
      filterText = '';
    
      constructor(private userService: UserService) {}
    
      ngOnInit(): void {
        this.userService.getAllUser().subscribe({
            next: (data) => {
              console.log(data);
              this.users = data;
            },
            error: (err) => {
              console.log(err);
            }
        });
      }
      filterUsers() {
        return this.users.filter((user) =>
          user.name.toLowerCase().includes(this.filterText.toLowerCase())
        );
      }
      selectedUser?: User;
      findUserById(id: number) {
      this.userService.getUserId(id).subscribe({
        next: (user) => {
          this.selectedUser = user;
          console.log('Tìm thấy:', user);
        },
        error: (err) => {
          this.selectedUser = undefined;
          console.log('Không tìm thấy nguoi dung với id:', id);
        }
      });
      }
}
