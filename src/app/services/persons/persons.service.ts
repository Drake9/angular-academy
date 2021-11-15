import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, share } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PersonsService {
  url = "http://localhost:42264/api/Persons";
  constructor(private http: HttpClient) {}

  // public beer$ = this.http.get(`${this.url}`).pipe(share());

  getPersons(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      catchError((error) => {
        console.log("error is intercept");
        console.error(error);
        return throwError(error.message);
      }));
    // return this.beer$;
  }
}
