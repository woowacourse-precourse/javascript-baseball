const Mission = require('../utils/Mission');
const Compare = require('../utils/Compare');
const Computer = require('./Computer');
const constants = require('../constants/constants');

class User extends Mission {
  constructor(computerNumbers) {
    super();
    this.computerNumbers = computerNumbers;
  }

  userInputStart() {
    this.mission.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userNumbers = this.makeNumberArray(answer);
      this.checkUserNumber(userNumbers);
      this.compareNumbers(userNumbers);
    });
  }

  makeNumberArray(answer) {
    const userNumbers = answer.split('').map((item) => Number(item));
    return userNumbers;
  }

  checkUserNumber(userArr) {
    if (userArr.length !== constants.INPUT_SIZE) {
      throw `입력할 수 있는 길이는 ${constants.INPUT_SIZE}입니다. 종료합니다.`;
    }

    userArr.forEach((item) => {
      if (isNaN(item)) {
        throw '숫자만 입력 가능합니다. 종료합니다.';
      }

      if (
        item < constants.MIN_INPUT_NUMBER ||
        item > constants.MAX_INPUT_NUMBER
      ) {
        throw `${constants.INPUT_SIZE}~${constants.MAX_INPUT_NUMBER} 범위만 입력 가능합니다. 종료합니다.`;
      }
    });

    if (userArr.length !== new Set(userArr).size) {
      throw '중복되었습니다. 종료합니다.';
    }
  }

  compareNumbers(userNumbers) {
    const compare = new Compare(this.computerNumbers, userNumbers);
    if (compare.getResult() === true) {
      this.inputRestartOrExit();
      return;
    }

    this.userInputStart();
    return;
  }

  inputRestartOrExit() {
    this.mission.Console.readLine(
      `게임을 새로 시작하려면 ${constants.GAME_RESTART}, 종료하려면 ${constants.GAME_END}를 입력하세요.\n`,
      (answer) => {
        this.checkRestartOrExit(answer);
      }
    );
  }

  checkRestartOrExit(answer) {
    if (Number(answer) === constants.GAME_RESTART) {
      this.gameRestart();
      return;
    }

    if (Number(answer) === constants.GAME_END) {
      this.mission.Console.close();
      return;
    }

    throw `${constants.GAME_RESTART}과 ${constants.GAME_END}만 입력 가능합니다. 잘못된 값이 입력 되었습니다.`;
  }

  gameRestart() {
    const computer = new Computer();
    const newComputerNumbers = computer.getComputerNumbers();
    this.computerNumbers = newComputerNumbers;
    this.userInputStart();
  }
}

module.exports = User;
