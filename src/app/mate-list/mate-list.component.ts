import {ToasterService} from '../services/toastr.service';
import {MateService} from '../services/mate.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {NgFor} from '@angular/common/src/directives/ng_for_of';
import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-mate-list',
  template: `
    <div class="jumbotron">
      <h1 class="westie-header">WESTIE MATES</h1>
      <div *ngIf="mates">
        <app-mate
            [name]="mates[0].name"
            [id]="mates[0].id"
            (mateSelected)="handleMateSelected($event)"
          >
          </app-mate>
          <hr>

          <app-mate
            [name]="mates[1].name"
            [id]="mates[1].id"
            (mateSelected)="handleMateSelected($event)"
          >
          </app-mate>
          <hr>
      </div>
    </div>
  `,
  styles: [`
  .westie-header {
    margin-bottom: 70px;
  }
  `]
})
export class MateListComponent implements OnInit, OnDestroy {
  mates: any;

  constructor(private mateService: MateService, private toasterService: ToasterService) {}

  handleMateSelected(mate) {
      this.toasterService.success(mate.name, 'SELECTED!');
  }

  ngOnInit() {
     this.mateService.getMates()
       .then((mates) => this.mates = mates);
}

ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.mates = [];
}

}
