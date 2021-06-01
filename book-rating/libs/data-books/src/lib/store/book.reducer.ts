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
  loading: false,
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    loading: true
  })),

  on(BookActions.loadBooksSuccess, (state, { books }) =>  ({
    ...state,
    loading: false,
    books
  })),

  on(BookActions.loadBooksFailure, state =>  ({
    ...state,
    loading: false,
    books: []
  })),
  on(BookActions.rateBookSuccess, (state, { book, rating }) => {
    const index = state.books.findIndex(b => b.isbn === book.isbn);
    return {
      ...state,
      books: [
        ...state.books.slice(0, index),
        {
          ...book,
          rating
        },
        ...state.books.slice(index + 1)
      ]
    }
  }),
  on(BookActions.createBookSuccess, (state, { book }) => ({
    ...state,
    books: [
      ...state.books,
      book
    ]
  }))
);

