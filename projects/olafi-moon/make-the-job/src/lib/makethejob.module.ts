import { NgModule } from '@angular/core';
import { KeyboardMouseLockDirective } from './shared/directives/keyboard-mouse-lock.directive';
import { CpfFormatDirective } from './shared/directives/cpf-format.directive';
import { CnpjFormatDirective } from './shared/directives/cnpj-format.directive';
import { PhoneFormatDirective } from './shared/directives/phone-format.directive';
import { PhoneDdiFormatDirective } from './shared/directives/phone-ddi-format.directive';
import { CepFormatDirective } from './shared/directives/cep-format.directive';
import { PisFormatDirective } from './shared/directives/pis-format.directive';
import { MoneyFormatDirective } from './shared/directives/money-format.directive';
import { DateFormatDirective } from './shared/directives/date-format.directive';
import { DateWithDashersFormatDirective } from './shared/directives/date-with-dashers-format.directive';

@NgModule({
  declarations: [
    KeyboardMouseLockDirective,
    CpfFormatDirective,
    CnpjFormatDirective,
    PhoneFormatDirective,
    PhoneDdiFormatDirective,
    CepFormatDirective,
    PisFormatDirective,
    MoneyFormatDirective,
    DateFormatDirective,
    DateWithDashersFormatDirective
  ],
  imports: [
  ],
  exports: [
    KeyboardMouseLockDirective,
    CpfFormatDirective,
    CnpjFormatDirective,
    PhoneFormatDirective,
    PhoneDdiFormatDirective,
    CepFormatDirective,
    PisFormatDirective,
    MoneyFormatDirective,
    DateFormatDirective,
    DateWithDashersFormatDirective
  ]
})
export class MakethejobModule { }
