import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from './common/store/reducers';
import * as componentAction from './common/store/actions/components';
import { IComponent } from './common/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuComponents$: Observable<IComponent[]>;
  menuSelected$: Observable<any>;

  constructor(private store: Store<fromRoot.StateMenu>) {
    this.menuComponents$ = store.select(fromRoot.getAllMenuComponents);
    this.menuSelected$ = store.select(fromRoot.getSelectedMenuComponent);
  }

  onSelect(id: number) {
    //this.menuSelected$ = this.store.select(id);
    this.store.dispatch(new componentAction.Select(id));
  }
}
