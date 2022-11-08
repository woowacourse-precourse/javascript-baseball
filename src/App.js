/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-restricted-globals */
/* eslint-disable operator-linebreak */
const MissionUtils = require('@woowacourse/mission-utils');

const intersection = (setA, setB) =>
  new Set([...setA].filter((element) => setB.has(element)));

class App {
  constructor() {
    this.computerNumberArray = [];
    this.computerNumberSet = new Set();
    this.userNumberInput = '';
    this.userNumberArray = [];
    this.userNumberSet = new Set();
    this.resultObject = { ball: 0, strike: 0 };
  }

  setComputerNumberArray() {
    this.computerNumberArray = [];
    while (this.computerNumberArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumberArray.includes(randomNumber)) {
        this.computerNumberArray.push(randomNumber);
      }
    }
  }

  isSameNumber() {
    this.userNumberArray = this.userNumberInput
      .split('')
      .map((number) => parseInt(number, 10));
    this.userNumberSet = new Set(this.userNumberArray);
    return this.userNumberArray.length !== this.userNumberSet.size;
  }

  isOutRangeNumber() {
    const checkedNumberArray = this.userNumberArray.filter(
      (number) => number > 0 && number < 10,
    );
    return this.userNumberArray.length !== checkedNumberArray.length;
  }

  checkInvalidInput() {
    if (
      !this.userNumberInput ||
      this.userNumberInput.length !== 3 ||
      isNaN(this.userNumberInput, 10) ||
      this.isSameNumber() ||
      this.isOutRangeNumber()
    ) {
      return true;
    }
    return false;
  }

  countBall() {
    return (
      intersection(this.userNumberSet, this.computerNumberSet).size -
      this.resultObject.strike
    );
  }

  countStrike() {
    return this.userNumberArray.filter(
      (userNumber, index) => userNumber === this.computerNumberArray[index],
    ).length;
  }

  getResultString() {
    let resultString = '';
    if (this.resultObject.ball !== 0) {
      resultString += `${this.resultObject.ball}볼`;
    }
    if (this.resultObject.ball !== 0 && this.resultObject.strike !== 0) {
      resultString += ` ${this.resultObject.strike}스트라이크`;
    } else if (this.resultObject.strike !== 0) {
      resultString += ` ${this.resultObject.strike}스트라이크`;
    }
    if (this.resultObject.ball === 0 && this.resultObject.strike === 0) {
      resultString = '낫싱';
    }
    return resultString;
  }

  gameProcessCallback(input) {
    this.userNumberInput = input;
    if (this.checkInvalidInput()) {
      MissionUtils.Console.close();
      throw Error('3자리 숫자를 입력하세요');
    }
    this.resultObject.strike = this.countStrike();
    this.resultObject.ball = this.countBall();
    MissionUtils.Console.print(this.getResultString());
    if (this.resultObject.strike === 3) {
      this.endingProcess();
    } else {
      this.gameProcess();
    }
  }

  gameProcess() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) =>
      this.gameProcessCallback(input),
    );
  }

  play() {
    this.setComputerNumberArray();
    this.computerNumberSet = new Set(this.computerNumberArray);
    this.gameProcess();
  }

  restart() {
    this.setComputerNumberArray();
    this.computerNumberSet = new Set(this.computerNumberArray);
    this.gameProcess();
  }

  endingProcessCallback(input) {
    if (input === '2') {
      MissionUtils.Console.print('게임 종료');
      MissionUtils.Console.close();
    } else if (input === '1') {
      MissionUtils.Console.close();
      this.restart();
    } else {
      throw Error('1과 2중 하나를 띄어쓰기 없이 작성하시오.');
    }
  }

  endingProcess() {
    MissionUtils.Console.readLine(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => this.endingProcessCallback(input),
    );
  }
}

const app = new App();
MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
app.play();

module.exports = App;
