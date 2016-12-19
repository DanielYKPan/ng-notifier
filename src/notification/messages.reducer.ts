/**
 * message.reducer
 */

import { ActionReducer, Action } from "@ngrx/store";
import { IMessage } from "./notification.model";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_ALL = 'REMOVE_ALL';

export const messagesReducer: ActionReducer<Array<IMessage>> = ( state: Array<IMessage> = [], action: Action ) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, Object.assign({}, action.payload)];

        case REMOVE_MESSAGE:
            return state.filter(message => message.id !== action.payload.id);

        case REMOVE_ALL:
            return [];

        default:
            return state;
    }
};
