"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var store_1 = require("@ngrx/store");
var messages_reducer_1 = require("./messages.reducer");
var notifier_message_component_1 = require("./notifier-message.component");
var max_pipe_1 = require("./max.pipe");
var notifier_service_1 = require("./notifier.service");
var notifier_options_service_1 = require("./notifier-options.service");
var notifier_container_component_1 = require("./notifier-container.component");
var animations_1 = require("@angular/platform-browser/animations");
var NotifierModule = (function () {
    function NotifierModule() {
    }
    NotifierModule.forRoot = function (config) {
        return {
            ngModule: NotifierModule,
            providers: config ? [
                { provide: notifier_options_service_1.NotifierOptions, useValue: config },
                notifier_service_1.NotifierService,
            ] : [notifier_service_1.NotifierService],
        };
    };
    return NotifierModule;
}());
NotifierModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    store_1.StoreModule.provideStore({ messages: messages_reducer_1.messagesReducer }),
                    animations_1.BrowserAnimationsModule,
                ],
                declarations: [
                    notifier_container_component_1.NotifierContainerComponent,
                    notifier_message_component_1.NotifierMessageComponent,
                    max_pipe_1.MaxPipe
                ],
                exports: [
                    notifier_container_component_1.NotifierContainerComponent
                ],
                entryComponents: [notifier_container_component_1.NotifierContainerComponent]
            },] },
];
NotifierModule.ctorParameters = function () { return []; };
exports.NotifierModule = NotifierModule;
//# sourceMappingURL=notifier.module.js.map