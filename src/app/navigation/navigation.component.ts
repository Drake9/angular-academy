import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  userName: string;
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userNameListener();
  }

  private userNameListener() {
    //approach with subscription
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });

    //approach with asyncPipe
    // this.userName$ = this.userService.userName$;
  }
}
