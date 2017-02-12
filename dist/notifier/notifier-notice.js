"use strict";
var uuid_1 = require("./uuid");
var Notice = (function () {
    function Notice(type, content, title, icon) {
        this.config = {
            animate: 'fromRight',
            clickToClose: true,
            pauseOnHover: true,
            timeDelay: 0,
            theClass: ''
        };
        this.id = uuid_1.uuid();
        this.type = type;
        this.content = content;
        this.title = title || null;
        this.icon = icon || null;
    }
    return Notice;
}());
exports.Notice = Notice;

//# sourceMappingURL=notifier-notice.js.map
