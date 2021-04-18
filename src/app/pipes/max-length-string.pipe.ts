import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthStringPipe implements PipeTransform {

  transform(value: string, length: number, symbol: string) {
    if(value.length>length){
      return value.split('').slice(0, length).join('') + symbol;
    }else{
      return value;
    }

  }

}
