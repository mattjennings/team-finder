Object.prototype.getByKeyInsensitive = function(key) {
  let lowerKeys = Object.keys(this).map(function(key) {
    return key.toLowerCase();
  });

  let index = lowerKeys.indexOf(key.toLowerCase())
  if (index !== -1) {
    return this[Object.keys(this)[index]];
  }
  return undefined;
};