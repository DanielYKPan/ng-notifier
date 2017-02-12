/**
 * notification.model
 */

import { uuid } from "./uuid";

export class Notice {
    id: string;
    type: string;
    title: string;
    content: string;
    icon: string;
    state: string;
    config: any = {
        animate: 'fromRight',
        clickToClose: true,
        pauseOnHover: true,
        timeDelay: 0,
        theClass: ''
    };

    constructor(type: string, content: string, title?: string, icon?: string) {
        this.id = uuid();
        this.type = type;
        this.content = content;
        this.title = title || null;
        this.icon = icon || null;
    }
}
