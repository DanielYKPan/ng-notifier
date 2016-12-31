import { OnInit, OnDestroy, AnimationTransitionEvent, EventEmitter } from '@angular/core';
import { INotifierMessage } from "./notifier.model";
import { DomSanitizer } from "@angular/platform-browser";
export declare class NotifierMessageComponent implements OnInit, OnDestroy {
    private domSanitizer;
    message: INotifierMessage;
    animate: string;
    clickToClose: boolean;
    pauseOnHover: boolean;
    theClass: string;
    timeDelay: number;
    onRemoveMessage: EventEmitter<INotifierMessage>;
    private safeSvg;
    private timerId;
    private start;
    private timeLeft;
    constructor(domSanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    animationDone(event: AnimationTransitionEvent, message: INotifierMessage): void;
    onEnter(): void;
    onLeave(): void;
    onClick(): void;
    private startTimer();
    private clearTimer();
    private setStateOut();
}
