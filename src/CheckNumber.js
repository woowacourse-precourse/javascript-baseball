function isValid(checked, exception) {
  if (exception) return false;
  if (isNaN(checked)) return false;
  return true;
}

module.exports = checkException;