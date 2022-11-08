const MissionUtils = require("@woowacourse/mission-utils");

const status = {
  STARTED: 0,
  FINISHED: 1,
};

const consoleMessage = {
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요: ',
  nothing: '낫싱',
  strike: '3스트라이크',
  finish: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  continueOrEnd: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

class App {
  randomNumber;
  gameStatus = status.STARTED;

  consolePrint(message) {
    MissionUtils.Console.print(message);
  }
  
  play() {
    this.consolePrint(consoleMessage.start);
    this.start();
  }

  start() {
    this.randomNumber = this.setRandomNumber();
    this.userInput();
  }

  userInput() {
    MissionUtils.Console.readLine(consoleMessage.input, (input) => {
      this.checkUserInput(input);
      if (this.gameStatus === status.FINISHED) {
        this.gameStatus = status.STARTED;
        this.continueOrEnd();
      } else {
        this.userInput();
      }
    });
  }

  checkUserInput(userInput) {
    const regex = /[^1-9]/g;
    userInput = userInput.replace(regex, "");
    const userInputToArr = [...new Set(userInput)];
    if (userInputToArr.length !== 3) {
      MissionUtils.Console.close();
      throw new Error('조건에 맞게 숫자를 입력하지 않아 게임을 종료합니다.');
    }
    const userInputToNumberArr = userInputToArr.map((item) => Number(item));
    return this.gameResult(userInputToNumberArr);
  }

  setRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  countStrickes(userNumbers) {
    let strikeCount = 0;
    userNumbers.forEach((userNumber, index) => {
      let randomNumber = this.randomNumber[index];
      if (userNumber === randomNumber) {
        strikeCount += 1;
      }
    });
    return strikeCount;
  }

  countBalls(userNumbers) {
    let ballCount = 0;
    userNumbers.forEach((userNumber, index) => {
      let randomNumber = this.randomNumber[index];
      if (userNumber !== randomNumber && this.randomNumber.includes(userNumber)) {
        ballCount += 1;
      }
    });
    return ballCount;
  }

  gameResult(userNumbers) {
    let strikes = this.countStrickes(userNumbers);
    let balls = this.countBalls(userNumbers);
    if (!strikes && !balls) {
      this.consolePrint(consoleMessage.nothing);
    } else if (strikes === 3) {
      this.consolePrint(consoleMessage.strike);
      this.consolePrint(consoleMessage.finish);
      this.consolePrint(consoleMessage.continueOrEnd);
      this.gameStatus = status.FINISHED;
    } else if (!strikes) {
      this.consolePrint(`${balls}볼`);
    } else if (!balls) {
      this.consolePrint(`${strikes}스트라이크`);
    } else {
      this.consolePrint(`${balls}볼 ${strikes}스트라이크`);
    }
  }

  continueOrEnd() {
    MissionUtils.Console.readLine('', (input) => {
      if (input === '1') {
        this.start();
      } else if (input === '2') {
        MissionUtils.Console.close();
      } else {
        throw new Error('1또는 2를 입력하지 않아 게임을 종료합니다.');
      } 
    });
  }
}

module.exports = App;