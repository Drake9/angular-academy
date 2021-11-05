import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { BookItem } from "../models/book-item";
import { BooksApiService } from "../services/books-api/books-api.service";
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

  constructor(
    private booksService: BooksService,
    private booksApiService: BooksApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.getBooksList();
  }

  private getBooksList() {
    // this.books = this.booksService.getBooksList();

    // this.booksApiService.getApiBooks().subscribe((data) => {
    //   console.log(data);
    // });

    this.booksService
      .getObservableOfBooksList()
      .subscribe((books: BookItem[]) => {
        this.books = books;
      });
  }
}
