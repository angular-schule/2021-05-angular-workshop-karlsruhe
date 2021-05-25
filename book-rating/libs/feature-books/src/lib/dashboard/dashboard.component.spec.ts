import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book, BookRatingService } from '@book-rating/data-books';
import { BookComponent } from '../book/book.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const ratingMock = {
      isRateUpAllowed: () => true,
      isRateDownAllowed: () => true,
      rateUp: jest.fn(b => b)
    }

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent // Integration test
      ],
      providers: [
        { provide: BookRatingService,
          useValue: ratingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the service for rateUp()', () => {

    const rs = TestBed.inject(BookRatingService);
    const book = { isbn: '000' } as Book;
    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenLastCalledWith(book);
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
  });
});
