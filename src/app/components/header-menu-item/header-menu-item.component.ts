import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComponent } from 'src/app/common/models';

@Component({
  selector: 'app-header-menu-item',
  templateUrl: './header-menu-item.component.html',
  styleUrls: ['./header-menu-item.component.css']
})
export class HeaderMenuItemComponent implements OnInit {
  @Input() component: IComponent;
  @Output() select = new EventEmitter();
  @Input() menuSelectedComponent: IComponent;
  constructor() { }

  ngOnInit() {
  }

}
