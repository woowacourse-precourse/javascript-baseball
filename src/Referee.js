const { Console } = require('@woowacourse/mission-utils');

const countStrike = (answers, inputs) => {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answers[i] === inputs[i]) {
      count += 1;
    }
  }

  return count;
};

const countBall = (answers, inputs) => {
  let count = 0;
  inputs.map((input) => {
    if (answers.includes(input)) {
      count += 1;
    }
  });

  return count;
};

class Referee {
  ball;
  strike;

  get ball() {
    return this._ball;
  }
  set ball(value) {
    this._ball = value;
  }
  get strike() {
    return this._strike;
  }
  set strike(value) {
    this._strike = value;
  }
  judge(answers, inputs) {
    this.strike = countStrike(answers, inputs);
    this.ball = countBall(answers, inputs) - this.strike;

    return this;
  }

  printScore() {
    if (this.strike === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (this.strike + this.ball === 0) {
      Console.print('낫싱');
    } else if (this.strike === 0) {
      Console.print(`${this.ball}볼`);
    } else if (this.ball === 0) {
      Console.print(`${this.strike}스트라이크`);
    } else {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
  }
}

module.exports = {
  Referee,
  countBall,
  countStrike,
};
