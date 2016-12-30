/**
 * notification.component
 */

import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotificationService } from "./notification.service";
import { IMessage, IOptions } from "./notification.model";
import { Observable } from "rxjs";

// webpack1_
declare let require: any;
const myDpStyles: string = require("./notification.component.scss");
const myDpTpl: string = require("./notification.component.html");
// webpack2_

@Component({
    selector: 'ng-notification',
    template: myDpTpl,
    styles: [myDpStyles],
})
export class NotificationComponent implements OnInit {

    @Input() set options(opt: IOptions) {
        this.attachPersonalOptions(opt);
    }

    messages$: Observable<IMessage[]>;

    private animate: 'fromRight' | 'fromLeft' | 'rotate' | 'scale' = 'fromRight';
    private clickToClose: boolean = true;
    private pauseOnHover: boolean = true;
    private position: ['top' | 'bottom', 'right' | 'left'] = ['bottom', 'right'];
    private maxStack: number = 5;
    private theClass: string = '';
    private timeDelay: number = 0;

    constructor( private service: NotificationService, private store: Store<IMessage[]> ) {
        this.messages$ = store.select('messages');
    }

    ngOnInit() {
        this.service.getEmitter()
            .subscribe(
                data => {
                    this.store.dispatch({type: data.command, payload: data.message});
                }
            );
    }

    private attachPersonalOptions(options: any): void {
        Object.keys(options).forEach(a => {
            if (this.hasOwnProperty(a)) {
                (<any>this)[a] = options[a];
            }
        });
    }
}
