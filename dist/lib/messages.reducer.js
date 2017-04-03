"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_NOTICE = 'ADD_NOTICE';
exports.REMOVE_NOTICE = 'REMOVE_NOTICE';
exports.REMOVE_ALL = 'REMOVE_ALL';
function messagesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case exports.ADD_NOTICE:
            return state.concat([Object.assign({}, action.payload)]);
        case exports.REMOVE_NOTICE:
            return state.filter(function (message) { return message.id !== action.payload.id; });
        case exports.REMOVE_ALL:
            return [];
        default:
            return state;
    }
}
exports.messagesReducer = messagesReducer;
//# sourceMappingURL=messages.reducer.js.map