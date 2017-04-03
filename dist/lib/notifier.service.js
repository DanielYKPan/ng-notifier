"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var notifier_notice_1 = require("./notifier-notice");
var icons_1 = require("./icons");
var notifier_options_service_1 = require("./notifier-options.service");
var notifier_container_component_1 = require("./notifier-container.component");
var NotifierService = (function () {
    function NotifierService(componentFactoryResolver, appRef, options) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.icons = icons_1.defaultIcons;
        this.options = {};
        if (options) {
            Object.assign(this.options, options);
        }
    }
    NotifierService.prototype.setRootViewContainerRef = function (vRef) {
        this._rootViewContainerRef = vRef;
    };
    NotifierService.prototype.clear = function (notice) {
        if (!this.container) {
            return;
        }
        this.container.instance.removeNotice(notice);
        if (!this.container.instance.anyNotices()) {
            this.dispose();
        }
    };
    NotifierService.prototype.info = function (content, title, options) {
        var notice = new notifier_notice_1.Notice('primary', content, title, this.icons.info);
        return this.set(notice, options);
    };
    NotifierService.prototype.success = function (content, title, options) {
        var notice = new notifier_notice_1.Notice('success', content, title, this.icons.success);
        return this.set(notice, options);
    };
    NotifierService.prototype.error = function (content, title, options) {
        var notice = new notifier_notice_1.Notice('danger', content, title, this.icons.error);
        return this.set(notice, options);
    };
    NotifierService.prototype.alert = function (content, title, options) {
        var notice = new notifier_notice_1.Notice('warning', content, title, this.icons.alert);
        return this.set(notice, options);
    };
    NotifierService.prototype.set = function (notice, options) {
        var _this = this;
        if (!this.container) {
            if (!this._rootViewContainerRef) {
                try {
                    this._rootViewContainerRef =
                        this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
                }
                catch (e) {
                    console.log(new Error('Please set root ViewContainerRef ' +
                        'using setRootViewContainerRef(vRef: ViewContainerRef) method.'));
                }
            }
            var providers = core_1.ReflectiveInjector.resolve([
                { provide: notifier_options_service_1.NotifierOptions, useValue: this.options }
            ]);
            var notifierFactory = this.componentFactoryResolver
                .resolveComponentFactory(notifier_container_component_1.NotifierContainerComponent);
            var childInjector = core_1.ReflectiveInjector
                .fromResolvedProviders(providers, this._rootViewContainerRef.parentInjector);
            this.container = this._rootViewContainerRef
                .createComponent(notifierFactory, this._rootViewContainerRef.length, childInjector);
        }
        Object.keys(notice.config).forEach(function (k) {
            if (_this.options.hasOwnProperty(k)) {
                notice.config[k] = _this.options[k];
            }
            if (options && options.hasOwnProperty(k)) {
                notice.config[k] = options[k];
            }
        });
        this.container.instance.addNotice(notice);
        return notice;
    };
    NotifierService.prototype.dispose = function () {
        if (this.container && !this.container.instance.anyNotices()) {
            this.container.destroy();
            this.container = null;
            return;
        }
        return;
    };
    return NotifierService;
}());
NotifierService.decorators = [
    { type: core_1.Injectable },
];
NotifierService.ctorParameters = function () { return [
    { type: core_1.ComponentFactoryResolver, },
    { type: core_1.ApplicationRef, },
    { type: notifier_options_service_1.NotifierOptions, decorators: [{ type: core_1.Optional },] },
]; };
exports.NotifierService = NotifierService;
//# sourceMappingURL=notifier.service.js.map