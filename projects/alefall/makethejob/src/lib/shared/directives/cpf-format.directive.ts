import { mask } from './../utils/mask-inputs';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[alefCpfFormat]'
})
export class CpfFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cpfHostListener(e: any) {
    e.target.value = mask.money(e.target.value);
  }
}
