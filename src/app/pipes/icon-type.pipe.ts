import { Pipe, PipeTransform } from '@angular/core';
import { CellType } from '../types/cell-type.type';

@Pipe({
  name: 'iconType'
})
export class IconTypePipe implements PipeTransform {

  transform(value?: CellType): string {
    return value === 'X' ? 'close' : 'radio_button_unchecked';
  }

}
