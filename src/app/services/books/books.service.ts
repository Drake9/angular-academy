import { BookItem } from "../../models/book-item";
import { Injectable } from "@angular/core";
import { booksList } from "../../mocks/books-mock";

@Injectable({
  providedIn: "root",
})

export class BooksService {
  constructor() {}

  getBooksList(): BookItem[] {
    return booksList;
  }
}
