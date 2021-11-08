import { BooksCountService } from "./../services/additional/books-count/books-count.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  userName: string;
  count: number;

  constructor(
    private userService: UserService,
    private booksCountService: BooksCountService
  ) {}

  ngOnInit() {
    this.userNameListener();
  }

  private userNameListener() {
    //approach with subscription
    this.userService.userName$.subscribe(name => {
      this.userName = name;
    });

    //approach with asyncPipe
    // this.userName$ = this.userService.userName$;
  }
}
