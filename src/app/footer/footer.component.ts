import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  userName$: Subject<string> = new Subject<string>();
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userNameListener();
  }

  private userNameListener() {
    // approach with subscription
    // this.userService.userName$.subscribe((name) => {
    //   this.userName = name;
    // });

    // approach with asyncPipe
    this.userName$ = this.userService.userName$;
  }
}
