const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const outputView = require('./OutputView');
const NUMBER = require('../constants/gameSetting');
const MESSAGE = require('../constants/gameMessages');

class App {
  play () {
    outputView.printStartGame();
    this.handleInputAnswer(this.createRandomNumber());
  }

  createRandomNumber () {
    const randomNumberList = [];

    while (randomNumberList.length < NUMBER.RANDOM_LENGTH) {
      const collectRandomNumber = Random.pickNumberInRange(
        NUMBER.FIRST,
        NUMBER.LAST,
      );
      if (!randomNumberList.includes(collectRandomNumber)) {
        randomNumberList.push(collectRandomNumber);
      }
    }

    return randomNumberList;
  }

  handleInputAnswer (randomNumber) {
    Console.readLine(MESSAGE.GAME.INPUT, (answer) => {
      this.isRandomInputErrorCase(answer);

      if (this.isCorrectNumber(randomNumber, answer)) {
        outputView.printCorrect();
        this.checkRestart();
      } else {
        outputView.printGameResultCount(this.resultBaseballRule(randomNumber, answer));
        this.handleInputAnswer(randomNumber);
      }
    });
  }

  checkRestart () {
    Console.readLine('', (input) => {
      if (this.checkInputRestartExit(input)) {
        this.handleInputAnswer(this.createRandomNumber());
      } else {
        outputView.printGameFinish();
        Console.close();
      }
    });
  }

  isRandomInputErrorCase (answer) {
    const exceptionInput = answer;

    const inputList = exceptionInput?.split('');
    const setCollection = new Set(inputList);
    const isSame = setCollection.size !== inputList?.length;
    const isThreeNumber = exceptionInput?.toString().length !== NUMBER.RANDOM_LENGTH;

    if (
      exceptionInput?.split('').map(Number)
        .includes(NUMBER.EXCEPT)
        || exceptionInput?.split('').includes('-')
        || isNaN(exceptionInput)
        || isThreeNumber
        || isSame
    ) {
      throw new Error(MESSAGE.GAME.ERROR);
    }
  }

  isCorrectNumber (randomNumber, answer) {
    return randomNumber?.join('') === answer;
  }

  resultBaseballRule (randomNumber, answer) {
    const random = randomNumber;
    const input = answer.split('').map(Number);

    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < random?.length; idx++) {
      if (random.includes(input[idx]) && random[idx] === input[idx]) strikeCount += 1;
      if (random.includes(input[idx]) && random[idx] !== input[idx]) ballCount += 1;
    }

    const resultBaseball = (ballCount ? `${ballCount}${MESSAGE.GAME.BALL} ` : '')
    + (strikeCount ? `${strikeCount}${MESSAGE.GAME.STRIKE}` : '');
    return resultBaseball ? resultBaseball : MESSAGE.GAME.NOTHING;
  }

  checkInputRestartExit (input) {
    if (input === NUMBER.RESTART) return true;
    if (input === NUMBER.EXIT) return false;
    throw new Error(MESSAGE.GAME.ERROR);
  }
}

const app = new App();
app.play();

module.exports = App;
