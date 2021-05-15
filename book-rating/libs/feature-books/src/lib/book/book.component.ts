import { Component, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'books-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book | undefined;

}
