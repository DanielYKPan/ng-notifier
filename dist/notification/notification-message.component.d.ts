import { OnInit, OnDestroy, AnimationTransitionEvent } from '@angular/core';
import { NotificationService } from "./notification.service";
import { IMessage } from "./notification.model";
import { DomSanitizer } from "@angular/platform-browser";
export declare class NotificationMessageComponent implements OnInit, OnDestroy {
    private notificationService;
    private domSanitizer;
    message: IMessage;
    animate: string;
    private safeSvg;
    private timerId;
    private timeDelay;
    private start;
    private timeLeft;
    constructor(notificationService: NotificationService, domSanitizer: DomSanitizer);
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
