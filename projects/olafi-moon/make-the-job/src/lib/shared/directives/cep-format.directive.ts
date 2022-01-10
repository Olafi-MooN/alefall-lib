import { Directive, HostListener } from '@angular/core';
import { mask } from '../utils/mask-inputs';

@Directive({
  selector: '[alefCepFormat]'
})
export class CepFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cepHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.cep(element.value);
    return element;
  }
}
