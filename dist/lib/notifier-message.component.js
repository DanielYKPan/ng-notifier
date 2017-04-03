"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var notifier_service_1 = require("./notifier.service");
var animations_1 = require("@angular/animations");
var NotifierMessageComponent = (function () {
    function NotifierMessageComponent(domSanitizer, notifierService) {
        this.domSanitizer = domSanitizer;
        this.notifierService = notifierService;
        this.timerId = 0;
    }
    NotifierMessageComponent.prototype.ngOnInit = function () {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.notice.icon);
        this.notice.state = this.notice.config.animate;
        if (this.notice.config.notifierLife > 0) {
            this.startTimer();
        }
    };
    NotifierMessageComponent.prototype.ngOnDestroy = function () {
        this.clearTimer();
    };
    NotifierMessageComponent.prototype.animationDone = function (event) {
        if (event.toState === this.notice.config.animate + 'Out') {
            this.notifierService.clear(this.notice);
        }
    };
    NotifierMessageComponent.prototype.onEnter = function () {
        if (this.notice.config.pauseOnHover) {
            this.timeLeft = this.notice.config.notifierLife;
            this.timeLeft -= new Date().getTime() - this.start;
            this.clearTimer();
        }
    };
    NotifierMessageComponent.prototype.onLeave = function () {
        var _this = this;
        if (this.notice.config.pauseOnHover) {
            if (!this.timeLeft) {
                this.timeLeft = this.notice.config.notifierLife;
            }
            this.timerId = window.setTimeout(function () {
                _this.setStateOut();
            }, this.timeLeft);
        }
    };
    NotifierMessageComponent.prototype.onClick = function () {
        if (this.notice.config.clickToClose) {
            this.setStateOut();
        }
    };
    NotifierMessageComponent.prototype.startTimer = function () {
        var _this = this;
        this.start = new Date().getTime();
        this.timerId = window.setTimeout(function () {
            _this.setStateOut();
        }, this.notice.config.notifierLife);
    };
    NotifierMessageComponent.prototype.clearTimer = function () {
        clearTimeout(this.timerId);
    };
    NotifierMessageComponent.prototype.setStateOut = function () {
        this.notice.state = this.notice.config.animate + 'Out';
        this.clearTimer();
    };
    return NotifierMessageComponent;
}());
NotifierMessageComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ng2-notifier-message',
                template: "<div [@enterLeave]=\"notice.state\" (@enterLeave.done)=\"animationDone($event)\" (click)=\"onClick()\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\" class=\"notifier-message {{notice.type}}\"><div class=\"{{notice.config.titleClass || 'title'}}\">{{notice.title}}</div><div class=\"{{notice.config.messageClass || 'content'}}\">{{notice.content}}</div><div [innerHTML]=\"safeSvg\"></div></div>",
                styles: ["*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.notifier-message{font-size:12px;line-height:20px;position:relative;width:272px;width:17rem;min-height:48px;min-height:3rem;-moz-border-radius:.3rem;border-radius:.3rem;margin-bottom:10px;padding:10px;color:#333;background-color:#fff;border-color:#ccc;-moz-box-shadow:0 0 8px 3px rgba(255,254,247,.75);box-shadow:0 0 8px 3px rgba(255,254,247,.75);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.notifier-message .title{font-size:16px;line-height:20px}.notifier-message .content,.notifier-message .title{padding-right:48px;padding-right:3rem}.notifier-message.primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.notifier-message.success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.notifier-message.danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.notifier-message.warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}:host /deep/ .notifier-message svg{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box;top:0;right:0;width:48px;width:3rem;height:48px;height:3rem;padding:10px;fill:#fff}.timer{position:absolute;top:0;left:0;width:100%;height:4px;-moz-border-radius:.3rem;border-radius:.3rem}.timer .bar{display:block;position:relative;height:100%;-moz-border-radius:.3rem;border-radius:.3rem;background:rgba(0,0,0,.3);-webkit-transition:width .1s ease;-moz-transition:width .1s ease;transition:width .1s ease}"],
                animations: [
                    animations_1.trigger('enterLeave', [
                        animations_1.state('flyRight', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                        animations_1.state('flyRightOut', animations_1.style({ opacity: 0, transform: 'translateX(-10%)' })),
                        animations_1.transition('void => flyRight', [
                            animations_1.style({ opacity: 0, transform: 'translateX(10%)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.transition('flyRight => flyRightOut', [
                            animations_1.animate('300ms ease-in-out', animations_1.style({ opacity: 0, transform: 'translateX(-10%)' }))
                        ]),
                        animations_1.state('flyLeft', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                        animations_1.state('flyLeftOut', animations_1.style({ opacity: 0, transform: 'translateX(10%)' })),
                        animations_1.transition('* => flyLeft', [
                            animations_1.style({ opacity: 0, transform: 'translateX(-10%)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.transition('flyLeft => flyLeftOut', [
                            animations_1.animate('300ms ease-in-out', animations_1.style({ opacity: 0, transform: 'translateX(10%)' }))
                        ]),
                        animations_1.state('scale', animations_1.style({ opacity: 1, transform: 'scale(1)' })),
                        animations_1.state('scaleOut', animations_1.style({ opacity: 0, transform: 'scale(0)' })),
                        animations_1.transition('* => scale', [
                            animations_1.style({ opacity: 0, transform: 'scale(0)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.transition('scale => scaleOut', [
                            animations_1.style({ opacity: 1, transform: 'scale(1)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.state('rotate', animations_1.style({ opacity: 1, transform: 'rotate(0deg)' })),
                        animations_1.state('rotateOut', animations_1.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                        animations_1.transition('* => rotate', [
                            animations_1.style({ opacity: 0, transform: 'rotate(5deg)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.transition('rotate => rotateOut', [
                            animations_1.style({ opacity: 1, transform: 'rotate(0deg)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.state('fade', animations_1.style({ opacity: 1 })),
                        animations_1.state('fadeOut', animations_1.style({ opacity: 0 })),
                        animations_1.transition('* => fade', [
                            animations_1.style({ opacity: 0 }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.transition('fade => fadeOut', [
                            animations_1.style({ opacity: 1 }),
                            animations_1.animate('400ms ease-in-out')
                        ])
                    ])
                ]
            },] },
];
NotifierMessageComponent.ctorParameters = function () { return [
    { type: platform_browser_1.DomSanitizer, },
    { type: notifier_service_1.NotifierService, },
]; };
NotifierMessageComponent.propDecorators = {
    'notice': [{ type: core_1.Input },],
};
exports.NotifierMessageComponent = NotifierMessageComponent;
//# sourceMappingURL=notifier-message.component.js.map