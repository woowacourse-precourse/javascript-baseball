function checkIncorrectNumber(numberStr) {
  const regExp = /^[1-9]+[1-9]+[1-9]$/;
  if (regExp.test(numberStr)) return false;
  return true;
}

module.exports = { checkIncorrectNumber };
