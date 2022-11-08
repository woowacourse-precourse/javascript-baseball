class Checker {
  checkStrikeAndBall(targetNum, userNum) {
    let strike = 0;
    let ball = 0;
    [...targetNum].forEach((n, i) => {
      if (n === userNum[i]) {
        strike++;
        ball--;
      }
      if (userNum.includes(n)) ball++;
    });
    return [strike, ball];
  }
}

module.exports = Checker;
