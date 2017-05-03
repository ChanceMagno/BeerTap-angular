import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {AllKegsComponent} from './allkegs.component';
import {FilterKegsComponent} from './filter-kegs.component';

import { FormsModule } from '@angular/forms';

// import { AngularFireModule } from 'angularfire2';
// import { masterFirebaseConfig } from './api-keys';

// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// }

import { MdSelectModule } from '@angular/material';

@NgModule({
  imports: [ BrowserModule, FormsModule, NoopAnimationsModule, MdSelectModule],
  declarations: [ AppComponent, AllKegsComponent, FilterKegsComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
