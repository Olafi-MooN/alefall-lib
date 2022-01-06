import { Directive, HostListener } from '@angular/core';
import { mask } from '../utils/mask-inputs';

@Directive({
  selector: '[alefDateFormat]'
})
export class DateFormatDirective {

  constructor() { }
  
  @HostListener('input', ['$event']) dateHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.date(element.value);
    return element;
  }
}
