const { Console, Random } = require('@woowacourse/mission-utils');
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

  // TODO: play 로직들 함수로 분리하기
  play() {
    this.computerNum = this.computer.makeNumbers();
    Console.print('숫자 야구 게임을 시작합니다.');

    while (this.isGameEnd === false) {
      const userInput = this.user.getInputValue();
      const isUserInputValid = this.checkValid.validateInput(userInput);

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
    // 7. 반복문 탈출 후(= Match 종료) 게임을 다시 할 것 인지 여부를 묻는다. - askUserToRestart
    //  - 유저가 말한 숫자들과 컴퓨터의 숫자들이 동일할 시 맞추었다는 문구와 함께 게임 종료한다.
    //    >> 문구:  "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    //  - 사용자의 입력값 받은 후, 입력값에 따라 게임을 다시 시작하거나 종료시킨다.
    //    >>
  }

  // TODO: countBall과 countStrike에서 splittedComputerNum, splittedUserInput 중복되는 것을 어디로 빼줄지 고민하기
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
    const userChoice = Console.readLine('3개의 숫자를 모두 맞히셨습니다! 게임 종료', userChoice => {
      console.log(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n${userChoice}`);
    });

    if (userChoice === 1) this.restart();
    if (userChoice === 2) return;

    throw new Error('1, 2가 아닌 값을 입력했습니다!');
  }

  restart() {
    this.state = INIT_STATE;
    this.play();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
