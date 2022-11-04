function inputNumberSizeCheck(INPUT_USER_NUMBER) {
  if (INPUT_USER_NUMBER.length !== 3) {
    return true;
  }
  return false;
}

function overlapNumberCheck(INPUT_USER_NUMBER) {
  const overLapNumberSet = new Set(INPUT_USER_NUMBER);
  if (overLapNumberSet.size !== 3) {
    return true;
  }
  return false;
}
function numberTypeCheck(INPUT_USER_NUMBER) {
  const numberTypeString = INPUT_USER_NUMBER;
  for (let letter of numberTypeString) {
    if (typeof parseInt(letter, 10) !== "number") {
      return true;
    }
  }
  return false;
}
function zeroCheck(INPUT_USER_NUMBER) {
  for (let letter of INPUT_USER_NUMBER) {
    if (parseInt(letter, 10) === 0) {
      return true;
    }
  }
  return false;
}

function spaceCheck(INPUT_USER_NUMBER) {
  for (let letter of INPUT_USER_NUMBER) {
    if (isNaN(parseInt(letter, 10))) {
      return true;
    }
  }
  return false;
}

exports.zeroCheck = zeroCheck;
exports.inputNumberSizeCheck = inputNumberSizeCheck;
exports.overlapNumberCheck = overlapNumberCheck;
exports.numberTypeCheck = numberTypeCheck;
exports.spaceCheck = spaceCheck;
