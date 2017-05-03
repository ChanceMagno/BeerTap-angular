import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
    <all-kegs [childKegList]="masterKegList"> </all-kegs>
    <filter-kegs></filter-kegs>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg ('Sticky Hands Imperial IPA', 'Block 15 - Willamette Valley', 6, 12, 8.1, 2, false, 'IPA'),
    new Keg ('IPL', 'Ex Novo - Portland Metro', 6, 16, 5.4, 3, false, 'Lager'),
    new Keg ('The Tempest Saison', 'Fort George - Oregon Coast', 6, 12, 8.2, 1, false, 'Saison')
  ];

}
