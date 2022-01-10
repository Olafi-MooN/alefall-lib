import { Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[alefPastLock]'
})
export class KeyboardMouseLockDirective {

  constructor() { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    return e.preventDefault();
  }

}
