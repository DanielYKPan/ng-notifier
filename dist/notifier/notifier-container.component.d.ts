import { OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { INotifierMessage } from "./notifier.model";
import { NotifierOptions } from "./notifier-options.service";
export declare class NotifierContainerComponent implements OnInit, OnDestroy {
    private store;
    notices: INotifierMessage[];
    animate: 'fromRight' | 'fromLeft' | 'rotate' | 'scale' | 'fade';
    clickToClose: boolean;
    maxStack: number;
    pauseOnHover: boolean;
    position: ['top' | 'bottom', 'right' | 'left' | 'center'];
    timeDelay: number;
    theClass: string;
    private selectNoticesSub;
    constructor(store: Store<INotifierMessage[]>, options: NotifierOptions);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addNotice(notice: INotifierMessage): void;
    removeNotice(notice?: INotifierMessage): void;
    anyNotices(): boolean;
}
