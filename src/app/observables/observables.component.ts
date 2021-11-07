import { ActivatedRoute, ParamMap } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, Observable, of } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.scss"],
})
export class ObservablesComponent implements OnInit {
  url = "https://api.punkapi.com/v2/beers";
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("--------------------Observable logs-------------------------");

    const numbers$: Observable<number[]> = of([1, 2, 3]);

    const source$: Observable<number> = interval(1000).pipe(take(5));

    const click$: Observable<Event> = fromEvent(document, "click");

    const clickString$: Observable<string> = click$.pipe(
      map((event) => `Event time: ${event.timeStamp}`)
    );

    const apiResponse$: Observable<any> = this.http.get(`${this.url}`);

    const urlParams$: Observable<ParamMap> = this.route.paramMap;

    const observable$ = new Observable((subscriber) => {
      subscriber.next([1, 2, 3]);
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    // source$.subscribe((value: number) => console.log("source$", value));

    // click$.subscribe((value: Event) => console.log("click$", value));

    // clickString$.subscribe((value: string) =>
    //   console.log("clickString$", value)
    // );

    // apiResponse$.subscribe(
    //   (value) => {
    //     console.log("Received value: ", value);
    //   },
    //   (error) => {
    //     console.log("Error!!", error);
    //   },
    //   () => {
    //     console.log("Completes! End of values");
    //   }
    // );

    // numbers$.subscribe((data: number[]) => console.log("numbers$", data));

    // urlParams$.subscribe((data: ParamMap) => console.log("urlParams$", data));

    // observable$.subscribe((data: number[]) => console.log("observable$", data));
  }
}
