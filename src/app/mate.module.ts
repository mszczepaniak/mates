import {ToasterService} from './services/toastr.service';
import {MateService} from './services/mate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MateGuardComponent} from './mate/mate-guards.component';
import {MateListComponent} from './mate-list/mate-list.component';
import {MateComponent} from './mate/mate.component';
import {MateDetailsComponent} from './mate/mate-details.component';

@NgModule({
  declarations: [
    MateComponent,
    MateListComponent,
    MateGuardComponent,
    MateDetailsComponent
  ],
  imports: [CommonModule],
  exports: [MateListComponent],
  providers: [MateService, ToasterService],
})
export class MateModule {}
