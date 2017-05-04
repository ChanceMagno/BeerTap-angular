import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'all-kegs',
  template: `
<md-grid-list cols="3" rowHeight="4:3" gutterSize="0px">
  <md-grid-tile class="beerCard" *ngFor="let currentEvenKeg of childKegList">
    <md-card>
  <md-card-title>	 {{currentEvenKeg.beerName}}  </md-card-title>
    <md-card-subtitle> {{currentEvenKeg.brewery}}</md-card-subtitle>
    <h4> {{currentEvenKeg.price|currency:'USD':true:'1.0-2'}} <span class="pourSizeDisplay">{{currentEvenKeg.pourSize}} oz pour</span></h4>
    <div class="chip"> ABV: {{currentEvenKeg.alcoholContent}}%</div>
    <div class="chip"> Style: {{currentEvenKeg.style}}</div>
    <h6> Pints Left: {{currentEvenKeg.pintsLeft}}</h6>
    </md-card>
  </md-grid-tile>
</md-grid-list>
  `
})

export class AllKegsComponent {
  @Input() childKegList: Keg [];

}
