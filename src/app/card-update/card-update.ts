import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card, CardService } from '../card-services/card-service';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.html',
})
export class CardUpdateComponent {
  card: Card = { id: '', title: '', description: '', image: '', createdAt: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cardService.getCardById(id).subscribe((data) => {
        this.card = data;
      });
    }
  }

  updateCard() {
    this.cardService.updateCard(this.card.id, this.card).subscribe(() => {
      this.router.navigate(['/cards']);
    });
  }
}
