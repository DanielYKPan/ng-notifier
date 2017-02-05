/**
 * notification-message.component
 */

import {
    Component, OnInit, OnDestroy, Input, AnimationTransitionEvent, trigger, state,
    transition, style, animate, Output, EventEmitter
} from '@angular/core';
import { INotifierMessage } from "./notifier.model";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Timer } from "./timer";

// webpack1_
declare let require: any;
const myDpStyles: string = require("./notifier-message.component.scss");
const myDpTpl: string = require("./notifier-message.component.html");
// webpack2_

@Component({
    selector: 'ng2-notifier-message',
    template: myDpTpl,
    styles: [myDpStyles],
    animations: [
        trigger('enterLeave', [

            // Enter from right
            state('fromRight', style({opacity: 1, transform: 'translateX(0)'})),
            state('fromRightOut', style({opacity: 0, transform: 'translateX(-10%)'})),
            transition('void => fromRight', [
                style({opacity: 0, transform: 'translateX(10%)'}),
                animate('400ms ease-in-out')
            ]),
            transition('fromRight => fromRightOut', [
                animate('300ms ease-in-out', style({opacity: 0, transform: 'translateX(-10%)'}))
            ]),

            // Enter from left
            state('fromLeft', style({opacity: 1, transform: 'translateX(0)'})),
            state('fromLeftOut', style({opacity: 0, transform: 'translateX(10%)'})),
            transition('* => fromLeft', [
                style({opacity: 0, transform: 'translateX(-10%)'}),
                animate('400ms ease-in-out')
            ]),
            transition('fromLeft => fromLeftOut', [
                animate('300ms ease-in-out', style({opacity: 0, transform: 'translateX(10%)'}))
            ]),

            // Scale
            state('scale', style({opacity: 1, transform: 'scale(1)'})),
            state('scaleOut', style({opacity: 0, transform: 'scale(0)'})),
            transition('* => scale', [
                style({opacity: 0, transform: 'scale(0)'}),
                animate('400ms ease-in-out')
            ]),
            transition('scale => scaleOut', [
                style({opacity: 1, transform: 'scale(1)'}),
                animate('400ms ease-in-out')
            ]),

            // Rotate
            state('rotate', style({opacity: 1, transform: 'rotate(0deg)'})),
            state('rotateOut', style({opacity: 0, transform: 'rotate(-5deg)'})),
            transition('* => rotate', [
                style({opacity: 0, transform: 'rotate(5deg)'}),
                animate('400ms ease-in-out')
            ]),
            transition('rotate => rotateOut', [
                style({opacity: 1, transform: 'rotate(0deg)'}),
                animate('400ms ease-in-out')
            ]),

            // Fade
            state('fade', style({opacity: 1})),
            state('fadeOut', style({opacity: 0})),
            transition('* => fade', [
                style({opacity: 0}),
                animate('400ms ease-in-out')
            ]),
            transition('fade => fadeOut', [
                style({opacity: 1}),
                animate('400ms ease-in-out')
            ])
        ])
    ]
})
export class NotifierMessageComponent implements OnInit, OnDestroy {

    @Input() message: INotifierMessage;
    @Input() animate: string;
    @Input() clickToClose: boolean;
    @Input() pauseOnHover: boolean;
    @Input() theClass: string;
    @Input() timeDelay: number;
    @Input() showProcess: boolean;

    @Output() onRemoveMessage = new EventEmitter<INotifierMessage>();

    private safeSvg: SafeHtml;
    private timerId: number = 0;
    private start: number;
    private timeLeft: number;
    private timer: Timer;

    constructor( private domSanitizer: DomSanitizer ) {
    }

    ngOnInit() {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.message.icon);
        this.message.state = this.animate;

        if (this.timeDelay > 0) {
            this.timer = new Timer(this.timeDelay/1000, this.timeDelay/1000);
            this.startTimer();
        }
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    animationDone( event: AnimationTransitionEvent, message: INotifierMessage ): void {
        if (event.toState == message.state + 'Out') {
            this.onRemoveMessage.next(message);
        }
    }

    onEnter(): void {
        if (this.pauseOnHover) {
            this.timeLeft = this.timer.Current;
            this.clearTimer();
        }
    }

    onLeave(): void {
        if (this.pauseOnHover) {
            if (!this.timeLeft) {
                return;
            }

            this.start = new Date().getTime();
            this.timerId = window.setInterval(() => {
                let current_time = new Date().getTime();
                this.timer.Current = this.timeLeft - ((current_time - this.start) / 1000);
                if (this.timer.Current <= 0) {
                    this.timer.Current = 0;
                    this.setStateOut();
                    this.clearTimer();
                }
            }, 100);
        }
    }

    onClick(): void {
        if (this.clickToClose) {
            this.setStateOut();
        }
    }

    getPercentage(): string {
        if (this.timer != null) {
            return (this.timer.Current/ this.timer.Max) * 100 + "%";
        }
        else {
            return "100%";
        }
    }

    private startTimer(): void {
        this.start = new Date().getTime();
        this.timerId = window.setInterval(() => {
            let current_time = new Date().getTime();
            this.timer.Current = this.timer.Max - ((current_time - this.start) / 1000);
            if (this.timer.Current <= 0) {
                this.timer.Current = 0;
                this.setStateOut();
                this.clearTimer();
            }
        }, 100);
    }

    private clearTimer(): void {
        clearTimeout(this.timerId);
    }

    private setStateOut(): void {
        this.animate = this.animate + 'Out';
        this.clearTimer();
    }
}
