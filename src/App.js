const MissionUtils = require("@woowacourse/mission-utils");
let ISANSWER = 0;

class App {
  randomNumber;
  
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.start();
  }

  start() {
    this.randomNumber = this.setRandomNumber();
    console.log(this.randomNumber);
    
    this.userInput();
  }

  userInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (input) => {
      this.checkUserInput(input);
      if (ISANSWER) {
        ISANSWER = 0;
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
    // return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
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
      if (userNumber == randomNumber) {
        strikeCount += 1;
      }
    });
    return strikeCount;
  }

  countBalls(userNumbers) {
    let ballCount = 0;
    userNumbers.forEach((userNumber, index) => {
      let randomNumber = this.randomNumber[index];
      if (userNumber != randomNumber && this.randomNumber.includes(userNumber)) {
        ballCount += 1;
      }
    });
    return ballCount;
  }

  gameResult(userNumbers) {
    let strikes = this.countStrickes(userNumbers);
    let balls = this.countBalls(userNumbers);

    if (strikes == 0 && balls == 0) {
      MissionUtils.Console.print('낫싱');
    } else if (strikes == 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      ISANSWER = 1;
    } else if (strikes == 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (balls == 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }

  continueOrEnd() {
    MissionUtils.Console.readLine('', (input) => {
      if (input == 1) {
        this.start();
      } else if (input == 2) {
        MissionUtils.Console.close();
      } else {
        throw new Error('1또는 2를 입력하지 않아 게임을 종료합니다.');
      } 
    });
  }
}

// const app = new App();
// app.play();

module.exports = App;