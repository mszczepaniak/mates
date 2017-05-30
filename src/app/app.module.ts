import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {MateModule} from './mate.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {appRoutes} from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
