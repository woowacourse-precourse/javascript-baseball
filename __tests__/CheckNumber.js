function isValid(checked, exception) {
  if (!exception) return false;
  if (isNaN(checked)) return false;
  return true;
}

function checkException(input) {
  let valid = true;

  if (input.length !== 3) {
    return false;
  }
  String(input)
    .split("")
    .forEach((str) => {
      valid = isValid(str, exception);
    });

  return valid;
}

module.exports = checkException;