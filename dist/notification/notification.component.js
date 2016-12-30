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
var store_1 = require("@ngrx/store");
var notification_service_1 = require("./notification.service");
var NotificationComponent = (function () {
    function NotificationComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    Object.defineProperty(NotificationComponent.prototype, "options", {
        set: function (opt) {
            this.service.attachPersonalOptions(opt);
        },
        enumerable: true,
        configurable: true
    });
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages$ = this.store.select('messages');
        this.notifierOptions = this.service.getOptions();
        this.service.getEmitter()
            .subscribe(function (data) {
            _this.store.dispatch({ type: data.command, payload: data.message });
        });
    };
    NotificationComponent.prototype.removeMessage = function (message) {
        this.service.remove(message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NotificationComponent.prototype, "options", null);
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'ng2-notifier',
            template: "<div class=\"notification-wrapper\" [ngClass]=\"notifierOptions.position\"><ng2-notifier-message *ngFor=\"let message of messages$ | async | max: notifierOptions.maxStack\" [animate]=\"notifierOptions.animate\" [theClass]=\"notifierOptions.theClass\" [timeDelay]=\"notifierOptions.timeDelay\" [clickToClose]=\"notifierOptions.clickToClose\" [pauseOnHover]=\"notifierOptions.pauseOnHover\" [message]=\"message\" (onRemoveMessage)=\"removeMessage($event)\"></ng2-notifier-message></div>",
            styles: [".notification-wrapper{position:fixed}.notification-wrapper.left{left:16px;left:1rem}.notification-wrapper.bottom{bottom:16px;bottom:1rem}.notification-wrapper.right{right:16px;right:1rem}.notification-wrapper.top{top:16px;top:1rem}"],
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService, store_1.Store])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;

//# sourceMappingURL=notification.component.js.map