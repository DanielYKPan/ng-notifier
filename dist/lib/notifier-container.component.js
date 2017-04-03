"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var messages_reducer_1 = require("./messages.reducer");
var notifier_options_service_1 = require("./notifier-options.service");
var NotifierContainerComponent = (function () {
    function NotifierContainerComponent(store, options) {
        this.store = store;
        this.maxStack = 5;
        this.position = ['bottom', 'right'];
        if (options) {
            Object.assign(this, options);
        }
    }
    NotifierContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectNoticesSub = this.store.select('messages').subscribe(function (data) { return _this.notices = data; });
    };
    NotifierContainerComponent.prototype.ngOnDestroy = function () {
        this.selectNoticesSub.unsubscribe();
    };
    NotifierContainerComponent.prototype.addNotice = function (notice) {
        this.store.dispatch({ type: messages_reducer_1.ADD_NOTICE, payload: notice });
    };
    NotifierContainerComponent.prototype.removeNotice = function (notice) {
        if (notice) {
            this.store.dispatch({ type: messages_reducer_1.REMOVE_NOTICE, payload: notice });
        }
        else {
            this.store.dispatch({ type: messages_reducer_1.REMOVE_ALL });
        }
    };
    NotifierContainerComponent.prototype.anyNotices = function () {
        return this.notices.length > 0;
    };
    return NotifierContainerComponent;
}());
NotifierContainerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-notifier-container',
                template: "<div class=\"notifier-wrapper\" *ngIf=\"notices\" [ngClass]=\"position\"><ng2-notifier-message *ngFor=\"let message of notices| max: maxStack\" [notice]=\"message\"></ng2-notifier-message></div>",
                styles: ["*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.notifier-wrapper{position:fixed}.notifier-wrapper.left{left:16px;left:1rem}.notifier-wrapper.bottom{bottom:16px;bottom:1rem}.notifier-wrapper.right{right:16px;right:1rem}.notifier-wrapper.top{top:16px;top:1rem}.notifier-wrapper.center{left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}"],
            },] },
];
NotifierContainerComponent.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: notifier_options_service_1.NotifierOptions, decorators: [{ type: core_1.Optional },] },
]; };
exports.NotifierContainerComponent = NotifierContainerComponent;
//# sourceMappingURL=notifier-container.component.js.map