import { Action } from '@ngrx/store';
import * as componentMenuAction from '../actions/menucomponents';

import { IMenuComponent } from '../../models';


export interface StateMenu {
    ids: number[];
    components: { [id: number]: IMenuComponent };
    selected: number;
    
}

export const initialStateMenu: StateMenu = {
    ids: [1, 2, 3, 4, 5, 6],
    components: {
        1: {
            id:1,
            name: 'Catalog',
            active: 'active',
            route: 'products'
        },
        2: {
            id:2,
            name: 'Orders',
            active: '',
            route: 'orders'
        },
        3: {
            id:3,
            name: 'For approval',
            active: '',
            route: 'forapproval'
        },
        4: {
            id:4,
            name: 'Company',
            active: '',
            route: 'company'
        },
        5: {
            id:5,
            name: 'My account',
            active: '',
            route: 'account'
        },
        6: {
            id:6,
            name: 'Login',
            active: '',
            route: 'login'
        },
    },
    selected: 1,
};

export function reducer(state = initialStateMenu, action: componentMenuAction.Action) {
    switch (action.type) {
        case componentMenuAction.SELECT_MENU: {
            const selector = action.payload;
            const id = action.payload;
            state.components[state.selected].active="";
            state.components[action.payload].active="active";
            return {
                ...state,
                selected: id
            };
        }

        default:
            return state;
    }
}

export const getMenuIds = (state: StateMenu) => state.ids;
export const getMenuComponents = (state: StateMenu) => state.components;
export const getMenuSelected = (state: StateMenu) => state.selected;

