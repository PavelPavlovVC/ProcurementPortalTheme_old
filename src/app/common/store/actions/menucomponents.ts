import { Action } from '@ngrx/store';
// import { Film } from '../../models/film';

export const SELECT_MENU = '[MenuComponents] Select';
//export const ADD_ONE = '[Films] Add One';

export class SelectMenu implements Action {
    readonly type = SELECT_MENU;
    constructor(public payload: number) { 
        
    }
}

// export class AddOne implements Action {
//     readonly type = ADD_ONE;
//     constructor(public payload: Film) { }
// }

export type Action = SelectMenu;