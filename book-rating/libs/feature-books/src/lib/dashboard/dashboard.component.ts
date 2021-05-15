import { Component } from '@angular/core';
import { Book, BookStoreService } from '@book-rating/data-books';

@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private bs: BookStoreService) {
    this.bs.getAll().subscribe(books => this.books = books);
  }


}
