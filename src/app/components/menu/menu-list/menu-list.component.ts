import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenuComponent } from 'src/app/common/models';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() menuItems: IMenuComponent[];
  @Input() menuSelectedItem: IMenuComponent;
  @Output() select = new EventEmitter();
  test:string;
  constructor() {
    this.test="";
   }

  ngOnInit() {
  }

}
