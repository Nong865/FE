import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"


export type Category = {
    id?: number,
    name : string,
    description: string,
    status: string
}

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient){}

    getAllCategory(){
        return this.http.get<Category[]>('http://localhost:3001/categories')
    }
    getCategoryId(id:number): Observable<Category> {
          return this.http.get<Category>(`http://localhost:3001/categories/${id}`);

    }
   addCategory(category: Category) {
     return this.http.post<Category>('http://localhost:3001/categories', category);
     }
     updateCategory(id: string, category: Category) {
      return this.http.put<Category>(`http://localhost:3001/categories/${id}`, category);
      }
     deleteCategory(id: number) {
      return this.http.delete(`http://localhost:3001/categories/${id}`);
    }
  }
