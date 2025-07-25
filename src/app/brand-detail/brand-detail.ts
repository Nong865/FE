import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-detail',
  imports: [CommonModule],
  templateUrl: './brand-detail.html',
  styleUrl: './brand-detail.css'
})
export class BrandDetail {
  brand = {
      id: 1, 
      name: 'Wika',
      origin : 'Japan',
      status: true
  };
  brandId : string | null = null;
    
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.brandId  = this.route.snapshot.paramMap.get('id');
    }
}
