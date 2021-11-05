import { BeerItem } from "./../../models/beer-item";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BeerService {
  url = "https://api.punkapi.com/v2/beers";
  constructor(private http: HttpClient) {}

  getBeers(): Observable<any> {
    return this.http.get(`${this.url}/page=1`);
  }
}
