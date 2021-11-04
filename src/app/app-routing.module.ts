import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookDetailsComponent } from "./books-list/book-details/book-details.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "books", component: BooksListComponent },
  // { path: "book/:id", component: BookDetailsComponent },
  // { path: "categories", component: ContactDetailComponent },
  { path: "", component: WelcomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
