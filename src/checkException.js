const checkPlayingNum = (allowed, inputNum) => {
  if (inputNum.length !== 3) {
    return false;
  }
  if (inputNum.includes(0)) {
    return false;
  }
  String(inputNum)
    .split("")
    .forEach((str) => {
      allowed = !isNaN(str) && allowed;
    });

  return allowed;
};

const checkRestartNum = (inputNum) => {
  const RESTART = "1";
  const EXIT = "2";
  if (inputNum.length !== 1) {
    return false;
  }
  if (inputNum !== RESTART && inputNum !== EXIT) {
    return false;
  }
  return true;
};

const checkException = (input, checkStyle) => {
  const playingInput = 0;
  const restartInput = 1;
  if (checkStyle === playingInput) {
    return checkPlayingNum(true, input);
  } else if (checkStyle === restartInput) {
    return checkRestartNum(input);
  }
};

module.exports = checkException;
