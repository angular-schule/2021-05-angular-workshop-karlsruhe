import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatureBooksModule } from '@book-rating/feature-books';

const appRoutes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    FeatureBooksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
