import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookStoreService } from '@book-rating/data-books';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const bsMock = {
      getAll: jest.fn().mockReturnValue(of([]))
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: BookStoreService, useValue: bsMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
