import { Component } from '@angular/core';
import { Book, BookRatingService } from '@book-rating/data-books';

@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private bs: BookRatingService) {

  }

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5,
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Altes Buch',
    rating: 3,
  },
  {
    isbn: '222',
    title: 'jQuery',
    description: 'Haben wir 2000',
    rating: 0,
  }];

  doRateDown(book: Book): void {
    console.table(book);
  }

  doRateUp(book: Book): void {
    console.table(book);
  }
}
