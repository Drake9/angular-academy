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
import { BeersListComponent } from "./beers-list/beers-list.component";
import { ObservablesComponent } from "./observables/observables.component";
import { UserPanelComponent } from "./user-panel/user-panel.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyBooksComponent } from "./additional-components/my-books/my-books.component";

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
    BeersListComponent,
    ObservablesComponent,
    UserPanelComponent,
    FooterComponent,
    MyBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
