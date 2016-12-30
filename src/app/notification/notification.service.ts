/**
 * notification.service
 */

import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { uuid } from "./uuid";
import { ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_ALL } from "./messages.reducer";
import { INotificationEvent, IMessage, IOptions } from "./notification.model";
import { Icons, defaultIcons } from './icons';

@Injectable()
export class NotificationService {

    private emitter: Subject<INotificationEvent> = new Subject<INotificationEvent>();

    private icons: Icons = defaultIcons;

    private options: IOptions = {
        animate: 'fromRight',
        clickToClose: true,
        pauseOnHover: true,
        position: ['bottom', 'right'],
        maxStack: 5,
        theClass: '',
        timeDelay: 0
    };

    constructor() {
    }

    getEmitter(): Subject<INotificationEvent> {
        return this.emitter;
    }

    getOptions(): IOptions {
        return this.options;
    }

    set( message: IMessage ): IMessage {
        if (!message.id) {
            message.id = uuid();
        }
        this.emitter.next({command: ADD_MESSAGE, message: message});
        return message;
    }

    info( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'primary',
            icon: this.icons.info,
        };
        return this.set(message);
    }

    success( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'success',
            icon: this.icons.success,
        };
        return this.set(message);
    }

    error( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'danger',
            icon: this.icons.error,
        };
        return this.set(message);
    }

    alert( content: string, title?: string ) {
        let message = {
            title: title,
            content: content,
            type: 'warning',
            icon: this.icons.alert,
        };
        return this.set(message);
    }

    remove( message?: IMessage ) {
        message ? this.emitter.next({command: REMOVE_MESSAGE, message: message}) :
            this.emitter.next({command: REMOVE_ALL});
    }

    attachPersonalOptions( options: any ): void {
        Object.keys(options).forEach(o => {
            if(this.options.hasOwnProperty(o)) {
                this.options[o] = options[o];
            }
        });
    }
}
