import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MateGuardComponent} from './mate/mate-guards.component';
import {MateListComponent} from './mate-list/mate-list.component';
import {MateComponent} from './mate/mate.component';

@NgModule({
  declarations: [
    MateComponent,
    MateListComponent,
    MateGuardComponent
  ],
  imports: [CommonModule],
  exports: [MateListComponent],
  providers: [],
})
export class MateModule {}
