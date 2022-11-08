function isAvailableValue(value) {
  const stringValue = value + '';
  const uniqueValue = [...new Set(stringValue)].join('');

  return stringValue.length === 3 && /^[1-9]{3}$/.test(uniqueValue);
}

module.exports = isAvailableValue;
