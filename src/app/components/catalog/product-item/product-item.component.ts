import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  test: string;
  constructor(private router: Router) {
    this.test = "";
  }

  ngOnInit() {
    this.test="";
  }

}
