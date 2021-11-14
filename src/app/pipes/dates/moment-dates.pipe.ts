import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'momentDates'
})
export class MomentDatesPipe implements PipeTransform {

  transform(value: any, dateFormat:any): any {
   return moment(value).format(dateFormat);
  }

}
/* dateFormat 
moment().format('MMMM Do YYYY, h:mm:ss a'); // November 14th 2021, 11:53:58 am
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Nov 14th 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();                          // 2021-11-14T11:54:07+05:00
*/