import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import {AllKegsComponent} from './allkegs.component';
import {FilterKegsComponent} from './filter-kegs.component';
import { EvenKegsPipe } from './evenKegs.pipe';
import { OddKegsPipe } from './oddKegs.pipe';
import { FilterUniquePipe } from './filterUnique.pipe';



import { FormsModule } from '@angular/forms';

// import { AngularFireModule } from 'angularfire2';
// import { masterFirebaseConfig } from './api-keys';

// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// }

@NgModule({
  imports: [ BrowserModule, FormsModule, BrowserAnimationsModule, MdSelectModule],
  declarations: [ AppComponent, AllKegsComponent, FilterKegsComponent,EvenKegsPipe, OddKegsPipe, FilterUniquePipe],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
