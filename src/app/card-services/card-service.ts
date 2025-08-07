import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Card {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class CardService {
  private apiUrl = 'http://localhost:3001/cards'; // <-- kiểm tra db.json có trường cards chưa

  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }

  getCardById(id: string): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`);
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card);
  }

  updateCard(id: string, card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.apiUrl}/${id}`, card);
  }

  deleteCard(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
