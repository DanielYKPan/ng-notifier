/**
 * message.reducer
 */

import { ActionReducer, Action } from "@ngrx/store";
import { INotice } from "./notifier-notice";

export const ADD_NOTICE = 'ADD_NOTICE';
export const REMOVE_NOTICE = 'REMOVE_NOTICE';
export const REMOVE_ALL = 'REMOVE_ALL';

export const messagesReducer: ActionReducer<Array<INotice>> = ( state: Array<INotice> = [], action: Action ) => {
    switch (action.type) {
        case ADD_NOTICE:
            return [...state, Object.assign({}, action.payload)];

        case REMOVE_NOTICE:
            return state.filter(message => message.id !== action.payload.id);

        case REMOVE_ALL:
            return [];

        default:
            return state;
    }
};
