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
          return this.http.get<Category>(`http://localhost:3001/products/${id}`);
    }
}