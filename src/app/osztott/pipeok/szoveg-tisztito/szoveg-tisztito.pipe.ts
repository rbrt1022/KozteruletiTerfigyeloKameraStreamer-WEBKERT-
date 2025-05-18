import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'rxjs';
import { stringify } from 'uuid';

@Pipe({
  name: 'szovegTisztito'
})
export class SzovegTisztitoPipe implements PipeTransform {

  transform(value: string|null): string {
    value = String(value);
    if (value != null || value!=" " || value!="") {
      return value.trim();
    }
    return "Ismeretlen";
  }

}
