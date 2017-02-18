/**
 * notifier-options.service
 */

import { Injectable } from '@angular/core';

@Injectable()
export class NotifierOptions {

    animate?: 'fromRight' | 'fromLeft' | 'rotate' | 'scale' | 'fade' = 'fromRight';
    clickToClose?: boolean = true;
    maxStack?: number = 5;
    pauseOnHover?: boolean = true;
    position?: ['top' | 'bottom', 'right' | 'left' | 'center'] = ['bottom', 'right'];
    timeDelay?: number = 0;
    titleClass?: string;
    messageClass?: string;

    constructor( options: Object ) {
        Object.assign(this, options);
    }
}
