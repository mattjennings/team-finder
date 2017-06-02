module.exports = {
  /**
   * @description Gets an object's value by it's key (case insensitively)
   * @param object
   * @param key
   * @returns {*}
   */
  getByKey: function(object, key) {
    let keys = Object.keys(object);
    let lowerKeys = keys.map(function (key) {
      return key.toLowerCase();
    });

    let index = lowerKeys.indexOf(key.toLowerCase())
    if (index !== -1) {
      return object[keys[index]];
    }
    return undefined;
  }
};