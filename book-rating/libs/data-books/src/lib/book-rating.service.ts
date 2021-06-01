import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '..';
import { rateBook } from './store/book.actions';

const minRating = 1;
const maxRating = 5;


@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor(private store: Store) { }

  rateDown(book: Book): void {
    const rating = Math.max(book.rating - 1, minRating);
    this.rateBook(book, rating);
  }

  rateUp(book: Book): void {
    const rating = Math.min(book.rating + 1, maxRating);
    this.rateBook(book, rating);
  }

  rateBook(book: Book, rating: number): void {
    if (rating !== book.rating) {
      this.store.dispatch(rateBook({ book, rating }));
    }
  }

  isRateUpAllowed(book: Book) {
    return book.rating < maxRating;
  }

  isRateDownAllowed(book: Book) {
    return book.rating > minRating;
  }
}

