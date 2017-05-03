import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
    <add-keg></add-keg>
  </div>
  <div class="row">
    <all-kegs [childKegList]="masterKegList|selectKegs:selectKegsFilterType:selectFilterValue"> </all-kegs>


    <filter-kegs [childKegList]="masterKegList" (filterSender)="filterSender($event)"></filter-kegs>

  </div>
  `
})

export class AppComponent {

  filtered: boolean;
  selectKegsFilterType: string ="All";
  selectFilterValue: string;

  masterKegList: Keg[] = [
    new Keg ('Sticky Hands Imperial IPA', 'Block 15 - Willamette Valley', 6, 12, 8.1, 2, false, 'IPA'),
    new Keg ('IPL', 'Ex Novo - Portland Metro', 4, 16, 5.4, 3, false, 'Lager'),
    new Keg ('The Tempest Saison', 'Fort George - Oregon Coast', 6, 12, 8.2, 1, false, 'Saison')
  ];

  filterSender (filterParams){
    this.selectFilterValue = filterParams[1];
    this.selectKegsFilterType = filterParams[0];
  }

}
