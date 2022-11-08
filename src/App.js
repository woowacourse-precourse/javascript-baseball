const MissionUtils = require('@woowacourse/mission-utils');

const ANSWER_LENGTH = 3;
const START_NUMBER = 1;
const END_NUMBER = 9;

class App {
  constructor() {
    this.answerList = [];
    this.inputList = [];
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.answerList = this.setAnswerList;
    this.getPlayerInputList();
  }

  setAnswerList() {
    const randomList = [];
    while (randomList.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(START_NUMBER, END_NUMBER);
      if (!randomList.includes(number)) {
        randomList.push(number);
      }
    }
    return randomList;
  }

  isValid(inputList) {
    const firstCondition = /^[1-9]+$/.test(inputList.join(''));
    const secondCondition = ANSWER_LENGTH === new Set(inputList).size;
    const thirdCondition = ANSWER_LENGTH === inputList.length;

    if (firstCondition && secondCondition && thirdCondition) return true;
    return false;
  }

  getPlayerInputList() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.inputList = input.trim().split('');
    });
    MissionUtils.Console.close();

    if (!this.isValid(this.inputList)) {
      throw new Error('유효하지 않은 입력입니다.');
    }

    this.inputList = this.inputList.map(Number);
  }
}

const app = new App();
app.play();

module.exports = App;
