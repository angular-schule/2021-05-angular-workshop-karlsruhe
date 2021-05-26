import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'books-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent  {

  isbn = '';

  constructor(private route: ActivatedRoute) {
    this.isbn = route.snapshot.paramMap.get('isbn') || '';
  }

}
