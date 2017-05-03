import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "uniqueness",
  pure: false

})


export class FilterUniquePipe implements PipeTransform {
  transform(input: Keg[], variable){

    var kegSet = new Set();
    for (var i=0; i<input.length; i++){

      kegSet.add(input[i][variable]);
    }
    return kegSet;

  }

}
