class App {
  constructor() {
    this.answer = [];
  }

  play() {
    const MISSION_UTILS = require('@woowacourse/mission-utils');
    MISSION_UTILS.Console.print('숫자 야구 게임을 시작합니다.');
    this.generateAnswer();
    MISSION_UTILS.Console.readLine('숫자를 입력해 주세요: ', (num) => {
      this.determineResult(num);
    });
  }

  generateAnswer() {
    const MISSION_UTILS = require('@woowacourse/mission-utils');
    while (this.answer.length < 3) {
      let randomNum = MISSION_UTILS.Random.pickNumberInRange(1, 9);
      if (this.answer.indexOf(randomNum) === -1) this.answer.push(randomNum);
    }
  }

  determineResult(num) {
    const MISSION_UTILS = require('@woowacourse/mission-utils');
    const GUESS = num.toString().split('').map((element) => Number(element));

    if (GUESS.length !== 3 || GUESS.includes(NaN)) {
      throw new Error();
    }

    if (GUESS.length === 3 && !GUESS.includes(NaN)) {
      let countStrike = 0;
      let countBall = 0;
      let i = 0;

      while (i < 3) {
        if (this.answer[i] === GUESS[i]) {
          countStrike += 1;
        }
        if (this.answer[i] !== GUESS[i] && GUESS.includes(this.answer[i])) {
          countBall += 1;
        }
        i += 1;
      }

      if (countStrike === 0 && countBall === 0) {
        MISSION_UTILS.Console.print('낫싱');
      }
      if (countStrike === 0 && countBall !== 0) {
        MISSION_UTILS.Console.print(`${countBall}볼`);
      }
      if (countBall === 0 && countStrike !== 3 && countStrike !== 0) {
        MISSION_UTILS.Console.print(`${countStrike}스트라이크`);
      }
      if (countStrike !== 0 && countBall !== 0) {
        MISSION_UTILS.Console.print(`${countBall}볼 ${countStrike}스트라이크`);
      }

      if (countStrike !== 3) {
        MISSION_UTILS.Console.readLine('숫자를 입력해 주세요: ', (newNum) => {
          this.determineResult(newNum);
        });
      }
      if (countStrike === 3) {
        MISSION_UTILS.Console.print('3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MISSION_UTILS.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ', (response) => {
          if (Number(response) === 1) {
            const APP2 = new App();
            APP2.play();
          }
          if (Number(response) === 2) {
            throw new Error();
          }
        });
      }
    }
  }
}

module.exports = App;
