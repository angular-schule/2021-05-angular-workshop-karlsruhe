import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    const observer = {
      next: e => this.log(e),
      error: err => this.log('ERROR: ' + err),
      complete: () => this.log('COMPLETE')
    };

    const observable$ = new Observable(subscriber => {

      subscriber.next('😅');

      const x = window.setTimeout(() => subscriber.next('🤪'), 1000);
      const y =  window.setTimeout(() => { subscriber.error('BOOM!'), this.log('ZOMBIE CODE!') }, 2000);

      // window.setTimeout(() => subscriber.next('💩'), 2500);
      return () => {

        this.log('Subscription beendet!');
        window.clearTimeout(x);
        window.clearTimeout(y);
      }

    });

    // (ABCD|)
    // of('😅', '🤪', '🤩', '😣')

    const subscription = observable$.subscribe(observer);
    // const subscription2 = observable$.subscribe(observer);

    window.setTimeout(() => subscription.unsubscribe(), 1500);

    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
