import { OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotificationService } from "./notification.service";
import { IMessage } from "./notification.model";
import { Observable } from "rxjs/Observable";
export declare class NotificationComponent implements OnInit {
    private service;
    private store;
    messages$: Observable<IMessage[]>;
    constructor(service: NotificationService, store: Store<IMessage[]>);
    ngOnInit(): void;
}
