import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';

export const featureBooksRoutes: Route[] = [];

@NgModule({
  declarations: [DashboardComponent, BookComponent],
  imports: [CommonModule, RouterModule],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // <-- deaktiviert Fehlerprüfung bei unbekannten Elementen
})
export class FeatureBooksModule {}
