import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';


@Component({
  imports: [ProductList],
  selector: 'app-root',
  template: `
    <h1>Hello, my-angular-app</h1>
  `,
  styles: [`
    h1 {
      color: green;
    }
  `]
})
export class App {
  name: string = 'my-angular-app';
}