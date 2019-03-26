import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IComponent } from 'src/app/common/models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css']
})
export class HeaderPanelComponent implements OnInit {
  @Input() menuComponents: IComponent[];
  @Output() select = new EventEmitter();
  @Input() menuSelectedComponent: IComponent;
  constructor() {
  }

  ngOnInit() {
  }

}
