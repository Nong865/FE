import { Component } from '@angular/core';
import { Card, CardService } from '../../card-services/card-service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.html',
  styleUrls: ['./card-list.css']
})
export class CardListComponent {
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getAllCards().subscribe(data => this.cards = data);
  }

  deleteCard(id: string) {
    if (confirm("Bạn có chắc muốn xoá thẻ này không?")) {
      this.cardService.deleteCard(id).subscribe(() => {
        this.cards = this.cards.filter(card => card.id !== id);
      });
    }
  }
}
