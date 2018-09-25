import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(!value) {
      return [];
    }

    if(!args[0] || !args[1]) {
      return value;
    }

    const field = args[0];
    const query = args[1].toLowerCase();

    return value.filter((v) => v[field].toLowerCase().indexOf(query) > -1);
  }

}
