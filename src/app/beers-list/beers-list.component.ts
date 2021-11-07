import { Component, OnInit } from "@angular/core";
import { BeerItem } from "../models/beer-item";
import { BeerService } from "../services/beer-api/beer.service";

@Component({
  selector: "app-beers-list",
  templateUrl: "./beers-list.component.html",
  styleUrls: ["./beers-list.component.scss"],
})
export class BeersListComponent implements OnInit {
  beers: BeerItem[];
  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.beersListListener();
  }

  private beersListListener() {
    this.beerService.getBeers().subscribe((beers: BeerItem[]) => {
      this.beers = beers;
    });
  }
}
