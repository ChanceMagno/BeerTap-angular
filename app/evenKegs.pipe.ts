import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "evenKegs",
  pure: false

})


export class EvenKegsPipe implements PipeTransform {
  transform(input: Keg[]){
    var evenKegs: Keg [] = [];
    for (var i=0; i<input.length; i++){
      if ( i % 2 === 0){
        evenKegs.push(input[i]);
      }
    }
    return evenKegs;
  }

}
