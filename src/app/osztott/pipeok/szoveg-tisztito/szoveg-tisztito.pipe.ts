import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'szovegTisztito'
})
export class SzovegTisztitoPipe implements PipeTransform {

  transform(value: string): string {
    return value.trim();
  }

}
