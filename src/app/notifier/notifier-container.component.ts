/**
 * notifier-container.component
 */

import { Component, OnInit, OnDestroy, Optional } from "@angular/core";
import { Store } from "@ngrx/store";
import { INotifierMessage } from "./notifier.model";
import { ADD_MESSAGE, REMOVE_MESSAGE, REMOVE_ALL } from "./messages.reducer";
import { Subscription } from "rxjs";
import { NotifierOptions } from "./notifier-options.service";

// webpack1_
declare let require: any;
const myDpStyles: string = require("./notifier-container.component.scss");
const myDpTpl: string = require("./notifier-container.component.html");
// webpack2_

@Component({
    selector: 'app-notifier-container',
    template: myDpTpl,
    styles: [myDpStyles],
})

export class NotifierContainerComponent implements OnInit, OnDestroy {

    notices: INotifierMessage[];
    animate: 'fromRight' | 'fromLeft' | 'rotate' | 'scale' | 'fade' = 'fromRight';
    clickToClose: boolean = true;
    maxStack: number = 5;
    pauseOnHover: boolean = true;
    position: ['top' | 'bottom', 'right' | 'left' | 'center'] = ['bottom', 'right'];
    timeDelay: number = 0;
    theClass: string;

    private selectNoticesSub: Subscription;


    constructor( private store: Store<INotifierMessage[]>,
                 @Optional() options: NotifierOptions ) {
        if (options) {
            Object.assign(this, options);
        }
    }

    ngOnInit(): void {
        this.selectNoticesSub = this.store.select('messages').subscribe(
            ( data: INotifierMessage[] ) => this.notices = data
        );
    }

    ngOnDestroy(): void {
        this.selectNoticesSub.unsubscribe();
    }

    addNotice( notice: INotifierMessage ): void {
        this.store.dispatch({type: ADD_MESSAGE, payload: notice});
    }

    removeNotice( notice?: INotifierMessage ): void {
        if (notice) {
            this.store.dispatch({type: REMOVE_MESSAGE, payload: notice});
        } else {
            this.store.dispatch({type: REMOVE_ALL});
        }
    }

    anyNotices() {
        return this.notices.length > 0;
    }
}
