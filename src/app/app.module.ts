import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { BookItemComponent } from "./books-list/book-item/book-item.component";
import { BookDetailsComponent } from "./books-list/book-details/book-details.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { HttpClientModule } from "node_modules_old/@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailsComponent,
    NavigationComponent,
    NotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 500}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
