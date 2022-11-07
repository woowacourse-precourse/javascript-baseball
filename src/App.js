const { Console } = require('@woowacourse/mission-utils');
const { isMatchAnswer, printHint } = require('./ControlAnswer/CheckAnswer');
const { generateAnswer } = require('./ControlAnswer/GenerateAnswer');
const { stringToNumArr } = require('./Utils');
const { isValidInput } = require('./Validation');
const ANSWER = require('./Constants/Answer');
const GAME = require('./Constants/Game');
const ERROR = require('./Constants/Error');
const GAME_SENTENCE = require('./Constants/GameSentence');

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
    else this.tryMore(numArr);
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

  tryMore(numArr) {
    printHint(numArr, this.answer);
    this.receiveInput();
  }
}

const app = new App();

app.play();

module.exports = App;
