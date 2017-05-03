import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'all-kegs',
  template: `
    <div class="col m5" id="evenColumn">

    <h1 *ngFor="let currentEvenKeg of childKegList | evenKegs"> {{currentEvenKeg.beerName}}  </h1>
    </div>
    <div class="col m5" id="oddColumn">
    <h1 *ngFor="let currentOddKeg of childKegList | oddKegs"> {{currentOddKeg.beerName}}  </h1>
    </div>

  `
})

export class AllKegsComponent {
  @Input() childKegList: Keg [];

}
