import { Directive, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[allKeyboardMouseLock]'
})
export class KeyboardMouseLockDirective {

  constructor() { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

}
