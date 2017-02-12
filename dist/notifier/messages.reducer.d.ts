import { ActionReducer } from "@ngrx/store";
import { Notice } from "./notifier-notice";
export declare const ADD_NOTICE: string;
export declare const REMOVE_NOTICE: string;
export declare const REMOVE_ALL: string;
export declare const messagesReducer: ActionReducer<Array<Notice>>;
