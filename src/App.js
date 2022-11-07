const { Console } = require('@woowacourse/mission-utils');
const User = require('./players/User');
const Computer = require('./players/Computer');
const { isValidContinueOption, isValidUserInput, checkAnswer } = require('./utils/gameHandler');
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
      isValidUserInput(userInput);
      this.user.setNumber(userInput);
      const answerResult = checkAnswer(this.user.number, this.computer.number);
      const resultPrint = parseResultToString(answerResult);
      Console.print(resultPrint);

      if (answerResult.strike === 3) return this.selectContinue();
      this.guess();
    });
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
    const resultString = `${value}${textArray[index]}`;
    return resultString;
  });

  const parsedResult = answerStringArray.filter((i) => i);
  if (!parsedResult.length) return RESULT.NOTHING;

  return parsedResult.join(' ');
};

module.exports = App;
