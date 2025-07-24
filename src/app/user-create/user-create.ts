import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-create.html',
  styleUrl: './user-create.css',
})
export class UserCreate {
  user = {
    ten_nguoi_dung: '',
    email: '',
  };

  handleSubmit(userForm: NgForm) {
    console.log('userForm', userForm);
    if (!userForm.invalid) {
    
    }
  }
  
}