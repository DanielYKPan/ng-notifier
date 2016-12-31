import { OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotifierService } from "./notifier.service";
import { INotifierMessage, INotifierOptions } from "./notifier.model";
export declare class NotifierComponent implements OnInit {
    private service;
    private store;
    options: INotifierOptions;
    private messages$;
    private notifierOptions;
    constructor(service: NotifierService, store: Store<INotifierMessage[]>);
    ngOnInit(): void;
    removeMessage(message: INotifierMessage): void;
}
