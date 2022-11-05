const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let randomNumber = this.setRandomNumber();
    console.log(randomNumber);
    MissionUtils.Console.print(GAMEOVER);
    while (true) {
      let userInput = await this.userInput('숫자를 입력해주세요: ');
      let checkUserNumber = this.checkUserInput(userInput);
      MissionUtils.Console.print(userInput);
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
    const userInputToArr = [...new Set(userInput)];
    if (userInputToArr.length !== 3) {
      MissionUtils.Console.print('조건에 맞게 숫자를 입력해주세요!');
      return 0;
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

  gameResult(userNumbers, randomNumbers) {
    let strikes = this.countStrickes(userNumbers, randomNumbers);
    let balls = this.countBalls(userNumbers, randomNumbers);

    if (strikes == 0 && balls == 0) {
      MissionUtils.Console.print('낫싱');
    } else if (strikes == 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      this.continueOrEnd();
    } else if (strikes == 0) {
      MissionUtils.Console.print(`${balls}볼`);
    } else if (balls == 0) {
      MissionUtils.Console.print(`${balls}스트라이크`);
    } else {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
