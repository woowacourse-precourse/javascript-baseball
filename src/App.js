const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const randomNumbers = this.createRandomNumber();
    this.printStartMessage();
    this.createMyNumber(randomNumbers);
  }

  printStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  createRandomNumber() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 10);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  }

  createMyNumber(randomNumbers) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (myNumbers) => {
      this.countBallStrike(randomNumbers, myNumbers);
    })
  }

  countBallStrike(randomNumbers, myNumbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (myNumbers[i] == randomNumbers[i])
        strike++;
      else if (myNumbers.includes(randomNumbers[i]))
        ball++;
    }

    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크\n");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
    }
    if (ball === 0 && strike === 0)
      MissionUtils.Console.print("낫싱\n");
    else if (strike === 0)
      MissionUtils.Console.print(ball + "볼\n");
    else if (ball === 0)
      MissionUtils.Console.print(strike + "스트라이크\n");
    else
      MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크\n");
  }

  newGame() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
      if (answer === 1) {
        const randomNumbers = this.createRandomNumber();
        this.createMyNumber(randomNumbers);
      } else if (answer === 2) {
        MissionUtils.Console.close();
      } else throw new Error("입력하신 글자가 1 혹은 2가 아닙니다.");
    })
  }
}

const app = new App();
app.play();

module.exports = App;
