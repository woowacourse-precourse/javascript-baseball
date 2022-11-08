const { Console } = require('@woowacourse/mission-utils');
const User = require('./players/User');
const Computer = require('./players/Computer');
const { isValidContinueOption, checkValidUserInput, checkAnswer } = require('./utils/gameHandler');
const { MESSAGE, RESULT } = require('./utils/constant');

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  play() {
    Console.print(MESSAGE.START);
    this.playGame();
  }

  playGame() {
    this.computer.createNumbers();
    this.guess();
  }

  guess() {
    Console.readLine(MESSAGE.GUESS, (userInput) => {
      checkValidUserInput(userInput);
      this.user.setNumber(userInput);
      this.setUserScore();
      this.printScore();

      if (this.user.score.strike === 3) return this.selectContinue();
      this.guess();
    });
  }

  setUserScore() {
    this.user.score = checkAnswer(this.user.number, this.computer.number);
  }

  printScore() {
    const resultPrint = parseResultToString(this.user.score);
    Console.print(resultPrint);
  }

  end() {
    Console.print(MESSAGE.END);
    return Console.close();
  }

  selectContinue() {
    Console.print(MESSAGE.WIN);
    Console.readLine(MESSAGE.CONTINUE, (userInput) => {
      const playContinue = isValidContinueOption(userInput);
      if (playContinue) return this.playGame();

      return this.end();
    });
  }
}

const parseResultToString = (answerResult) => {
  const textArray = [RESULT.BALL, RESULT.STRIKE];
  const answerArray = Object.entries(answerResult);
  const answerStringArray = answerArray.map(([_, value], index) => {
    if (!value) return;

    return `${value}${textArray[index]}`;
  });

  const parsedResultArray = answerStringArray.filter((result) => result);
  const nothing = checkNothing(parsedResultArray);
  if (nothing) return RESULT.NOTHING;

  return parsedResultArray.join(' ');
};

const checkNothing = (parsedResultArray) => {
  if (parsedResultArray.length === 0) return true;

  return false;
};

module.exports = App;
