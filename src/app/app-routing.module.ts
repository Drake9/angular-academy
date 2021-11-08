import { UserPanelComponent } from './user-panel/user-panel.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BeersListComponent } from "./beers-list/beers-list.component";
import { BookCategoriesComponent } from "./book-categories/book-categories.component";
import { BookDetailsComponent } from "./books-list/book-details/book-details.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "books",
    component: BooksListComponent,
    children: [{ path: ":id", component: BookDetailsComponent }],
  },
  { path: "categories", component: BookCategoriesComponent },
  { path: "beers", component: BeersListComponent },
  { path: "user", component: UserPanelComponent },
  { path: "", component: WelcomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
