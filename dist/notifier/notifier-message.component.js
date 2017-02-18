"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notifier_notice_1 = require("./notifier-notice");
var platform_browser_1 = require("@angular/platform-browser");
var notifier_service_1 = require("./notifier.service");
var NotifierMessageComponent = (function () {
    function NotifierMessageComponent(domSanitizer, notifierService) {
        this.domSanitizer = domSanitizer;
        this.notifierService = notifierService;
        this.timerId = 0;
    }
    NotifierMessageComponent.prototype.ngOnInit = function () {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.notice.icon);
        this.notice.state = this.notice.config.animate;
        if (this.notice.config.timeDelay > 0) {
            this.startTimer();
        }
    };
    NotifierMessageComponent.prototype.ngOnDestroy = function () {
        this.clearTimer();
    };
    NotifierMessageComponent.prototype.animationDone = function (event) {
        if (event.toState == this.notice.config.animate + 'Out') {
            this.notifierService.clear(this.notice);
        }
    };
    NotifierMessageComponent.prototype.onEnter = function () {
        if (this.notice.config.pauseOnHover) {
            this.timeLeft = this.notice.config.timeDelay;
            this.timeLeft -= new Date().getTime() - this.start;
            this.clearTimer();
        }
    };
    NotifierMessageComponent.prototype.onLeave = function () {
        var _this = this;
        if (this.notice.config.pauseOnHover) {
            if (!this.timeLeft) {
                this.timeLeft = this.notice.config.timeDelay;
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
        }, this.notice.config.timeDelay);
    };
    NotifierMessageComponent.prototype.clearTimer = function () {
        clearTimeout(this.timerId);
    };
    NotifierMessageComponent.prototype.setStateOut = function () {
        this.notice.state = this.notice.config.animate + 'Out';
        this.clearTimer();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', notifier_notice_1.Notice)
    ], NotifierMessageComponent.prototype, "notice", void 0);
    NotifierMessageComponent = __decorate([
        core_1.Component({
            selector: 'ng2-notifier-message',
            template: "<div [@enterLeave]=\"notice.state\" (@enterLeave.done)=\"animationDone($event)\" (click)=\"onClick()\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\" class=\"notifier-message {{notice.type}}\"><div class=\"{{notice.config.titleClass || 'title'}}\">{{notice.title}}</div><div class=\"{{notice.config.messageClass || 'content'}}\">{{notice.content}}</div><div [innerHTML]=\"safeSvg\"></div></div>",
            styles: [".notifier-message,.timer{-moz-border-radius:.3rem}.notifier-message{font-size:12px;font-size:.75rem;line-height:20px;line-height:1.25rem;position:relative;width:272px;width:17rem;min-height:48px;min-height:3rem;border-radius:.3rem;margin-bottom:10px;margin-bottom:.625rem;padding:10px;padding:.625rem;color:#333;background-color:#fff;border-color:#ccc;-moz-box-shadow:0 0 8px 3px rgba(255,254,247,.75);box-shadow:0 0 8px 3px rgba(255,254,247,.75);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.notifier-message .title{font-size:16px;font-size:1rem;line-height:20px;line-height:1.25rem}.notifier-message .content,.notifier-message .title{padding-right:48px;padding-right:3rem}.notifier-message.primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.notifier-message.success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.notifier-message.danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.notifier-message.warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}:host /deep/ .notifier-message svg{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box;top:0;right:0;width:48px;width:3rem;height:48px;height:3rem;padding:10px;padding:.625rem;fill:#fff}.timer{position:absolute;top:0;left:0;width:100%;height:4px;border-radius:.3rem}.timer .bar{display:block;position:relative;height:100%;-moz-border-radius:.3rem;border-radius:.3rem;background:rgba(0,0,0,.3);-webkit-transition:width .1s ease;-moz-transition:width .1s ease;transition:width .1s ease}"],
            animations: [
                core_1.trigger('enterLeave', [
                    core_1.state('fromRight', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.state('fromRightOut', core_1.style({ opacity: 0, transform: 'translateX(-10%)' })),
                    core_1.transition('void => fromRight', [
                        core_1.style({ opacity: 0, transform: 'translateX(10%)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.transition('fromRight => fromRightOut', [
                        core_1.animate('300ms ease-in-out', core_1.style({ opacity: 0, transform: 'translateX(-10%)' }))
                    ]),
                    core_1.state('fromLeft', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.state('fromLeftOut', core_1.style({ opacity: 0, transform: 'translateX(10%)' })),
                    core_1.transition('* => fromLeft', [
                        core_1.style({ opacity: 0, transform: 'translateX(-10%)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.transition('fromLeft => fromLeftOut', [
                        core_1.animate('300ms ease-in-out', core_1.style({ opacity: 0, transform: 'translateX(10%)' }))
                    ]),
                    core_1.state('scale', core_1.style({ opacity: 1, transform: 'scale(1)' })),
                    core_1.state('scaleOut', core_1.style({ opacity: 0, transform: 'scale(0)' })),
                    core_1.transition('* => scale', [
                        core_1.style({ opacity: 0, transform: 'scale(0)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.transition('scale => scaleOut', [
                        core_1.style({ opacity: 1, transform: 'scale(1)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('rotate', core_1.style({ opacity: 1, transform: 'rotate(0deg)' })),
                    core_1.state('rotateOut', core_1.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                    core_1.transition('* => rotate', [
                        core_1.style({ opacity: 0, transform: 'rotate(5deg)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.transition('rotate => rotateOut', [
                        core_1.style({ opacity: 1, transform: 'rotate(0deg)' }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.state('fade', core_1.style({ opacity: 1 })),
                    core_1.state('fadeOut', core_1.style({ opacity: 0 })),
                    core_1.transition('* => fade', [
                        core_1.style({ opacity: 0 }),
                        core_1.animate('400ms ease-in-out')
                    ]),
                    core_1.transition('fade => fadeOut', [
                        core_1.style({ opacity: 1 }),
                        core_1.animate('400ms ease-in-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, notifier_service_1.NotifierService])
    ], NotifierMessageComponent);
    return NotifierMessageComponent;
}());
exports.NotifierMessageComponent = NotifierMessageComponent;

//# sourceMappingURL=notifier-message.component.js.map
