const MissionUtils = require("@woowacourse/mission-utils");
let randomNumber;

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.start();
  }
  async start() {
    randomNumber = this.setRandomNumber();
    console.log(randomNumber);
    while (true) {
      let userInput = await this.userInput('숫자를 입력해주세요: ');
      try {
        let checkUserNumber = this.checkUserInput(userInput); 
        if (checkUserNumber) {
          this.gameResult(checkUserNumber, randomNumber);
        } 
      } catch(e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
        return 0;
      }
      let checkUserNumber = this.checkUserInput(userInput);
      if (checkUserNumber) {
        this.gameResult(checkUserNumber, randomNumber);
      }
    }
  }

  async userInput(prompt) {
    return await new Promise((resolve) => {
      MissionUtils.Console.readLine(prompt, resolve);
    });
  }

  checkUserInput(userInput) {
    const regex = /[^1-9]/g;
    userInput = userInput.replace(regex, "");
    const userInputToArr = [...new Set(userInput)];
    if (userInputToArr.length !== 3) {
      throw '조건에 맞게 숫자를 입력하지않아 게임을 종료합니다.';
    }
    const userInputToNumberArr = userInputToArr.map((item) => Number(item));
    return userInputToNumberArr;
  }

  setRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  countStrickes(userNumbers, randomNumbers) {
    let strikeCount = 0;
    userNumbers.forEach((userNumber, index) => {
      let randomNumber = randomNumbers[index];
      if (userNumber == randomNumber) {
        strikeCount += 1;
      }
    });
    return strikeCount;
  }

  countBalls(userNumbers, randomNumbers) {
    let ballCount = 0;
    userNumbers.forEach((userNumber, index) => {
      let randomNumber = randomNumbers[index];
      if (userNumber != randomNumber && randomNumbers.includes(userNumber)) {
        ballCount += 1;
      }
    });
    return ballCount;
  }

  async gameResult(userNumbers, randomNumbers) {
    let strikes = this.countStrickes(userNumbers, randomNumbers);
    let balls = this.countBalls(userNumbers, randomNumbers);

    if (strikes == 0 && balls == 0) {
      MissionUtils.Console.print('낫싱');
    } else if (strikes == 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      // this.continueOrEnd();
      try {
        const blank = await this.continueOrEnd();
      } catch (e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
        return 0;
      }
    } else if (strikes == 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (balls == 0) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }

  async continueOrEnd() {
    const userInput = await this.userInput('');
    if (userInput == 1) {
      app.start();
    } else if (userInput == 2) {
      throw '게임을 종료합니다.';
    } else {
      throw '1또는 2를 입력하지 않아 게임을 종료합니다.';
    } 
  }
}

const app = new App();
app.play();

module.exports = App;