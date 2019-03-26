import { Component, OnInit, Input } from '@angular/core';
import { IComponent } from 'src/app/common/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../common/store/reducers';
import * as filmAction from '../../../common/store/actions/components';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Input() menuSelectedComponent: IComponent;
  constructor() {

   }

  ngOnInit() {
  }

}
