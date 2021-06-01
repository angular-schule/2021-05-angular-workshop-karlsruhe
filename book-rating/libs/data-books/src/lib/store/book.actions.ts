import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '@book-rating/data-books';
import { createAction, props } from '@ngrx/store';

export const loadBooks = createAction(
  '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: HttpErrorResponse }>()
);

export const rateBook = createAction(
  '[Book] Rate Book',
  props<{ book: Book, rating: number }>()
);

export const rateBookSuccess = createAction(
  '[Book] Rate Book Success',
  props<{ book: Book, rating: number }>()
);

export const rateBookFailure = createAction(
  '[Book] Rate Book Failure',
  props<{ error: HttpErrorResponse }>()
);

export const createBook = createAction(
  '[Book] Create Book',
  props<{ book: Book}>()
);

export const createBookSuccess = createAction(
  '[Book] Create Book Success',
  props<{ book: Book }>()
);

export const createBookFailure = createAction(
  '[Book] Create Book Failure',
  props<{ error: HttpErrorResponse }>()
);
