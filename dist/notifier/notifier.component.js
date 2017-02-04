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
var notifier_service_1 = require("./notifier.service");
var NotifierComponent = (function () {
    function NotifierComponent(service, store) {
        this.service = service;
        this.store = store;
    }
    Object.defineProperty(NotifierComponent.prototype, "options", {
        set: function (opt) {
            this.service.attachPersonalOptions(opt);
        },
        enumerable: true,
        configurable: true
    });
    NotifierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages$ = this.store.select('messages');
        this.notifierOptions = this.service.getOptions();
        this.service.getEmitter()
            .subscribe(function (data) {
            _this.store.dispatch({ type: data.command, payload: data.message });
        });
    };
    NotifierComponent.prototype.removeMessage = function (message) {
        this.service.remove(message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NotifierComponent.prototype, "options", null);
    NotifierComponent = __decorate([
        core_1.Component({
            selector: 'ng2-notifier',
            template: "<div class=\"notifier-wrapper\" [ngClass]=\"notifierOptions.position\"><ng2-notifier-message *ngFor=\"let message of messages$ | async | max: notifierOptions.maxStack\" [animate]=\"notifierOptions.animate\" [theClass]=\"notifierOptions.theClass\" [timeDelay]=\"notifierOptions.timeDelay\" [clickToClose]=\"notifierOptions.clickToClose\" [pauseOnHover]=\"notifierOptions.pauseOnHover\" [message]=\"message\" (onRemoveMessage)=\"removeMessage($event)\"></ng2-notifier-message></div>",
            styles: [".notifier-wrapper{position:fixed}.notifier-wrapper.left{left:16px;left:1rem}.notifier-wrapper.bottom{bottom:16px;bottom:1rem}.notifier-wrapper.right{right:16px;right:1rem}.notifier-wrapper.top{top:16px;top:1rem}.notifier-wrapper.center{left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}"],
        }), 
        __metadata('design:paramtypes', [notifier_service_1.NotifierService, store_1.Store])
    ], NotifierComponent);
    return NotifierComponent;
}());
exports.NotifierComponent = NotifierComponent;

//# sourceMappingURL=notifier.component.js.map
