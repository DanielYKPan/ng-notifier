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
        this.messages$ = store.select('messages');
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getEmitter()
            .subscribe(function (data) {
            _this.store.dispatch({ type: data.command, payload: data.message });
        });
    };
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'ng-notification',
            template: "<div class=\"notification-wrapper\"><ng-notification-message *ngFor=\"let message of messages$ | async | max:5\" [animate]=\"message.state\" [message]=\"message\"></ng-notification-message></div>",
            styles: [".notification-wrapper{position:fixed;right:0;bottom:16px;bottom:1rem;margin-right:16px;margin-right:1rem}"],
        }), 
        __metadata('design:paramtypes', [notification_service_1.NotificationService, store_1.Store])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;

//# sourceMappingURL=notification.component.js.map
