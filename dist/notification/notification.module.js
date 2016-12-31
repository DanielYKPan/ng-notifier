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
var common_1 = require('@angular/common');
var forms_1 = require("@angular/forms");
var store_1 = require("@ngrx/store");
var messages_reducer_1 = require("./messages.reducer");
var notification_component_1 = require("./notification.component");
var notification_message_component_1 = require("./notification-message.component");
var notification_service_1 = require("./notification.service");
var max_pipe_1 = require("./max.pipe");
var NotificationModule = (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                store_1.StoreModule.provideStore({ messages: messages_reducer_1.messagesReducer }),
            ],
            declarations: [
                notification_component_1.NotificationComponent,
                notification_message_component_1.NotificationMessageComponent,
                max_pipe_1.MaxPipe
            ],
            exports: [
                notification_component_1.NotificationComponent
            ],
            providers: [notification_service_1.NotificationService]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationModule);
    return NotificationModule;
}());
exports.NotificationModule = NotificationModule;

//# sourceMappingURL=notification.module.js.map
