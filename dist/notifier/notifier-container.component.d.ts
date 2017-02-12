import { OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Notice } from "./notifier-notice";
import { NotifierOptions } from "./notifier-options.service";
export declare class NotifierContainerComponent implements OnInit, OnDestroy {
    private store;
    notices: Notice[];
    animate: 'fromRight' | 'fromLeft' | 'rotate' | 'scale' | 'fade';
    clickToClose: boolean;
    maxStack: number;
    pauseOnHover: boolean;
    position: ['top' | 'bottom', 'right' | 'left' | 'center'];
    timeDelay: number;
    theClass: string;
    private selectNoticesSub;
    constructor(store: Store<Notice[]>, options: NotifierOptions);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addNotice(notice: Notice): void;
    removeNotice(notice?: Notice): void;
    anyNotices(): boolean;
}
