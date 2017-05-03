import { Component } from '@angular/core';
import {Keg} from './keg.model';


@Component({
  selector: 'filter-kegs',
  template: `
  <div class="col m2">
  <h1> Select Column</h1>
  <md-select placeholder="State">
    <md-option> Test 1</md-option>
    <md-option> Test 1</md-option>
  </md-select>
  </div>

  `
})

export class FilterKegsComponent {}
