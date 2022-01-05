import { NgModule } from '@angular/core';
import { MakethejobComponent } from './makethejob.component';
import { KeyboarkMouseLockDirective } from './shared/directives/keyboark-mouse-lock.directive';



@NgModule({
  declarations: [
    MakethejobComponent,
    KeyboarkMouseLockDirective
  ],
  imports: [
  ],
  exports: [
    MakethejobComponent
  ]
})
export class MakethejobModule { }
