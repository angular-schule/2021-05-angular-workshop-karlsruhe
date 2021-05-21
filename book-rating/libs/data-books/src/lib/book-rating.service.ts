import { Injectable } from '@angular/core';
import { Book } from '..';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: (book.rating > this.minRating) ? book.rating - 1 :  this.minRating
    };
  }

  rateUp(book: Book): Book {
    const rating = Math.min(book.rating + 1, this.maxRating);
    return { ...book, rating };
  }
}

