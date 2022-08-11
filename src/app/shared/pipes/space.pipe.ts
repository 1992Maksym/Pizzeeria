import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space'
})
export class SpacePipe implements PipeTransform {

  transform(arr:string[]) {
    return arr.map(el => {
      return (" " + el);
    });
    // return arr.join(', ');
  }

}
