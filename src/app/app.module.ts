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
import { BookCategoriesComponent } from "./book-categories/book-categories.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailsComponent,
    NavigationComponent,
    NotFoundComponent,
    WelcomeComponent,
    BookCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
