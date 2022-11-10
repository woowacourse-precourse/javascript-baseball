function isAvailableValue(value) {
  const stringValue = value + '';

  if (stringValue.length !== 3) return false;
  const uniqueValue = [...new Set(stringValue)].join('');

  return /^[1-9]{3}$/.test(uniqueValue);
}

module.exports = isAvailableValue;
