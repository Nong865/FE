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
//   getProduct(id: number): Observable<Product> {
//     return this.http
//       .get<Product>(`${this.apiUrl}/${id}`)
//       .pipe(catchError(this.handleError))
//   }
//   addProduct(product: Product): Observable<Product> {
//     return this.http
//       .post<Product>(this.apiUrl, product)
//       .pipe(catchError(this.handleError));
//   }
//   updateProduct(product: Product): Observable<Product> {
//     return this.http
//       .put<Product>(`${this.apiUrl}/${product.id}`, product)
//       .pipe(catchError(this.handleError));
//   }
//   deleteProduct(id: number): Observable<void> {
//     return this.http
//       .delete<void>(`${this.apiUrl}/${id}`)
//       .pipe(catchError(this.handleError));
//   }
// private handleError(error: HttpErrorResponse): Observable<never> {
//   let errorMessage = "An unknown error occurred!";
//   if(error.error instanceof ErrorEvent) {
//     errorMessage = `Error: ${error.error.message}`;
//   } else {
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//   }
//   console.error(errorMessage);
//   return throwError(() => new Error(errorMessage));
  
// }
}
