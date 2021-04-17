import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthStringPipe implements PipeTransform {

  transform(value: string, length: number, symbol: string) {
    console.log(value.length,length,value.length>length);
    if(value.length>length){
      console.log(value,value.split('').slice(0, length).join('') + symbol)
      return value.split('').slice(0, length).join('') + symbol;
    }else{
      return value;
    }

  }

}
