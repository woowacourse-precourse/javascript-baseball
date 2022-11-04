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

    // TODO: 유저의 입력값과 컴퓨터의 숫자가 동일 할 때까지 MATCH
    // 2. 현재 컴퓨터 숫자와 유저의 숫자가 동일한지 판별하기
    // 3. 동일해질 때까지 Match -> match
    while (this.isGameEnd === false) {
      // Match flow
      // 1. 유저가 숫자를 입력한다. ✅
      // 2. 해당 숫자가 유효한지 판단한다. ✅
      // 3. 유효하지 않다면 throw Error후 return ✅

      // 4. 만약 유효하다면 입력값의 볼, 스트라이크 개수를 센다. ✅
      // @method
      //  - countBall
      //    @args: 유저의 입력값, 컴퓨터 숫자
      //    @return: 유저의 입력값과 컴퓨터 숫자 중 "같은 수지만 다른 위치"에 있는 숫자들의 개수

      //  - 2. countStrike
      //    @args: 유저의 입력값, 컴퓨터 숫자
      //    @return: 유저의 입력값과 컴퓨터 숫자 중 "같은 숫자 같은 위치"에 있는 숫자들의 개수

      // 5. 3번에서 구한 볼, 스트라이크 개수를 이용해 적절한 문구를 띄운다. ✅

      // 6. 유저의 입력값과 컴퓨터 숫자와 동일한지 여부를 업데이트한다. ✅
      //    -> 스트라이크 개수가 3개인지 판별
      const userInput = this.user.getInputValue(); // 1번
      const isUserInputValid = this.checkValid.validateInput(userInput); // 2번

      // 3번
      if (isUserInputValid === false) {
        throw new Error('유저의 입력값이 유효하지 않습니다!');
      }

      const ballCount = this.countBall(this.computerNum, this.userInput); // 4번
      const strikeCount = this.countStrike(this.computerNum, this.userInput);

      const gameMessage = this.makeGameMessage(ballCount, strikeCount); // 5번
      Console.print(gameMessage);

      this.isGameEnd = this.determineGameIsEnd(this.computerNum, this.userInput);
    }
    // 7. 반복문 탈출 후(= Match 종료) 게임을 다시 할 것 인지 여부를 묻는다.
  }

  // method: 유저 입력값의 볼 개수를 세기
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

  // method: 유저 입력값의 스트라이크 개수 세기
  countStrike(computerNum, userInput) {
    const splittedComputerNum = [...computerNum];
    const splittedUserInput = [...userInput];

    return splittedComputerNum.reduce((strikeCount, currNum, index) => {
      const isStrike = currNum === splittedUserInput[index];

      if (isStrike) strikeCount += 1;
      return strikeCount;
    }, 0);
  }

  // method: 볼, 스트라이크 개수를 이용해 message 띄우기
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

  restart() {
    this.state = INIT_STATE;
    this.play();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
