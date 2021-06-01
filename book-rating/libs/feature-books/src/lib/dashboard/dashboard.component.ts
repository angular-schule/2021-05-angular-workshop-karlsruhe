import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, createBook, rateBook, selectBookByIsbn, selectBooks, selectBooksLoading } from '@book-rating/data-books';
import { select, Store } from '@ngrx/store';


@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  // beispiel
  book42$ = this.store.pipe(select(selectBookByIsbn, { isbn: '42' }));

  constructor(private store: Store) {


  }


  doRateDown(book: Book): void {
    this.store.dispatch(rateBook({ book, rating: book.rating - 1 }));
  }

  doRateUp(book: Book): void {
    this.store.dispatch(rateBook({ book, rating: book.rating + 1 }));
  }

  updateAndSort(ratedBook: Book): void {
    // rating triggers reload
  }

  addBook(book: Book): void {
    this.store.dispatch(createBook({ book }));
  }
}
