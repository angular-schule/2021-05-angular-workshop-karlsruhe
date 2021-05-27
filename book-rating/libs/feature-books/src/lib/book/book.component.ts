import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  @Input()
  isRateUpAllowed = (book: Book) => true;

  @Input()
  isRateDownAllowed = (book: Book) => true;

  doRateDown(): void {
    this.rateDown.next(this.book);
  }

  doRateUp(): void {
    this.rateUp.next(this.book);
  }

  get stars() {
    return new Array(this.book?.rating || 0);
  }

  log() {
    console.log('CD getriggert', Date.now());
  }
}
