import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

export type Product = {
  id? :string,
  name: string,
  price: number,
  inStock: boolean,
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProduct() {
      return this.http.get<Product[]>('http://localhost:3001/products');
  }
  getProductId(id:string): Observable<Product> {
      return this.http.get<Product>(`http://localhost:3001/products/${id}`);
  }
  addProduct(product: Product) {
  return this.http.post<Product>('http://localhost:3001/products', product);
  }
  updateProduct(id: string, product: Product) {
  return this.http.put<Product>(`http://localhost:3001/products/${id}`, product);
  }
 deleteProduct(id: string) {
  return this.http.delete(`http://localhost:3001/products/${id}`);
}
}
