"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var allowed = args[0];
        var received = value.length;
        if (received > allowed && allowed !== 0) {
            var toCut = allowed - received;
            return value.slice(0, toCut);
        }
        return value;
    };
    return MaxPipe;
}());
MaxPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'max'
            },] },
];
MaxPipe.ctorParameters = function () { return []; };
exports.MaxPipe = MaxPipe;
//# sourceMappingURL=max.pipe.js.map