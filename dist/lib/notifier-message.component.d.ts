import { OnInit, OnDestroy } from '@angular/core';
import { Notice } from './notifier-notice';
import { DomSanitizer } from '@angular/platform-browser';
import { NotifierService } from './notifier.service';
export declare class NotifierMessageComponent implements OnInit, OnDestroy {
    private domSanitizer;
    private notifierService;
    notice: Notice;
    private safeSvg;
    private timerId;
    private start;
    private timeLeft;
    constructor(domSanitizer: DomSanitizer, notifierService: NotifierService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    animationDone(event: any): void;
    onEnter(): void;
    onLeave(): void;
    onClick(): void;
    private startTimer();
    private clearTimer();
    private setStateOut();
}
