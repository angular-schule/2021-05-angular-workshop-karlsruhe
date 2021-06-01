import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { DataBooksModule, loadBooks } from '@book-rating/data-books';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { Store } from '@ngrx/store';

const featureBooksRoutes: Route[] = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  declarations: [DashboardComponent, BookComponent, CreateBookComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(featureBooksRoutes),
    DataBooksModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- deaktiviert Fehlerprüfung bei unbekannten Elementen
})
export class FeatureBooksModule {
  constructor(store: Store) {
    store.dispatch(loadBooks())
  }
}
