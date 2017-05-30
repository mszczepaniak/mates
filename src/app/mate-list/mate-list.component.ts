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
        <div *ngFor="let mate of mates; let i=index">
          <app-mate
            [name]="mate?.name"
            [id]="mate?.id"
            (mateSelected)="handleMateSelected($event)"
          >
          </app-mate>
          <hr>
        </div>
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

  constructor(private mateService: MateService, private toasterService: ToasterService, private router: Router) {}

  handleMateSelected(mate) {
      this.toasterService.success(mate.name, 'SELECTED!');
      this.router.navigateByUrl(`/mates/details/${mate.id}`);
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
