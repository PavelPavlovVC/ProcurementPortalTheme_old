import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPanelComponent } from './components/containers/header-panel/header-panel.component';
import { MainPanelComponent } from './components/containers/main-panel/main-panel.component';
import { FooterPanelComponent } from './components/containers/footer-panel/footer-panel.component';
import { LeftPanelComponent } from './components/containers/left-panel/left-panel.component';
import { RightPanelComponent } from './components/containers/right-panel/right-panel.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ActiveOrderComponent } from './components/active-order/active-order.component';

import { HeaderMenuListComponent } from './components/header-menu-list/header-menu-list.component';
import { HeaderMenuItemComponent } from './components/header-menu-item/header-menu-item.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './common/store/reducers';
import { ProductListComponent } from './components/catalog/product-list/product-list.component';
import { ProductItemComponent } from './components/catalog/product-item/product-item.component';
import { ProductCategoryComponent } from './components/catalog/product-category/product-category.component';
import { ProductSearchComponent } from './components/catalog/product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanelComponent,
    MainPanelComponent,
    FooterPanelComponent,
    LeftPanelComponent,
    RightPanelComponent,
    OrdersComponent,
    CatalogComponent,
    ActiveOrderComponent,
    HeaderMenuListComponent,
    HeaderMenuItemComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductCategoryComponent,
    ProductSearchComponent
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
