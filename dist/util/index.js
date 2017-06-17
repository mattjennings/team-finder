"use strict";

module.exports = {
  /**
   * @description Gets an object's value by it's key (case insensitively)
   * @param object
   * @param key
   * @returns {*}
   */
  getByKey: function getByKey(object, key) {
    var keys = Object.keys(object);
    var lowerKeys = keys.map(function (key) {
      return key.toLowerCase();
    });

    var index = lowerKeys.indexOf(key.toLowerCase());
    if (index !== -1) {
      return object[keys[index]];
    }
    return undefined;
  }
};
