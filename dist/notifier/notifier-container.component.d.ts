import { OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Notice } from "./notifier-notice";
import { NotifierOptions } from "./notifier-options.service";
export declare class NotifierContainerComponent implements OnInit, OnDestroy {
    private store;
    notices: Notice[];
    maxStack: number;
    position: ['top' | 'bottom', 'right' | 'left' | 'center'];
    private selectNoticesSub;
    constructor(store: Store<Notice[]>, options: NotifierOptions);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addNotice(notice: Notice): void;
    removeNotice(notice?: Notice): void;
    anyNotices(): boolean;
}
