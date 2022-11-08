class Counter {
  constructor() {}

  countStrikeAndBall(userValue, computerNumber) {
    const userNumber = [];
    for (let i = 0; i < userValue.length; i++) {
      userNumber.push(Number(userValue[i]));
    }
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (userNumber[i] === computerNumber[i]) {
        strikeCount++;
      }

      if (userNumber[i] !== computerNumber[i] && computerNumber.includes(userNumber[i])) {
        ballCount++;
      }
    }
    return { strike: strikeCount, ball: ballCount };
  }
}

module.exports = Counter;
