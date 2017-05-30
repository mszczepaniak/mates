import {EventEmitter, Output} from '@angular/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mate',
  template: `
  <div class="container">
    <p>I am westie mate!</p>
    <p>My name: {{name}}</p>
    <app-mate-guard [id]="id"></app-mate-guard>
    <button class="btn btn-primary" (click)="onLocalClick()">
    <i class="fa fa-users pull-left" aria-hidden="true"></i>Local click</button>
    <button class="btn btn-danger"  (click)="onParentClick()">
    <i class="fa fa-user-circle" aria-hidden="true"></i>Parent click</button>
  </div>
  `
})
export class MateComponent {
  @Input() name;
  @Input() id;
  @Output() mateSelected = new EventEmitter();

  constructor() {}
  onLocalClick() {
    alert('local event in the component');
  }

  onParentClick() {
    this.mateSelected.emit({name: this.name, id: this.id});
  }
}
