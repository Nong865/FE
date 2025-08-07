import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Order {
  id: number;
  userId: number;
  date: string;
  total: number;
  status: string;
  items: { productId: number; quantity: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3001/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }
    createOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.apiUrl, order);
    }
    updateOrder(id: number, order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
    }
    getOrdersByUserId(userId: number): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiUrl}?userId=${userId}`);
    }
     
}
