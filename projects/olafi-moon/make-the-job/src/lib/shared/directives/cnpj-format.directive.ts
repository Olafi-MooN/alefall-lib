import { Directive, HostListener } from '@angular/core';
import { mask } from './../utils/mask-inputs';

@Directive({
  selector: '[alefCnpjFormat]'
})
export class CnpjFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cnpjHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.cnpj(element.value);
    return element;
  }
}
