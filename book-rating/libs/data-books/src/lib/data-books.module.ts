import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer), EffectsModule.forFeature([BookEffects])],
})
export class DataBooksModule {}
