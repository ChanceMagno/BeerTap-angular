import { Component } from '@angular/core';

@Component({
  selector: 'filter-kegs',
  template: `
  <div class="col m3 offset-m1">
  <h1> Select Column</h1>
  <md-select placeholder="State">
    <md-option> Test 1</md-option>
    <md-option> Test 1</md-option>
  </md-select>
  </div>

  `
})

export class FilterKegsComponent {}
