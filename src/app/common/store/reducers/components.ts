import { Action } from '@ngrx/store';
import * as componentMenuAction from '../actions/components';

import { IComponent } from '../../models';


export interface StateMenu {
    ids: number[];
    components: { [id: number]: IComponent };
    selected: number;
    
}

export const initialStateMenu: StateMenu = {
    ids: [1, 2, 3, 4, 5, 6],
    components: {
        1: {
            id:1,
            name: 'Catalog',
            active: 'active'
        },
        2: {
            id:2,
            name: 'Orders',
            active: ''
        },
        3: {
            id:3,
            name: 'For approval',
            active: ''
        },
        4: {
            id:4,
            name: 'Company',
            active: ''
        },
        5: {
            id:5,
            name: 'My account',
            active: ''
        },
        6: {
            id:6,
            name: 'Login',
            active: ''
        },
    },
    selected: 1,
};

export function reducer(state = initialStateMenu, action: componentMenuAction.Action) {
    switch (action.type) {
        case componentMenuAction.SELECT: {
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

