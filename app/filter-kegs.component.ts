import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'filter-kegs',
  template: `
  <div class="col m2">
  <h1> Price</h1>
  <md-select placeholder="State" [(ngModel)]="selectedOption" (change)="filterOnClicked('price', selectedOption)">
    <md-option *ngFor = "let keg of childKegList|uniqueness:'price'" [value]="keg"> {{keg}}</md-option>
  </md-select>
  <h1> Pour Size</h1>
  <md-select placeholder="State" [(ngModel)]="selectedOption" (change)="filterOnClicked(selectedOption)">
    <md-option *ngFor = "let keg of childKegList|uniqueness:'happyHour'" [value]="keg"> {{keg}}</md-option>
  </md-select>
  </div>
  `
})

export class FilterKegsComponent {
  @Input() childKegList: Keg [];
  @Output () filterSender = new EventEmitter;

  selectedOption: string;

  filterOnClicked(value, selectedOption){
    var filterParams = [value, selectedOption];
    console.log(filterParams);
    this.filterSender.emit(filterParams);
  }
}
