import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book } from '@book-rating/data-books';

@Component({
  selector: 'books-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent  {

  @Input()
  book?: Book;

  get stars() {
    return new Array(this.book?.rating || 0);
  }
}
