const { Console } = require('@woowacourse/mission-utils');
const { GAME_SENTENCE, GAME, ERROR, ANSWER } = require('./Constants');
const {
  isMatchAnswer,
  calculateResult,
} = require('./ControlAnswer/CheckAnswer');
const { generateAnswer } = require('./ControlAnswer/GenerateAnswer');
const { stringToNumArr } = require('./Utils');
const { isValidInput } = require('./Validation');

class App {
  constructor() {
    this.answer = '';
  }

  play() {
    this.answer = generateAnswer();
    Console.print(GAME_SENTENCE.OPENING);
    this.receiveInput();
  }

  receiveInput() {
    Console.readLine(GAME_SENTENCE.INPUT, (input) => {
      const numArr = stringToNumArr(input);

      if (isValidInput(numArr)) this.checkAnswer(numArr);
    });
  }

  checkAnswer(numArr) {
    if (isMatchAnswer(numArr, this.answer)) this.askPlayMore();
    else this.printResult(numArr);
  }

  askPlayMore() {
    Console.print(`${ANSWER.LENGTH}${GAME.STRIKE}`);
    Console.print(GAME_SENTENCE.CORRECT);
    Console.readLine(`${GAME_SENTENCE.ASK_MORE}\n`, (input) => {
      if (input === GAME.RESTART) this.play();
      else if (input === GAME.EXIT) Console.close();
      else {
        Console.print(ERROR.INVALID_INPUT);
        this.askPlayMore();
      }
    });
  }

  // 평가 결과를 출력하고, 다시 입력받기
  printResult(numArr) {
    calculateResult(numArr, this.answer);
    this.receiveInput();
  }
}

const app = new App();

app.play();

module.exports = App;
