import { Directive, HostListener } from '@angular/core';
import { mask } from './../utils/mask-inputs';

@Directive({
  selector: '[alefCpfFormat]'
})
export class CpfFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cpfHostListener(e: any) {
    let element = e.target as HTMLInputElement;
    element.value = mask.cpf(element.value);
    return element;
  }
}
