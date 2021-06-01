import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookRatingService } from '../book-rating.service';
import { BookStoreService } from '../book-store.service';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      switchMap(() => this.onLoadBooks())
    );
  });

  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBook),
      switchMap((type: {book: Book}) =>
        this.bs.createBook(type.book).pipe(
          map(() => BookActions.createBookSuccess()),
          catchError(error => of(BookActions.createBookFailure({ error }))))
      )
    );
  });

  createBookSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBookSuccess),
      switchMap(() => this.onLoadBooks())
    );
  });

  rateBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.rateBook),
      switchMap((type: {book: Book, rating: number}) =>
        this.br.rateBook(type.book.isbn, type.rating).pipe(
          map(() => BookActions.rateBookSuccess()),
          catchError(error => of(BookActions.rateBookFailure({ error }))))
      )
    );
  });

  rateBookSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.rateBookSuccess),
      switchMap(() => this.onLoadBooks())
    );
  });

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
    private br: BookRatingService) {}


  private onLoadBooks() {
    return this.bs.getBooks().pipe(
      map(books => BookActions.loadBooksSuccess({ books })),
      catchError(error => of(BookActions.loadBooksFailure({ error }))));
  }
}
