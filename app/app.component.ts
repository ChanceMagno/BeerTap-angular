import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
  <div *ngIf="!filtered">
    <all-kegs [childKegList]="masterKegList|selectKegs:selectKegsFilterType:selectFilterValue"> </all-kegs>
  </div>
  <div *ngIf="filtered" >
    <h1> Only display if filter is selected </h1>
  </div>
    <filter-kegs [childKegList]="masterKegList" (filterSender)="filterSender($event)"></filter-kegs>
  </div>
  `
})

export class AppComponent {
  filtered: boolean = false;
  filterForThis: string;
  selectKegsFilterType: string ="All";
  selectFilterValue: string = "6"
  filteredKegsList: Keg []=[];

  masterKegList: Keg[] = [
    new Keg ('Sticky Hands Imperial IPA', 'Block 15 - Willamette Valley', 6, 12, 8.1, 2, false, 'IPA'),
    new Keg ('IPL', 'Ex Novo - Portland Metro', 4, 16, 5.4, 3, false, 'Lager'),
    new Keg ('The Tempest Saison', 'Fort George - Oregon Coast', 6, 12, 8.2, 1, false, 'Saison')
  ];

  filterSender (value){
    if(value === "All"){
      this.filtered = false;
    } else {
      this.filtered = true;
      this.filterForThis = value;
    }
  }

}
