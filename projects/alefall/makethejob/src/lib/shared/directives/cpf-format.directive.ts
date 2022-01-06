import { Directive, HostListener } from '@angular/core';
import { mask } from './../utils/mask-inputs';

@Directive({
  selector: '[alefCpfFormat]'
})
export class CpfFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cpfHostListener(e: any) {
    e.target.value = mask.money(e.target.value);
  }
}
