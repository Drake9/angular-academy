import { CategoriesService } from "./../../../services/additional/categories/categories.service";
import { BooksApiService } from "./../../../services/books-api/books-api.service";
import { BooksService } from "./../../../services/books/books.service";
import { BookItem } from "./../../../models/book-item";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"],
})
export class BookDetailsComponent implements OnInit {
  selectedBook: BookItem;
  category: string;
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private booksApiService: BooksApiService,
    private categoriesService: CategoriesService
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

    // this.route.paramMap
    //   .pipe(
    //     mergeMap((params: ParamMap) => {
    //       return this.booksApiService.getBook(Number(params.get("id")));
    //     }),
    //     mergeMap((book) => {
    //       this.selectedBook = book;
    //       return this.categoriesService.getCategory(book.category);
    //     })
    //   )
    //   .subscribe((category) => {
    //     console.log(category);
    //     this.category = category;
    //   });
  }
}
