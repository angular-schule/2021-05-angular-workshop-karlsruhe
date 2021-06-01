import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { BookStoreService } from '../book-store.service';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      switchMap(() =>
        this.bs.getBooks().pipe(
          map(books => BookActions.loadBooksSuccess({ books })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  rateBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.rateBook),
      switchMap(({ book, rating }) =>
        this.bs.rateBook(book, rating).pipe(
          filter(({ rate }) => rate),
          map(() => BookActions.rateBookSuccess({ book, rating })),
          catchError(error => of(BookActions.rateBookFailure({ error }))))
      )
    );
  });

  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBook),
      switchMap(({ book }) =>
        this.bs.createBook(book).pipe(
          map(b => BookActions.createBookSuccess({ book: b })),
          catchError(error => of(BookActions.createBookFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions,
    private bs: BookStoreService) {}

}
