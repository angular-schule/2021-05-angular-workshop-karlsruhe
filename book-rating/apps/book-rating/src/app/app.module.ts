import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { API_URL } from '@book-rating/data-books';
import { environment } from '../environments/environment';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books',
    loadChildren: () => import('@book-rating/feature-books')
      .then(m => m.FeatureBooksModule) }
];

@NgModule({
  declarations: [AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    // FeatureBooksModule,
    HttpClientModule
  ],
  providers: [{
    provide: API_URL,
    useValue: environment.apiUrl
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
