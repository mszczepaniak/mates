import {EventEmitter, Output} from '@angular/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mate-guard',
  template: `
  <p>
  <span (mouseenter)="guard()">
    My id: {{id}}
  </span>

  </p>
  `
})
export class MateGuardComponent {
  @Input() id;

  constructor() {}
  guard() {
    alert('hey, do not touch my id dude!');
  }
}
