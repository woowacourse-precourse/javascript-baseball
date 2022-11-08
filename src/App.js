const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.getComputerRandomNumberString();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.numberBaseballGame(computer);
  }

  getComputerRandomNumberString() {
    let randomNumberList = [];
    while (randomNumberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumberList.includes(number)) {
        randomNumberList.push(number);
      }
    }

    return randomNumberList.join('');
  }

  numberBaseballGame(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (user) => {
      this.throwExceptionForInvalidInput(user);
      if (computer === user) {
        MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        this.selectRestartOrExitGame();
      } else {
        const ball = this.getNumberOfBall(computer, user);
        const strike = this.getNumberOfStrike(computer, user);
        this.showBallStrike(ball, strike);
        this.numberBaseballGame(computer);
      }
    });
  }

  throwExceptionForInvalidInput(input) {
    if (input === '' || input === ' ' || input.includes(' ')) {
      throw '입력에 공백은 포함될 수 없습니다.';
    }

    if (input.length !== 3) {
      throw '3자리의 수를 입력해주세요.';
    }

    if (Number.isNaN(Number(input))) {
      throw '숫자만 입력해주세요.';
    }

    [...input].forEach((num, index) => {
      if (Number.isNaN(Number(num))) {
        throw '음수 또는 소수점은 입력할 수 없습니다.';
      }

      if (!Number(num)) {
        throw '각 자리의 숫자는 1~9만 허용합니다.';
      }

      this.throwExceptionForDuplicateNumber(input, num, index);
    });
  }

  throwExceptionForDuplicateNumber(input, num, index) {
    [...input].forEach((compareNum, compareIndex) => {
      if (num === compareNum && index !== compareIndex) {
        throw '서로 다른 3개의 숫자를 입력하세요.';
      }
    });
  }

  selectRestartOrExitGame() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', (choice) => {
      this.throwExceptionForChoice(choice);
      if (choice === '1') {
        const computer = this.getComputerRandomNumberString();
        this.numberBaseballGame(computer);
      } else {
        MissionUtils.Console.close();
      }
    });
  }

  throwExceptionForChoice(choice) {
    if (choice === '' || choice === ' ' || choice.includes(' ')) {
      throw '입력에 공백은 포함될 수 없습니다.';
    }

    if (choice.length !== 1) {
      throw '1자리의 수를 입력해주세요.';
    }

    if (Number.isNaN(Number(choice))) {
      throw '숫자만 입력해주세요.';
    }

    if (Number(choice) !== 1 && Number(choice) !== 2) {
      throw '1 또는 2를 입력해주세요.';
    }
  }

  getNumberOfBall(computer, user) {
    let count = 0;
    [...computer].forEach((num, index) => {
      if (this.checkBall(num, index, [...user])) {
        count += 1;
      }
    });

    return count;
  }

  checkBall(num, index, user) {
    for (let i = 0; i < user.length; i += 1) {
      if (user[i] === num && i !== index) {
        return true;
      }
    }

    return false;
  }

  getNumberOfStrike(computer, user) {
    let count = 0;
    [...computer].forEach((num, index) => {
      if (this.checkStrike(num, index, [...user])) {
        count += 1;
      }
    });

    return count;
  }

  checkStrike(num, index, user) {
    for (let i = 0; i < user.length; i += 1) {
      if (user[i] === num && i === index) {
        return true;
      }
    }

    return false;
  }

  showBallStrike(ball, strike) {
    if (!ball && !strike) {
      MissionUtils.Console.print('낫싱');
      return;
    }
    
    if (!strike) {
      MissionUtils.Console.print(`${ball}볼`);
      return;
    }
    
    if (!ball) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return;
    }

    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

module.exports = App;
