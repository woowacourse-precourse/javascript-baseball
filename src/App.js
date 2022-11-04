const { Console } = require('@woowacourse/mission-utils');
const CheckValid = require('./CheckValid');
const Computer = require('./Computer');
const User = require('./User');

const NUMBER_LIMIT = 3;
const INIT_STATE = {
  userInput: '',
  computerNum: '',
  isUserInputValid: false,
  isGameEnd: false,
};

class App {
  constructor() {
    this.state = INIT_STATE;

    this.computer = new Computer(NUMBER_LIMIT);
    this.user = new User();
    this.checkValid = new CheckValid(NUMBER_LIMIT);
  }

  play() {
    this.computerNum = this.computer.makeNumbers();
    Console.print('숫자 야구 게임을 시작합니다.');

    while (this.isGameEnd) {
      this.userInput = this.user.getInputValue();
      this.isUserInputValid = this.checkValid.validateInput(userInput);

      if (isUserInputValid === false) {
        throw new Error('유저의 입력값이 유효하지 않습니다!');
      }

      const ballCount = this.countBall(this.computerNum, this.userInput);
      const strikeCount = this.countStrike(this.computerNum, this.userInput);

      // TODO: 메세지를 만들고 print하는 로직을 메서드로 묶기
      const gameMessage = this.makeGameMessage(ballCount, strikeCount);
      Console.print(gameMessage);

      this.isGameEnd = this.determineGameIsEnd(this.computerNum, this.userInput);
    }

    this.askUserToRestart();
  }

  countBall(computerNum, userInput) {
    const splittedComputerNum = [...computerNum];
    const splittedUserInput = [...userInput];

    return splittedComputerNum.reduce((ballCount, currNum, index) => {
      const currNumIndex = splittedUserInput.indexOf(currNum);
      const isBall = currNumIndex !== -1 && currNumIndex !== index;

      if (isBall) ballCount += 1;
      return ballCount;
    }, 0);
  }

  countStrike(computerNum, userInput) {
    const splittedComputerNum = [...computerNum];
    const splittedUserInput = [...userInput];

    return splittedComputerNum.reduce((strikeCount, currNum, index) => {
      const isStrike = currNum === splittedUserInput[index];

      if (isStrike) strikeCount += 1;
      return strikeCount;
    }, 0);
  }

  makeGameMessage(ballCount, strikeCount) {
    if (ballCount && strikeCount) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }

    if (ballCount) {
      return `${ballCount}볼`;
    }

    if (strikeCount) {
      return `${strikeCount}스트라이크`;
    }

    return '낫싱';
  }

  determineGameIsEnd(computerNum, userInput) {
    return computerNum === userInput;
  }

  askUserToRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', userChoice => {
      console.log('userChoice :>> ', userChoice);

      if (userChoice === '1') return this.restart();
      if (userChoice === '2') return this.exit();

      throw new Error('유저의 입력값이 유효하지 않습니다!');
    });
  }

  restart() {
    this.state = INIT_STATE;
    this.play();
  }

  exit() {
    Console.print('게임 종료');
    Console.close();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
