/**
 * notification.component
 */

import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotifierService } from "./notifier.service";
import { INotifierMessage, INotifierOptions } from "./notifier.model";
import { Observable } from "rxjs";

// webpack1_
declare let require: any;
const myDpStyles: string = require("./notifier.component.scss");
const myDpTpl: string = require("./notifier.component.html");
// webpack2_

@Component({
    selector: 'ng2-notifier',
    template: myDpTpl,
    styles: [myDpStyles],
})
export class NotifierComponent implements OnInit {

    @Input() set options( opt: INotifierOptions ) {
        this.service.attachPersonalOptions(opt);
    }

    private messages$: Observable<INotifierMessage[]>;
    private notifierOptions: INotifierOptions;

    constructor( private service: NotifierService,
                 private store: Store<INotifierMessage[]> ) {
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

    removeMessage( message: INotifierMessage ): void {
        this.service.remove(message);
    }
}
