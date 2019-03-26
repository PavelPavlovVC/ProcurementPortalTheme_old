import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenuComponent } from 'src/app/common/models';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: IMenuComponent;
  @Output() select = new EventEmitter();
  @Input() menuSelectedItem: IMenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
