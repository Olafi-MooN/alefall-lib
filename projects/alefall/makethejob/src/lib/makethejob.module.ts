import { NgModule } from '@angular/core';
import { KeyboardMouseLockDirective } from './shared/directives/keyboard-mouse-lock.directive';
import { CpfFormatDirective } from './shared/directives/cpf-format.directive';

@NgModule({
  declarations: [
    KeyboardMouseLockDirective,
    CpfFormatDirective
  ],
  imports: [
  ],
  exports: [
    KeyboardMouseLockDirective,
    CpfFormatDirective,
  ]
})
export class MakethejobModule { }
