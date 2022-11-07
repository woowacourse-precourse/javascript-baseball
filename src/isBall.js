const isBall = (initNum, userNum) => {
  let ball = 0;

  initNum.forEach((number, index) => {
    userNum.indexOf(number) !== -1 && userNum.indexOf(number) !== index
      ? ball++
      : null;
  });
  return ball;
};

module.exports = isBall;
