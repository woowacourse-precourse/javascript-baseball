function inputValidation(input) {
  if (Number.isNaN(Number(input))) {
    return false;
  }
  if (new Set(input).size !== 3) {
    return false;
  }
  if (input.length !== 3) {
    return false;
  }
  if (input.includes(0)) {
    return false;
  }

  return true;
}

module.exports = inputValidation;
