import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'all-kegs',
  template: `
    <div class="col m5" id="evenColumn">
      <div class="row eachBeerRow" *ngFor="let currentEvenKeg of childKegList | evenKegs">
        <h5> {{currentEvenKeg.beerName}}  </h5>
        <p> {{currentEvenKeg.brewery}}</p>
        <h4> {{currentEvenKeg.price}} <span class="pourSizeDisplay">{{currentEvenKeg.pourSize}} oz</span></h4>
        <h6> ABV: {{currentEvenKeg.alcoholContent}}</h6>
        <h6> Style: {{currentEvenKeg.style}}</h6>
        <h6> Pints Left: {{currentEvenKeg.pintsLeft}}</h6>

      </div>
    </div>
    <div class="col m5" id="oddColumn">
    <h1 *ngFor="let currentOddKeg of childKegList | oddKegs"> {{currentOddKeg.beerName}}  </h1>
    </div>

  `
})

export class AllKegsComponent {
  @Input() childKegList: Keg [];

}
