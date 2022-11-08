const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.userNumber = '';
    this.answer = '';
    this.ball = 0;
    this.strike = 0;
    this.hitCount = 0;
  }

  // 기능 1.사용자에게 값을 입력받는 함수
  getUserNumber() {
    return new Promise((resolove, reject) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
        if (!this.checkValidityUserNumber(number)) {
          throw new Error('입력값이 올바르지 않습니다.');
        }

        resolove(number);
      });
    });
  }

  // 기능 2. 입력값의 유효성을 판단하는 함수
  checkValidityUserNumber(number) {
    const userNumber = parseInt(number, 10);
    number = this.checkDuplicateNumber(number);

    if (number.length !== 3) {
      return false;
    } else if (userNumber < 123 || userNumber > 987) {
      return false;
    }

    return true;
  }

  checkDuplicateNumber(str) {
    let newStr = new Set(str);
    newStr = [...new Set(str)];
    newStr = [...new Set(str)].join('');

    return newStr;
  }

  // 기능 3. 무작위 숫자 생성 함수
  getRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }

  // 기능 4. 힌트를 계산하는 함수
  countHint() {
    const answerArr = [...this.answer];
    const userNumberArr = [...this.userNumber];

    this.ball = 0;
    this.strike = 0;
    this.hitCount = 0;

    userNumberArr.forEach((number) => {
      if (answerArr.includes(number)) {
        this.hitCount += 1;
      }
    });

    for (let i = 0; i < 3; i++) {
      if (userNumberArr[i] === answerArr[i]) {
        this.strike += 1;
      }
    }

    this.ball = this.hitCount - this.strike;
  }

  printResult() {
    if (this.strike === 3) return '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    else if (this.hitCount === 0) return '낫싱';
    else if (this.ball === 0) return `${this.strike}스트라이크`;
    else if (this.strike === 0) return `${this.ball}볼`;

    return `${this.ball}볼 ${this.strike}스트라이크`;
  }

  finishOrRestart() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (number) => {
        if (number === '1') return true;
        else if (number === '2') return false;
        else throw new Error('입력값이 올바르지 않습니다.');
      }
    );
  }

  async play() {
    let resultText = '';

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    this.answer = this.getRandomNumber();

    while (resultText !== '3개의 숫자를 모두 맞히셨습니다! 게임 종료') {
      this.userNumber = await this.getUserNumber();
      this.countHint();
      resultText = this.printResult();

      MissionUtils.Console.print(resultText);
    }
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
