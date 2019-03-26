import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './common/store/reducers';
import { ActiveOrderComponent } from './components/active-order/active-order.component';
import { ProductListComponent } from './components/catalog/product-list/product-list.component';
import { ProductItemComponent } from './components/catalog/product-item/product-item.component';
import { CompanyComponent } from './components/company/company.component';
import { ProductSearchComponent } from './components/catalog/product-search/product-search.component';
import { ProductCategoryComponent } from './components/catalog/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuItemComponent,
    ActiveOrderComponent,
    ProductListComponent,
    ProductItemComponent,
    CompanyComponent,
    ProductSearchComponent,
    ProductCategoryComponent
  ],
  entryComponents: [
    ActiveOrderComponent,
    ProductListComponent,
    ProductItemComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
