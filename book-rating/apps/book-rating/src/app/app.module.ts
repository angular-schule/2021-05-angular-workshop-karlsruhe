import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureBooksModule } from '@book-rating/feature-books';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './book/book.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    FeatureBooksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
