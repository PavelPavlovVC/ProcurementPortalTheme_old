import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComponent } from 'src/app/common/models';

@Component({
  selector: 'app-header-menu-list',
  templateUrl: './header-menu-list.component.html',
  styleUrls: ['./header-menu-list.component.css']
})
export class HeaderMenuListComponent implements OnInit {
  @Input() components: IComponent[];
  @Output() select = new EventEmitter();
  @Input() menuSelectedComponent: IComponent;
  constructor() { }

  ngOnInit() {
  }

}
