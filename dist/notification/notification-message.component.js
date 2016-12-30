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
var platform_browser_1 = require("@angular/platform-browser");
var NotificationMessageComponent = (function () {
    function NotificationMessageComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.onRemoveMessage = new core_1.EventEmitter();
        this.timerId = 0;
    }
    NotificationMessageComponent.prototype.ngOnInit = function () {
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.message.icon);
        this.message.state = this.animate;
        if (this.timeDelay > 0) {
            this.startTimer();
        }
    };
    NotificationMessageComponent.prototype.ngOnDestroy = function () {
        this.clearTimer();
    };
    NotificationMessageComponent.prototype.animationDone = function (event, message) {
        if (event.toState == message.state + 'Out') {
            this.onRemoveMessage.next(message);
        }
    };
    NotificationMessageComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.timeLeft = this.timeDelay;
            this.timeLeft -= new Date().getTime() - this.start;
            this.clearTimer();
        }
    };
    NotificationMessageComponent.prototype.onLeave = function () {
        var _this = this;
        if (this.pauseOnHover) {
            if (!this.timeLeft) {
                this.timeLeft = this.timeDelay;
            }
            this.timerId = window.setTimeout(function () {
                _this.setStateOut();
            }, this.timeLeft);
        }
    };
    NotificationMessageComponent.prototype.onClick = function () {
        if (this.clickToClose) {
            this.setStateOut();
        }
    };
    NotificationMessageComponent.prototype.startTimer = function () {
        var _this = this;
        this.start = new Date().getTime();
        this.timerId = window.setTimeout(function () {
            _this.setStateOut();
        }, this.timeDelay);
    };
    NotificationMessageComponent.prototype.clearTimer = function () {
        clearTimeout(this.timerId);
    };
    NotificationMessageComponent.prototype.setStateOut = function () {
        this.animate = this.animate + 'Out';
        this.clearTimer();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NotificationMessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NotificationMessageComponent.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationMessageComponent.prototype, "clickToClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotificationMessageComponent.prototype, "pauseOnHover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NotificationMessageComponent.prototype, "theClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotificationMessageComponent.prototype, "timeDelay", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NotificationMessageComponent.prototype, "onRemoveMessage", void 0);
    NotificationMessageComponent = __decorate([
        core_1.Component({
            selector: 'ng2-notifier-message',
            template: "<div [@enterLeave]=\"animate\" (@enterLeave.done)=\"animationDone($event, message)\" (click)=\"onClick()\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\" [class]=\"theClass\" class=\"notification-message {{message.type}}\"><div class=\"title\">{{message.title}}</div><div class=\"content\">{{message.content}}</div><div [innerHTML]=\"safeSvg\"></div></div>",
            styles: [".notification-message{font-size:12px;font-size:.75rem;line-height:20px;line-height:1.25rem;position:relative;width:272px;width:17rem;min-height:48px;min-height:3rem;-moz-border-radius:.3rem;border-radius:.3rem;margin-bottom:10px;margin-bottom:.625rem;padding:10px;padding:.625rem;color:#333;background-color:#fff;border-color:#ccc;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.notification-message .title{font-size:16px;font-size:1rem;line-height:20px;line-height:1.25rem}.notification-message .content,.notification-message .title{padding-right:48px;padding-right:3rem}.notification-message.primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.notification-message.success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.notification-message.danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.notification-message.warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}:host /deep/ .notification-message svg{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box;top:0;right:0;width:48px;width:3rem;height:48px;height:3rem;padding:10px;padding:.625rem;fill:#fff}"],
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
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());
exports.NotificationMessageComponent = NotificationMessageComponent;

//# sourceMappingURL=notification-message.component.js.map
