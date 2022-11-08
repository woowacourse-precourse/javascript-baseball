const { BALLCOUNT_HINT, NUMBER } = require("./Game");

class Referee {
  countBall(userNum, computerNum) {
    let count = 0;
    userNum.map((number, index) => {
      if (computerNum[index] !== number && computerNum.includes(number))
        count++;
    });

    return count;
  }
  countStrike(userNum, computerNum, length) {
    let count = 0;
    for (let i = 0; i < length; i++) {
      console.log("userNum,index, computerNum", userNum[i], i, computerNum[i]);
      if (userNum[i] === computerNum[i]) count++;
    }

    return count;
  }

  ballCount(userNum, computerNum) {
    let hint = BALLCOUNT_HINT.NOTHING;

    const countBall = this.countBall(userNum, computerNum);
    const countStrike = this.countStrike(userNum, computerNum, NUMBER.LENGTH);
    console.log("ball strkie", countBall, countStrike);
    if (countBall && countStrike) {
      hint = `${countBall}${BALLCOUNT_HINT.BALL} ${countStrike}${BALLCOUNT_HINT.STRIKE}`;
      return hint;
    }

    if (countBall) {
      hint = `${countBall}${BALLCOUNT_HINT.BALL}`;
      return hint;
    }
    if (countStrike) {
      hint = `${countStrike}${BALLCOUNT_HINT.BALL}`;
      return hint;
    }

    return hint;
  }
}

module.exports = Referee;
