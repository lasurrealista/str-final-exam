import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(list: any[] | null, key: string): any [] | null {

    if (!Array.isArray(list) || !key) {
      return list;
    }

    return list.sort((a, b) =>
    (typeof a[key] === 'number' && typeof b[key] === 'number') ? a[key] - b[key] :
      ('' + a[key]).toLowerCase().localeCompare(('' + b[key]).toLowerCase()))
  }

}
