import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css'
})
export class ProductUpdate {
      productForm : FormGroup;
      productId: number | null = null;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(3)]],
    });
  }
  ngOnInit(){
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    const  products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find((p: any) => p.id === this.productId);
    if(product){
      this.productForm.patchValue({
        name: product.name, 
        image: product.image,
        price: product.price,
      });
    }
  }
  handleSubmit() {
    console.log(this.productForm.value);
    
  }
}
