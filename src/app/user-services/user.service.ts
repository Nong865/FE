import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"


export type User = {
    id?: number,
    name : string,
    email: string,
    phone : string,
    role: string
    status: boolean
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient){}

    getAllUser(){
        return this.http.get<User[]>('http://localhost:3001/users')
    }
    getUserId(id:number): Observable<User> {
          return this.http.get<User>(`http://localhost:3001/users/${id}`);
    }
}