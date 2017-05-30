import {MateService} from './services/mate.service';
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
  providers: [MateService],
})
export class MateModule {}
