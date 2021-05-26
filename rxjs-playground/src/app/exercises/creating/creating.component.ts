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

    const observable$ = new Observable(obs => {

      obs.next('😅');

      window.setTimeout(() => obs.next('🤪'), 1000);
      window.setTimeout(() => obs.error('BOOM!'), 2000);

    });

    // (ABCD|)
    // of('😅', '🤪', '🤩', '😣')

    observable$.subscribe(observer);

    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
