import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(list: any[] | null, phrase: string): any[] {

    if (list == null) {
      return [];
    }

    if (!Array.isArray(list) || !phrase) {
      return list;
    }

    phrase = phrase.toLocaleLowerCase();

    return list.filter((item) => {
      return item.name.toLocaleLowerCase().includes(phrase);
    });

  }
}
