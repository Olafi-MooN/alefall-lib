import { Directive, HostListener } from '@angular/core';
import { mask } from '../utils/mask-inputs';

@Directive({
  selector: '[alefMoneyFormat]'
})
export class MoneyFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) moneyHostListener(e: InputEvent) {
    let element = e.target as HTMLInputElement;
    element.value = mask.money(element.value);
    return element;
  }
}
