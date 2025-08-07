import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { routes } from '../app.routes';
import { BrandService } from '../brand-services/brand.service';
import { Router } from '@angular/router';

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
    image: '',
    status: '',
  };

  constructor(private brandService: BrandService, private router: Router) {}
   handleSubmit(brandForm: NgForm) {
    console.log('brandForm',brandForm);
    if(!brandForm.invalid){
      this.brandService.addBrand(this.brand).subscribe({
        next: () => {
          window.alert('Thêm thành công!');
          this.router.navigate(['/brands']);
        },
        error: () => {
          alert('Thêm sản phẩm thất bại!');
        }
      })
    }
  }
}
