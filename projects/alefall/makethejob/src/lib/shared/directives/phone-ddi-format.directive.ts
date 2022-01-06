import { Directive, HostListener } from '@angular/core';
import { mask } from '../utils/mask-inputs';

@Directive({
  selector: '[alefPhoneDdiFormat]'
})
export class PhoneDdiFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) PhoneDDIHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.phoneDDI(element.value);
    return element;
  }
}
