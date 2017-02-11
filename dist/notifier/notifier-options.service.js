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
var NotifierOptions = (function () {
    function NotifierOptions(options) {
        this.animate = 'fromRight';
        this.clickToClose = true;
        this.maxStack = 5;
        this.pauseOnHover = true;
        this.position = ['bottom', 'right'];
        this.timeDelay = 0;
        Object.assign(this, options);
    }
    NotifierOptions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], NotifierOptions);
    return NotifierOptions;
}());
exports.NotifierOptions = NotifierOptions;

//# sourceMappingURL=notifier-options.service.js.map
