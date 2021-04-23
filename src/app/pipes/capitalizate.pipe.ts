import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalizate'
})
export class CapitalizatePipe implements PipeTransform {
  transform = (value: string) => value.split('').slice(0, 1).map(letter => letter.toUpperCase()).join('').concat(value.split('').slice(1, value.length).map(letter => letter.toLowerCase()).join(''))
}