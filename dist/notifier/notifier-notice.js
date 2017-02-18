"use strict";
var uuid_1 = require("./uuid");
var Notice = (function () {
    function Notice(type, content, title, icon) {
        this.config = {
            animate: 'fade',
            clickToClose: true,
            pauseOnHover: true,
            notifierLife: 3000,
            titleClass: '',
            messageClass: '',
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
