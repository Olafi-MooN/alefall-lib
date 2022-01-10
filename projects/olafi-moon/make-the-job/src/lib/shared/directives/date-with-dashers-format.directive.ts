import { Directive, HostListener } from '@angular/core';
import { mask } from './../utils/mask-inputs';

@Directive({
  selector: '[alefDateWithDashersFormat]'
})
export class DateWithDashersFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) dateWithDashersHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.dateWithDashes(element.value);
    return element;
  }
}
