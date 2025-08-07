import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product-services/product.service';
import { BrandService } from '../brand-services/brand.service';

@Component({
  selector: 'app-brand-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './brand-update.html',
  styleUrl: './brand-update.css'
})
export class BrandUpdate {
      brandForm : FormGroup;
      brandId: string | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private brandService: BrandService,
    private router: Router
  ) {
    this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      origin: ['', [Validators.required]],
      status: ['', [Validators.required, Validators.min(3)]],
      image: ['', [Validators.required]]
    });
  }
  
  ngOnInit(){
    this.brandId = this.route.snapshot.paramMap.get('id');
    if (this.brandId) {
    this.brandService.getBrandId(Number(this.brandId)).subscribe(brand => {
      this.brandForm.patchValue({
        name: brand.name,
        origin: brand.origin,
        status: brand.status,
        image: brand.image,
      });
    });
  }
  }
  handleSubmit() {
    if (this.brandForm.valid && this.brandId) {
    this.brandService.updateBrand(this.brandId!, this.brandForm.value).subscribe({
      next: () => {
        alert('Cập nhật thành công!');
        this.router.navigate  (['/categories']); 
      },
      error: () => {
        alert('Cập nhật thất bại!');
      }
    });
  }
  }
}
