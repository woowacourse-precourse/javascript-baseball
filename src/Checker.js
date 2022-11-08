class Checker {
  checkStrikeAndBall(targetNum, userNum) {
    let ball = 0;
    let strike = 0;
    [...targetNum].forEach((n, i) => {
      if (n === userNum[i]) {
        strike++;
        ball--;
      }
      if (userNum.includes(n)) ball++;
    });
    return [ball, strike];
  }
}

module.exports = Checker;
