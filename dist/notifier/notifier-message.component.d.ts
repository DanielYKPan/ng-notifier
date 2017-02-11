import { OnInit, OnDestroy, AnimationTransitionEvent } from '@angular/core';
import { INotifierMessage } from "./notifier.model";
import { DomSanitizer } from "@angular/platform-browser";
import { NotifierService } from "./notifier.service";
export declare class NotifierMessageComponent implements OnInit, OnDestroy {
    private domSanitizer;
    private notifierService;
    message: INotifierMessage;
    animate: string;
    clickToClose: boolean;
    pauseOnHover: boolean;
    theClass: string;
    timeDelay: number;
    private safeSvg;
    private timerId;
    private start;
    private timeLeft;
    constructor(domSanitizer: DomSanitizer, notifierService: NotifierService);
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
