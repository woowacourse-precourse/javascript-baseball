function isAllowed(nowCheckStr, exception) {
  if (!exception) return false;
  if (nowCheckStr === "0") return false;
  if (isNaN(nowCheckStr)) return false;
  return true;
}

function checkException(input, checkStyle) {
  const playingInput = 0;
  const restartInput = 1;
  let allowed = true;
  if (checkStyle === playingInput) {
    if (input.length !== 3) {
      return false;
    }
    String(input)
      .split("")
      .forEach((str) => {
        allowed = isAllowed(str, allowed);
      });
    return allowed;
  } else if (checkStyle === restartInput) {
    if (input.length !== 1) {
      allowed = false;
    }
    if (input !== 1 || input !== 2) {
      allowed = false;
    }
    return allowed;
  }
}

module.exports = checkException;
