import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as fromMenuComponents from './components';

export interface StateMenu {
    components: fromMenuComponents.StateMenu;
}

export const reducers: ActionReducerMap<StateMenu> = {
    components: fromMenuComponents.reducer
};


export function logger(reducer: ActionReducer<StateMenu>): ActionReducer<StateMenu> {
    return function (state: StateMenu, action: any): StateMenu {
        //console.log('state', state);
        //state.components[state.components.selected].active="";
        //console.log('action', action);
        // state.components.components[action.selected].active="active";
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<StateMenu>[] = [logger];


export const getMenuState = createFeatureSelector<fromMenuComponents.StateMenu>('components');

export const getMenuIds = createSelector(
    getMenuState,
    fromMenuComponents.getMenuIds,
);

export const getMenuComponents = createSelector(
    getMenuState,
    fromMenuComponents.getMenuComponents,
);

export const getMenuSelected = createSelector(
    getMenuState,
    fromMenuComponents.getMenuSelected,
);

export const getSelectedMenuComponent = createSelector(
    getMenuSelected,
    getMenuComponents,
    (selectedId, components) => {
        return {
            ...components[selectedId]
        };
    }
);

export const getAllMenuComponents = createSelector(
    getMenuIds,
    getMenuComponents,
    (ids, components) => {
        return ids.map(id => components[id]);
    }
);
