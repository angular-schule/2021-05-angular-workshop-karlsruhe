import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent, FeatureBooksModule } from '@book-rating/feature-books';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureBooksModule],
  providers: [],
  // bootstrap: [AppComponent],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const webComponent = createCustomElement(BookComponent, { injector: this.injector });
    customElements.define('book-component', webComponent);
  }
}
