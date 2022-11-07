class Game {
  static MESSAGE = {
    START: "숫자 야구 게임을 시작합니다.",
    INPUT: "숫자를 입력해주세요 : ",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    SELECT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    ERROR: "입력 형식이 잘못되었습니다. 서로 다른 3개의 숫자를 입력하세요.",
    OUT: "3스트라이크",
  };

  static BALLCOUNT_HINT = {
    STRIKE: "스트라이크",
    BALL: "볼",
    NOTHING: "낫싱",
  };

  static NUMBER = {
    START: 1,
    END: 9,
    LENGTH: 3,
    RESTART: 1,
    EXIT: 2,
    FAIL: 0,
  };

  countBall(userNum, computerNum, length) {
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (userNum[i] === computerNum[i]) count++;
    }

    if (count > 0) return count;
  }
  countStrike(userNum, computerNum) {
    let count = 0;
    userNum.map((number, index) => {
      if (computerNum[index] !== number && computerNum.includes(number))
        count++;
    });

    if (count > 0) return count;
  }

  ballCount(userNum, computerNum) {
    let hint = this.BALLCOUNT_HINT.NOTHING;
    const countBall = this.countBall(userNum, computerNum, NUMBER.LENGTH);
    const countStrike = this.countStrike(userNum, computerNum);

    if (countBall && countStrike) {
      hint = `${countBall}${this.BALLCOUNT_HINT.BALL} ${countStrike}${this.BALLCOUNT_HINT.STRIKE}`;
      return hint;
    }

    if (countBall) {
      hint = `${countBall}${this.BALLCOUNT_HINT.BALL}`;
      return hint;
    }
    if (countStrike) {
      hint = `${countStrike}${this.BALLCOUNT_HINT.BALL}`;
      return hint;
    }

    return hint;
  }
}

module.exports = Game;
