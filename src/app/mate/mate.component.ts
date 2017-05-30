import {EventEmitter, Output} from '@angular/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mate',
  template: `
  <p>I am westie mate!</p>
  <p>My name: {{name}}</p>
  <app-mate-guard [id]="id"></app-mate-guard>
  <button (click)="onLocalClick()">Local click</button>
  <button (click)="onParentClick()">Parent click</button>
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
