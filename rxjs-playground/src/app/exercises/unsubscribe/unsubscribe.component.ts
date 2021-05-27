import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription } from 'rxjs';
import { takeWhile, takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent {

  zahl$ = timer(0, 1000);


}
