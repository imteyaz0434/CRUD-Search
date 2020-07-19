import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCal'
})
export class AgeCalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      let date = new Date();
      let year:any = date.getFullYear();
      return year - value.slice(8);
    }

  }

}
