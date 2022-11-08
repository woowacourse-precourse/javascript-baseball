const { getComputerNumber, getBallAndStrikeCounts, isClear } = require('./logic');
const { gameStartMessage, resultMessage, gameTerminationMessage } = require('./message');
const { validateNumberInput, validateRestartInput } = require('./validation');
const { Console } = require('@woowacourse/mission-utils');
const { getUserInputNumberFromUserInput, getUserInputDigitFromUserInput } = require('./utils');

class Game {
  constructor() {
    this.computerNumber = [];
  }

  start() {
    this.setComputerNumber();
    gameStartMessage();
    this.play();
  }

  play() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      const userinputNumber = getUserInputNumberFromUserInput(input);
      validateNumberInput(userinputNumber);

      const ballAndStrikeCounts = getBallAndStrikeCounts(this.computerNumber, userinputNumber);
      resultMessage(ballAndStrikeCounts);

      this.determineRestart(isClear(ballAndStrikeCounts));

      this.play();
    });
  }

  determineRestart(isGameClear) {
    if (isGameClear) {
      this.restart();
    }
  }

  restart() {
    Console.readLine(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`, (userInput) => this.restartProcess(userInput));
  }

  restartProcess(userInput) {
    const userInputDigit = getUserInputDigitFromUserInput(userInput);

    validateRestartInput(userInputDigit);

    if (userInputDigit === 1) {
      this.start();
    } else {
      gameTerminationMessage();
    }
  }

  setComputerNumber() {
    this.computerNumber = getComputerNumber();
  }
}

module.exports = Game;
