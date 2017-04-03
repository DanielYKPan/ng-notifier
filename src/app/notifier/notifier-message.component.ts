/**
 * notification-message.component
 */

import {
    Component, OnInit, OnDestroy, Input, AnimationTransitionEvent
} from '@angular/core';
import { Notice } from "./notifier-notice";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { NotifierService } from "./notifier.service";
import { animate, state, style, transition, trigger } from '@angular/animations';

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
            state('flyRight', style({opacity: 1, transform: 'translateX(0)'})),
            state('flyRightOut', style({opacity: 0, transform: 'translateX(-10%)'})),
            transition('void => flyRight', [
                style({opacity: 0, transform: 'translateX(10%)'}),
                animate('400ms ease-in-out')
            ]),
            transition('flyRight => flyRightOut', [
                animate('300ms ease-in-out', style({opacity: 0, transform: 'translateX(-10%)'}))
            ]),

            // Enter from left
            state('flyLeft', style({opacity: 1, transform: 'translateX(0)'})),
            state('flyLeftOut', style({opacity: 0, transform: 'translateX(10%)'})),
            transition('* => flyLeft', [
                style({opacity: 0, transform: 'translateX(-10%)'}),
                animate('400ms ease-in-out')
            ]),
            transition('flyLeft => flyLeftOut', [
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

    @Input() notice: Notice;

    private safeSvg: SafeHtml;
    private timerId: number = 0;
    private start: any;
    private timeLeft: any;

    constructor( private domSanitizer: DomSanitizer,
                 private notifierService: NotifierService ) {
    }

    ngOnInit() {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.notice.icon);
        this.notice.state = this.notice.config.animate;

        if (this.notice.config.notifierLife > 0) {
            this.startTimer();
        }
    }

    ngOnDestroy() {
        this.clearTimer();
    }

    animationDone( event: AnimationTransitionEvent ): void {
        if (event.toState == this.notice.config.animate + 'Out') {
            this.notifierService.clear(this.notice);
        }
    }

    onEnter(): void {
        if (this.notice.config.pauseOnHover) {
            this.timeLeft = this.notice.config.notifierLife;
            this.timeLeft -= new Date().getTime() - this.start;
            this.clearTimer();
        }
    }

    onLeave(): void {
        if (this.notice.config.pauseOnHover) {
            if (!this.timeLeft) {
                this.timeLeft = this.notice.config.notifierLife;
            }
            this.timerId = window.setTimeout(() => {
                this.setStateOut();
            }, this.timeLeft);
        }
    }

    onClick(): void {
        if (this.notice.config.clickToClose) {
            this.setStateOut();
        }
    }

    private startTimer(): void {
        this.start = new Date().getTime();
        this.timerId = window.setTimeout(() => {
            this.setStateOut();
        }, this.notice.config.notifierLife);
    }

    private clearTimer(): void {
        clearTimeout(this.timerId);
    }

    private setStateOut(): void {
        this.notice.state = this.notice.config.animate + 'Out';
        this.clearTimer();
    }
}
