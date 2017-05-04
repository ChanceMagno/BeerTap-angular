import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'add-keg',
  template: `
  <md-card id="addKegForm">
<md-card-title>	 title here  </md-card-title>
  <md-card-subtitle> subtitle</md-card-subtitle>
   <div class="input-field" >
   <input  id="beerName" type="text" class="validate" #beerName>
        <label for="beerName">Beer Name</label>
   </div>
   <div class="input-field" >
   <input  id="brewery" type="text" class="validate" #brewery>
        <label for="brewery">Brewery</label>
   </div>
   <div class="input-field" >
   <input  id="beerStyle" type="text" class="validate" #beerStyle>
        <label for="style">Beer Style</label>
   </div>
   <p class="range-field">
   <label for="price">$Price</label>
     <input type="range" [(ngModel)]="addPrice" (change)="showNumber(addPrice)" id="price" min="1" max="15" step="1"  #price/>
  {{selectedPrice|currency:'USD':true:'1.2-2'}}

   </p>
   <p class="range-field">
   <label for="pourSize">Pour Size in OZ</label>
     <input type="range" [(ngModel)]="addPourSize" (change)="showPourSize(addPourSize)" id="pourSize" min="3" max="20" step="1" #pourSize />
     {{selectedPourSize}}
   </p>
   <p class="range-field">
   <label for="alcoholContent">ABV %</label>
     <input type="range" [(ngModel)]="addAlcoholContent" (change)="showAlcoholContent(addAlcoholContent)" id="alcoholContent" min="0" max="20" step="0.1" #alcoholContent  />
     {{selectedAlcoholContent}}
   </p>
   <button md-button (click)="addNewKeg(beerName.value, brewery.value, beerStyle.value, price.value, alcoholContent.value, pourSize.value )"> Add New Keg </button>
  </md-card>

  `
})

export class AddKegComponent {
  @Output () newKegSender = new EventEmitter();

  selectedPrice: string;
  selectedAlcoholContent: string;
  selectedPourSize: string;

  addNewKeg(beerName:string, brewery: string, beerStyle: string, price: string, alcoholContent: string, pourSize: string){
    var newKeg: Keg = new Keg (beerName, brewery, parseInt(price), parseInt(pourSize), parseFloat(alcoholContent), 0, false, beerStyle);
    this.newKegSender.emit(newKeg);
  }
  showNumber(price){
    this.selectedPrice=price;
  }

  showAlcoholContent(value) {
    this.selectedAlcoholContent= "ABV:" +value + "%";
  }

  showPourSize(pourSize) {
    this.selectedPourSize= pourSize + "oz pour";
  }


}
