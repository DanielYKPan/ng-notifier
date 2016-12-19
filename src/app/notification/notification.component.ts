/**
 * notification.component
 */

import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotificationService } from "./notification.service";
import { IMessage } from "./notification.model";
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

    messages$: Observable<IMessage[]>;

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

}
