import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <md-sidenav-container class="add-keg">
  <md-sidenav #sidenav class="example-sidenav" mode="push">
    <add-keg (newKegSender)="addNewKeg($event)"></add-keg>
  </md-sidenav>
  <button md-button (click)="sidenav.open()" id="addKegButton"> Add New Keg</button>
  <div class="row">

    <div class="col s10">
    <all-kegs [childKegList]="masterKegList|selectKegs:selectKegsFilterType:selectFilterValue" (updatedKegSender)="updateKeg($event)"> </all-kegs>
    </div>
    <div class="col s2">
    <filter-kegs [childKegList]="masterKegList" (filterSender)="filterSender($event)"></filter-kegs>
    </div>
  </div>
  </md-sidenav-container>

  `
})

export class AppComponent {

  filtered: boolean;
  selectKegsFilterType: string ="All";
  selectFilterValue: string;

  masterKegList: Keg[] = [
    new Keg ('Sticky Hands Imperial IPA', 'Block 15 - Willamette Valley', 6, 12, 8.1, 2, false, 'IPA'),
    new Keg ('IPL', 'Ex Novo - Portland Metro', 4, 16, 5.4, 3, false, 'Lager'),
    new Keg ('The Tempest Saison', 'Fort George - Oregon Coast', 6, 12, 8.2, 1, false, 'Saison'),
    new Keg ('Sticky Hands Imperial IPA', 'Block 15 - Willamette Valley', 6, 12, 8.1, 2, false, 'IPA'),
    new Keg ('IPL', 'Ex Novo - Portland Metro', 4, 16, 5.4, 3, false, 'Lager'),
    new Keg ('The Tempest Saison', 'Fort George - Oregon Coast', 6, 12, 8.2, 1, false, 'Saison'),
    new Keg ('Sticky Hands Imperial IPA', 'Block 15 - Willamette Valley', 6, 12, 8.1, 2, false, 'IPA'),
    new Keg ('IPL', 'Ex Novo - Portland Metro', 4, 16, 5.4, 3, false, 'Lager'),
    new Keg ('The Tempest Saison', 'Fort George - Oregon Coast', 6, 12, 8.2, 1, false, 'Saison'),
  ];

  filterSender (filterParams){
    this.selectFilterValue = filterParams[1];
    this.selectKegsFilterType = filterParams[0];
  }

  addNewKeg(newKeg){
    this.masterKegList.push(newKeg);
    console.log(this.masterKegList);
  }

  updateKeg (updatePackage) {
    this.masterKegList[updatePackage[0]] = updatePackage[1];
  }

}
