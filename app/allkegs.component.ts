import { Component } from '@angular/core';

@Component({
  selector: 'all-kegs',
  template: `
    <div class="col m4" id="evenColumn">
    //for loop, only print for Odd index
    <h1> Tap Room </h1>
    <md-select placeholder="State">
      <md-option> Test 1</md-option>
      <md-option> Test 1</md-option>
    </md-select>
    </div>
    //for loop, only print for Even index
    <div class="col m4" id="oddColumn">
    <h1> Tap Room </h1>
    <md-select placeholder="State">
      <md-option> Test 1</md-option>
      <md-option> Test 1</md-option>
    </md-select>
    </div>

  `
})

export class AllKegsComponent {}
