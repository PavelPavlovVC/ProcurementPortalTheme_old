import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuComponent } from './common/models';
import * as fromRoot from './common/store/reducers';
import * as componentAction from './common/store/actions/menucomponents';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { ProductListComponent } from './components/catalog/product-list/product-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class Employee extends Router{
//   location: Location;
// }



export class AppComponent {
  menuItems$: Observable<IMenuComponent[]>;
  menuSelected$: Observable<any>;

  constructor(private router:Router,ractRouter: ActivatedRoute, private store: Store<fromRoot.StateMenu>) {
    this.menuItems$ = store.select(fromRoot.getAllMenuComponents);

    var route: string = window.location.pathname;

    this.menuItems$.subscribe((value) => {
      
      if (!(route === "/")) {
        for (let i = 0; i < value.length; i++) {
          value[i].active = "";
          var strRoute: string = "/" + value[i].route;

          if (strRoute == route) {
            value[i].active = "active";
          }

        }
      }
    });
    this.menuSelected$ = store.select(fromRoot.getSelectedMenuComponent);
    this.router.config.push({ path: '', component: ProductListComponent });
    this.router.config.push({ path: 'company', component: CompanyComponent });
    this.router.config.push({ path: 'products', component: ProductListComponent });
    

  }

  onSelectMenu(id: number) {
    //this.menuSelected$ = this.store.select(id);
    this.store.dispatch(new componentAction.SelectMenu(id));
  }

}
