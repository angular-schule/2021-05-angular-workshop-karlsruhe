import { Book } from '@book-rating/data-books';
import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    loading: true
  })),

  on(BookActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    loading: false,
    books
  })),

  on(BookActions.loadBooksFailure, state => ({
    ...state,
    loading: false,
    books: []
  })),

  on(BookActions.createBook, (state) => ({
    ...state,
    loading: true
  })),

  on(BookActions.createBookSuccess, (state) => ({
    ...state,
    loading: false
  })),

  on(BookActions.createBookFailure, state => ({
    ...state,
    loading: false
  })),

  on(BookActions.rateBook, (state) => ({
    ...state,
    loading: true
  })),

  on(BookActions.rateBookSuccess, (state) => ({
    ...state,
    loading: false
  })),

  on(BookActions.rateBookFailure, state => ({
    ...state,
    loading: false
  }))
);

