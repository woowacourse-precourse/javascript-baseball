const Mission = require('./Mission');
const Compare = require('./Compare');
const Computer = require('./Computer');

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
    if (userArr.length !== 3) {
      throw '입력할 수 있는 길이는 3입니다. 종료합니다.';
    }

    userArr.forEach((item) => {
      if (isNaN(item)) {
        throw '숫자만 입력 가능합니다. 종료합니다.';
      }
      if (item < 1 || item > 9) {
        throw '1-9 범위만 입력 가능합니다. 종료합니다.';
      }
    });

    if (userArr.length !== new Set(userArr).size) {
      throw '중복되었습니다. 종료합니다.';
    }
  }
  compareNumbers(userNumbers) {
    const compare = new Compare(this.computerNumbers, userNumbers);
    if (compare.getResult() === true) {
      this.selectStartOrExit();
    } else {
      this.userInputStart();
    }
  }
  selectStartOrExit() {
    this.mission.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        this.checkAnswer(answer);
      }
    );
  }
  checkAnswer(answer) {
    if (answer === '1') {
      const computer = new Computer();
      const newComputerNumbers = computer.getComputerNumbers();
      this.computerNumbers = newComputerNumbers;
      this.userInputStart();
    } else if (answer === '2') {
      this.mission.Console.close();
    } else {
      throw '1과 2만 입력 가능합니다. 잘못된 값이 입력 되었습니다.';
    }
  }
}

module.exports = User;
