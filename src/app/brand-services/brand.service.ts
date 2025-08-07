import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

export type Brand = {
  id? : number,
  name: string,
  origin: string,
  status: string,
  image?: string
}
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getAllBrand(){
    return this.http.get<Brand[]>('http://localhost:3001/brands');
  }
  getBrandId(id:number): Observable<Brand> {
      return this.http.get<Brand>(`http://localhost:3001/brands/${id}`);
  }
  
  addBrand(brand: Brand) {
   return this.http.post<Brand>('http://localhost:3001/brands', brand);
  }
  updateBrand(id: string, brand: Brand) {
   return this.http.put<Brand>(`http://localhost:3001/brands/${id}`, brand);
  }
  deleteBrand(id: number) {
   return this.http.delete(`http://localhost:3001/brands/${id}`);
  }
}