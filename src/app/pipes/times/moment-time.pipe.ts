import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'momentTime'
})
export class MomentTimePipe implements PipeTransform {

  transform(value: any, format?: any): any {
    console.log(value)
    return moment(value,format).fromNow();
  }

}
