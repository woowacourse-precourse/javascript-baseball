const isRestartNumber = (restartInput) => {
  if (Number(restartInput) < 1 || Number(restartInput) > 2)
    throw "1 또는 2를 입력해주세요.";
  if (isNaN(restartInput)) throw "숫자를 입력해주세요.";
  return true;
};

module.exports = isRestartNumber;
