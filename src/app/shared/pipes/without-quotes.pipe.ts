import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutQuotes'
})
export class WithoutQuotesPipe implements PipeTransform {

  transform(val: string){
    if(val.length > 1){
      return val.split('').slice(1, -1).join('');
    }else{
      return val;
    }
  }

}
