import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        // DashboardComponent, BookComponent --> Integrationstest
      ],
      schemas: [NO_ERRORS_SCHEMA] // Shallow Unit-Test
    }).compileComponents();
  });

  it('should have as title `Book Rating`', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBe(`Book Rating`);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement as HTMLElement;
    expect(nativeElement.querySelector('h1')?.textContent).toContain('Book Rating')
  });
});
