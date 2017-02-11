/**
 * notification-message.component
 */

import {
    Component, OnInit, OnDestroy, Input, AnimationTransitionEvent, trigger, state,
    transition, style, animate
} from '@angular/core';
import { INotifierMessage } from "./notifier.model";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { NotifierService } from "./notifier.service";

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

    private safeSvg: SafeHtml;
    private timerId: number = 0;
    private start: any;
    private timeLeft: any;

    constructor( private domSanitizer: DomSanitizer,
                 private notifierService: NotifierService ) {
    }

    ngOnInit() {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.message.icon);
        this.message.state = this.animate;

        if (this.timeDelay > 0) {
            this.startTimer();
        }
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    animationDone( event: AnimationTransitionEvent, message: INotifierMessage ): void {
        if (event.toState == message.state + 'Out') {
            this.notifierService.clear(message);
        }
    }

    onEnter(): void {
        if (this.pauseOnHover) {
            this.timeLeft = this.timeDelay;
            this.timeLeft -= new Date().getTime() - this.start;
            this.clearTimer();
        }
    }

    onLeave(): void {
        if (this.pauseOnHover) {
            if (!this.timeLeft) {
                this.timeLeft = this.timeDelay;
            }
            this.timerId = window.setTimeout(() => {
                this.setStateOut();
            }, this.timeLeft);
        }
    }

    onClick(): void {
        if (this.clickToClose) {
            this.setStateOut();
        }
    }

    private startTimer(): void {
        this.start = new Date().getTime();
        this.timerId = window.setTimeout(() => {
            this.setStateOut();
        }, this.timeDelay);
    }

    private clearTimer(): void {
        clearTimeout(this.timerId);
    }

    private setStateOut(): void {
        this.animate = this.animate + 'Out';
        this.clearTimer();
    }
}
