/**
 * notifier-options.service
 */

import { Injectable } from '@angular/core';

@Injectable()
export class NotifierOptions {

    public animate?: 'flyRight' | 'flyLeft' | 'rotate' | 'scale' | 'fade' = 'flyRight';
    public clickToClose?: boolean = true;
    public maxStack?: number = 5;
    public pauseOnHover?: boolean = true;
    public position?: ['top' | 'bottom', 'right' | 'left' | 'center'] = ['bottom', 'right'];
    public notifierLife?: number = 0;
    public titleClass?: string;
    public messageClass?: string;

    constructor( options?: Object ) {
        if (options) {
            Object.assign(this, options);
        }
    }
}
