import { Action } from '@ngrx/store';
import { Notice } from './notifier-notice';
export declare const ADD_NOTICE = "ADD_NOTICE";
export declare const REMOVE_NOTICE = "REMOVE_NOTICE";
export declare const REMOVE_ALL = "REMOVE_ALL";
export declare function messagesReducer(state: Notice[], action: Action): any;
