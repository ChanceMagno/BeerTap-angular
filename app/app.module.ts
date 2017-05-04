import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddKegComponent} from './addKeg.component';
import { AppComponent } from './app.component';
import {AllKegsComponent} from './allkegs.component';
import {FilterKegsComponent} from './filter-kegs.component';
import { FilterUniquePipe } from './filterUnique.pipe';
import {SelectKegsPipe} from './selectKegs.pipe';
import { MaterialModule } from '@angular/material';



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
  imports: [ BrowserModule, FormsModule, BrowserAnimationsModule,MaterialModule.forRoot(),
],
  declarations: [ AppComponent, AllKegsComponent, FilterKegsComponent, AddKegComponent, FilterUniquePipe, SelectKegsPipe],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
