import { ActionReducer } from "@ngrx/store";
import { INotifierMessage } from "./notifier.model";
export declare const ADD_MESSAGE: string;
export declare const REMOVE_MESSAGE: string;
export declare const REMOVE_ALL: string;
export declare const messagesReducer: ActionReducer<Array<INotifierMessage>>;
