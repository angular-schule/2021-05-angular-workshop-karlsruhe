import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, selectBookByIsbn, selectBooks, selectBooksLoading } from '@book-rating/data-books';
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
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: Math.min(book.rating + 1, 5)
    // // };
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a , b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    // this.bs.createBook(newBook)
      // .subscribe(() => this.books = [...this.books, newBook]);
  }
}
