import { Component } from '@angular/core';
import { Book } from '@book-rating/data-books';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [
    {
      isbn: '000',
      title: 'Angular',
      description: 'Test',
      rating: 5
    },
    {
      isbn: '111',
      title: 'React',
      description: 'Test2',
      rating: 3
    },
    {
      isbn: '222',
      title: 'jQuery',
      description: 'nope!',
      rating: 1
    }
  ];
}
