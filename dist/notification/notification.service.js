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
var rxjs_1 = require("rxjs");
var uuid_1 = require("./uuid");
var messages_reducer_1 = require("./messages.reducer");
var icons_1 = require('./icons');
var NotificationService = (function () {
    function NotificationService() {
        this.emitter = new rxjs_1.Subject();
        this.icons = icons_1.defaultIcons;
    }
    NotificationService.prototype.getEmitter = function () {
        return this.emitter;
    };
    NotificationService.prototype.set = function (message) {
        if (!message.id) {
            message.id = uuid_1.uuid();
        }
        this.emitter.next({ command: messages_reducer_1.ADD_MESSAGE, message: message });
        return message;
    };
    NotificationService.prototype.success = function (title, content) {
        var message = {
            title: title,
            content: content,
            type: 'success',
            state: 'fromRight',
            icon: this.icons.success,
        };
        return this.set(message);
    };
    NotificationService.prototype.remove = function (message) {
        message ? this.emitter.next({ command: messages_reducer_1.REMOVE_MESSAGE, message: message }) :
            this.emitter.next({ command: messages_reducer_1.REMOVE_ALL });
    };
    NotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;

//# sourceMappingURL=notification.service.js.map
