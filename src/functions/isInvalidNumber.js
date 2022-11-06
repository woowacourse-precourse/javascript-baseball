function isInvalidNumber(number) {
  if (number.length !== 3) return true;
  for (elem of number) {
    if (isNaN(elem)) {
      return true;
    }
  }

  for (idx in number) {
    if (number.indexOf(number[idx]) !== Number(idx)) {
      return true;
    }
  }

  return false;
}

module.exports = isInvalidNumber;
