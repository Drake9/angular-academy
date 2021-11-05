import { BookItem } from "../../models/book-item";
import { Injectable } from "@angular/core";
import { booksList } from "../../mocks/books-mock";
import { from, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor() {}

  getRawBooksList(): BookItem[] {
    return booksList;
  }

  getObservableOfBooksList(): Observable<BookItem[]> {
    return of(booksList);
  }
}
