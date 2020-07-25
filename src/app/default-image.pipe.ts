import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  theImage = 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'

  transform(value: string): string {
    if (value.trim().length === 0) {
      return this.theImage;
    } else {
      return value;
    }
  }

}
