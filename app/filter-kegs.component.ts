import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {Keg} from './keg.model';

declare var jQuery: any;


@Component({
  selector: 'filter-kegs',
  template: `
<div class="row">

  <ul class="collapsible " data-collapsible="accordion">
    <li *ngFor="let category of kegCategories; let i = index">
    <div class="collapsible-header">{{kegCategoryDisplayName[i]}}</div>
      <div class="collapsible-body">
      <button md-button class="filterButtons" *ngFor = "let keg of childKegList|uniqueness:category"  (click)="filterOnClicked(category, keg)"> {{keg}}
      </button>

      </div>
    </li>
  </ul>
</div>

  `
})

export class FilterKegsComponent {
  @Input() childKegList: Keg [];
  @Output () filterSender = new EventEmitter;

  kegCategories: string [] = ['price', 'pourSize', 'alcoholContent', 'style'];
  kegCategoryDisplayName: string [] = ['Price', 'Pour Size', 'ABV %', 'Style'];

  selectedOption: string;

  ngAfterViewInit() {
   jQuery('.collapsible').collapsible();
 }

  filterOnClicked(value, selectedOption){
    var filterParams = [value, selectedOption];
    this.filterSender.emit(filterParams);
  }
}
