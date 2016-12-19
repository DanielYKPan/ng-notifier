/**
 * notification.service
 */

import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { uuid } from "./uuid";
import { ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_ALL } from "./messages.reducer";
import { INotificationEvent, IMessage } from "./notification.model";
import { Icons, defaultIcons } from './icons';

@Injectable()
export class NotificationService {

    private emitter: Subject<INotificationEvent> = new Subject<INotificationEvent>();

    private icons: Icons = defaultIcons;

    constructor() {
    }

    getEmitter() {
        return this.emitter;
    }

    set( message: IMessage ): IMessage {
        if (!message.id) {
            message.id = uuid();
        }
        this.emitter.next({command: ADD_MESSAGE, message: message});
        return message;
    }

    success( title: string, content: string ) {
        let message = {
            title: title,
            content: content,
            type: 'success',
            state: 'fromRight',
            icon: this.icons.success,
        };
        return this.set(message);
    }

    remove( message?: IMessage ) {
        message ? this.emitter.next({command: REMOVE_MESSAGE, message: message}) :
            this.emitter.next({command: REMOVE_ALL});
    }
}
