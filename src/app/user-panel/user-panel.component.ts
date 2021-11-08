import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-user-panel",
  templateUrl: "./user-panel.component.html",
  styleUrls: ["./user-panel.component.scss"],
})
export class UserPanelComponent implements OnInit {
  user = { name: "" };
  form: NgForm;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  changeUserName(form: NgForm) {
    this.userService.setUserName(form.value.name);
  }
}
