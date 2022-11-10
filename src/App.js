const { Console } = require('@woowacourse/mission-utils');
const checkUserInputValid = require('./utils/validation');
const {
  generateDifferRandomNumArr,
  getHintOfAnswer,
  scoreUserInput,
} = require('./utils/computer');

class App {
  constructor() {
    this.isUserWrong = false;
    this.isFirstPlay = true;
    this.isReplay = false;
  }

  play() {
    if (this.isFirstPlay) {
      this.start();
    }
    if (this.isReplay) {
      this.restart();
    }
    Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      const USER_INPUT_ARR = this.convertStrToArr(userInput);
      const IS_USER_INPUT_VALID = checkUserInputValid(USER_INPUT_ARR);
      if (IS_USER_INPUT_VALID) {
        const SCORE = scoreUserInput(this.computerAnswer, USER_INPUT_ARR);
        this.isUserWrong = getHintOfAnswer(SCORE);
        return this.isUserWrong ? this.play() : this.checkIfRestartGame();
      }
    });
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computerAnswer = generateDifferRandomNumArr(3);
    this.isFirstPlay = false;
  }

  restart() {
    this.computerAnswer = generateDifferRandomNumArr(3);
    this.isReplay = false;
  }

  checkIfRestartGame() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n',
      (userInput) => {
        if (userInput === '1') {
          this.isReplay = true;
          return this.play();
        }
        if (userInput === '2') {
          this.isReplay = false;
          return Console.close();
        }
      }
    );
  }

  convertStrToArr(str) {
    let arr = [...str];
    arr = arr.map((str) => Number(str));
    return arr;
  }
}

module.exports = App;
const app = new App();
app.play();
