import {MateGuardComponent} from './mate/mate-guards.component';
import {MateListComponent} from './mate-list/mate-list.component';
import {MateComponent} from './mate/mate.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MateComponent,
    MateListComponent,
    MateGuardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
