import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';



@Component({
  selector: 'all-kegs',
  template: `
<md-grid-list cols="3" rowHeight="4:3" gutterSize="0px">
  <md-grid-tile class="beerCard" *ngFor="let keg of childKegList;  let i = index">
    <md-card *ngIf = "keg !== selectedKeg" [class]="fourDollarBeer(keg)">
  <md-card-title>	 {{keg.beerName}}  </md-card-title>
    <md-card-subtitle> {{keg.brewery}}</md-card-subtitle>
    <h4> {{keg.price|currency:'USD':true:'1.2-2'}} <span class="pourSizeDisplay">{{keg.pourSize}} oz pour</span></h4>
    <div class="chip"> ABV: {{keg.alcoholContent}}%</div>
    <div class="chip"> Style: {{keg.style}}</div>
    <h6> Pints Left: {{keg.pintsLeft}}</h6>
    <h6>{{keg.pintsLeft}}</h6>

    <button md-button (click)="selectedKeg = keg"> toggle Edit On</button>
    </md-card>

    <md-card *ngIf="keg === selectedKeg" class="editKegForm">
    <div class="row">
    <div class="col s12">
    <div class="row">
    <p class="range-field col s4">
    <label for="price">$Price</label>
      <input value={{keg.price}} type="range" id="price" min="1" max="15" step="1"  #price/>
    </p>
    <p class="range-field col s4">
    <label for="pourSize">Pour Size in OZ</label>
      <input value={{keg.pourSize}} type="range" id="pourSize" min="3" max="20" step="1" #pourSize />
    </p>
    <p class="range-field col s4">
    <label for="alcoholContent">ABV %</label>
      <input value={{keg.alcoholContent}} type="range" id="alcoholContent" min="0" max="20" step="0.1" #alcoholContent  />
    </p>
    </div>
    <div class="row">
     <div class="input-field col s6">
       <input  value={{keg.beerName}} id="beerName" type="text" class="validate" #beerName>
        <label class="active" for="beerName">Beer Name</label>
     </div>
     <div class="input-field col s6" >
       <input  value={{keg.brewery}} id="brewery" type="text" class="validate" #brewery>
        <label class="active" for="brewery">Brewery</label>
     </div>
    </div>
     <div class="row">
       <div class="input-field col s6" >
        <input value={{keg.style}} id="beerStyle" type="text" class="validate" #beerStyle>
          <label class="active" for="style">Beer Style</label>
       </div>
       <div class="col s6">
          <button  md-button (click)="updateNewKeg(i, beerName.value, brewery.value, beerStyle.value,     price.value, alcoholContent.value, pourSize.value )"> Update Keg </button>
          <button  md-button (click)="selectedKeg = null" > Cancel </button>
        </div>
     </div>


</div>
</div>
    </md-card>



  </md-grid-tile>
</md-grid-list>
  `
})

export class AllKegsComponent {
  @Input() childKegList: Keg [];
  @Output() updatedKegSender = new EventEmitter ();
  selectedKeg: Keg;


fourDollarBeer(keg){
  if(keg.price === 4){
    return 'fourDollars';
  } else {
    return;
  }
}

  updateNewKeg (index, beerName:string, brewery: string, beerStyle: string, price: string, alcoholContent: string, pourSize: string){
    var kegIndexToUpdate:number = parseInt(index);
    var updatedKeg = new Keg (beerName, brewery, parseInt(price), parseInt(pourSize), parseFloat(alcoholContent), 0, false, beerStyle);
    var updatedKegPackage = [kegIndexToUpdate, updatedKeg];
    this.updatedKegSender.emit(updatedKegPackage);
  }

}
