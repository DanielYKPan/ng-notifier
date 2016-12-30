import { OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotificationService } from "./notification.service";
import { IMessage, IOptions } from "./notification.model";
export declare class NotificationComponent implements OnInit {
    private service;
    private store;
    options: IOptions;
    private messages$;
    private notifierOptions;
    constructor(service: NotificationService, store: Store<IMessage[]>);
    ngOnInit(): void;
    removeMessage(message: IMessage): void;
}
