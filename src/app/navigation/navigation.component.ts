import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { BeerItem } from "../models/beer-item";
import { BeerService } from "../services/beer-api/beer.service";
import { UserService } from "../services/user/user.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit, OnDestroy {
  userName: string;
  beersLength: number;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private beerService: BeerService
  ) {}

  ngOnInit() {
    this.userNameListener();
    this.getBeers();
  }

  private userNameListener() {
    //approach with subscription
    this.userService.userName$.subscribe((name) => {
      this.userName = name;
    });

    //approach with asyncPipe
    // this.userName$ = this.userService.userName$;
  }

  private getBeers() {
    this.beerService
      .getBeers()
      .pipe(
        filter((beers) => beers.length),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((beers) => {
        this.beersLength = beers.length;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
