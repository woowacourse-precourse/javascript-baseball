function isAvailableValue(value) {
  const uniqueValue = [...new Set(value)].join('');

  return value.length === 3 && /^[1-9]{3}$/.test(uniqueValue);
}

module.exports = isAvailableValue;
