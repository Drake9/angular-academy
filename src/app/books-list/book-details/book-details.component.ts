import { BookItem } from "./../../models/book-item";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"],
})
export class BookDetailsComponent implements OnInit {
  book: BookItem;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.listenForInitialBook();
    this.bookListener();
  }

  private listenForInitialBook() {
    const id = this.route.snapshot.params.id;
  }

  private bookListener() {
    this.route.params.subscribe((params: Params) => {
      // this.user.id = params["id"];
    });
  }
}
