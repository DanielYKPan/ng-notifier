import { OnInit, OnDestroy, AnimationTransitionEvent, EventEmitter } from '@angular/core';
import { IMessage } from "./notification.model";
import { DomSanitizer } from "@angular/platform-browser";
export declare class NotificationMessageComponent implements OnInit, OnDestroy {
    private domSanitizer;
    message: IMessage;
    animate: string;
    clickToClose: boolean;
    pauseOnHover: boolean;
    theClass: string;
    timeDelay: number;
    onRemoveMessage: EventEmitter<IMessage>;
    private safeSvg;
    private timerId;
    private start;
    private timeLeft;
    constructor(domSanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    animationDone(event: AnimationTransitionEvent, message: IMessage): void;
    onEnter(): void;
    onLeave(): void;
    onClick(): void;
    private startTimer();
    private clearTimer();
    private setStateOut();
}
