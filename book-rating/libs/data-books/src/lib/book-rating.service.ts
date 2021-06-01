import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '..';
import { API_URL } from './book-store.service';

const minRating = 1;
const maxRating = 5;


@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor(public http: HttpClient,
    @Inject(API_URL) private api: string) {}

  rateBook(isbn: string, rating: number): Observable<Book> {
    return this.http.post<Book>(this.api + '/books/' + isbn + '/rate', { rating });
  }

  isRateUpAllowed(book: Book) {
    return book.rating < maxRating;
  }

  isRateDownAllowed(book: Book) {
    return book.rating > minRating;
  }
}

