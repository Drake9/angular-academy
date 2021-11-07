import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { share } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BeerService {
  url = "https://api.punkapi.com/v2/beers";
  constructor(private http: HttpClient) {}

  // public beer$ = this.http.get(`${this.url}`).pipe(share());

  getBeers(): Observable<any> {
    return this.http.get(`${this.url}`);
    // return this.beer$;
  }

}
