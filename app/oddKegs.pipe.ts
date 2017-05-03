import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "oddKegs",
  pure: false

})


export class OddKegsPipe implements PipeTransform {
  transform(input: Keg[]){
    var oddKegs: Keg [] = [];
    for (var i=0; i<input.length; i++){
      if ( i % 2 !== 0){
        oddKegs.push(input[i]);
      }
    }
    return oddKegs;
  }

}
