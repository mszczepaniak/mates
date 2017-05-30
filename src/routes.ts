import {MateDetailsComponent} from './app/mate/mate-details.component';
import {MateListComponent} from './app/mate-list/mate-list.component';
import {Routes} from '@angular/router';
import {NotFoundComponent} from './app/not-found/not-found.component';

export const appRoutes: Routes = [
  {path: 'mates', component: MateListComponent},
  {path: 'mates/details/:id', component: MateDetailsComponent},
  {path: '', redirectTo: '/mates', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
