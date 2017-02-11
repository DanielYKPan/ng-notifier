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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var uuid_1 = require("./uuid");
var icons_1 = require('./icons');
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
    NotifierService.prototype.set = function (message) {
        if (!this.container) {
            if (!this._rootViewContainerRef) {
                try {
                    this._rootViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
                }
                catch (e) {
                    console.log(new Error('Please set root ViewContainerRef using setRootViewContainerRef(vRef: ViewContainerRef) method.'));
                }
            }
            var providers = core_1.ReflectiveInjector.resolve([
                { provide: notifier_options_service_1.NotifierOptions, useValue: this.options }
            ]);
            var notifierFactory = this.componentFactoryResolver.resolveComponentFactory(notifier_container_component_1.NotifierContainerComponent);
            var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, this._rootViewContainerRef.parentInjector);
            this.container = this._rootViewContainerRef.createComponent(notifierFactory, this._rootViewContainerRef.length, childInjector);
        }
        if (!message.id) {
            message.id = uuid_1.uuid();
        }
        this.container.instance.addNotice(message);
        return message;
    };
    NotifierService.prototype.dispose = function () {
        if (this.container && !this.container.instance.anyNotices()) {
            this.container.destroy();
            this.container = null;
            return;
        }
        return;
    };
    NotifierService.prototype.clear = function (notice) {
        if (!this.container)
            return;
        this.container.instance.removeNotice(notice);
        if (!this.container.instance.anyNotices()) {
            this.dispose();
        }
    };
    NotifierService.prototype.info = function (content, title) {
        var message = {
            title: title,
            content: content,
            type: 'primary',
            icon: this.icons.info,
        };
        return this.set(message);
    };
    NotifierService.prototype.success = function (content, title) {
        var message = {
            title: title,
            content: content,
            type: 'success',
            icon: this.icons.success,
        };
        return this.set(message);
    };
    NotifierService.prototype.error = function (content, title) {
        var message = {
            title: title,
            content: content,
            type: 'danger',
            icon: this.icons.error,
        };
        return this.set(message);
    };
    NotifierService.prototype.alert = function (content, title) {
        var message = {
            title: title,
            content: content,
            type: 'warning',
            icon: this.icons.alert,
        };
        return this.set(message);
    };
    NotifierService = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ApplicationRef, notifier_options_service_1.NotifierOptions])
    ], NotifierService);
    return NotifierService;
}());
exports.NotifierService = NotifierService;

//# sourceMappingURL=notifier.service.js.map
