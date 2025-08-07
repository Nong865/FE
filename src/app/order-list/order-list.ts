import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Order, OrderService } from '../order-services/order-services';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './order-list.html',
  styleUrls: ['./order-list.css'],
})
export class OrderListComponent {
  orders: Order[] = [];
  filterText = '';
  selectedorder?: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data: any) => {
        console.log(data);
        
        this.orders = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  filterOrders() {
    return this.orders.filter(order =>
      order.status.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  findorderById(id: string) {
    this.orderService.getOrderById(Number(id)).subscribe({
      next: (order) => {
        this.selectedorder = order;
      },
      error: (err) => {
        this.selectedorder = undefined;
        console.log('Không tìm thấy đơn hàng với id:', id);
      }
    });
  }

  deleteOrder(id: number) {
    if (confirm('Bạn có chắc muốn xoá sản phẩm này không?')) {
      this.orderService.deleteOrder(Number(id)).subscribe({
        next: () => {
          this.orders = this.orders.filter(order => order.id !== Number(id));
          console.log('Xoá thành công đơn hàng có id:', id);
        },
        error: (err) => {
          console.error('Lỗi khi xoá đơn hàng:', err);  
        }
      });
    }
  }
}
