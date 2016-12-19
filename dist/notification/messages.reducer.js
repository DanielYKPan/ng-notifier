"use strict";
exports.ADD_MESSAGE = 'ADD_MESSAGE';
exports.REMOVE_MESSAGE = 'REMOVE_MESSAGE';
exports.REMOVE_ALL = 'REMOVE_ALL';
exports.messagesReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case exports.ADD_MESSAGE:
            return state.concat([Object.assign({}, action.payload)]);
        case exports.REMOVE_MESSAGE:
            return state.filter(function (message) { return message.id !== action.payload.id; });
        case exports.REMOVE_ALL:
            return [];
        default:
            return state;
    }
};

//# sourceMappingURL=messages.reducer.js.map
