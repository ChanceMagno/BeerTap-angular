import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'all-kegs',
  template: `
<md-grid-list cols="3" rowHeight="4:3" gutterSize="0px">
  <md-grid-tile class="beerCard" *ngFor="let keg of childKegList">
    <md-card *ngIf = "keg !== selectedKeg">
  <md-card-title>	 {{keg.beerName}}  </md-card-title>
    <md-card-subtitle> {{keg.brewery}}</md-card-subtitle>
    <h4> {{keg.price|currency:'USD':true:'1.2-2'}} <span class="pourSizeDisplay">{{keg.pourSize}} oz pour</span></h4>
    <div class="chip"> ABV: {{keg.alcoholContent}}%</div>
    <div class="chip"> Style: {{keg.style}}</div>
    <h6> Pints Left: {{keg.pintsLeft}}</h6>
    <button md-button (click)="selectEditKeg(keg)"> toggle Edit On</button>
    </md-card>

    <md-card *ngIf="keg === selectedKeg" class="editKegForm">
    <div class="row">
    <form class="col s12">
    <div class="row">
    <p class="range-field col s4">
    <label for="price">$Price</label>
      <input placeholder={{keg.price}} type="range" id="price" min="1" max="15" step="1"  #price/>
    </p>
    <p class="range-field col s4">
    <label for="pourSize">Pour Size in OZ</label>
      <input type="range" id="pourSize" min="3" max="20" step="1" #pourSize />
    </p>
    <p class="range-field col s4">
    <label for="alcoholContent">ABV %</label>
      <input type="range" id="alcoholContent" min="0" max="20" step="0.1" #alcoholContent  />
    </p>
    </div>
    <div class="row">
       <div class="input-field col s6">
         <input  value={{keg.beerName}} id="beerName" type="text" class="validate" #beerName>
          <label for="beerName">Beer Name</label>
       </div>
         <div class="input-field col s6" >
         <input  id="brewery" type="text" class="validate" #brewery>
          <label for="brewery">Brewery</label>
       </div>
     </div>

     <div class="row">
     <div class="input-field col s6" >
     <input  id="beerStyle" type="text" class="validate" #beerStyle>
          <label for="style">Beer Style</label>
     </div>
     <div class="col s6">
      <button  md-button (click)="addNewKeg(beerName.value, brewery.value, beerStyle.value, price.value, alcoholContent.value, pourSize.value )"> Save New Keg </button>
        <button  md-button (click)="addNewKeg(beerName.value, brewery.value, beerStyle.value, price.value, alcoholContent.value, pourSize.value )"> Cancel </button>
        </div>
     </div>


</form>
</div>
    </md-card>



  </md-grid-tile>
</md-grid-list>
  `
})

export class AllKegsComponent {
  @Input() childKegList: Keg [];
  selectedKeg: Keg;
  selectEditKeg(keg){
    this.selectedKeg = keg;
  }
}
