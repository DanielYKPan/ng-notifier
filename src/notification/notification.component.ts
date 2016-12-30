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
    selector: 'ng2-notifier',
    template: myDpTpl,
    styles: [myDpStyles],
})
export class NotificationComponent implements OnInit {

    @Input() set options( opt: IOptions ) {
        this.service.attachPersonalOptions(opt);
    }

    private messages$: Observable<IMessage[]>;
    private notifierOptions: IOptions;

    constructor( private service: NotificationService,
                 private store: Store<IMessage[]> ) {
    }

    ngOnInit() {
        this.messages$ = this.store.select('messages');
        this.notifierOptions = this.service.getOptions();
        this.service.getEmitter()
            .subscribe(
                data => {
                    this.store.dispatch({type: data.command, payload: data.message});
                }
            );
    }

    removeMessage( message: IMessage ): void {
        this.service.remove(message);
    }
}
