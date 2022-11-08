const MissionUtils = require('@woowacourse/mission-utils');

const ANSWER_LENGTH = 3;
const START_NUMBER = 1;
const END_NUMBER = 9;
const YES = 1;
const NO = 2;

class App {
  constructor() {
    this.answerList = [];
    this.inputList = [];
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let isGameStart = true;
    while (isGameStart) {
      this.startGame();
      isGameStart = this.getPlayerChoice();
    }
  }

  startGame() {
    this.answerList = this.setAnswerList();

    while (this.strike !== ANSWER_LENGTH) {
      this.getPlayerInputList();
      this.getResult();
      this.printCountMessage();
    }

    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.resetGame();
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

  getResult() {
    this.strike = 0;
    this.ball = 0;
    for (let index = 0; index < ANSWER_LENGTH; index++) {
      this.compareInputWithAnswer(index);
    }
  }

  compareInputWithAnswer(index) {
    const inputNumber = this.inputList[index];
    const answerNumber = this.answerList[index];
    if (inputNumber === answerNumber) {
      this.strike++;
    } else if (this.answerList.includes(inputNumber)) {
      this.ball++;
    }
  }

  printCountMessage() {
    const messageList = [];
    const ballCount = this.ball;
    const strikeCount = this.strike;

    if (ballCount) messageList.push(`${ballCount}볼`);
    if (strikeCount) messageList.push(`${strikeCount}스트라이크`);
    if (!messageList.length) messageList.push('낫싱');

    MissionUtils.Console.print(messageList.join(' '));
  }

  resetGame() {
    this.answerList = [];
    this.inputList = [];
    this.strike = 0;
    this.ball = 0;
  }

  getPlayerChoice() {
    let choice;
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
      choice = Number(input.trim());
    });

    if (choice === YES) return true;
    if (choice === NO) return false;
    throw new Error('1과 2만 입력 가능합니다.');
  }
}

module.exports = App;
