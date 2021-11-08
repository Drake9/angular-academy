import { BooksService } from "./../../services/books/books.service";
import { BookItem } from "./../../models/book-item";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"],
})
export class BookDetailsComponent implements OnInit {
  selectedBook: BookItem;
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.getInitialBookId();
    this.bookListener();
  }

  private getInitialBookId() {
    const id = this.route.snapshot.params.id;
    this.selectedBook = this.booksService.getBook(Number(id));
  }

  private bookListener() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedBook = this.booksService.getBook(Number(params.get("id")));
    });
  }
}
