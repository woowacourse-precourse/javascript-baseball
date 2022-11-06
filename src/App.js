const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}

  printGameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateAnswer() {
    this.answer = '';
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer += number;
      }
    }
  }

  getGuess() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.guess = input;
    });
  }

  checkGuess() {
    if (
      this.guess.length !== 3
      || new Set(this.guess).size !== 3
      || [...this.guess].some((number) => number < '1' || number > '9')
    ) {
      throw new Error('잘못된 입력입니다.');
    }
  }

  calculateBallCount() {
    const ballCount = { ball: 0, strike: 0 };

    [...this.guess].forEach((number, index) => {
      if (this.answer.indexOf(number) === index) {
        ballCount.strike += 1;
      } else if (this.answer.includes(number)) {
        ballCount.ball += 1;
      }
    });

    this.ballCount = ballCount;
  }

  printBallCount() {
    const { ball, strike } = this.ballCount;

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  printGameEndMessage() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
}

module.exports = App;
