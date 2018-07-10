"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets an object's value by it's key case-insensitively
 */
exports.getByKey = function (object, key) {
    var keys = Object.keys(object);
    var lowerKeys = keys.map(function (k) {
        return k.toLowerCase();
    });
    var index = lowerKeys.indexOf(key.toLowerCase());
    if (index !== -1) {
        return object[keys[index]];
    }
    return undefined;
};