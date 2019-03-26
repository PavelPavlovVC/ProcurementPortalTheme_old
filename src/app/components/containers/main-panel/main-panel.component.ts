import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IComponent } from 'src/app/common/models';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  @Input() menuSelectedComponent: IComponent;
  
  constructor() { }

  ngOnInit() {
  }

}
