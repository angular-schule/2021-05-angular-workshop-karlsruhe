import { Injectable } from '@angular/core';
import { Book } from '..';

const minRating = 1;
const maxRating = 5;


@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: (book.rating > minRating) ? book.rating - 1 :  minRating
    };
  }

  rateUp(book: Book): Book {
    const rating = Math.min(book.rating + 1, maxRating);
    return { ...book, rating };
  }

  isRateUpAllowed(book: Book) {
    return book.rating < maxRating;
  }

  isRateDownAllowed(book: Book) {
    return book.rating > minRating;
  }
}

