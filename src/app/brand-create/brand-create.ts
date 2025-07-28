import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { routes } from '../app.routes';

@Component({
  selector: 'app-brand-create',
  imports: [FormsModule,CommonModule],
  templateUrl: './brand-create.html',
  styleUrl: './brand-create.css'
})
export class BrandCreate {
  brand = {
    name: '',
    origin: '',
    status: true
  };
  handleSubmit(brandForm: NgForm) {
    console.log('brandForm',brandForm);
    if(!brandForm.invalid){
    }
  }
}
