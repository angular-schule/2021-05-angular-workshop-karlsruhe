import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const featureBooksRoutes: Route[] = [];

@NgModule({
  declarations: [DashboardComponent, BookComponent, BookDetailsComponent],
  imports: [CommonModule, RouterModule],
  exports: [DashboardComponent]
})
export class FeatureBooksModule {}
