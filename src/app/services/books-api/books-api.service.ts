import { Injectable } from "@angular/core";
import { HttpClient } from "node_modules_old/@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BooksApiService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getApiBooks() {
    // return this.http.get(this.url);
  }

  getBeers(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
