/**
 * notifier-container.component
 */

import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Notice } from './notifier-notice';
import { ADD_NOTICE, REMOVE_NOTICE, REMOVE_ALL } from './messages.reducer';
import { Subscription } from 'rxjs';
import { NotifierOptions } from './notifier-options.service';

@Component({
    selector: 'app-notifier-container',
    templateUrl: './notifier-container.component.html',
    styleUrls: ['./notifier-container.component.scss'],
})

export class NotifierContainerComponent implements OnInit, OnDestroy {

    public notices: Notice[];
    public maxStack: number = 5;
    public position: ['top' | 'bottom', 'right' | 'left' | 'center'] = ['bottom', 'right'];

    private selectNoticesSub: Subscription;

    constructor( private store: Store<Notice[]>,
                 @Optional() options: NotifierOptions ) {
        if (options) {
            Object.assign(this, options);
        }
    }

    public ngOnInit(): void {
        this.selectNoticesSub = this.store.select('messages').subscribe(
            ( data: Notice[] ) => this.notices = data
        );
    }

    public ngOnDestroy(): void {
        this.selectNoticesSub.unsubscribe();
    }

    public addNotice( notice: Notice ): void {
        this.store.dispatch({type: ADD_NOTICE, payload: notice});
    }

    public removeNotice( notice?: Notice ): void {
        if (notice) {
            this.store.dispatch({type: REMOVE_NOTICE, payload: notice});
        } else {
            this.store.dispatch({type: REMOVE_ALL});
        }
    }

    public anyNotices() {
        return this.notices.length > 0;
    }
}
