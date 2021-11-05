import { BookItem } from "./../../models/book-item";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BooksApiService {
  url = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  update(book: BookItem): Observable<any> {
    return this.http.put(this.url, book, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
