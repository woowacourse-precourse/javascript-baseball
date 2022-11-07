const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answerNumberList = [];
  }

  printStartPhrase() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  createNumberList() {
    this.answerNumberList.splice(0);
    while (this.answerNumberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answerNumberList.includes(number))
        this.answerNumberList.push(number);
    }
  }

  receiveNumber() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
        this.throwException(input).then(resolve);
      });
    });
  }

  async throwException(input) {
    if (input.length !== 3 || isNaN(input)) throw 'Error';
    input.split('').reduce((acc, cur) => {
      if (acc.includes(cur)) throw 'Error';
      return acc + cur;
    }, '');
    return input;
  }

  async compareNumbers(input) {
    const result = { 볼: 0, 스트라이크: 0 };
    const inputNumberList = input.split('').map((number) => Number(number));

    inputNumberList.forEach((number, idx) => {
      if (number === this.answerNumberList[idx]) result.스트라이크 += 1;
      else if (this.answerNumberList.includes(number)) result.볼 += 1;
    });
    return result;
  }

  async printResult({ 볼: BALL_COUNT, 스트라이크: STRIKE_COUNT }) {
    const RESULT_BALL = BALL_COUNT === 0 ? '' : `${BALL_COUNT}볼 `;
    const RESULT_STRIKE = STRIKE_COUNT === 0 ? '' : `${STRIKE_COUNT}스트라이크`;
    const RESULT_MESSAGE =
      BALL_COUNT === 0 && STRIKE_COUNT === 0
        ? '낫싱'
        : RESULT_BALL + RESULT_STRIKE;

    MissionUtils.Console.print(RESULT_MESSAGE);
    if (STRIKE_COUNT === 3)
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    return STRIKE_COUNT;
  }

  process() {
    this.receiveNumber()
      .then(this.compareNumbers.bind(this))
      .then(this.printResult)
      .then(this.end.bind(this));
  }

  end(strike) {
    if (strike === 3) {
      MissionUtils.Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        (input) => {
          if (input === '1') {
            this.createNumberList();
            this.process();
          }
          if (input === '2') {
            MissionUtils.Console.close();
          }
        }
      );
    } else {
      this.process();
    }
  }

  play() {
    this.printStartPhrase();
    this.createNumberList();
    this.process();
  }
}

const app = new App();
app.play();

module.exports = App;
