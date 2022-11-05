const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let userInput = await this.userInput('숫자를 입력해주세요: ');
    let checkUserNumber = this.checkUserInput(userInput);
    let randomNumber = this.setRandomNumber();
    console.log(randomNumber);
    if (checkUserNumber) {
      console.log(this.gameResult(checkUserNumber, randomNumber));
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
    console.log(`${strikes} strike ${balls} ball`);
  }
}

const app = new App();
app.play();

module.exports = App;
