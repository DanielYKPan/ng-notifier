/**
 * notification.model
 */

import { uuid } from './uuid';

export class Notice {
    public id: string;
    public type: string;
    public title: string;
    public content: string;
    public icon: string;
    public state: string;
    public config: any = {
        animate: 'fade',
        clickToClose: true,
        pauseOnHover: true,
        notifierLife: 3000,
        titleClass: '',
        messageClass: '',
    };

    constructor( type: string, content: string, title?: string, icon?: string ) {
        this.id = uuid();
        this.type = type;
        this.content = content;
        this.title = title || null;
        this.icon = icon || null;
    }
}
