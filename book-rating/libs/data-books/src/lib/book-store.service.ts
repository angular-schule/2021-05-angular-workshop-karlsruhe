import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from './book';

export const API_URL = new InjectionToken<string>('apiUrl');

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(public http: HttpClient,
              @Inject(API_URL) private api: string) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api + '/books');
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.api + '/books/' + isbn);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.api + '/books/', book);
  }

  rateBook(book: Book, rating: number): Observable<{ rate: boolean }> {
    return this.http.post<{ rate: boolean }>(`${this.api}/books/${book.isbn}/rate`, { rating });
  }
}
