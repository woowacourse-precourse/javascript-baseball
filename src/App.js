const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.computer = this.getRandomNumbers();
  }

  getRandomNumbers() {
    const Numbers = [];
    while (Numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!Numbers.includes(number)) {
        Numbers.push(number);
      }
    }

    return Numbers;
  }

  outputResult(answer) {
    let strike = 0;
    let ball = 0;

    for (let number = 0; number < answer.length; number++) {
      if (String(this.computer[number]) === answer[number]) {
        strike += 1;
      }
      if (String(this.computer[number]) !== answer[number] && String(this.computer).includes(answer[number])) {
        ball += 1;
      }
    }

    return this.scoreConversion(strike, ball);
  }

  scoreConversion(strike, ball) {
    if (strike == 0 && ball == 0) {
      return '낫싱';
    }
    if (strike === 3) {
      return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    }

    return `${ball}볼 ${strike}스트라이크`;
  }

  play() {}
}

module.exports = App;
