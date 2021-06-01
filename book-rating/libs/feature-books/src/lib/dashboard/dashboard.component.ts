import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, selectBookByIsbn, selectBooks, selectBooksLoading, createBook, BookRatingService } from '@book-rating/data-books';
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

  constructor(private store: Store, private bs: BookRatingService) { }


  doRateDown(book: Book): void {
    this.bs.rateDown(book);
  }

  doRateUp(book: Book): void {
    this.bs.rateUp(book);
  }

  addBook(book: Book): void {
    this.store.dispatch(createBook({ book }))
  }
}
