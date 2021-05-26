import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BookRatingService, BookStoreService } from '@book-rating/data-books';

@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // Vorsicht Bug! Wenn wir AJAX einführen!
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(public br: BookRatingService,
              private bs: BookStoreService) {

    bs.getBooks().subscribe(books => this.books = books);
  }


  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // };
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a , b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    this.bs.createBook(newBook)
      .subscribe(() => this.books = [...this.books, newBook]);
  }
}
