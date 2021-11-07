import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BookItem } from "../models/book-item";
import { BeerService } from "../services/beer-api/beer.service";
import { BooksService } from "../services/books/books.service";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"],
})
export class BooksListComponent implements OnInit {
  books: BookItem[];
  books$: Observable<BookItem[]>;
  selectedId: number;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooksList();
  }

  private getBooksList() {
    this.books = this.booksService.getRawBooksList();

    // this.booksService
    //   .getObservableOfBooksList()
    //   .subscribe((books: BookItem[]) => {
    //     this.books = books;
    //   });
  }
}
