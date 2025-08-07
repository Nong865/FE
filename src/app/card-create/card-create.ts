import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card-services/card-service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.html',
})
export class CardCreateComponent {
  card = {
    id: '',
    title: '',
    description: '',
    image: '',
    createdAt: new Date().toISOString()
  };

  constructor(private cardService: CardService, private router: Router) {}

  createCard() {
    this.cardService.createCard(this.card).subscribe(() => {
      this.router.navigate(['/cards']);
    });
  }
}
