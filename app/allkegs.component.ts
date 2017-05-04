import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'all-kegs',
  template: `
<md-grid-list cols="2" gutterSize="0px">
  <md-grid-tile class="beerCard" *ngFor="let currentEvenKeg of childKegList">
    <md-card>
    <h5> {{currentEvenKeg.beerName}}  </h5>
    <p> {{currentEvenKeg.brewery}}</p>
    <h4> {{currentEvenKeg.price}} <span class="pourSizeDisplay">{{currentEvenKeg.pourSize}} oz</span></h4>
    <h6> ABV: {{currentEvenKeg.alcoholContent}}</h6>
    <h6> Style: {{currentEvenKeg.style}}</h6>
    <h6> Pints Left: {{currentEvenKeg.pintsLeft}}</h6>
    </md-card>
  </md-grid-tile>
</md-grid-list>
  `
})

export class AllKegsComponent {
  @Input() childKegList: Keg [];

}
