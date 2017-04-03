"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotifierOptions = (function () {
    function NotifierOptions(options) {
        this.animate = 'flyRight';
        this.clickToClose = true;
        this.maxStack = 5;
        this.pauseOnHover = true;
        this.position = ['bottom', 'right'];
        this.notifierLife = 0;
        if (options) {
            Object.assign(this, options);
        }
    }
    return NotifierOptions;
}());
NotifierOptions.decorators = [
    { type: core_1.Injectable },
];
NotifierOptions.ctorParameters = function () { return [
    { type: Object, },
]; };
exports.NotifierOptions = NotifierOptions;
//# sourceMappingURL=notifier-options.service.js.map