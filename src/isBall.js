const isBall = (initNum, userNum) => {
  let ball = 0;

  initNum.forEach((number, index) => {
    userNum.indexOf(number) !== -1 && userNum.indexOf(number) !== index
      ? ball++
      : null;
  });

  if (ball === 0) {
    return null;
  } else {
    return `${ball}볼`;
  }
};

module.exports = isBall;
