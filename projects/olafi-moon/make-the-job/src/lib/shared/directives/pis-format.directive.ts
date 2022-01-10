import { Directive, HostListener } from '@angular/core';
import { mask } from './../utils/mask-inputs';

@Directive({
  selector: '[alefPisFormat]'
})
export class PisFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) pisHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.pis(element.value);
    return element;
  }
}
