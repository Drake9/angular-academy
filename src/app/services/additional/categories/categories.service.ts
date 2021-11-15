import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getCategory(id: number): Observable<any> {
    // const categories = [
    //   {
    //     id: 1,
    //     name: "Komedia",
    //   },
    //   {
    //     id: 2,
    //     name: "Powieść",
    //   },
    //   {
    //     id: 3,
    //     name: "Esej",
    //   },
    //   {
    //     id: 4,
    //     name: "Programowanie",
    //   },
    //   {
    //     id: 5,
    //     name: "Literatura popularnonaukowa",
    //   },
    // ];
    // const category = categories.find((cat) => cat.id === id);
    // return of(category);
    return this.http.get(`${this.url}/categories/${id}`);
  }
}
