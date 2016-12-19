/**
 * notification-message.component
 */

import {
    Component, OnInit, OnDestroy, Input, AnimationTransitionEvent, trigger, state,
    transition, style, animate
} from '@angular/core';
import { NotificationService } from "./notification.service";
import { IMessage } from "./notification.model";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

// webpack1_
declare let require: any;
const myDpStyles: string = require("./notification-message.component.scss");
const myDpTpl: string = require("./notification-message.component.html");
// webpack2_

@Component({
    selector: 'ng-notification-message',
    template: myDpTpl,
    styles: [myDpStyles],
    animations: [
        trigger('enterLeave', [
            state('fromRight', style({opacity: 1, transform: 'translateX(0)'})),
            state('fromRightOut', style({opacity: 0, transform: 'translateX(-10%)'})),
            transition('void => fromRight', [
                style({opacity: 0, transform: 'translateX(10%)'}),
                animate('400ms ease-in-out')
            ]),
            transition('fromRight => fromRightOut', [
                animate('300ms ease-in-out', style({opacity: 0, transform: 'translateX(-10%)'}))
            ]),
        ])
    ]
})
export class NotificationMessageComponent implements OnInit, OnDestroy {

    @Input() message: IMessage;
    @Input() animate: string;

    private safeSvg: SafeHtml;
    private timerId: number = 0;
    private timeDelay: number = 3000;
    private start: any;
    private timeLeft: any;

    constructor( private notificationService: NotificationService,
                 private domSanitizer: DomSanitizer ) {
    }

    ngOnInit() {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.message.icon);
        this.startTimer();
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    animationDone( event: AnimationTransitionEvent, message: IMessage ) {
        if (event.toState == message.state + 'Out') {
            this.notificationService.remove(this.message);
        }
    }

    onEnter() {
        this.timeLeft = this.timeDelay;
        this.timeLeft -= new Date().getTime() - this.start;
        this.clearTimer();
    }

    onLeave() {
        if (!this.timeLeft) {
            this.timeLeft = this.timeDelay;
        }
        this.timerId = window.setTimeout(() => {
            this.setStateOut();
        }, this.timeLeft);
    }

    onClick() {
        this.setStateOut();
    }

    private startTimer() {
        this.start = new Date().getTime();
        this.timerId = window.setTimeout(() => {
            this.setStateOut();
        }, this.timeDelay);
    }

    private clearTimer() {
        clearTimeout(this.timerId);
    }

    private setStateOut() {
        this.animate = this.animate + 'Out';
        this.clearTimer();
    }
}
