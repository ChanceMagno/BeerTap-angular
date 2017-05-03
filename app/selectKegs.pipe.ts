import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "selectKegs",
  pure: false

})


export class SelectKegsPipe implements PipeTransform {
  transform(input: Keg[], filter, value){
   var valueHolder: string = value;
    if (filter === 'All'){
      return input;
    } else {
      var output: Keg []=[];
      for (var i=0; i<input.length; i++){

        if (input[i][filter] === valueHolder){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
